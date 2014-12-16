git config --global user.email "anthony.r.dipasquale@gmail.com"
git config --global user.name "Travis"

mkdir $HOME/tmp_blog
git clone git@github.com:tonyd256/tonyd256.github.io.git $HOME/tmp_blog

cp -rf _site/* $HOME/tmp_blog/

cd $HOME/tmp_blog

git add -f .
git commit -m "snapshot $(date '+%m/%d/%y %H:%M')"
git push origin master
