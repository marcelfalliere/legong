# LeBouton-website


**Deploy**

git checkout gh-pages
git merge master
git subtree push --prefix dist origin gh-pages


**Generate a gif from mov**

ffmpeg -i flavor-plant-beyonce-cut.mov -pix_fmt rgb24 -s 600x400 -r 30  output.gif