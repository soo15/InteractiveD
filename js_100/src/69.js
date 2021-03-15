//에라토스테네스의 체
function prime_list(n){
    //에라토스테네스의 체 초기화: n개 요소에 True 설정(소수로 간주)
    let sieve = []
    for(let i = 2; i < n; i++){
      sieve.push(true);
    }
    // console.log(sieve);

    //n의 최대 약수가 sqrt(n) 이하이므로 i=sqrt(n)까지 검사
    let m = parseInt(n ** 0.5, 10);
    // console.log(m);
    for(let i = 2; i < m + 1; i++){
        if (sieve[i] == true){      // i가 소수인 경우 
          for(let j = i+i; j < n; j+=i){ // i이후 i의 배수들을 False 판정
                sieve[j] = false;
            } 
        }
    }
    // 소수 목록 산출
    let 소수목록 = [];
    for(let i = 2; i < n; i++){
      if (sieve[i] == true){
        소수목록.push(i)
      }
    }
    return 소수목록;
}

// 소수 구하기
// let 소수 = [];
// let 소수판별 = true;

// for(let i=2; i<100; i++){
//   for(let j=2; j<i; j++){
//     if(i%j == 0){
//       소수판별 = false;
//     }
//   }
//   if (소수판별){
//     소수.push(i);
//   }
//   소수판별 = true;
// }

let 입력숫자 = parseInt(prompt('숫자를 입력하세요:'), 10);

const 소수 = prime_list(입력숫자+1);
const 숫자 = 입력숫자;
let 골드바흐파티션 = [];

for(let n of 소수){
  if(소수.includes(숫자-n) && n <= (숫자-n)){
    골드바흐파티션.push([n, 숫자-n])
  }
}
console.log(골드바흐파티션);
let 차 = 골드바흐파티션.map(e => e[1]-e[0])
console.log(차.indexOf(Math.min.apply(null,차)));

let 차의인덱스_최소 = 차.indexOf(Math.min.apply(null,차))
let 차의인덱스_최대 = 차.indexOf(Math.max.apply(null,차))
console.log(골드바흐파티션[차의인덱스_최소]);
console.log(골드바흐파티션[차의인덱스_최대]);