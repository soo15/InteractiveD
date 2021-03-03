// 20190923출력하기

// 1. 코드 내에 숫자가 없어야 합니다.
//     - 예) console.log(20190923)이라고 하시면 안됩니다.
// 2. 파일 이름이나 경로를 사용해서는 안됩니다.
// 3. 시간, 날짜 함수를 사용해서는 안됩니다.
// 4. 에러 번호 출력을 이용해서는 안됩니다.
// 5. input을 이용해서는 안됩니다.

const user_s = 'aacdddddddddfffffffffgghhh';
let result_s = '';
// let store_s = user_s[0];
// let count = 0;

// for(let i of user_s){
//     console.log(i);
//     if(i === store_s){
//         count += 1;
//     }else{
//         result_s += String(count) - 1;
//         store_s = i;
//         count = 1;
//     }
// }


// result_s +=  String(count) - 1;
// console.log(result_s);


//숫자가 들어가지 않아야함
console.log(`${user_s.match(/a/g).length}${Number(user_s.match(/b/g))}${user_s.match(/c/g).length}${user_s.match(/d/g).length}${Number(user_s.match(/e/g))}${user_s.match(/f/g).length}${user_s.match(/g/g).length}${user_s.match(/h/g).length}`);