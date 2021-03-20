//수학식 괄호 검색(google)
// function is_pair(s){
//     let result = true;
//     let s_arr=[];

//     for(let i=0; i<s.length;i++){
//         if(s[i] =="("){
//             s_arr.push(s[i]);
//         }

//         else if(s[i]==")"){
//             if(s_arr.length == 0){
//                 return result = false;
//             }
//             s_arr.pop();
//         }
//     }

//     if(s_arr.length != 0){
//         result = false;
//     }
//     return result;
// }


// let arr = "(";
// console.log(is_pair(arr));

//solution

//82-소괄호판별, 83-중괄호판별

let user_input = "{()(){0}";
let step = 0;

function sol(e){
    const m = {
        ')':'(',
        '}':'{',
    };
    let stack = [];
    
    for (let i=0; i<e.length; i++){
        if (e[i].includes('(') || e[i].includes('{')){
            stack.push(e[i]);
        } else if (m[e[i]]){
            if (stack.length === 0){
                return false;
            } else{
                let t = m[e[i]];
                if (t != stack.pop()){
                    return false;
                }
            }   
        }
    }
    return stack.length === 0;
}

    //변수설정;
    // let step = 0;
    // for(let i in s){
    //     if(s[i] === "("){
    //         step += 1;
    //     }
    //     else if(s[i] === ")"){
    //         step -= 1;
    //     }
    // }

    // if(step !== 0){
    //     return false;
    // }
    // if(step === 0){
    //     return true;
    // }


console.log(sol(user_input));