let student_score = [];
let class_score =[];
let total_score=[];

for(let k=0; k<7; k++){
    class_score=[];
    for(let j=0; j<30; j++){
      student_score=[];
      for(let i=0; i<5; i++){
        student_score.push(Math.random * 100)
      }
      console.log(student_score);
    }
}




// let student_score = [];
// let class_score = [];
// let total_score = [];

// for (let k = 0; k < 7; k++) {
//   class_score = [];
//   for (let j = 0; j < 30; j++) {
//     //초기화
//     student_score = [];
//     for (let i = 0; i < 5; i++) {
//       student_score.push(Math.floor(Math.random() * 100) + 1);
//     }
//     class_score.push(student_score);
//   }
//   total_score.push(class_score);
// }

// console.log(total_score);

// let total_average = [];
// let c_average = [];
// let s_average = 0;
// let s_sum = 0;
// let c_sum = 0;
// let student_one = 0;
// let 일등 = 0;

// for (let c of total_score) {
//   // console.log(c);
//   for (let s of c) {
//     s_sum = s.reduce((a, b) => a + b);
//     s_average = s_sum / 5;
//     c_average.push(s_average);
//     if (일등 < s_average){
//       일등 = s_average;
//     }
//   }
//   console.log(일등);
//   일등 = 0;
//   console.log(c_average);
//   total_average.push(c_average.reduce((a, b) => a + b)/30);
//   c_average = [];
// }
// console.log(total_average);
// console.log(total_average.reduce((a, b) => a + b)/7);