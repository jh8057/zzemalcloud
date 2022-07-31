# zzemalcloud

Docker 와 GCP Cloud 를 이용한 서비스를 만들어 보기 위한 프로젝트입니다.

# NUXT

### Page

-   기본적인 페이지 구성

#### OpenAPI

-   [LINK](https://www.data.go.kr/data/15097524/openapi.do)
-   [링크](https://geonlee.tistory.com/187)
-   [네이버 오픈 API](https://developers.naver.com/docs/common/openapiguide/)

---

## CONTENTS

1. JWT 토큰 생성

2. github action

3. DB (mysql >> cloud storage 연결 예정)

4. naverAPIs

5. typescript - @component 형식

6. 간단한 룰렛 게임

## reference

-   prettier Option : [link](https://prettier.io/docs/en/options.html)
-   cloude storage : [link](https://cloud.google.com/storage/docs/introduction?hl=ko)
-   jest-vue : [link](https://hasudoki.tistory.com/entry/Vuejs-Vue-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%BD%94%EB%93%9C-%EC%9E%91%EC%84%B1%ED%95%98%EA%B8%B0Jest)
-   jest official : [link](https://jestjs.io/docs/expect#expectvalue)
-   kuber : [link](https://blog.naver.com/PostView.naver?blogId=isc0304&logNo=222507136469)

-   test-jest 만들고 github action에서 자동 테스트 하도록 설정하기
-   vue transision : [link](https://kr.vuejs.org/v2/guide/transitions.html)
-   MVVM : Model - View - ViewModel [link](https://goodteacher.tistory.com/195)
-   QRCode : OpenApi [link](https://www.qrtag.net/api/)
-   vue-Typescript : Using extend [link](https://kyounghwan01.github.io/blog/TS/vue-use-typescript/#vue-js-%E1%84%8C%E1%85%A9%E1%86%BC%E1%84%92%E1%85%A1%E1%86%B8-%E1%84%8B%E1%85%A8%E1%84%89%E1%85%B5)
-   vue-Typescript : [link](https://romeoh.tistory.com/entry/VUE-TYPESCRIPT-Vuex-Interface%EB%A5%BC-%EA%B5%AC%ED%98%84%ED%95%98%EB%8A%94-Store)
-   vue-Typescript : [link](https://kdydesign.github.io/2019/04/06/vuejs-vuex-helper/)
-   sweetalert2 : [link](https://sweetalert2.github.io/#examples)
-   css-animation : [link](https://ldrerin.tistory.com/397)
-   ES6 Class : [link](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes)
-   electron : [link](https://www.electronjs.org/) >> nuxt는 별도의 설치가 필요해보여서 vue, vanilaJs로 하는게 좋아보인다.
-   reactive : [link](https://v3.ko.vuejs.org/guide/reactivity-fundamentals.html#%E1%84%87%E1%85%A1%E1%86%AB%E1%84%8B%E1%85%B3%E1%86%BC%E1%84%92%E1%85%A7%E1%86%BC-%E1%84%89%E1%85%A1%E1%86%BC%E1%84%90%E1%85%A2-%E1%84%89%E1%85%A5%E1%86%AB%E1%84%8B%E1%85%A5%E1%86%AB%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5)
-   composition API : [link](https://joshua1988.github.io/vue-camp/vue3.html#%E1%84%80%E1%85%A1%E1%84%80%E1%85%A9%E1%84%8C%E1%85%A1-%E1%84%92%E1%85%A1%E1%84%82%E1%85%B3%E1%86%AB-%E1%84%87%E1%85%A1%E1%86%BC%E1%84%92%E1%85%A3%E1%86%BC)
-   CORS : [link](https://valuefactory.tistory.com/1141)
-   CORS : [link](https://joshua1988.github.io/vue-camp/front-dev.html#%E1%84%8B%E1%85%AE%E1%84%83%E1%85%A2-rest-api%E1%84%8B%E1%85%A6-%E1%84%83%E1%85%A2%E1%84%92%E1%85%A1%E1%86%AB-%E1%84%8B%E1%85%B5%E1%84%92%E1%85%A2)

-   vercel : 무료 서버 배포 [link](https://vercel.com/new)
-   svg : [link](https://opentutorials.org/course/2418/13691)
-   svg-animation : [link](https://ordinary-code.tistory.com/25)
-   nth-child: [link](https://developer.mozilla.org/ko/docs/Web/CSS/:nth-child)
-   webpack : [link](https://seogeurim.tistory.com/13)
-   swagger [link](https://doqtqu.tistory.com/283)
-   gcp : [link](https://cloud.google.com)

## Docker

#### docker build

-   docker build -t jhkim/node .

#### docker run

-   docker run -p 5000:8080 jhkm/node
