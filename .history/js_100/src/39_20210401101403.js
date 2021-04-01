const word = 'hqllo my namq is hyqwon';

function replaceAll(str, searchStr, replaceStr) {
    return str.split(searchStr).join(replaceStr);
 }
 
 console.log(replaceAll(word,"q","e"));



//정규식 console.log(word.replace(/q/gi, 'e'));