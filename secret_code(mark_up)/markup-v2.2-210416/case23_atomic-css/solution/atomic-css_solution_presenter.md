## Case23 : atomic CSS - 출제자 해설코드
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>atomic css (solution)</title>
    <link rel="stylesheet" href="solution.css">
</head>
<body>
    <div class="flx pd32-24">
        <div class="w70p mgr32">
            <h1 class="fz24 fw700 color-black">주문내역 (테이블)</h1>

            <div class="mgt16 bd-top fz14 color-gray1 overflow-auto">
                <div class="flx-ac min-w-1000 h32 fw700 bd-bottom bg-gray7">
                    <span class="pd0-8 w15p">주문자</span>
                    <span class="pd0-8 w15p">연락처</span>
                    <span class="pd0-8 w40p">주소</span>
                    <span class="pd0-8 w20p">주문 내역</span>
                    <span class="pd0-8 w10p">결제</span>
                </div>          
                
                <div class="flx-ac min-w-1000 h32 bd-bottom">
                    <span class="pd0-8 w15p">홍길동</span>
                    <span class="pd0-8 w15p">010-0000-0000</span>
                    <span class="pd0-8 w40p">서울시 강남구 강남대로 123 강남빌딩 10층</span>
                    <span class="pd0-8 w20p">하와이안 피자 R * 12</span>
                    <span class="pd0-8 w10p color-primary">결제완료</span>
                </div>

                <div class="flx-ac min-w-1000 h32 bd-bottom">
                    <span class="pd0-8 w15p">홍길동</span>
                    <span class="pd0-8 w15p">010-0000-0000</span>
                    <span class="pd0-8 w40p">서울시 강남구 강남대로 123 강남빌딩 10층</span>
                    <span class="pd0-8 w20p">하와이안 피자 R * 12</span>
                    <span class="pd0-8 w10p"><span class="">현장결제</span></span>
                </div>

                <div class="flx-ac min-w-1000 h32 bd-bottom">
                    <span class="pd0-8 w15p">홍길동</span>
                    <span class="pd0-8 w15p">010-0000-0000</span>
                    <span class="pd0-8 w40p">서울시 강남구 강남대로 123 강남빌딩 10층</span>
                    <span class="pd0-8 w20p">하와이안 피자 R * 12</span>
                    <span class="pd0-8 w10p"><span class="color-primary">결제완료</span></span>
                </div>
            </div>
        </div>

        <div class="w30p">
            <h1 class="fz24 fw700 color-black">주문내역 (카드)</h1>
    
            <div class="mgt16 fz14 color-gray3">
                <div class="flx-column pd24 bd-r8 bg-white box-shadow">
                    <span><span class="pd2-8 bd-r4 bg-primary fz10 fw700 color-white">결제완료</span></span>
                    <span class="mgt8 fz20 fw700 color-gray1">하와이안 피자 R * 12</span>
                    <span class="flx baseline mgt12">
                        <span class="w60 mgr8 fw700">주문자</span>
                        <span>홍길동</span>
                    </span>
                    <span class="flx baseline mgt4">
                        <span class="w60 mgr8 fw700">연락처</span>
                        <span>010-0000-0000</span>
                    </span>
                    <span class="flx baseline mgt4">
                        <span class="w60 mgr8 fw700">주문 내역</span>
                        <span>서울시 강남구 강남대로 123 강남빌딩 10층</span>
                    </span>
                </div>
            </div>

            <div class="mgt16 fz14 color-gray3">
                <div class="flx-column pd24 bd-r8 bg-white box-shadow">
                    <span><span class="pd2-8 bd-r4 bg-gray1 fz10 fw700 color-white">현장결제</span></span>
                    <span class="mgt8 fz20 fw700 color-gray1">하와이안 피자 R * 12</span>
                    <span class="flx baseline mgt12">
                        <span class="w60 mgr8 fw700">주문자</span>
                        <span>홍길동</span>
                    </span>
                    <span class="flx baseline mgt4">
                        <span class="w60 mgr8 fw700">연락처</span>
                        <span>010-0000-0000</span>
                    </span>
                    <span class="flx baseline mgt4">
                        <span class="w60 mgr8 fw700">주문 내역</span>
                        <span>서울시 강남구 강남대로 123 강남빌딩 10층</span>
                    </span>
                </div>
            </div>

            <div class="mgt16 fz14 color-gray3">
                <div class="flx-column pd24 bd-r8 bg-white box-shadow">
                    <span><span class="pd2-8 bd-r4 bg-primary fz10 fw700 color-white">결제완료</span></span>
                    <span class="mgt8 fz20 fw700 color-gray1">하와이안 피자 R * 12</span>
                    <span class="flx baseline mgt12">
                        <span class="w60 mgr8 fw700">주문자</span>
                        <span>홍길동</span>
                    </span>
                    <span class="flx baseline mgt4">
                        <span class="w60 mgr8 fw700">연락처</span>
                        <span>010-0000-0000</span>
                    </span>
                    <span class="flx baseline mgt4">
                        <span class="w60 mgr8 fw700">주문 내역</span>
                        <span>서울시 강남구 강남대로 123 강남빌딩 10층</span>
                    </span>
                </div>
            </div>
        </div>
    </div>    
</body>
</html>
```

```scss
// figma : https://www.figma.com/file/9FXkniEMPgZKtJY4GwP60z/SecretCode?node-id=143%3A95

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&family=Roboto:wght@300;500;700&display=swap');

// color palette
$gray1: #333333;
$gray2: #4f4f4f;
$gray3: #828282;
$gray4: #BDBDBD;
$gray5: #E0E0E0;
$gray6: #F2F2F2;
$gray7: #F9F9F9;
$primary: #ED234B;

// reset css
body {
    margin: 0;
    font-family: 'Roboto', 'Noto Sans KR', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
}

// atomic css
// flex
.flx { display: flex; }
.flx-ac { display: flex; align-items: center; }
.flx-column { display: flex; flex-direction: column; }
.baseline { align-items: baseline; }

// margin
.mgt4 { margin-top: 4px; }
.mgt8 { margin-top: 8px; }
.mgt12 { margin-top: 12px; }
.mgt16 { margin-top: 16px; }

.mgr8 { margin-right: 8px; }
.mgr32 { margin-right: 32px; }

// padding
.pd32-24 { padding: 32px 24px; }
.pd24 { padding: 24px; }
.pd0-8 { padding: 0 8px; }
.pd2-8 { padding: 2px 8px; }

// width
.w10p { width: 10%; }
.w15p { width: 15%; }
.w20p { width: 20%; }
.w30p { width: 30%; }
.w40p { width: 40%; }
.w70p { width: 70%; }
.w60 { width: 60px; flex-shrink: 0; }
.min-w-1000 { min-width: 1000px; }

// height
.h32 { height: 32px; }

// border-radius
.bd-r4 { border-radius: 4px; }
.bd-r8 { border-radius: 8px; }

// border
.bd-top { border-top: 1px solid $gray5; }
.bd-bottom { border-bottom: 1px solid $gray5; }

// background
.bg-white { background-color: #fff; }
.bg-gray1 { background-color: $gray1; }
.bg-gray7 { background-color: $gray7; }
.bg-primary { background-color: $primary; }

// font-size
.fz10 { font-size: 10px; }
.fz14 { font-size: 14px; }
.fz20 { font-size: 20px; }
.fz24 { font-size: 24px; }

// font-weight
.fw400 { font-weight: 400; }
.fw700 { font-weight: 700; }

// color
.color-white { color: #fff; }
.color-black { color: #000; }
.color-gray1 { color: $gray1; }
.color-gray2 { color: $gray2; }
.color-gray3 { color: $gray3; }
.color-gray4 { color: $gray4; }
.color-gray5 { color: $gray5; }
.color-gray6 { color: $gray6; }
.color-gray7 { color: $gray7; }
.color-primary { color: $primary; }

// overflow
.overflow-auto { overflow: auto; }

// box-shaodw
.box-shadow { box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1); }

```

### < Case23 : atomic CSS > 문제와 같이 보면 좋은 팁
다른강사님께서 해당 출제문제를 본 후, 같이 확인하면 좋겠다고 주신 의견입니다.

#### HTML
최근 Atomic CSS가 관심을 받고 있습니다. 

이는 프론트엔드 개발 시 UI 작업을 위한 CSS의 복잡성 때문에 고통받고 있는 문제를 해결하기 위해 구조와 표현을 분리하지 않고 마크업과 UI 디자인을 함께하는 방식입니다.

CSS의 수정 없이 HTML만 수정한다는 점이 유지 보수나 작업 생상성을 높인다고 생각하는 것 같습니다.

그러나 빠르고 편리하게 UI를 작성한다는 측면만 강조하고 콘텐츠의 의미나 웹접근성에 대해 고려하지 않아도 된다는 것은 아닙니다.

앞서 살펴본 다양한 예시처럼 Atomic CSS 방법론을 사용하더라도 의미에 맞는 요소로 마크업하고 해당 콘텐츠에 대한 접근성을 고려하는 것은 필수적인 부분입니다.

시맨틱 요소의 사용과 함께 WAI-ARIA를 적극적으로 활용하여 생산성만이 아닌 접근성과 사용성도 높은 UI를 개발하시기 바랍니다.

https://nuli.navercorp.com/community/article/1084101?email=true
 
https://developer.mozilla.org/ko/docs/Learn/Accessibility/HTML 

https://www.w3.org/TR/wai-aria-practices-1.2/ 

#### CSS
Atomic CSS는 가장 작은 단위로 스타일을 정의합니다.
```css
.flx {
 display: flex;
}
.pd0-8 {
 padding: 0 8px;
}
.w20p {
 width: 20%;
}
.bd-r8 {
 border-radius: 8px;
}
```
페이스북은 Atomic CSS 도입으로 전체 스타일시트 사이즈를 400KB 에서 70KB로 80% 가량 줄였다고 했을만큼 Atomic CSS를 잘 활용하면 개발 생산성과 성능 두마리 토끼를 모두 잡을 수 있을 수 있습니다.

https://engineering.fb.com/2020/05/08/web/facebook-redesign/

그러나 모든 케이스에 대한 정답은 존재하지 않습니다. 

웹 UI 제작은 다양한 상황에서 활용되기 때문에 단순히 용량을 줄이는게 정답이라고 생각하지 마시고 상황에 맞는 선택을 고민해 보시기를 권해 드립니다. 

아래 사이트는 Atomic CSS에 관한 내용과 레퍼런스가 잘 정리되어 있습니다.
학습 시 참고하시면 도움이 될 것 같습니다.

https://css-tricks.com/lets-define-exactly-atomic-css/
