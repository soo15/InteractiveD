function sol(n){
    let answer = 0;
    let count = 1;
    const d = {3 : 1, 6 : 2, 9 : 3};
    
    while (n.length !== 0){
        answer += d[parseInt(n.pop(), 10)] * count;
        count *= 3;
    }       
    return answer;
}

const user_input = '93'.split('');
console.log(sol(user_input));


// var person = {
//     name: ['Bob', 'Smith'],
//     age: 32,
//     gender: 'male',
//     interests: ['music', 'skiing'],
//     bio: function() {
//       alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
//     },
//     greeting: function() {
//       alert('Hi! I\'m ' + this.name[0] + '.');
//     }
//   };

// console.log(person.interests)