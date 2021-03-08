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
