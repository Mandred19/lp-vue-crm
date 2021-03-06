# deploy.sh

#!/usr/bin/env sh

# abort on errors
set -e

# lint
echo Start linting...
npm run lint
echo Finish linting!!!

# build
echo Start building...
npm run build
echo Finish building!!!

# navigate into the build output directory
cd dist

# deploy
echo Start deploying...
git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/Mandred19/lp-vue-crm.git master:gh-pages

cd -

echo Finish deploying!!!
