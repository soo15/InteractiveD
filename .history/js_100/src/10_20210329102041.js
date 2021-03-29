//https://hianna.tistory.com/368

// for(let i = 0; i < 5; i++)  {
//     for(let j = 0; j < 5; j++)  {
//       document.write('*');
//     }
//     document.write('<br>');
//   }


//   for (let i = 0; i < 5; i++) {
//       console.log(i);
//     for (let j = 0; j <= i; j++) {
//         console.log('*');
//         document.write('*')
//     }
//     document.write('<br>');
//   }



// for (let i = 0; i < 5; i++) {
//     console.log(i);
//     for (let j = 5; j > i; j--) {
//         console.log(j);
//       document.write('*');
//     }
//     document.write('<br>');
//   }



// const n = 5;
// let tree = '';

// for(let i=1; i<=n; i++){
//  //트리초기화
//   let star = '';
//   //공백증가포문
//   for(let j=1; j<=n-i; j++){
//     star += ' ';
//   }
//   //별그려주기
//   for(let k=1; k<=2*i-1; k++){
//     star += '*';
//   }
//   tree += star + '\n';
// }

// console.log(tree);


const n = 5;
let tree = '';


for(let i =0; i< n; i++){
    console.log(i);

    for(let k =0; k <= i; k++){
        console.log('*');
    }
}