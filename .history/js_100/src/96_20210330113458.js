//텃밭..돌피해서 만들기
//dp->다이나믹 프로그래밍


/*
재귀함수
Memorization
Dp
*/


//재귀함수
// function f(n){
//     if(n === 1 || n === 2){
//         return 1;
//     }else{
//         //피보나치
//         return f(n -2) + f(n -1)
//     }
// }

//Memorization
// let N =8;
// let meno = Array(N +1 ).fill(0);
// console.log(meno);

// function f(n){
//     if(n === 1 || n === 2){
//         meno[n] = 1;
//         return 1;
//     }else if(meno[n] != 0){//캐싱
//         return meno[n];
//     }else{
//         meno[n] = f(n-2) + f(n-1)
//         return meno[n];
//     }
// }



//factorial
//탑다운(재귀함수)
// f(5) -> 5 * f(4)
// f(4) -> 4 * f(3)
// f(3) -> 3 * f(2)
// f(2) -> 2 * f(1)
// f(1) -> 1
// function factorial(n){
//     if(n < 2){
//         return 1;
//     }else{
//         return factorial(n-1) *n
//     }
// }

//버텀업..다이나믹
let answer = [];
answer[1] = 1;
answer[2] = 1;
for(let i=3; i < 8; i++){
    answer[i]= answer[i -2] + answer[i -1];
}
console.log(answer);


console.log(factorial(5));

