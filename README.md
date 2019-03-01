# LeBouton-website


**Deploy**

# on master, commit everything ...

npm run build
git add dist && git commit -am "release"
git subtree split --prefix dist -b gh-pages
git push -f origin gh-pages
git branch -D gh-pages

**Generate a gif from mov**

Generate a gif from the cut movie :

    ffmpeg -i flavor-plant-beyonce-cut.mov -pix_fmt rgb24 -s 600x400 -r 30  output.gif

    ffmpeg -i flavor-plant-beyonce-cut.mov -pix_fmt rgb24 -s 600x400 -r 9 outputtest.gif

=> 2,4Mo vs 6Mo ... quand meme

Generate the blured images to load before the gif (extract, then blur)

    ffmpeg -i output.gif output%05d.png

    // delete all the images > 00001

    convert output00001.png -filter Gaussian -resize 50% -define filter:sigma=10.0 -resize 200% output00001_blur.png 






ffmpeg -i flavor-plant-beyonce-cut.mov -vf fps=15,scale=320:-1:flags=lanczos,palettegen plant-palette.png

ffmpeg -i flavor-plant-beyonce-cut.mov -i plant-palette.png -filter_complex "fps=15,scale=400:-1:flags=lanczos[x];[x][1:v]paletteuse" sixthtry.gif