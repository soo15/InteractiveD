## Case22 : Grid - 출제자 해설

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>4-4 Grid (solution)</title>
    <link rel="stylesheet" href="solution.css">
</head>
<body>
    <h1>Vertical</h1>
    <div class="grid_wrap">
        <div class="item"><img src="./img/box_1.jpg" alt="" /></div>
        <div class="item"><img src="./img/box_2.jpg" alt="" /></div>
        <div class="item"><img src="./img/box_3.jpg" alt="" /></div>
        <div class="item"><img src="./img/box_4.jpg" alt="" /></div>
        <div class="item"><img src="./img/box_5.jpg" alt="" /></div>
        <div class="item"><img src="./img/box_6.jpg" alt="" /></div>
        <div class="item"><img src="./img/box_7.jpg" alt="" /></div>
        <div class="item"><img src="./img/box_8.jpg" alt="" /></div>
        <div class="item"><img src="./img/box_9.jpg" alt="" /></div>
        <div class="item"><img src="./img/box_10.jpg" alt="" /></div>
        <div class="item"><img src="./img/box_11.jpg" alt="" /></div>
        <div class="item"><img src="./img/box_12.jpg" alt="" /></div>
        <div class="item"><img src="./img/box_13.jpg" alt="" /></div>
        <div class="item"><img src="./img/box_14.jpg" alt="" /></div>
        <div class="item"><img src="./img/box_15.jpg" alt="" /></div>
        <div class="item"><img src="./img/box_16.jpg" alt="" /></div>
        <div class="item"><img src="./img/box_17.jpg" alt="" /></div>
        <div class="item"><img src="./img/box_18.jpg" alt="" /></div>
        <div class="item"><img src="./img/box_19.jpg" alt="" /></div>
        <div class="item"><img src="./img/box_20.jpg" alt="" /></div>
    </div>
    <h1>2단 Layout</h1>
    <div class="grid_layout">
        <header>
            <h2>Header</h2>
        </header>
        <section class="container">
            <h2>Main</h2>
        </section>
        <aside>
            <h2>Aside</h2>
        </aside>
        <footer>
            <h2>Footer</h2>
        </footer>
    </div>
</body>
</html>
```

```scss
@charset "utf-8";

/* variables */

$w100: 100%;
$half: 50%;
$item_width:226px;
$large_box: 200px;
$small_box: 140px;
$basis_space: 40px;
$item_space: 10px;
$padding: 15px;
$box-shadow: 14px 17px 34px -20px rgba(0, 0, 0, 0.75);
$platform_tablet: 1024px;
$platform_pablet: 767px;
$platform_mobile: 480px;

/* reset */

*,
*:before,
*:after {
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

h1 {
    text-align: center;
    margin: 35px auto 0;
}

.grid_wrap {
    width: $w100;
    max-width: $platform_tablet;
    margin: $basis_space auto;
    background-color: #fafafa;
    counter-reset: items;
    /* column의 넓이를 정하고.. 또는 개수를 정한다 */
    columns: 4;
    column-gap: $item_space;
    .item {
        position: relative;
        height: $small_box;
        margin-bottom: $item_space;
        padding: $padding;
        -webkit-box-shadow: $box-shadow;
        box-shadow: $box-shadow;
        color: #000;
        box-sizing: border-box;
        overflow: hidden;
        background-color: rgba(0, 0, 0, .3);
        break-inside: avoid-column;
        &:nth-of-type(2n) {
            height: $small_box;
        }
        &:nth-of-type(3n) {
            height: $large_box;
        }
        &:before {
            counter-increment: items;
            content: counter(items);
            position: relative;
            z-index: 1;
            color: #fff;
        }
        img {
            position: absolute;
            left: 50%;
            top: 50%;
            /* 3d 로 grid 내의 trasnform을 제어하게 되면 현재는 버그가 있습니다. */
            -webkit-transform: translateX(-50%) translateY(-50%);
            transform: translateX(-50%) translateY(-50%);
        }
    }
    /* 칼럼의 개수를 각각 변경해준다. */
    @media (max-width: $platform_tablet) {
        columns: 3;
    }
    @media (max-width: $platform_pablet) {
        columns: 2;
    }
    @media (max-width: $platform_mobile) {
        columns: 1;
    }
}


/* 2단 레이아웃 만들기 ie 10까지 대응 */

.grid_layout {
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-areas: "header header" "main aside" "footer footer";
    max-width: $platform_tablet;
    margin: 0 auto;
    color: #fff;
    font-size: 15px;
    * {
        padding: 10px;
    }
    header {
        grid-area: header;
        background: dodgerblue;
    }
    aside {
        grid-area: aside;
        background: darkkhaki;
    }
    .container {
        grid-area: main;
        height: 800px;
        background: powderblue;
    }
    footer {
        grid-area: footer;
        background: darkblue;
    }
}
```