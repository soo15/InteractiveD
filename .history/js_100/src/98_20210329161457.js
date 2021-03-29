//청길이의 패션쇼

function solution(i){
    let idx = i.split(/[0-9]번: /g);
    console.log(idx);
}

let i = "1번: 3,1 2번: 4 3번: 2,1,3 4번: 2,1,3,4";
console.log(solution(i));