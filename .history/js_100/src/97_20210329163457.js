function sol(n, l){
    let answer = 0;

    let man = new Array(n).fill(0);
    // console.log(man.length);

    while(l.length !== 0){
        for(let j =0; j < man.length; j++){
            if(man[j] == 0 && l){
                man[j] += l.shift();
            }
        }
    }

    console.log(man)
    return answer;
}

const 배달원 = 3;
const 택배 = [1, 2, 1, 3, 3, 3];

console.log(sol(배달원, 택배));