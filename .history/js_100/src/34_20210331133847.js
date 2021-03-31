//sort 구현하기

const unsorted = "176 156 155 165 166 169"
let sorted = "";

sorted = unsorted
.split('')
.sort((a, b) => {return a-b})
.join();



if(unsorted === sorted){
    console.log("yes");
}else{
    console.log("no");
}