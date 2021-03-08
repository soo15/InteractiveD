const nav = document.querySelector('nav');


// 첫 번째 방법
/*
window.addEventListener('scroll', function() {
    const top = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    (top >= 50 )
        ? nav.classList.add('active')
        : nav.classList.remove('active');
})
*/



/*
window.onscroll = function() {
    const top = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    (top >= 50 )
        ? nav.classList.add('active')
        : nav.classList.remove('active');
}
*/


/*
document.addEventListener('scroll', function() {
    const top = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    (top >= 50 )
        ? nav.classList.add('active')
        : nav.classList.remove('active');
})
*/




// 두 번째 방법
/*
let oldValue = 0;
window.addEventListener('scroll', function(e){
    const newValue = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    console.log(oldValue, newValue);
    // 음수는 스크롤 다운, 양수는 스크롤 업
    if(oldValue - newValue < 0) nav.classList.add('active');
    if(oldValue - newValue > 0) nav.classList.remove('active');
    oldValue = newValue;
});
*/




// 세 번째 방법
/*
window.addEventListener('wheel', mouseWheelEvent);
window.addEventListener('DOMMouseScroll', mouseWheelEvent);
function mouseWheelEvent(e) {
    const delta = e.wheelDelta ? e.wheelDelta : -e.detail;
    (delta < 0)
        ? nav.classList.add('active')
        : nav.classList.remove('active');
}
*/



/*
const isFireFox = (navigator.userAgent.indexOf('Firefox') !== -1);
const wheelEvt = isFireFox ? 'DOMMouseScroll' : 'wheel';
window.addEventListener(wheelEvt, mouseWheelEvent);
function mouseWheelEvent(e) {
    const delta = e.wheelDelta ? e.wheelDelta : -e.detail;
    (delta < 0)
        ? nav.classList.add('active')
        : nav.classList.remove('active');
}
*/