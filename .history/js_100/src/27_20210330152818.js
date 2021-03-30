const keys = '손오공 야모챠'.split(' ');
const values= '70 10'.split(' ');
const obj = {};

for (let i=0; i<keys.length; i++) {
  obj[keys[i]] = parseInt(values[i], 10);
}

console.log(obj);