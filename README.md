# LeBouton-website


**Deploy**

# on master, commit everything ...

npm run build
git subtree split --prefix dist -b gh-pages
git push -f origin gh-pages:gh-pages
git branch -D gh-pages

**Generate a gif from mov**

ffmpeg -i flavor-plant-beyonce-cut.mov -pix_fmt rgb24 -s 600x400 -r 30  output.gif