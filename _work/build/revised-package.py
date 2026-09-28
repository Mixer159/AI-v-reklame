"""Normalize PptxGenJS packaging in newly generated copies only."""
from pathlib import Path
from tempfile import NamedTemporaryFile
from zipfile import ZipFile, ZIP_DEFLATED
import argparse
import os
from lxml import etree


def normalize(source: Path):
    relationship_id = '{http://schemas.openxmlformats.org/officeDocument/2006/relationships}id'
    drawing_ns = 'http://schemas.openxmlformats.org/drawingml/2006/main'
    chart_ns = 'http://schemas.openxmlformats.org/drawingml/2006/chart'
    fixes = []
    with NamedTemporaryFile(dir=source.parent, suffix='.pptx', delete=False) as temp:
        temp_path = Path(temp.name)
    with ZipFile(source) as original, ZipFile(temp_path, 'w', ZIP_DEFLATED) as target:
        names = set(original.namelist())
        for member in original.infolist():
            content = original.read(member.filename)
            if member.filename == '[Content_Types].xml':
                root = etree.fromstring(content)
                for child in list(root):
                    part = child.get('PartName')
                    # PptxGenJS declares one master per slide, but writes one.
                    if part and part.lstrip('/') not in names:
                        fixes.append(f'Removed unused content type: {part}')
                        root.remove(child)
                content = etree.tostring(root, xml_declaration=True, encoding='UTF-8', standalone=True)
            elif member.filename.startswith('ppt/slides/slide') and member.filename.endswith('.xml'):
                root = etree.fromstring(content)
                changed = False
                for link in root.iter(f'{{{drawing_ns}}}hlinkClick'):
                    # Media actions need no hyperlink relationship. Preserve
                    # ppaction://media and the actual video/media relationships.
                    if link.get(relationship_id) == '' and link.get('action') == 'ppaction://media':
                        del link.attrib[relationship_id]
                        changed = True
                        fixes.append(f'Normalized media action in {member.filename}')
                if changed:
                    content = etree.tostring(root, xml_declaration=True, encoding='UTF-8', standalone=True)
            elif member.filename.startswith('ppt/charts/chart') and member.filename.endswith('.xml'):
                root = etree.fromstring(content)
                changed = False
                for reference in root.iter(f'{{{chart_ns}}}multiLvlStrRef'):
                    cache = reference.find(f'{{{chart_ns}}}multiLvlStrCache')
                    levels = cache.findall(f'{{{chart_ns}}}lvl') if cache is not None else []
                    # These categories have one level. Use an ordinary string
                    # reference while keeping the workbook formula and values.
                    if len(levels) == 1:
                        simple_cache = etree.Element(f'{{{chart_ns}}}strCache')
                        count = cache.find(f'{{{chart_ns}}}ptCount')
                        if count is not None:
                            simple_cache.append(count)
                        for point in list(levels[0]):
                            simple_cache.append(point)
                        reference.tag = f'{{{chart_ns}}}strRef'
                        reference.replace(cache, simple_cache)
                        changed = True
                        fixes.append(f'Normalized single-level categories in {member.filename}')
                if changed:
                    content = etree.tostring(root, xml_declaration=True, encoding='UTF-8', standalone=True)
            target.writestr(member, content)
    os.replace(temp_path, source)
    print(f'{source.name}: {len(fixes)} package fixes')


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('files', type=Path, nargs='+')
    for source in parser.parse_args().files:
        normalize(source)
