// Write Javascript code here!
/* 난의도1*/

// const items = document.querySelectorAll('.item');
// items.forEach(function(item){
//     item.addEventListener('click', function(e){
//         item.classList.toggle('open');
//         items.forEach(function(elem){
//             if(elem !== item) elem.classList.remove('open');
//         })
//     })
// })


//난의도2
// const wrapper = document.querySelector('.wrapper');
// const items = document.querySelector('.item');

// wrapper.addEventListener('click', function(e){
//     const targetElem = e.target;
//     //e.preventDefault는 고유 동작을 중단시키고,
//     // e.stopPropagation 는 상위 엘리먼트들로의 이벤트 전파를 중단시킨다.
//     e.stopPropagation();
//     if(!targetElem.classList.contains('item')) return;

//     targetElem.classList.toggle('open');
//     items.forEach(cont => {
//         if(cont !== targetElem) cont.classList.remove('open');
//     });
// });

// document.body.addEventListener('click', function(e){
//     if(e.targetElem.classList.contains('context')) return;
//     items.forEach(cont => {
//         cont.classList.remove('open');
        
//     })

// })


//나은방법3
const wrapper = document.querySelector('.wrapper');
const items = document.querySelectorAll('.item');

document.body.addEventListener('click', function(e){
    const targetClassList = e.target.classList;
    if(targetClassList.contains('context')) return;
    if(targetClassList.contains('item')){
        targetClassList.toggle('open');
        items.forEach(function(elem){
            if(elem !== e.target) elem.classList.remove('open');
        });
        return;
    }
    items.forEach(function(elem){
        elem.classList.remove('open'); 
    })
});