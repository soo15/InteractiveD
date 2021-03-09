<<<<<<< HEAD
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
=======
const items = ['item1', 'item2', 'item3'];
const copy = [];

// 이전
for (let i=0; i<items.length; i++) {
  copy.push(items[i]);
}


console.log(items);

// 이후
items.forEach(function(item){
  copy.push(item);
});

console.log(items);
>>>>>>> 1baca644cce9650a8fc35de166db29b21d684bc8
