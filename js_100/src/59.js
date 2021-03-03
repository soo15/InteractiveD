//빈칸채우기

// var prefLineLength = 50;
// var oldStr = "hi";

// var diff = prefLineLength - oldStr.length;
// var filler = '=';

// for(var i = 0; i< diff; i++){
//     oldStr = filler + oldStr + filler;
// }

// document.write(oldStr);

const s = 'hi';
const n = 25 + parseInt(s.length/2 , 10);
//왼쪽채우기
const left = s.padStart(n, '=');
const right = left.padEnd(50, '=');
console.log(left);
console.log(right);
