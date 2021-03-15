//스칼라, 벡터, 행렬(매트릭스), 텐서 <-- 대괄호 연산(라이브러리 있음)
//선형대수 라이브러리 사용

const a = [
    [1, 2],
    [2, 4]
  ];
  const b = [
    [1, 0],
    [0, 3]
  ];
  
  function solution(a, b) {
    let c = [];
    const len = a.length;
    if (len == b[0].length) {
      for (let i = 0; i < len; i++) {
        let row = [];
        for (let j = 0; j < len; j++) {
          let x = 0;
          for (let k = 0; k < len; k++) {
            x += a[i][k] * b[k][j];
          }
          row.push(x);
        }
        c.push(row);
      }
      return c;
    } else {
      return -1;
    }
  }
  
  console.log(solution(a, b));
  
  