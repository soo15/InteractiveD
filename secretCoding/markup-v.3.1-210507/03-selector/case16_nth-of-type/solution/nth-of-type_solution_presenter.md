## Case16 : nth-of-type - 출제자 해설코드

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, user-scalable=no, viewport-fit=cover"
    />
    <title>01-nth-of-type</title>
    <link rel="stylesheet" href="solution.css" />
  </head>

  <body>
    <h1>nth-of-type</h1>
    <div class="nth-of-type_wrap">
      <span class="item"><img src="./img/box_1.jpg" alt="" /></span>
      <span class="item"><img src="./img/box_2.jpg" alt="" /></span>
      <span class="item"><img src="./img/box_3.jpg" alt="" /></span>
      <span class="item"><img src="./img/box_4.jpg" alt="" /></span>
      <span class="item"><img src="./img/box_5.jpg" alt="" /></span>
      <span class="item"><img src="./img/box_6.jpg" alt="" /></span>
      <span class="item"><img src="./img/box_7.jpg" alt="" /></span>
      <span class="item"><img src="./img/box_8.jpg" alt="" /></span>
      <span class="item"><img src="./img/box_9.jpg" alt="" /></span>
      <span class="item"><img src="./img/box_10.jpg" alt="" /></span>
      <span class="item"><img src="./img/box_11.jpg" alt="" /></span>
      <span class="item"><img src="./img/box_12.jpg" alt="" /></span>
      <span class="item"><img src="./img/box_13.jpg" alt="" /></span>
      <span class="item"><img src="./img/box_14.jpg" alt="" /></span>
      <span class="item"><img src="./img/box_15.jpg" alt="" /></span>
      <span class="item"><img src="./img/box_16.jpg" alt="" /></span>
      <span class="item"><img src="./img/box_17.jpg" alt="" /></span>
      <span class="item"><img src="./img/box_18.jpg" alt="" /></span>
      <span class="item"><img src="./img/box_19.jpg" alt="" /></span>
      <span class="item"><img src="./img/box_20.jpg" alt="" /></span>
    </div>
  </body>
</html>
```

```css
@charset "UTF-8";

/* reset */

*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  border: 0;
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
}

img {
  display: block;
}

h1 {
  text-align: center;
  margin: 35px auto 0;
}

.nth-of-type_wrap {
  width: 100%;
  max-width: 1024px;
  margin: 40px auto;
  padding: 40px;
  background-color: #fafafa;
  counter-reset: items;
}

.nth-of-type_wrap::after {
  content: "";
  display: block;
  clear: both;
}

.nth-of-type_wrap .item {
  position: relative;
  float: left;
  width: calc(100% / 4);
  height: 220px;
  padding: 15px;
  box-shadow: 14px 17px 34px -20px rgba(0, 0, 0, 0.75);
  color: #000;
  box-sizing: border-box;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.3);
  /* type here */
  /* 4번째부터 시작해서 2번째마다 컬러 red로 지정하기 */
  /* 4번째마다를 제외하고 모두 yellow 배경색을 지정 */
  /* 2번째부터 3번째마다 content를 'num_숫자'로 텍스트를 지정 해주세요 ex) 1, 2... => num_1, num_2 (2,5,8,11,14...)*/
  /* 첫번째 2아이템에 대하여 content를 'abcd_숫자'로 텍스트를 지정해주세요. ('abcd_1', 'abcd_2',3,4)*/
  /* before로 하게 되면 숫자의 위치에도 영향을 주므로 after를 사용했습니다. */
}

.nth-of-type_wrap .item img {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate3d(-50%, -50%, 0);
  transform: translate3d(-50%, -50%, 0);
}

.nth-of-type_wrap .item:before {
  counter-increment: items;
  content: counter(items);
  position: relative;
  z-index: 1;
  color: #fff;
  font-size: 50px;
}

.nth-of-type_wrap .item:nth-of-type(2n + 4)::before {
  color: red;
}

.nth-of-type_wrap .item::before {
  background: green;
}

.nth-of-type_wrap .item:nth-of-type(4n)::before {
  background: initial;
}

.nth-of-type_wrap .item:nth-of-type(3n + 2)::before {
  content: "num_" counter(items);
}

.nth-of-type_wrap .item:nth-of-type(-n + 2)::before {
  content: "abcd_" counter(items);
}

.nth-of-type_wrap .item:nth-of-type(11)::after,
.nth-of-type_wrap .item:nth-of-type(12)::after {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
}
```

```scss
@charset "utf-8";

/* variables */

$w100: 100%;
$half: 50%;
$item_height: 220px;
$basis_space: 40px;
$padding: 15px;
$box-shadow: 14px 17px 34px -20px rgba(0, 0, 0, 0.75);
$dimmed: rgba(0, 0, 0, 0.7);

/* reset */

*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  border: 0;
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
}

img {
  display: block;
}

h1 {
  text-align: center;
  margin: 35px auto 0;
}

.nth-of-type_wrap {
  width: $w100;
  max-width: 1024px;
  margin: $basis_space auto;
  padding: $basis_space;
  background-color: #fafafa;
  counter-reset: items;
  &::after {
    content: "";
    display: block;
    clear: both;
  }
  .item {
    position: relative;
    float: left;
    width: calc(#{$w100} / 4);
    height: $item_height;
    padding: $padding;
    -webkit-box-shadow: $box-shadow;
    box-shadow: $box-shadow;
    color: #000;
    box-sizing: border-box;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.3);
    img {
      position: absolute;
      left: $half;
      top: $half;
      -webkit-transform: translate3d(-$half, -$half, 0);
      transform: translate3d(-$half, -$half, 0);
    }
    &:before {
      counter-increment: items;
      content: counter(items);
      position: relative;
      z-index: 1;
      color: #fff;
      font-size: 50px;
    }
    /* type here */
    /* 4번째부터 시작해서 2번째마다 컬러 red로 지정하기 */
    &:nth-of-type(2n + 4)::before {
      color: red;
    }
    /* 4번째마다를 제외하고 모두 yellow 배경색을 지정 */
    &::before {
      background: green;
    }
    &:nth-of-type(4n)::before {
      background: initial;
    }
    // &:not(:nth-of-type(4n))::before {
    //     background: green;
    // }
    /* 2번째부터 3번째마다 content를 'num_숫자'로 텍스트를 지정 해주세요 ex) 1, 2... => num_1, num_2 (2,5,8,11,14...)*/
    &:nth-of-type(3n + 2)::before {
      content: "num_" counter(items);
    }
    /* 첫번째 2아이템에 대하여 content를 'abcd_숫자'로 텍스트를 지정해주세요. ('abcd_1', 'abcd_2',3,4)*/
    &:nth-of-type(-n + 2)::before {
      content: "abcd_" counter(items);
    }
    /* before로 하게 되면 숫자의 위치에도 영향을 주므로 after를 사용했습니다. */
    &:nth-of-type(11)::after,
    &:nth-of-type(12)::after {
      content: "";
      display: block;
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
