const score = '97 86 75 66 55 97 85 97 97 95'.split(' ').map(function(n){
    return parseInt(n, 10);
  });

  

score.sort((a, b) => {
    return a - b;
});

console.log(score);


let count =0;
let arr = [];


while(arr.length < 3){
    let n = score.pop();
    if(!arr.includes(n)){
        arr.push(n);
    }

    console.log(arr);
    count += 1;
}

console.log(count);