let words = 'hqllo my namq is hyqwon'.split('');

for(i of words){
    if(i === 'q'){
        i = 'e';
    }
}

console.log(words);