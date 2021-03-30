const keys = '손오공 야모챠 메지터 비콜로'.split(' ');
const values= '70 10 55 40'.split(' ');
const obj = {};

for (let i=0; i<keys.length; i++) {
  obj[keys[i]] = parseInt(values[i], 10);
}

console.log(obj);