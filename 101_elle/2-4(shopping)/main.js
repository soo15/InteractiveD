'use strict'

const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');


function onAdd(){
    //1.사용자가 입력한 텍스트 받아옴
    const text =  input.value;
    //console.log(text);
    if(text === ''){
        input.focus();
        return;
    }
    //2.새로운 아이템을 만듬(텍스트 +  삭제 버튼)
    const item = createItem(text);
    //3.items 컨테이너안에 새로 만든 아이템을 추가한다.
    items.appendChild(item);
    //4.새로 추가된 아이템으로 이동 스크롤링
    item.scrollIntoView({block:'center'});
    //5.인풋을 초기화 한다.
    input.value = '';
    input.focus();
}


function createItem(text){
    //li요소
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class','item__row');
    
    //Div요소
    const item = document.createElement('div');
    item.setAttribute('class','item');

    //span요소
    const Name = document.createElement('span');
    Name.setAttribute('class','item__name');
    Name.innerText = text;

    //button요소
    const deletBtn = document.createElement('button');
    deletBtn.setAttribute('class', 'item__delete');
    deletBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';//변동이유없어서 innerHTML
    deletBtn.addEventListener('click', ()=> {
        items.removeChild(itemRow);
    })

    const itemDivider = document.createElement('div');
    itemDivider.setAttribute('class', 'item__divider');

    item.appendChild(Name);
    item.appendChild(deletBtn);

    itemRow.appendChild(item);
    itemRow.appendChild(itemDivider);
    return itemRow;
}

addBtn.addEventListener('click', ()=> {
    //콜백호출
    onAdd();
});

input.addEventListener('keypress', event=> {
    if(event.key === 'Enter'){
        onAdd();
    }
});