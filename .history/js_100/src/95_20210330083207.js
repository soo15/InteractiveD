//STEMP ROTATE
let N = 4;
let 도장 = [
    [1,1,1,2],
    [2,0,0,0],
    [1,1,1,1],
    [0,0,0,0]]
    
let k = 1;

function solution(stmp,n) {
    N = stmp.length;
     // 0으로 만들어진 배열 생성
    let p = [];
    for(let i = 0; i < N; i++){
        p.push(Array(N).fill(0));
    }

    
  p = sum_matrix(p, stmp);

}
