//텃밭..돌피해서 만들기
//dp->다이나믹 프로그래밍
/*
재귀함수
Memorization
Dp
*/


function f(n){
    if(n === 1 || n === 2){
        return 1;
    }else{
        //피보나치
        return f(n -2) + f(n -1)
    }
}

console.log(f(5));