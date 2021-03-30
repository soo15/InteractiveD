//STEMP ROTATE
//i,j -> j, N-1-i

let N = 4;

// let stmp = [];
let stmp = [
  [1,1,1,2],
  [2,0,0,0],
  [1,1,1,1],
  [0,0,0,0]];
// for (let i = 0; i < N; i++){
//   let tmp = prompt('도장을 입력하세요').split(' ').map(x => parseInt(x, 10));
//   stmp.push(tmp);
// }

function solution(stmp,n) {
    N = stmp.length;
    // 0으로 만들어진 배열 생성
    let p = [];
    for(let i = 0; i < N; i++){
      p.push(Array(N).fill(0));
    }
  
    // 회전시키기 전 최초 1번찍어주기
    p = sum_matrix(p, stmp);
  
    //회전시키며 도장찍기
    for(let i = 0; i < n; i++) {
      stmp = rotate(stmp);
      p = sum_matrix(p, stmp);
    }
    return p;
  }
  
  //배열(도장) 회전시키기
  function rotate(stmp){
    N = stmp.length;
    let rot = [];
    for(let i = 0; i < N; i++){
      rot.push(Array(4).fill(0));
    }
  
    for (let i = 0; i < N; i++){
      for (let j = 0; j < N; j++){
        rot[j][N-1-i] = stmp[i][j];
      }
    }
    return rot;
  }
  
  //행렬 더하기. 즉, 도장이 찍히는 정도를 더한다.
  function sum_matrix(p,stmp){
    for(let i = 0; i < p.length; i++){
      for(let j = 0; j < p[0].length; j++){
        p[i][j] += stmp[i][j];
      }
    }
    return p;
  }

  console.log(solution(stmp, k));