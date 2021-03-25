//stack FIFO
// const stack = () => {
//     let stackArray = [];
//     return {
//         push(item) {
//             stackArray.push(item);
//         },
//         pop() {
//             return stackArray.pop();
//         },
//         peek() {
//             return stackArray[stackArray.length - 1];
//         },
//         get length() {
//             return stackArray.length;
//         },
//         isEmpty() {
//             return stackArray.length === 0;
//         },
//     }
// }


// const queue = () => {
//     const inStack = stack();
//     const outStack = stack();
//     return {
//         enqueue(item) {
//             if(!outStack.isEmpty()) {
//                 while(!outStack.isEmpty()) {
//                     inStack.push(outStack.pop());
//                 }
//             }
//             inStack.push(item);
//         },
//         dequeue() {
//             if(!inStack.isEmpty()) {
//                 while(!inStack.isEmpty()) {
//                     outStack.push(inStack.pop());
//                 }
//             }
//             return outStack.pop();
//         },
//         peek() {
//             if(!inStack.isEmpty()) {
//                 while(!inStack.isEmpty()) {
//                     outStack.push(inStack.pop());
//                 }
//             }
//             return outStack.peek();
//         },
//         get length() {
//             if(!inStack.isEmpty()) {
//                 while(!inStack.isEmpty()) {
//                     outStack.push(inStack.pop());
//                 }
//             }
//             return outStack.length;
//         },
//         isEmpty() {
//             return this.length === 0;
//         }
//     }
// }

// const q = queue();
// console.log(q.isEmpty())
// q.enqueue(1)
// console.log(q.peek())
// q.enqueue(2)
// q.enqueue(3)
// console.log(q.peek())
// q.enqueue(4);
// console.log(q.dequeue());
// console.log(q.isEmpty())
// console.log(q.dequeue());




function solution(frame, page){

    let runTime = 0;
    let temp = [];

    if(frame === 0){
        runTime = page.length * 6;
        return runTime;
    }

    for (let i of page){
        if (temp.includes(i)){
          runTime += 1
        } else {
          // 배열이 비었으면 무조건 넣어야 하므로 if문을 사용
          if (temp.length < frame){
            temp.push(i);
          } else {
            // 가장 사용되지 않은 첫번째 배열을 제거하고 맨 뒤에 입력값을 저장
            temp.shift();
            temp.push(i);
          }
    
          // if문 실행에 상관없이 runTime은 10이 추가된다
          runTime += 6;
        }
      }
      return runTime;
    }


const f = 3;
const page = 'ABCABCABC'.split('');
// console.log(page);


console.log(solution(f, page));