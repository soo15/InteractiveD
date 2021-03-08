//우리나라에는 사랑의열매가 있습니다.

let textValue= "우리나라에는 사랑의열매가 있습니다."
let Values = textValue.split(' ');
// let arr = [];

// for(let i in Values){
//    const elements = arr.push(Values[i][0]);
// }

// console.log(arr.join(''));

let result ='';

for(let s of Values){
    result += s.slice(0, 1);
}

console.log(result);