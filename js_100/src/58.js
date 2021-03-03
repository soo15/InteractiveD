//123,456,789

//내장함수사용
// const n = 1223344455;
// parseInt(n, 10);

// document.write(n.toLocaleString());

//재귀함수사용

// 재귀함수 사용
function comma(s) {
    if (s.length <= 3) {
      return s;
    } else {
      return comma(s.slice(0, s.length - 3)) + ',' + s.slice(s.length - 3);
    }
  }
console.log(comma("123456789"));