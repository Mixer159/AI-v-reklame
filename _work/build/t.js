const pptxgen = require('pptxgenjs');
const p = new pptxgen(); p.layout='LAYOUT_WIDE';
const s = p.addSlide(); s.background={color:'F7F8FA'};
s.addText('Příliš žluťoučký kůň úpěl ďábelské ódy', {x:0.8,y:0.8,w:11,h:1.2,fontFace:'Georgia',fontSize:44,bold:true,color:'141413',isTextBox:true});
s.addText('Inter: Čerstvé rohlíky každé ráno — ŘŽČŠ', {x:0.8,y:2.4,w:11,h:0.8,fontFace:'Inter',fontSize:28,color:'141413',isTextBox:true});
s.addText('Arial: Čerstvé rohlíky každé ráno 1234567890', {x:0.8,y:3.4,w:11,h:0.8,fontFace:'Arial',fontSize:28,color:'141413',isTextBox:true});
p.writeFile({fileName:'/Users/maximkudela/Documents/AI-v-reklame/_work/render/t.pptx'}).then(()=>console.log('written'));
