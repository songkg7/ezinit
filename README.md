# EZinit

[![GitHub license](https://img.shields.io/github/license/songkg7/ezinit)](https://github.com/songkg7/ezinit/blob/master/LICENSE)
![npm](https://img.shields.io/npm/v/ezinit)
![GitHub last commit](https://img.shields.io/github/last-commit/songkg7/ezinit)

    Automates git initialization and GitHub repository connections.

[NPM](https://www.npmjs.com/package/ezinit)

## English Docs

_Since English is not my first language, please understand that the translation may be wrong._

Each time you create a new project, you initialize git, create a repository in github, copy the link, connect it to
remote...

Aren't you already tired before we start?

I made it to deal with this troublesome process. With only one command, it handles git init, store creation, and push.

## Install

```shell
$ npm install -g ezinit
```

## Usage

If the login process proceeds automatically,

but fails with an error, run the following command:


[comment]: <> (Log in using the following command to use the [GitHub CLI]&#40;&#40;https://cli.github.com/&#41;&#41;: The login method recommends SSH.)

```shell
$ gh auth login  # github cli login
```

reference : [GitHub CLI](https://cli.github.com/)

Once you log in, you don't have to log in later.

Run command after login.

```shell
$ ezinit
```

## Options

Currently, only one option is available.

```shell
$ ezinit [-b || browse]
```

Move a new browser upon completion of the process.

Various options will be available later.