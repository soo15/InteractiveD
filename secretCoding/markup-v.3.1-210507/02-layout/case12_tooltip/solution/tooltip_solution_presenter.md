## Case12 : tooltip - 출제자 해설

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>tooltip</title>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="../css/tooltip.css" />
    <style>
      ul {
        overflow: hidden;
        width: 600px;
        margin: 0;
        padding: 0;
      }
      li {
        position: relative;
        float: left;
        width: 50%;
        border: 1px solid #333;
        background-color: #ccc;
        list-style: none;
        box-sizing: border-box;
      }
      strong {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        padding: 5px;
        text-align: center;
        background-color: palevioletred;
      }
      .group_help {
        width: 300px;
        margin: 20px;
        padding: 5px;
        background-color: palevioletred;
      }
      .group_help .box_help {
        font-size: 0;
      }
      .group_help .tit_help {
        display: inline-block;
        margin-right: 5px;
        vertical-align: top;
      }
      .group_tooltip {
        height: 90px;
      }
    </style>
  </head>
  <body>
    <div class="group_help">
      <div class="box_help">
        <div class="tit_help">제목</div>
        <div class="box_tooltip">
          <button class="btn_tooltip">도움말</button>
          <div class="item_tooltip">
            <p class="txt_tooltip">툴팁으로 제목에 대한 설명글이 나옵니다</p>
          </div>
        </div>
      </div>
      <p>내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트</p>
    </div>

    <ul>
      <li style="padding: 100px 0 20px 140px">
        <strong>위쪽</strong>
        <div class="group_tooltip">
          <div class="box_tooltip type_top">
            <button class="btn_tooltip">도움말</button>
            <div class="item_tooltip">
              <p class="txt_tooltip">툴팁</p>
            </div>
          </div>
        </div>

        <div class="group_tooltip">
          <div class="box_tooltip type_top">
            <button class="btn_tooltip">도움말</button>
            <div class="item_tooltip">
              <p class="txt_tooltip">툴팁내용이 길어지면 이렇게 보입니다</p>
            </div>
          </div>
        </div>

        <div class="group_tooltip">
          <div class="box_tooltip type_top">
            <button class="btn_tooltip">도움말</button>
            <div class="item_tooltip">
              <p class="txt_tooltip">툴팁내용이 길어지면 이렇게 보입니다 내용이 길어지면 이렇게</p>
            </div>
          </div>
        </div>
      </li>
      <li style="padding: 70px 0 50px 80px">
        <strong>오른쪽</strong>
        <div class="group_tooltip">
          <div class="box_tooltip">
            <button class="btn_tooltip">도움말</button>
            <div class="item_tooltip">
              <p class="txt_tooltip">툴팁</p>
            </div>
          </div>
        </div>

        <div class="group_tooltip">
          <div class="box_tooltip">
            <button class="btn_tooltip">도움말</button>
            <div class="item_tooltip">
              <p class="txt_tooltip">툴팁내용이 길어지면 이렇게 보입니다</p>
            </div>
          </div>
        </div>

        <div class="group_tooltip">
          <div class="box_tooltip">
            <button class="btn_tooltip">도움말</button>
            <div class="item_tooltip">
              <p class="txt_tooltip">툴팁내용이 길어지면 이렇게 보입니다 내용이 길어지면 이렇게</p>
            </div>
          </div>
        </div>
      </li>
      <li style="padding: 70px 0 50px 200px">
        <strong>왼쪽</strong>
        <div class="group_tooltip">
          <div class="box_tooltip type_left">
            <button class="btn_tooltip">도움말</button>
            <div class="item_tooltip">
              <p class="txt_tooltip">툴팁</p>
            </div>
          </div>
        </div>

        <div class="group_tooltip">
          <div class="box_tooltip type_left">
            <button class="btn_tooltip">도움말</button>
            <div class="item_tooltip">
              <p class="txt_tooltip">툴팁내용이 길어지면 이렇게 보입니다</p>
            </div>
          </div>
        </div>

        <div class="group_tooltip">
          <div class="box_tooltip type_left">
            <button class="btn_tooltip">도움말</button>
            <div class="item_tooltip">
              <p class="txt_tooltip">툴팁내용이 길어지면 이렇게 보입니다 내용이 길어지면 이렇게</p>
            </div>
          </div>
        </div>
      </li>
      <li style="padding: 60px 0 60px 150px">
        <strong>아래쪽</strong>
        <div class="group_tooltip">
          <div class="box_tooltip type_bottom">
            <button class="btn_tooltip">도움말</button>
            <div class="item_tooltip">
              <p class="txt_tooltip">툴팁</p>
            </div>
          </div>
        </div>

        <div class="group_tooltip">
          <div class="box_tooltip type_bottom">
            <button class="btn_tooltip">도움말</button>
            <div class="item_tooltip">
              <p class="txt_tooltip">툴팁내용이 길어지면 이렇게 보입니다</p>
            </div>
          </div>
        </div>

        <div class="group_tooltip">
          <div class="box_tooltip type_bottom">
            <button class="btn_tooltip">도움말</button>
            <div class="item_tooltip">
              <p class="txt_tooltip">툴팁내용이 길어지면 이렇게 보입니다 내용이 길어지면 이렇게</p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </body>
</html>
```

```scss
@charset "UTF-8";

/* color */
$color1: #fff;
$color2: #333;
$color3: rgba(51, 51, 51, 0.8);

/* reset */
* {
  font-weight: 400;
  font-family: "Noto Sans KR";
  font-size: 12px;
  line-height: 16px;
  color: $color1;
}
p {
  margin: 0;
}
button {
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

/* tooltip */
.btn_tooltip {
  display: inline-block;
  width: 14px;
  height: 15px;
  font-size: 0;
  line-height: 0;
  text-indent: -9999px;
  background: url(../images/img_tooltip.png) 0 0 no-repeat;
  vertical-align: top;
  &:hover + .item_tooltip {
    z-index: 0;
    opacity: 1;
  }
}

.box_tooltip {
  display: inline-block;
  position: relative;
  line-height: 0;
  vertical-align: top;
  .item_tooltip {
    position: absolute;
    top: 50%;
    z-index: -1;
    left: 22px;
    width: 137px;
    opacity: 0;
    transform: translate(0, -50%);
    transition: opacity 0.3s;
    &:after {
      position: absolute;
      top: 50%;
      left: -8px;
      width: 0;
      height: 0;
      transform: translate(0, -50%);
      border-width: 4px;
      border-style: solid;
      border-color: transparent $color3 transparent transparent;
      content: "";
    }
    .txt_tooltip {
      display: inline-block;
      min-width: 55px;
      padding: 6px;
      border-radius: 4px;
      background-color: $color3;
      text-align: center;
      word-break: keep-all;
      box-sizing: border-box;
      vertical-align: top;
    }
  }
  &.type_top {
    .item_tooltip {
      top: auto;
      left: 50%;
      bottom: 23px;
      transform: translate(-50%, 0);
      text-align: center;
      &:after {
        top: auto;
        left: 50%;
        bottom: -8px;
        transform: translate(-50%, 0);
        border-color: $color3 transparent transparent transparent;
      }
    }
  }
  &.type_left {
    .item_tooltip {
      left: auto;
      right: 22px;
      text-align: right;
      &:after {
        left: auto;
        right: -8px;
        border-color: transparent transparent transparent $color3;
      }
    }
  }
  &.type_bottom {
    .item_tooltip {
      top: 100%;
      left: 50%;
      margin-top: 8px;
      transform: translate(-50%, 0);
      text-align: center;
      &:after {
        top: -8px;
        left: 50%;
        transform: translate(-50%, 0);
        border-color: transparent transparent $color3 transparent;
      }
    }
  }
}
```
