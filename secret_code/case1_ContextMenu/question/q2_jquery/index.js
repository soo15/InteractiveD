// Write JQuery code here!

// const $wrapper = $('.wrapper');
// const $items = $wrapper.find('.item');
// $wrapper.on('click', '.item', function(e){
//     e.stopPropagation();
//     $(this).toggleClass('open').siblings().removeClass('open');
// });
// $('body').on('click', function(e){
//     $items.removeClass('open');
// });


const $items = $('.wrapper .item');
$('body').on('click', e => {
    const item = $(e.target);
    if(item.is('.item')){
        item.toggleClass('open').siblings().removeClass('open');
    }else{
        $items.removeClass('open');
    }
})