// not in JS that frequently: range error
const number = [3, 4, 5, 8];
// should not do it (most of the time)
number.length = 2;

console.log(number);
console.log(number.length)
// console.log(number[2]);

// ReferenceError 
// console.log(money);
const  money = 80;

// SyntaxError
// for(let i = 0; i < 5 i++){

// }

// if(numbers.length >/ 3){

// }
// else

// let student = {
//   address: {: "mha"},
// };
// console.log(student.address.city);