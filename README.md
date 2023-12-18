Start Template: gastby-starter [official and community-created starters](https://www.gatsbyjs.com/docs/gatsby-starters/)

## 🚀 Quick start

Site: `http://localhost:8000`  
Querying your data: `http://localhost:8000/___graphql` [Gatsby Tutorial](https://www.gatsbyjs.com/docs/tutorial/getting-started/part-4/#use-graphiql-to-explore-the-data-layer-and-write-graphql-queries).

```shell
# 실행
pnpm start
# 배포
pnpm run deploy
```

## 리팩토링 거리

- 처음부터 다 만들어보고 싶다, 원하는 디자인을 적용하고 싶다는 생각에서 만들기 시작한 것인데 이것저것 디자인 넣어보느라 스타일이 엉망임. 추후 수정 필요.

## 🧐 What's inside?

디렉터리 구조

    .
    ├── node_modules
    └── blog
        └── @Private :비공개 게시물 => 대신 포스트는 따로 노션에 관리. (어드민을 둘 생각이 없으므로)
        └── ...
    ├── src
    ├── .gitignore
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package.json
    └── README.md

[Gatsby browser APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/)  
[Gatsby Config](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/)  
[Gatsby Node APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/)  
[Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/)  
[Gatsby website](https://www.gatsbyjs.com/)  
[Tutorial](https://www.gatsbyjs.com/docs/tutorial/getting-started/)  
[Documentation](https://www.gatsbyjs.com/docs/)

## 💫 Deploy

gh-pages 배포
