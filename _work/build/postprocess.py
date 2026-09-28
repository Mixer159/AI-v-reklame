"""Chart fixes pptxgenjs cannot express: a dashed reference line without markers
for the human baseline series, and gaps instead of empty points."""
import re, sys, zipfile, shutil

src = sys.argv[1]
tmp = src + '.tmp'
with zipfile.ZipFile(src) as zin, zipfile.ZipFile(tmp, 'w', zipfile.ZIP_DEFLATED) as zout:
    for item in zin.infolist():
        data = zin.read(item.filename)
        if re.match(r'ppt/charts/chart\d+\.xml$', item.filename):
            s = data.decode('utf-8')
            s = re.sub(r'<c:pt idx="\d+"><c:v></c:v></c:pt>', '', s)
            def fix(m):
                ser = m.group(0)
                if 'Lidé v původní studii' not in ser:
                    return ser
                ser = ser.replace('<a:ln><a:noFill/></a:ln>', '<a:ln w="22225" cap="rnd"><a:solidFill><a:srgbClr val="3E4148"/></a:solidFill><a:prstDash val="dash"/></a:ln>', 1)
                ser = re.sub(r'<c:marker>.*?</c:marker>', '<c:marker><c:symbol val="none"/></c:marker>', ser, count=1, flags=re.S)
                return ser
            s = re.sub(r'<c:ser>.*?</c:ser>', fix, s, flags=re.S)
            data = s.encode('utf-8')
        zout.writestr(item, data)
shutil.move(tmp, src)
print('postprocessed', src)
