#!/bin/bash

brew_path=$(which brew)
if [ ! -e "${brew_path}" ]; then
  echo "brew installing..."
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
fi

git_path=$(which git)
if [ -e "${git_path}" ]; then
  echo "confirm installation of git"
#    git init
else
  # 맥은 기본적으로 git 이 설치되어 있다
  echo "git installing..."
fi

gh_path=$(which gh)
if [ -e "${gh_path}" ]; then
  echo "confirm installation of github cli"
else
  echo "GitHub CLI installing.."
  brew install gh
  gh auth login
fi

# ----------------------
PROJECT_NAME=${PWD##*/}
#OPTIONS=[-b]

if [ -e "${git_path}" ] && [ -e "${gh_path}" ]; then
  echo "start initialize"
  git init
  echo "# ${PROJECT_NAME}" >> README.md
  git add README.md
  git commit -m "first commit"
  gh repo create "${PROJECT_NAME}" -y -d "${PROJECT_NAME}"
  git push -u origin master
  if [ "$1" == "-b" ] || [ "$1" == "browse" ]; then
    gh browse
  fi
fi
