## Case24 : tailwind-css-footer - 출제자 해설

### HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>01-tailwind-css-footer (solution)</title>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="styles/style.css" />
  </head>
  <body>
    <footer class="flex flex-col md:flex-row md:justify-between bg-gray2 p-6 md:p-8">
      <!-- left side -->
      <div>
        <!-- logo -->
        <div class="mb-4">
          <img src="./images/logo.png" alt="fastcampus logo" />
        </div>
        <!-- company info -->
        <div class="text-gray6 text-sm">
          패스트캠퍼스(주)<br />
          사업자번호 : 810-86-00658<br />
          사무실 : 서울시 강남구 강남대로 364 미왕빌딩 15층
        </div>
      </div>

      <!-- right side -->
      <div class="flex flex-col md:flex-col-reverse md:justify-between">
        <!-- channel list -->
        <ul class="flex flex-row md:justify-end space-x-4 mt-8 mb-10 md:mb-0">
          <li>
            <a href="#">
              <img src="./images/icon-facebook.png" alt="facebook logo" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./images/icon-instagram.png" alt="instagram logo" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./images/icon-youtube.png" alt="youtube logo" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./images/icon-naver.png" alt="naver logo" />
            </a>
          </li>
        </ul>

        <!-- menu list -->
        <ul class="flex flex-col md:flex-row text-gray5 md:text-sm space-y-2 md:space-y-0 md:divide-x md:divide-gray3">
          <li class="menu-item">
            <a href="#">회사소개</a>
          </li>
          <li class="menu-item">
            <a href="#">공지사항</a>
          </li>
          <li class="menu-item">
            <a href="#">이용약관</a>
          </li>
          <li class="menu-item">
            <a href="#">개인정보처리방침</a>
          </li>
          <li class="menu-item">
            <a href="#">취소/환불 정책</a>
          </li>
          <li class="menu-item">
            <a href="#">자주 묻는 질문</a>
          </li>
        </ul>
      </div>
    </footer>
  </body>
</html>
```

### TAILWIND CSS

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html,
body {
  font-size: 14px;
  line-height: 20px;
}

@screen md {
  .menu-item {
    @apply leading-none px-2;
  }
}
```

### < Case24 : tailwind css footer > 문제와 같이 보면 좋은 팁

다른강사님께서 해당 출제문제를 본 후, 같이 확인하면 좋겠다고 주신 의견입니다.
<br />
<br />
Tailwind CSS는 Utility First 방식으로 Tailwind에서 제공하는 다양한 스타일을 선택하여<br />
사용자가 원하는 UI를 구현할 수 있도록 제공 합니다.

또한, Tailwind CSS는 사용자가 원하는 스타일을 구현할 때 손쉽게 스타일을 재정의 할 수 있어<br />
UI 스타일링을 구현할 때 확장 및 재사용, 생산성 등을 높일 수 있습니다.

2020년 11월 19일 Tailwind CSS는 v2를 출시하며 새로운 색상 팔레트, 다크 모드 지원 등을 포함시켰고<br />
2021년 4월 19일 현재 v2.1까지 업데이트 되었습니다.

Tailwind CSS는 2020 State of CSS에서 해가 지남에 따라 “다시 사용할 예정"의 기술 중 최다 적용 기술에 뽑힐 만큼 만족도가 높습니다.
<br />
<br />

![example2](./example2.png)
<br />
https://2020.stateofcss.com/ko-KR/
<br />

Tailwind CSS를 사용하여 IE 11 미만 브라우저를 지원해야 한다면 v2를 사용해야 합니다.<br />
v2부터는 IE를 지원하지 않습니다. 만약 IE 11 미만 브라우저를 지원해야 하는 경우 Tailwind CSS v1.9를 사용해야 합니다.

Tailwind CSS 프로젝트에 PostCSS를 프리 프로세서로 활용하면 보다 빠른 빌드 프로세스<br />
(CSS를 여러 도구로 구문 분석하고 처리할 필요 없이 PostCSS만으로 처리해 속도 향상)와 함께<br />
별도의 처리 (Tailwind CSS는 자체적인 비표준 키워드를 사용하므로 다른 도구 사용시 성가신 오류 발생) 없이 사용할 수 있다는 이점이 있습니다.

성능을 위해 사용하지 않는 CSS를 프로덕션 빌드 시 제거하여야 합니다.<br />
예를 들어 Tailwind CSS는 프로젝트에서 사용 중인 모든 중단점에서 <br />
여백을 적용하려는 요소의 모든 면(위,아래,양 옆)에 대해 간격, 스케일의 모든 크기에 대한 유틸리티를 생성합니다.<br />
이로 인해 모두 사용하지 않을 수백 가지의 다양한 조합이 생성됩니다.

그러므로 배포를 위한 빌드 과정에서 반드시 Tailwind CSS의 purge 옵션을 사용해 사용 하지 않는 스타일을 트리 쉐이킹(사용하지 않는 스타일 제거)하고 최종 빌드 크기를 최적화 해야 합니다.

Visual Studio Code에서 Tailwind CSS를 사용할 경우 확장 프로그램을 설치하여 활용하는 것이 도움이 됩니다.

https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss<br />
https://marketplace.visualstudio.com/items?itemName=austenc.tailwind-docs<br />
https://marketplace.visualstudio.com/items?itemName=heybourn.headwind<br />
<br />
좀 더 자세하게 Tailwind CSS에 대해 학습하실 경우 공식 홈페이지에 있는<br />
Documentation을 참고하시거나 Youtube의 다양한 강좌를 시청하시길 권해드립니다.

<br />

[Tailwind CSS 문서 일부 번역본]
https://yamoo9.gitbook.io/tailwindcss/core-concept/utility-first
<br />
[공식 홈페이지]
https://tailwindcss.com/docs
<br />
[유튜브 강좌]
https://www.youtube.com/watch?v=j_5-LISy9Qg
https://www.youtube.com/watch?v=4wGmylafgM4
