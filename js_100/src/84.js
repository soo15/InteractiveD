//0삭제하고 두자리숫자 89 출력
// function numFormat(variable){
//      variable = Number(variable).toString();
//      console.log(variable);
//     if(Number(variable) < 10 && variable.length == 1)
//      variable = "0" + variable; 
//      return variable; 
// }


//  let m = 0089;
//  console.log(numFormat(m));

function solution(chars) {
    let permute = [];
  
    const f = (prefix, chars) => {
      for (let i=0; i<chars.length; i++) {
        permute.push(prefix + chars[i]);
  
        if (permute.indexOf(chars[i] + prefix) === -1) {
          permute.push(chars[i] + prefix);
        }
  
        f(prefix + chars[i], chars.slice(i + 1));
      }
    }
  
    f('', chars);
  
    let result = permute.filter(x => x.length === len);
    result.sort((a, b) => {return b-a});
  
    return result[0];
  }
  

const num = '1723';
const len = 2;
console.log(solution(num));
