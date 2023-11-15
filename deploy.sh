# /bin/bash

# 确保脚本抛出遇到的错误
set -e

# 打包生成静态文件
yarn build:doc

# 进入待发布的 dist/ 目录
cd VirtualUiDoc

# 提交打包静态网站到 github-pages 分支
git init
git add .
git commit -m '文档部署'

# 部署到 https://<username>.github.io/<repo>
git push -f git@github.com:CoderYc0923/virtual-ui.git master:gh-pages
