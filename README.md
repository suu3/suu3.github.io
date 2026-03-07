# 📦 Archived: Gatsby Blog (suu3.github.io)

이 프로젝트는 기존에 사용하던 **Gatsby 기반 기술 블로그**입니다. 현재는 **Next.js** 환경으로 블로그를 새롭게 구축하여 이전하였으며, 본 레포지토리는 기존 기록 보관 및 아카이빙 용도로 유지되고 있습니다.

- **상태**: 아카이브됨 (Archived)
- **사유**: Next.js 기반 블로그로 마이그레이션
- **참고**: 기존의 게시글들은 정리되었으며, 샘플 데이터만 남겨진 상태입니다. 자동 배포 워크플로우는 비활성화되었습니다.

---

## 🚀 Quick start

로컬 환경에서 프로젝트를 확인하거나 실행하는 방법입니다.

```shell
# 의존성 설치
pnpm install

# 로컬 개발 서버 실행
pnpm start

# 수동 배포 (필요한 경우)
pnpm run deploy
```

- **Local Site**: `http://localhost:8000`  
- **GraphQL Explorer**: `http://localhost:8000/___graphql`

---

## 🧐 What's inside?

주요 디렉터리 구조입니다.

```text
.
├── content        # 블로그 포스트 원문 (Markdown)
├── src            # React 컴포넌트 및 페이지 템플릿
├── static         # 정적 자산 (이미지, 파비콘 등)
├── gatsby-config.ts # Gatsby 플러그인 및 메타데이터 설정
├── gatsby-node.ts   # 페이지 생성 로직
└── package.json     # 프로젝트 의존성 및 스크립트
```

## 🔗 Resources

- [Gatsby 공식 문서](https://www.gatsbyjs.com/docs/)
- [Gatsby Starter 가이드](https://www.gatsbyjs.com/docs/tutorial/getting-started/)
- [Gatsby Browser APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/)
- [Gatsby Config Reference](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/)
