var 바디 = document.body;

var 숫자후보 = [1,2,3,4,5,6,7,8,9];
var 숫자배열 = [];

for(var i = 0 ; i < 4 ; i++){
    //pop(),push(),splice(3,1)
    var 뽑은것 = 숫자후보.splice(Math.floor(Math.random() * (9 - i)),1)[0];
    숫자배열.push(뽑은것);
}

console.log(숫자배열);

var 결과 = document.createElement('h1');
바디.append(결과);
var 폼 = document.createElement('form');
document.body.append(폼);
var 입력창 = document.createElement('input');
입력창.type = 'number';
폼.append(입력창);
var 버튼 = document.createElement('button');
버튼.textContent='입력';
var 결과창 = document.createElement('div');
document.body.append(결과창);




폼.addEventListener('submit', function 콜백함수(){

});
