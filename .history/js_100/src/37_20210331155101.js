const array ="원범 원범 혜원 혜원 혜원 혜원 유진 유진".split(' ');
let result = {};
let winner = "";


for(let index in array){
    let val = array[index];
    console.log(val)
    result[val] = result[val] === undefined ? 1 : result[val] = result[val] + 1;
  }

  
  winner = Object.keys(result);
  console.log(winner)
//   winner = Object.keys(result).reduce(function(a, b){
//     return result[a] > result[b] ? a : b
//   });
  
  console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.`);