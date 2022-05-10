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

## Docker

#### docker build

-   docker build -t jhkim/node .

#### docker run

-   docker run -p 5000:8080 jhkm/node
