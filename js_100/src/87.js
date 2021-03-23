const name = '손오공 야모챠 메지터 비콜로'.split(' ');
const point= '70 10 55 40'.split(' ');
const point_int = point.map(a => parseInt(a, 10));

function solution(name, point_int){
    let temp = [];
    for(let i of name){ 
        let obj ={};
        obj['name'] = i;
        obj['value'] = point[name.indexOf(i)];
        temp.push(obj);
    }

    // console.log(temp);
    temp.sort((a, b) => {
        //크다면 -1 작다면 1 아니면 0
        return a.value < b.value ? 1 : a.value > b.value ? -1 : 0;
    });

    console.log(temp);

    let result = {};

    for(let i of temp){
        // console.log(temp);
        result[i ['name']] = temp.indexOf(i) + 1;
    }
    return result;
}

console.log(solution(name, point_int));