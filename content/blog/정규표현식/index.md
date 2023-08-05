---
title: 정규 표현식
date: "2023-08-05"
description: "정규 표현식"
---

# 정규 표현식

정규 표현식은 특정한 규칙을 가진 문자열의 집합을 표현하는 데 사용하는 형식 언어이다. 자바스크립트 말고도 다른 언어들도 다 지원한다.

**코딩 테스트 문자열 문제**나 어떤 폼에서 **인풋 값이 유효한지 체크**할 때 많이 사용하는 것 같다.

예를 들어 회원 가입 폼의 정규식을 체크할 때, 백엔드와 협의해서 정규식 규칙을 정했던 경험이 있다.

정규 표현식을 만드는 방법을 꼭 외워야 하는가 에 대해서는 개인적으로는 일부 상황에서만 쓰이고, 검색하면 바로 나오기 때문에 외울 필요는 없다고 생각하지만

필요할 때 바로 사용하기 위해서 정리하고자 한다.

(또한 기획자가 일반적으로 쓰이지 않는 규칙으로 문자열을 검증하길 요구한다면 거기에 맞게 표현식을 만들어내야 하니 말이다.)

# 정규표현식 생성법

정규 표현식을 만드는 방법에는 두 가지가 있다.

## 1. 정규 표현식 리터럴

1.  스크립트를 불러올 때 컴파일 된다.
2.  바뀔 일 없는 패턴에 사용하면 성능이 향상될 수 있다.
    (https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Regular_expressions MDN 정규표현식 문서)

```jsx
const regexp = /is/i
```

## 2. RegExp 생성자 함수

1.  런타임에 컴파일된다.
2.  바뀔 수 있는 패턴에 사용한다.

```jsx
const regexp = new RegExp(/is/i)
```

# 정규표현식 메서드

- RegExp.prototype.exec
- RegExp.prototype.test
- String.prototype.match

---

# Reference

- MDN 정규 표현식 문서

[정규 표현식 - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Regular_expressions)

- 모던 자바스크립트 딥다이브 책
