//문자열 압축코드

const user_s = 'aabbbb';
let result_s = '';
let store_s = user_s[0];
let count = 0;

for(let i of user_s){
    console.log(i);
    if(i === store_s){
        count += 1;
    }else{
        result_s += store_s + String(count);
        store_s = i;
        count = 1;
    }
}


result_s += store_s + String(count);
console.log(result_s);