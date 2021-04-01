let words = 'hqllo my namq is hyqwon'.split('');
let word ='';

for(i of words){
    if(i == 'q'){
        i = 'e';
    }
    word.push(i);
}

console.log(words.join(''));