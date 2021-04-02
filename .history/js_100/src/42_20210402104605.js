const month = 3;
const date = 16;


function solution(a, b){
    const day =['sun','mon','tue','wed','thu','fri','sat'];

    const x = new Date('2021-'+a+b);
    return day[x.getDay()];
}



console.log(solution(month, date));