//map forEach 사용 

const a = [1, 4, 9, 16];
const b = ['a', 'b', 'c', 'd'];

// let c = a.map((e, i) => [e , b[i]]);
// let c = a.map(function(e, i){
//     if(i%2 == 0){
//         return[e, b[i]];
//     }else{
//         return[b[i], e];
//     }
// })

let c =[];
a.forEach(function(e, i){
    if(i%2 == 0){
        c.push([e, b[i]]);
    }else{
        c.push([b[i], e]);
    }
})
console.log(c);