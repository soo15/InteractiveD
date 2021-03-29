const n = 10;
let tree ='';

for (let i = 0; i < n; i++) {

    let star ='';
    for (let j = 1; j <= n; j++) {
        star += ' ';
    }
    
    for (let k = 1; k <= 2*i-1; k++) {
        star += '*';
    }
    tree += star + '\n';
}



console.log(tree);