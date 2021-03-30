//STEMP ROTATE
let N = 4;
let 도장 = [
    [1,1,1,2],
    [2,0,0,0],
    [1,1,1,1],
    [0,0,0,0]]

//회전횟수
let k = 1;

function solution(stmp, k) {
    N = stmp.length;
     // 0으로 만들어진 배열 생성
    let p = [];
    for(let i = 0; i < N; i++){
        p.push(Array(N).fill(0));
    }

    // 회전
    // 종합
    
    //도장한번찍기
    p = sum_matrix(p, stmp);
    console.log(p);

}


console.log(solution(stmp, k));