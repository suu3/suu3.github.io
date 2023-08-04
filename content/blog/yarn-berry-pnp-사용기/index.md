---
title: Yarn berry + pnp 사용기
date: "2023-08-04"
description: "Yarn berry + pnp 사용기"
---

![Yarn Logo](./yarn-logo.svg)

벌써 yarn berry + pnp 를 사용한 지 반년이 되어간다.

몇 년 전엔 npm 종속성 문제에 고통 받으며 node_modules를 지우고 다시 npm install을 반복했던 적도 있었는데 지금 진행하고 있는 프로젝트들은 전부 pnpm이나 yarn berry + pnp 방식으로 바꾸었다.

확실히 npm과 yarn1을 사용하던 시절과 비교해보면 에러도 덜 생기고 좋다.

pnpm과 비교하자면 yarn berry + pnp는 한번 캐시 되면 설치 속도가 굉장히 빠르고, node_modules가 없다는 점이 더 마음에 든다.

다만 pnpm보다 설정하는 게 더 까다롭고, node_modules가 없음으로서 종종 겪게 되는 상황들이 있었어서 패키지 매니저는 pnpm을 계속 쓸 것 같다.

yarn berry를 쓰면서 몇몇 마주했던 문제 상황들을 서술하려고 한다.

# Yarn berry + pnp vs 기존 yarn과 npm

(yarn berry = yarn2 같은 말이다.)

### yarn1 / npm

- 기존 node_modules는 패키지들을 중복으로 불러오지 않게 호이스팅하면서, 직접 의존하고 있지 않음에도 불러올 수 있는 `유령 의존성`이 생기는 문제점이 있었다.

### yarn berry + pnp

- yarn berry + pnp는 호이스팅 없이 .yarn/cache에 의존성 zip 아카이브 파일을 관리하고, pnp.cjs 에 패키지들의 의존성 정보과 위치를 명시하여 패키지를 검색할 수 있게 한다.
- yarn berry를 사용하게 되면 .yarn/cache 에 있는 zip 파일들을 원격 저장소에 올리게 된다. 이렇게 할 경우 협업자가 clone 받고 yarn install할 필요가 없어진다. `(zero install)`

# yarn berry 시작하기

[Installation](https://yarnpkg.com/getting-started/install#updating-to-the-latest-versions)

1. yarn 설치

```jsx
npm install -g yarn
yarn set version berry
```

1. 만약 VSC와 typescript를 쓴다면 추가 설정이 필요하다. 이 과정을 생략하면 타입이 불러와지지 않는다.

   yarn 문서에서는 다음과 같이 설명한다.

   [Editor SDKs](https://yarnpkg.com/getting-started/editor-sdks)

   <aside>
   💡 **VSCode**

   To support features like go-to-definition a plugin like [ZipFS](https://marketplace.visualstudio.com/items?itemName=arcanis.vscode-zipfs) is needed.

   1. Run the following command, which will generate a new directory called `.yarn/sdks`:

   `yarn dlx @yarnpkg/sdks vscode`

   1. For safety reason VSCode requires you to explicitly activate the custom TS settings:
   2. Press ctrl+shift+p in a TypeScript file
   3. Choose "Select TypeScript Version"
   4. Pick "Use Workspace Version"
   </aside>

   2-1. 다음 코드 실행

   ```jsx
   yarn dlx @yarnpkg/sdks vscode
   ```

   2-2. VSC 익스텐션 중 ZipFS를 설치한다.

   2-3. VSC에서 `ctrl+shift+p` - `Select TypeScript Version` 선택 - `Use Workspace Version` 선택

1. (선택) yarn 설정을 바꿀 수 있다. 루트에 `.yarnrc.yml` 파일을 만든다.

   [Configuration options](https://yarnpkg.com/configuration/yarnrc)

   ```jsx
   nodeLinker: pnp
   ```

   nodeLinker를 node_modules로 작성해주면 node_modules를 사용할 수 있다. 하지만 굳이?
