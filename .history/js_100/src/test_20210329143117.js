const 입력값 = `이대표,'333,356,766','S은행','100-0000-0000-001'
최차장,'5,000,000','S은행','100-0000-0000-002'
이과장,'3,200,000','S은행','100-0000-0000-003'
홍팀장,'3,300,000','S은행','100-0000-0000-004'
이대리,'5,300,000','S은행','100-0000-0000-005'`

let 나눠진입력값 = 입력값.split('\n');
let 숫자값 = [];

for(let i of 나눠진입력값){
    // console.log(i);
    let j = i.split(',');
    // console.log(j);
    let k = j.slice(1, j.length-2);
    // console.log(k);
    숫자값.push(k.join(''));
}

console.log(숫자값);

let 월급하나 = '';
let 월급둘 = '';
let result = [];


for(let 월급 of 숫자값){
    console.log(월급);
    for(let 나뉜월급 of 월급){
        if(나눈월글 != '\''){
            if(나뉜월급 == 3){
                월급하나 += '1';
                월급둘 += '2';
            }else if(나뉜월급 == 4){
                월급하나 += '2';
                월급둘+= '2';
            } else if (나뉜월급 == 6){
              월급하나 += '1';
              월급둘+= '5';
            } else {
              월급하나 += 나뉜월급;
              월급둘+= '0';
            }
        }
    }
    console.log(월급하나);

}