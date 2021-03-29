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


for (let i = 0; i < 5; i++) {
    console.log(i);
    for (let j = 5; j > i; j--) {
      document.write('*');
    }
    document.write('<br>');
  }