import sys,glob
from PIL import Image
d=sys.argv[1]; a,b=int(sys.argv[2]),int(sys.argv[3]); out=sys.argv[4]
files=sorted(glob.glob(f'{d}/p-*.jpg'))[a-1:b]
ims=[Image.open(f).convert('RGB') for f in files]
w=640; ims=[im.resize((w,int(im.height*w/im.width))) for im in ims]
h=ims[0].height; cols=3; rows=(len(ims)+cols-1)//cols
s=Image.new('RGB',(cols*(w+12),rows*(h+12)),'#888')
for i,im in enumerate(ims): s.paste(im,((i%cols)*(w+12),(i//cols)*(h+12)))
s.save(out,quality=85)
