git config --global user.email $GIT_EMAIL
git config --global user.name $GIT_NAME

mkdir $HOME/tmp_blog
git clone https://${GIT_TOKEN}@github.com/tonyd256/tonyd256.github.io $HOME/tmp_blog

cp -rf _site/* $HOME/tmp_blog/

cd $HOME/tmp_blog

git add -f .
git commit -m "snapshot $(date '+%m/%d/%y %H:%M')"
git push origin master
