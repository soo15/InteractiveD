## Case13 : Table and card - 출제자 해설코드
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>table and card (solution)</title>
    <link rel="stylesheet" href="solution.css">
</head>
<body>
    <div class="content">
        <h1 class="page-title">주문내역</h1>

        <div class="order-list">
            <div class="order-item list-head">
                <span class="cell name">주문자</span>
                <span class="cell phone">연락처</span>
                <span class="cell address">주소</span>
                <span class="cell order">주문 내역</span>
                <span class="cell payment">결제</span>
            </div>

            <div class="order-item list-body">
                <span class="cell name" data-label="주문자">홍길동</span>
                <span class="cell phone" data-label="연락처">010-0000-0000</span>
                <span class="cell address" data-label="주소">서울시 강남구 강남대로 123 강남빌딩 10층</span>
                <span class="cell order">하와이안 피자 R * 12</span>
                <span class="cell payment"><span class="badge done">결제완료</span></span>
            </div>

            <div class="order-item list-body">
                <span class="cell name" data-label="주문자">홍길동</span>
                <span class="cell phone" data-label="연락처">010-0000-0000</span>
                <span class="cell address" data-label="주소">서울시 강남구 강남대로 123 강남빌딩 10층</span>
                <span class="cell order">하와이안 피자 R * 12</span>
                <span class="cell payment"><span class="badge">현장결제</span></span>
            </div>

            <div class="order-item list-body">
                <span class="cell name" data-label="주문자">홍길동</span>
                <span class="cell phone" data-label="연락처">010-0000-0000</span>
                <span class="cell address" data-label="주소">서울시 강남구 강남대로 123 강남빌딩 10층</span>
                <span class="cell order">하와이안 피자 R * 12</span>
                <span class="cell payment"><span class="badge done">결제완료</span></span>
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

// media query
@mixin mobile-style {
    @media (max-width: 767px) {
        @content;
    }
}

@mixin pc-style {
    @media (min-width: 768px) {
        @content;
    }
}

.content {
    padding: 32px 24px;
}

.page-title {
    font-size: 24px;
    font-weight: 700;
    color: #000;
}

.order-list {
    margin-top: 16px;
    color: $gray1;
    @include pc-style {
        border-top: 1px solid $gray5;
        overflow: auto;
    }
}

.order-item {
    @include mobile-style {
        display: flex;
        flex-direction: column;
        margin-top: 16px;
        &.list-head {
            display: none;
        }
        &.list-body {
            padding: 24px;
            border-radius: 8px;
            background: #FFFFFF;
            box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
        }
    }
    @include pc-style {
        display: flex;
        min-width: 1000px;
        border-bottom: 1px solid $gray5;
        &.list-head {
            background-color: $gray7;
            .cell {
                font-weight: 700;
            }
        }
    }
}

.cell {
    @include mobile-style {
        &.payment {
            order: -2;
            .badge {
                padding: 2px 8px;
                border-radius: 4px;
                background-color: $gray1;
                font-size: 10px;
                font-weight: 700;
                color: #fff;
                &.done {
                    background-color: $primary;
                }
            }
        }
        &.order {
            order: -1;
            margin: 8px 0;
            font-size: 20px;
            font-weight: 700;
        }
        &.name,
        &.phone,
        &.address {
            display: flex;
            align-items: baseline;
            margin-top: 4px;
            word-break: keep-all;
            color: $gray3;
            &::before {
                content: attr(data-label);
                flex-shrink: 0; 
                width: 60px;
                font-weight: 700;
            }
        }
    }
    @include pc-style {
        display: flex;
        align-items: center;
        padding: 0 8px;
        height: 32px;
        &.name {
            width: 15%;
        }
        &.phone {
            width: 15%;
        }
        &.address {
            width: 40%;
        }
        &.order {
            width: 20%;
        }
        &.payment {
            width: 10%;
            .badge.done {
                color: $primary;
            }
        }
    }
}
```

### < Case10 : Sign up > 문제와 같이 보면 좋은 팁
다른강사님께서 해당 출제문제를 본 후, 같이 확인하면 좋겠다고 주신 의견입니다.

#### HTML
테이블 관련 콘텐츠는 반응형으로 구현하려면 많은 제약이 따릅니다.<br />
그래서 모바일과 데스크탑을 다른 형태의 UI로 구분하고 마크업을 `<table>` 요소가 아닌 `<div>` 등의 요소를 사용하기도 합니다.<br />
그러나 `<table>` 요소 역시 HTML 표준 명령이 이고 데이타의 의미가 테이블 관련 정보라면 `<table>` 관련 요소를 사용하는 것이 바람직합니다.<br />

또한 `<table>` 관련 표준 요소를 사용하면 내부의 셀 정보가 제목 셀인지 내용 셀인지를 구분할 수 있기때문에 웹접근성 관점에서도 도움이 될 수 있습니다.<br />

제목 셀과 내용 셀의 구분이 단순한 테이블의 경우에는 제목 셀을 의미하는 `<th>` 요소에 scope 속성을 사용하는 것만으로도 제목과 내용셀을 연관지어 정보를 이해하기에 충분하지만<br /> 
병합이 많고 복잡한 형태의 테이블은 id 속성과 headers 속성 또는 id와 aria-describedby 속성을 사용하여야 합니다.<br />

만약 `<table>` 관련 요소가 아닌 `<div>` 등의 요소를 사용할 경우 WAI-ARIA의 role 관련 속성을 사용하여 해당 정보가 테이블 정보임을 이해할 수 있도록 하는 것이 좋습니다.<br />

https://www.w3.org/TR/wai-aria-practices-1.2/#table 
https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Table_Role 

아래 사이트의 내용을 숙지하셔서 웹접근성 높은 테이블을 구현할 때 참고하시기 바랍니다.<br />

https://www.w3.org/WAI/tutorials/tables/
https://webaim.org/techniques/tables/data 
https://www.w3.org/TR/wai-aria-practices/examples/table/table.html 
https://usability.yale.edu/web-accessibility/articles/tables 

표준 명령어인 `<table>` 관련 요소를 사용한 마크업은 어떻게 구성하면 될까요? 아래 코드를 참고하시기 바랍니다. <br />
```html
<table class="order-table" aria-describedby="order-table-description">
 <caption>피자 주문 내역</caption>
 <p id="order-table-description">
   주문자, 연락처, 주소 및 주문 내역과 결제 정보로 구성된 피자 주문내역 표.
 </p>
 <tr class="table-row">
   <th scope="col" class="table-header name">주문자</th>
   <th scope="col" class="table-header phone">연락처</th>
   <th scope="col" class="table-header address">주소</th>
   <th scope="col" class="table-header order">주문 내역</th>
   <th scope="col" class="table-header payment">결제</th>
 </tr>
 <tr class="table-row">
   <td class="table-data name-data">홍길동</td>
   <td class="table-header phone-data">010-0000-0000</td>
   <td class="table-header address-data">서울시 강남구 강남대로 123 강남빌딩 10층</td>
   <td class="table-header order-data">하와이안 피자 R * 12</td>
   <td class="table-header payment-data"><span class="badge done">결제완료</span></td>
 </tr>
</table>
```

#### CSS
`<table>` 요소는 열과 행으로 렌더링되기 때문에 반응형으로 구현 시 가로 스크롤이 발생하거나 너무 작게 축소되는 등의 문제가 있습니다.<br />
이를 해결하기 위한 트릭으로 제목 셀인 `<th>` 요소를 숨기고 내용 셀인 `<td>` 요소에 가상 요소 선택자인 ::before를 사용하여 제목 셀의 내용을 추가하는 전략을 통해 유연한 반응형 디자인을 구현할 수 있습니다.<br />

먼저 테이블의 기본 스타일을 지정합니다.
```css
.order-table {
 width: 100%;
 border-collapse: collapse;
}
 
/* 홀수번째 행과 짝수번째 행의 배경색상을 다르게 지정합니다. */
.table-row:nth-of-type(odd) {
 background: #eee;
}
.table-row:nth-of-type(even) {
 background: #fefefe;
}
 
.table-header {
 background: #333;
 color: #fff;
 font-weight: bold;
}
 
.table-header,
.table-data {
 padding: 6px;
 border: 1px solid #ccc;
 text-align: left;
}
```

그리고 모바일 환경에 해당하는 미디어 쿼리 구문에 다음과 같은 코드를 추가합니다.

```css
@media screen and (max-width: 767px){
 .table-row { border: 1px solid #ccc;}
  .table-header {display: none; }
  .table-data {
   border: none;
   border-bottom: 1px solid #eee;
   display: flex;
 }
  .table-data:before {
   width: 100px;
 }
  .table-data:nth-of-type(1):before { content: "주문자"; }
 .table-data:nth-of-type(2):before { content: "연락처"; }
 .table-data:nth-of-type(3):before { content: "주소"; }
 .table-data:nth-of-type(4):before { content: "주문내역"; }
 .table-data:nth-of-type(5):before { content: "결제"; }
 }
}
```
테이블을 모바일 환경에서 반응형으로 만들기 위해 제목 셀인 `<th>` 요소에 display: none을 지정한 것에 주목해야 합니다.<br /> 
display:none은 DOM 상에서 삭제되며 보조기기 등 스크린리더에서도 읽지 않는 정보가 됩니다.<br /> 
그 후 화면에 제목 셀의 정보를 렌더링하기 위해 각각 `<td>` 요소 즉 셀의 내용에 가상요소로 셀의 제목 정보를 삽입하고<br /> 
flex를 활용하여 배치하면 반응형 UI를 구현하면서도 웹접근성을 보장할 수 있게 됩니다.<br /> 
반응형 테이블 사례나 설명은 아래 사이트를 참고하시기 바랍니다. <br /> 

https://css-tricks.com/responsive-data-tables/ 
https://designsystem.digital.gov/components/table/
