
let l = [];

//A~Z 원소
for(let i = 65; i < 91; i++){
    //아스키코드변환해서..PUSH
    l.push(String.fromCharCode(i));
}


function randomItem(a){
    let string = [];
    
    while(string.length !== 8){
        //Math.floor() : 소수점 이하를 버림
        //Math.cell() : 소수점 이하를 올림
        //Math.round() : 소수점 이하를 반올림
        let b = a[Math.floor(Math.random() * a.length)];
        if(!string.includes(b)){
            string.push(b);
        }
    }
    let medicine = string.join('');
    return medicine;
}


let total_medicine = [];

while(total_medicine.length !== 100){
    let m = randomItem(l);
    if(!total_medicine.includes(m)){
        total_medicine.push(m);
    }
}
console.log(total_medicine);
let user_input = 'ABCDEFC 4'.split(' ');
let result = [];


for(let i of total_medicine){
    let setUserData = new Set(user_input[0]);
    let setMedicine = new Set(i);

    //집합의 오브젝트(교집합, 차집합....new Set에 들어있음)
    let interSection = new Set([...setUserData].filter(x => setMedicine.has(x)));
    // console.log(intersection);
    if(interSection.size === parseInt(user_input[1], 10)){
        result.push(i);
      }
}


console.log(result);
console.log(result.length);