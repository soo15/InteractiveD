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
let N =8;
let meno = Array(N).fill(0);
console.log(meno);

function f(n){
    if(n === 1 || n === 2){
        meno[n] = 1;
        return 1;
    }else{
        meno[n] = f(n-2) + f(n-1)
        return meno[n];
    }
}


console.log(f(6));