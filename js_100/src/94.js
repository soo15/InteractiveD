//LRU알고리즘
/*
BCBAEBCE
B 6
BC 6
CB 1
CBA 6
BAE 6
AEB 1
EBC 6
BCE 1
*/


function solution(frame, page){
    let runTime = 0;
    let temp = [];
  
    // frame이 0일때, page의 크기만큼 6을 곱해주고 끝낸다.
    if (frame === 0){
      runTime = page.length * 6;
      return runTime;
    }
  
    for (let i of page){
      if (temp.includes(i)){
        // hit - 해당 페이지를 삭제하고 맨 뒤에 저장
        temp.splice(temp.indexOf(i), 1);
        console.log(temp);
        temp.push(i);
        runTime += 1;
      } else {
        // 배열이 비었으면 무조건 넣어야 하므로 if문을 사용
        if (temp.length < frame){
          temp.push(i);
        } else {
          // 가장 사용되지 않은 첫번째 배열을 제거하고 맨 뒤에 입력값을 저장
          temp.shift(); 
          temp.push(i);
        }
        // if문 실행에 상관없이 runTime은 10이 추가된다
        runTime += 6;
      }
    }
    return runTime;
  }

  
const f = 3;
const page = 'BCBAEBCE'.split('');
// console.log(page);


console.log(solution(f, page));