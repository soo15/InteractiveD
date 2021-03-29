//토끼들의 행진
let 돌의내구도 = [1, 2, 1, 4, 5, 2];
let 토끼의점프력 = [2, 1, 3, 1];



function doong(r, j){
    let answer =[];
    
    for(let i=0; i<j.length; i++){
      answer.push('pass');
    }


    for(let i =0; i<j.length; i++){
        let p =0;
        console.log(r.length-1);
        // while(p < r.length-1)
    }
}






// function doong(r, j){
//     let answer = [];
//     for(let i=0; i<j.length; i++){
//       answer.push('pass');
//     }
  
//     for(let i=0; i<j.length; i++) {
//       let p = 0;
//       while (p < r.length-1){
//         p += j[i];
//         r[p-1] -= 1;
  
//         if (r[p-1] < 0){
//           answer[i] = "fail";
//         }
//       }
//     }
//     return answer;
//   }


console.log(doong(돌의내구도, 토끼의점프력));