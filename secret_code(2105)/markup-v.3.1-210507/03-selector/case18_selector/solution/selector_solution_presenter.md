## Case18 : selector - 출제자 해설

### HTML

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, viewport-fit=cover" />
    <title>05-selector</title>
    <link rel="stylesheet" href="solution.css" />
  </head>

  <body>
    <h1>selector</h1>
    <div class="selector_wrap">
      <a href="http://www.naver.com" target="_blank" title="greenPark" class="item"><img src="./img/box_1.jpg" alt="" /></a>
      <a href="http://www.google.com" target="_self" title="black" class="item"><img src="./img/box_2.jpg" alt="" /></a>
      <a href="http://www.w3schools.com/" target="_parent" title="yellow" class="item"><img src="./img/box_3.jpg" alt="" /></a>
      <a href="https://frontdev.tistory.com" target="_top" title="dodgeblue" class="item"><img src="./img/box_4.jpg" alt="" /></a>
      <a href="https://github.com/oinochoe" title="greenhouse" class="item"><img src="./img/box_5.jpg" alt="" /></a>
      <a href="http://www.naver.com" title="hi" class="item"><img src="./img/box_6.jpg" alt="" /></a>
      <a href="#shit" title="apple" class="item"><img src="./img/sample.jpeg" alt="" /></a>
      <a href="http://validator.w3.org/" title="nice" class="item"><img src="./img/box_7.jpg" alt="" /></a>
      <a href="https://www.w3.org/WAI/standards-guidelines/aria/" target="_blank" title="slick" class="item"><img src="./img/box_8.jpg" alt="" /></a>
      <a href="//www.naver.com" title="manner" class="item"><img src="./img/box_9.jpg" alt="" /></a>
    </div>
    <input type="text" disabled />
  </body>
</html>
```

<br/>
<br/>

### 5번기능 설명

```scss
.selector_wrap .item[href*="shit"]:before {
  color: red;
}
```

해당 내용은 href 속성에 shit이라는 단어가 어디에든 포함이 되어있다면 숫자의 색상을 빨간색으로 변하게 하는 것입니다.<br />
예를 들어서

```html
<a href="#shit" title="apple" class="item"><img src="./img/sample.jpeg" alt="" /></a>
```

위와 같이 #가 포함되어있어도 \*(asterisk) 아스테리스크 선택자, 즉 전체 선택자로 shit이 들어있는 것을 찾기 때문에 단어가 포함되어있으면<br /> 해당 내용에 특정 속성을 줄 수 있게 되는 것입니다.<br />
이렇게 다양한 선택자들이 있으므로 스크립트를 사용하지 않아도 다양한 상황에서의 웹을 구성하기가 매우 편리해졌죠 : )<br />
해당 선택자는 ie7까지 지원하므로 걱정없이 사용하셔도 무방합니다.
<br/>
<br/>

### CSS

```css
@charset "UTF-8";
/* variables */
/* reset */
*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  border: 0;
  text-decoration: none;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

*:focus {
  outline: none;
}

html,
body {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  text-align: center;
}

img {
  display: block;
}

h1 {
  text-align: center;
  margin: 35px auto 0;
}

input {
  width: 300px;
  height: 50px;
  border: 1px solid #ddd;
}

.selector_wrap {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1024px;
  margin: 40px auto;
  padding: 40px;
  background-color: #fafafa;
  counter-reset: items;
}

.selector_wrap .item {
  -webkit-box-flex: calc(100% / 4);
  -ms-flex: calc(100% / 4);
  flex: calc(100% / 4);
  position: relative;
  height: 220px;
  padding: 15px;
  -webkit-box-shadow: 14px 17px 34px -20px rgba(0, 0, 0, 0.75);
  box-shadow: 14px 17px 34px -20px rgba(0, 0, 0, 0.75);
  color: #000;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.3);
  -webkit-transition: opacity 0.3s;
  transition: opacity 0.3s;
  will-change: opacity;
  /* type here */
  /* 다국어 사이트를 만드는 회사의 경우에는 :lang(ko-KR) 이런 선택자도 많이 사용됩니다. */
  /* 다국어 사이트를 만들 때 해당 속성이 없으면 웹에서 웹폰트가 제대로 렌더링 되지 않기도 합니다. */
  /* 문제들 정도의 선택자들만 아셔도 실무에서는 상당히 많이 아는 정도의 수준일 것입니다. */
  /*  1. 선택자들에 대해서 이해해 봅니다.
            2. 가상 선택자, 가상 엘리먼트, 가상 클래스, ^,*,$= 등 다양한 선택자를 활용해보세요.
            3. target이 blank인 속성만 폰트 사이즈를 30px로 변경해보세요.
            4. href가 https로 시작하는 링크에 대해서 파랑색으로 변경해보세요.
            5. href에 shit이라는 단어가 포함되어있으면 빨간색으로 변경해보세요.
            6. title이 green으로 시작하는 태그의 다음 자매 요소에 대해서 초록색을 지정해보세요.
            7. src가 .jpeg로 끝나는 이미지에 대해서 filter(grascaley)를 `1` 부여해보세요.
            8. 첫번째 글자에 대해서 purple 색상을 지정해보세요.
            9. 유일한 요소인지 체크하는 only-of-type을 통해 div에 padding을 주고 background를 black으로 지정해보세요.
            10. disabled 상태인 input에 background:gray를 주세요.
            11. case 16 nth-of-type을 떠올리며 4번째가 아닌 아이템에 대하여 dimmed 효과를 지정해보세요.
        */
  /* target이 blank인 속성만 폰트 사이즈를 30px로 변경해보세요. */
  /* href가 https로 시작하는 링크에 대해서 파랑색으로 변경해보세요. */
  /* href에 shit이라는 단어가 포함되어있으면 빨간색으로 변경해보세요. */
  /* title이 green으로 시작하는 태그의 다음 자매 요소에 대해서 초록색을 지정해보세요. */
  /* src가 .jpeg로 끝나는 이미지에 대해서 filter(grascaley)를 `1` 부여해보세요. */
  /* 첫번째 글자에 대해서 purple 색상을 지정해보세요. */
  /* 유일한 요소인지 체크하는 only-of-type을 통해 div에 padding을 주고 background를 black으로 지정해보세요. */
  /* disabled 상태인 input에 background:gray를 주세요. */
  /* case 16 nth-of-type을 떠올리며 4번째가 아닌 아이템에 대하여 dimmed 효과를 지정해보세요. */
}

.selector_wrap .item img {
  position: absolute;
  left: 50%;
  top: 50%;
  max-height: 100%;
  -webkit-transform: translate3d(-50%, -50%, 0);
  transform: translate3d(-50%, -50%, 0);
}

.selector_wrap .item:before {
  counter-increment: items;
  content: "num_" counter(items);
  position: relative;
  z-index: 1;
  color: #fff;
  font-size: 50px;
}

.selector_wrap .item:hover {
  opacity: 0.8;
}

.selector_wrap .item[target="_blank"]:before {
  font-size: 30px;
}

.selector_wrap .item[href^="https"]:before {
  color: blue;
}

.selector_wrap .item[href*="shit"]:before {
  color: red;
}

.selector_wrap .item[title^="green"] + .item:before {
  color: green;
}

.selector_wrap .item img[src$=".jpeg"] {
  -webkit-filter: grayscale(1);
  filter: grayscale(1);
}

.selector_wrap .item::first-letter {
  color: purple;
}

div:only-of-type {
  padding: 30px;
  background: black;
}

input:disabled {
  background: gray;
}

.selector_wrap .item:not(:nth-of-type(4n)):after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
}
```

### SCSS

```scss
@charset "utf-8";

/* variables */

$w100: 100%;
$half: 50%;
$item_height: 220px;
$basis_space: 40px;
$padding: 15px;
$box-shadow: 14px 17px 34px -20px rgba(0, 0, 0, 0.75);
$dimmed: rgba(0, 0, 0, 0.4);

/* reset */

*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  border: 0;
  text-decoration: none;
  box-sizing: border-box;
}

*:focus {
  outline: none;
}

html,
body {
  position: relative;
  width: $w100;
  height: $w100;
  padding: 0;
  margin: 0;
  text-align: center;
}

img {
  display: block;
}

h1 {
  text-align: center;
  margin: 35px auto 0;
}

input {
  width: 300px;
  height: 50px;
  border: 1px solid #ddd;
}

.selector_wrap {
  display: flex;
  flex-wrap: wrap;
  width: $w100;
  max-width: 1024px;
  margin: $basis_space auto;
  padding: $basis_space;
  background-color: #fafafa;
  counter-reset: items;
  .item {
    flex: calc(#{$w100} / 4);
    position: relative;
    height: $item_height;
    padding: $padding;
    -webkit-box-shadow: $box-shadow;
    box-shadow: $box-shadow;
    color: #000;
    box-sizing: border-box;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.3);
    transition: opacity 0.3s;
    will-change: opacity;
    img {
      position: absolute;
      left: $half;
      top: $half;
      max-height: 100%;
      -webkit-transform: translate3d(-$half, -$half, 0);
      transform: translate3d(-$half, -$half, 0);
    }
    &:before {
      counter-increment: items;
      content: "num_" counter(items);
      position: relative;
      z-index: 1;
      color: #fff;
      font-size: 50px;
    }
    &:hover {
      opacity: 0.8;
    }
    /* type here */
    /* 다국어 사이트를 만드는 회사의 경우에는 :lang(ko-KR) 이런 선택자도 많이 사용됩니다. */
    /* 다국어 사이트를 만들 때 해당 속성이 없으면 웹에서 웹폰트가 제대로 렌더링 되지 않기도 합니다. */
    /* 문제들 정도의 선택자들만 아셔도 실무에서는 상당히 많이 아는 정도의 수준일 것입니다. */
    /*  1. 선택자들에 대해서 이해해 봅니다.
            2. 가상 선택자, 가상 엘리먼트, 가상 클래스, ^,*,$= 등 다양한 선택자를 활용해보세요.
            3. target이 blank인 속성만 폰트 사이즈를 30px로 변경해보세요.
            4. href가 https로 시작하는 링크에 대해서 파랑색으로 변경해보세요.
            5. href에 shit이라는 단어가 포함되어있으면 빨간색으로 변경해보세요.
            6. title이 green으로 시작하는 태그의 다음 자매 요소에 대해서 초록색을 지정해보세요.
            7. src가 .jpeg로 끝나는 이미지에 대해서 filter(grascaley)를 `1` 부여해보세요.
            8. 첫번째 글자에 대해서 purple 색상을 지정해보세요.
            9. 유일한 요소인지 체크하는 only-of-type을 통해 div에 padding을 주고 background를 black으로 지정해보세요.
            10. disabled 상태인 input에 background:gray를 주세요.
            11. case 16 nth-of-type을 떠올리며 4번째가 아닌 아이템에 대하여 dimmed 효과를 지정해보세요.
        */
    /* target이 blank인 속성만 폰트 사이즈를 30px로 변경해보세요. */
    &[target="_blank"]:before {
      font-size: 30px;
    }
    /* href가 https로 시작하는 링크에 대해서 파랑색으로 변경해보세요. */
    &[href^="https"]:before {
      color: blue;
    }
    /* href에 shit이라는 단어가 포함되어있으면 빨간색으로 변경해보세요. */
    &[href*="shit"]:before {
      color: red;
    }
    /* title이 green으로 시작하는 태그의 다음 자매 요소에 대해서 초록색을 지정해보세요. */
    &[title^="green"] + .item:before {
      color: green;
    }
    /* src가 .jpeg로 끝나는 이미지에 대해서 filter(grascaley)를 `1` 부여해보세요. */
    & img[src$=".jpeg"] {
      filter: grayscale(1);
    }
    /* 첫번째 글자에 대해서 purple 색상을 지정해보세요. */
    &::first-letter {
      color: purple;
    }
    /* 유일한 요소인지 체크하는 only-of-type을 통해 div에 padding을 주고 background를 black으로 지정해보세요. */
    @at-root {
      div:only-of-type {
        padding: 30px;
        background: black;
      }
    }
    /* disabled 상태인 input에 background:gray를 주세요. */
    @at-root {
      input {
        &:disabled {
          background: gray;
        }
      }
    }
    /* case 16 nth-of-type을 떠올리며 4번째가 아닌 아이템에 대하여 dimmed 효과를 지정해보세요. */
    &:not(:nth-of-type(4n)):after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: $dimmed;
    }
  }
}
```
