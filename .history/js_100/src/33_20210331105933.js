const data = '12345'.split(' ');
console.log(data)
let result = '';

 for (let i=0; i<data.length; i++){
    result += data[i];
}

 console.log(result).reverse();