const word = 'hqllo my namq is hyqwon'.split('');

function replaceAll(str, searchStr, replaceStr) {
    return str.split(searchStr).join(replaceStr);
 }
 
 console.log(replaceAll(word,"q","e"));