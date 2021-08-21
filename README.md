# EZinit

[![GitHub license](https://img.shields.io/github/license/songkg7/ezinit)](https://github.com/songkg7/ezinit/blob/master/LICENSE)
![npm](https://img.shields.io/npm/v/ezinit)
![GitHub last commit](https://img.shields.io/github/last-commit/songkg7/ezinit)

    git 설정 및 repository 연결을 자동화합니다.

[NPM](https://www.npmjs.com/package/ezinit)

새로운 프로젝트를 만들 때마다 매번 git 을 초기화하고 github 에서 repository 를 만들고 link 를 복사해서 remote 로 연결하고...

시작도 전에 벌써 지치지 않나요?

이 귀찮은 과정을 처리하기 위해 만들었습니다. 명령어 한 번만 사용하면 git init, 저장소 생성 및 push 까지 처리합니다.

## Install

```shell
$ npm install -g ezinit
```

## Usage

[GitHub CLI](https://cli.github.com/) 사용을 위해 다음 명령어를 사용하여 로그인합니다. 로그인 방식은 SSH를 권장합니다.

```shell
$ gh auth login
```

한 번만 로그인하면 이후 로그인하지 않아도 됩니다.

설치 및 로그인 후 명령어 실행

```shell
$ ezinit
```

## v1.0.3 patch note

- gh 설치 후 로그인 과정 자동 진행
- 설정 완료 후, 브라우저 창으로 강제 이동 기능 제거

# Next Step

- 현재 Alpha 버전으로 다양한 기능을 추가할 예정
- 이미 git을 초기화한 상태거나 같은 프로젝트 이름의 repository 가 존재하는 경우 예외 처리
- add option and flag (ex, --license, --public, --private...)
