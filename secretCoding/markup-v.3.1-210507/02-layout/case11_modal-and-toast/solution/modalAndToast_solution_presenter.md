## Case11 : Modal and toast - 출제자 해설

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>05-modal-and-toast (solution)</title>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="reset.css" />
    <link rel="stylesheet" href="solution.css" />
  </head>
  <body>
    <div class="background-overlay"></div>

    <div class="modal-container">
      <div class="modal">
        <div class="modal-header">
          <h1 class="modal-title">모달 제목</h1>
          <img src="./images/icon-close.png" alt="icon close" />
        </div>
        <div class="modal-content">모달 내용 모달 내용 모달 내용 모달 내용 모달 내용 모달 내용 모달 내용 모달 내용 모달 내용 모달 내용 모달 내용 모달 내용</div>
        <div class="modal-footer">
          <button class="button cancel">취소</button>
          <button class="button confirm">확인</button>
        </div>
      </div>
    </div>

    <!-- 현업에서는 보통 JS를 활용하여 토스트 태그를 동적으로 생성하지만 해당 강의에서는 마크업에만 집중하기 위해 HTML 태그를 활용하여 토스트 생성 -->
    <div class="toast-container">
      <div class="toast">
        <div class="toast-content">토스트 내용</div>
      </div>
      <div class="toast">
        <div class="toast-content">토스트 내용이 길어지면 이렇게 표시됩니다. 이렇게 두줄로 보여집니다. 이렇게 두줄로 보여집니다. 이렇게 두줄로 보여집니다. 이렇게 두줄로 보여집니다. 이렇게 두줄로 보여집니다. 이렇게 두줄로 보여집니다.</div>
      </div>
    </div>
  </body>
</html>
```

```css
html,
body {
  font-family: "Noto Sans KR", sans-serif;
  font-size: 14px;
  line-height: 20px;
}

.background-overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.08);
  z-index: 999;
}

.modal-container {
  position: absolute;
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  z-index: 1000;
}

.modal-container .modal {
  background: white;
  padding: 24px 24px 32px 24px;
  border-radius: 8px;
  margin: 0 24px;
  max-width: 480px;
  width: 100%;
}

.modal-container .modal .modal-header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
}

.modal-container .modal .modal-content {
  margin: 32px 0;
}

.modal-container .modal .modal-footer {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.modal-container .modal .modal-footer .modal-footer-button {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  border-radius: 4px;
  padding: 12px;
  color: white;
  font-weight: bold;
  border: none;
  outline: none;
}

.modal-container .modal .modal-footer .modal-footer-button:not(:last-child) {
  margin-right: 8px;
}

.modal-container .modal .modal-footer .modal-footer-button.cancel {
  background-color: #4f4f4f;
}

.modal-container .modal .modal-footer .modal-footer-button.confirm {
  background-color: #ed234b;
}

.toast-container {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1000;
  padding: 24px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: end;
  -ms-flex-align: end;
  align-items: flex-end;
}

.toast-container .toast {
  background: rgba(0, 0, 0, 0.8);
  padding: 8px 16px;
  border-radius: 4px;
  color: white;
  line-height: 20px;
  width: 100%;
  max-width: 400px;
  -webkit-animation: slideDown 0.8s;
  animation: slideDown 0.8s;
  -webkit-animation-delay: 2s;
  animation-delay: 2s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}

@-webkit-keyframes slideDown {
  from {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  to {
    opacity: 0;
    -webkit-transform: translateY(30px);
    transform: translateY(30px);
  }
}

@keyframes slideDown {
  from {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  to {
    opacity: 0;
    -webkit-transform: translateY(30px);
    transform: translateY(30px);
  }
}

.toast-container .toast:not(:last-child) {
  margin-bottom: 8px;
}

.toast-container .toast .toast-content {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

@media screen and (max-width: 769px) {
  .toast-container {
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    padding: 40px 24px;
  }
}
```

```scss
// color
$primary: #ed234b;
$gray: #4f4f4f;
$background-overlay: rgba(0, 0, 0, 0.08);
$toast-background: rgba(0, 0, 0, 0.8);

// reset
html,
body {
  font-family: "Noto Sans KR", sans-serif;
  font-size: 14px;
  line-height: 20px;
}

.background-overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: $background-overlay;
  z-index: 999;
}

.modal-container {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  .modal {
    background: white;
    padding: 24px 24px 32px 24px;
    border-radius: 8px;
    margin: 0 24px;
    max-width: 480px;
    width: 100%;

    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: bold;
      font-size: 20px;
    }

    .modal-content {
      margin: 32px 0;
    }

    .modal-footer {
      display: flex;
      justify-content: space-between;

      .modal-footer-button {
        flex: 1;
        border-radius: 4px;
        padding: 12px;
        color: white;
        font-weight: bold;
        border: none;
        outline: none;

        &:not(:last-child) {
          margin-right: 8px;
        }

        &.cancel {
          background-color: $gray;
        }

        &.confirm {
          background-color: $primary;
        }
      }
    }
  }
}

.toast-container {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1000;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  .toast {
    background: $toast-background;
    padding: 8px 16px;
    border-radius: 4px;
    color: white;
    line-height: 20px;
    width: 100%;
    max-width: 400px;

    animation: slideDown 0.8s;
    animation-delay: 2s;
    animation-fill-mode: forwards;

    @keyframes slideDown {
      from {
        opacity: 1;
        transform: translateY(0);
      }
      to {
        opacity: 0;
        transform: translateY(30px);
      }
    }

    &:not(:last-child) {
      margin-bottom: 8px;
    }

    .toast-content {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
}

@media screen and (max-width: 769px) {
  //test
  .toast-container {
    justify-content: flex-end;
    padding: 40px 24px;
  }
}
```

### < Modal and toast > 문제와 같이 보면 좋은 팁

다른강사님께서 해당 출제문제를 본 후, 같이 확인하면 좋겠다고 주신 의견입니다.

#### HTML

- 해당케이스에서 작성된 html에서 웹접근성을 고려한 마크업으로 어떻게 수정하면 좋을 지 생각해보면 좋을 것 같습니다.
  예시)
  (before) 닫기 버튼의 경우 키보드로 접근이 불가능 함

  ```html
  <div class="modal-container">
    <div class="modal">
      <div class="modal-header">
        <h1 class="modal-title">모달 제목</h1>
        <img src="./images/icon-close.png" alt="icon close" />
      </div>
      <div class="modal-content">모달 내용 모달 내용 모달 내용 모달 내용 모달 내용 모달 내용 모달 내용 모달 내용 모달 내용 모달 내용 모달 내용 모달 내용</div>
      <div class="modal-footer">
        <button class="button cancel">취소</button>
        <button class="button confirm">확인</button>
      </div>
    </div>
  </div>
  ```

  (after) 마크업 시 닫기 버튼은 가장 마지막에 마크업 한 후 CSS 기술을 활용하여 디자인과 동일한 위치에 배치되도록 좀 더 논리적인 구조로 수정

  ```html
  <div class="modal-container">
    <div class="modal">
      <div class="modal-header">
        <h1 class="modal-title">모달 제목</h1>
      </div>
      <div class="modal-content">모달 내용 모달 내용 모달 내용 모달 내용 모달 내용 모달 내용 모달 내용 모달 내용 모달 내용 모달 내용 모달 내용 모달 내용</div>
      <div class="modal-footer">
        <button aria-label="취소" title="취소" class="button cancel">취소</button>
        <button aria-label="확인" title="확인" class="button confirm">확인</button>
      </div>
      <button aria-label="모달창 닫기" title="모달창 닫기">
        <img src="./images/icon-close.png" alt="" />
      </button>
    </div>
  </div>
  ```

  https://developer.mozilla.org/ko/docs/Web/Accessibility/ARIA/Roles/dialog_role
  https://nuli.navercorp.com/community/article/1132937

  (Dialog 예시 참고 영상)
  https://www.youtube.com/watch?v=gShGtS4YLiw

  (Modal 예시 참고 영상)
  https://www.youtube.com/watch?v=OVX0fJ9e0UY&list=PLtaz5vK7MbK3EAPhmB2gFnCU9qU72YMq3&index=6
