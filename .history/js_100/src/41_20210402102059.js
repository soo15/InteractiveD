//소수판별


const num = 15;


function check_prime(num){
    for(let i = 2; i<num; i++){
        const result = num % i;
        if(result === 0){
            console.log('No');
            return false;
        }
    }
    if(num === 1){
        console.log('No');
        return;
    }
    console.log('yes');
}


check_prime(num);