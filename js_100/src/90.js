let l = [];

for(let i = 65; i < 91; i++){
    l.push(String.fromCharCode(i));
}

function randomItem(a){
    let string = [];
    while(string.length != 8){
        let b = a[Math.floor(Math.random()*a.length)];
        if(!string.includes(b)){
            string.push(b);
        }
    }

    let medicine = string.join('');
    return medicine;
}


let total_medicine = [];

for(let i = 0; i< 100; i++){
    let m = randomItem(l);
    if(!totoal_medicine.includes(m)){
        total_medicine.push(m);
    }
}