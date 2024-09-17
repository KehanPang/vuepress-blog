#!/usr/bin/env sh
sudo python3 revise.py
sudo npm run docs:build
# 确保脚本抛出遇到的错误
# set -e

git init
git add -A
git commit -m 'code'
git branch -M main
git push -f https://github.com/KehanPang/vuepress-blog.git main

# 生成静态文件
# npm run docs:build
rm -rf ../vueDist/dist/*

# 将build生成的dist目录拷贝至上一层目录中
cp -rf docs/.vuepress/dist ../vueDist/

# 进入生成的文件夹
cd ../vueDist/dist

# git初始化，每次初始化不影响推送
git init
git add -A
git commit -m 'deploy'
git branch -M main

# 如果你想要部署到 https://USERNAME.github.io
git push -f https://github.com/KehanPang/KehanPang.github.io.git main
