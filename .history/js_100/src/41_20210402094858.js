//소수판별


const num = 15;


function check_prime(num){
    for(let i = 2; i<num; i++){
        console.log(num)
        console.log(i)
        const result = num % i;
        console.log(result);

    }
}









check_prime(num);