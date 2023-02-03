// const greetingStart = 'Hello, my name is ';
// const name = 'Sami';

// const greeting = greetingStart + name;
// console.log(greeting);

// const greetingStart = 'Hello';
// const name = 'Matti';

// const greeting = `${greetingStart}, my name is ${name}`;

// console.log(greeting);

// let text = `<html>
// <title>The quick
// brown fox
// jumps over
// the lazy dog`;

// console.log(text);

// const a = 5;
// const b = 10;
// console.log('Fifteen is ' + (a + b) + ' and\nnot ' + (2 * a + b) + '.');

// const a = 5;
// const b = 10;
// console.log(`Fifteen is ${a + b} and

// not ${2 * a + b}.`);

// let age = 19;
// let result;

// if (age >= 18) {
//   result = 'You are eligible to vote.';
// } else {
//   result = 'You are not eligible to vote yet.';
// }

// console.log(result);

// function getFee(isMember) {
//   return isMember ? '$2.00' : '$10.00';
// }

// console.log(getFee(true));
// console.log(getFee(false));
// console.log(getFee(null));
// const isMember = false;
// const x = isMember ? '$2.00' : '$10.00';
// console.log(x);

// const age = 15;
// const vote = age >= 18 ? 'You can vote' : 'not allowed';
// console.log(vote); // "Beer"

// const array1 = ['a', 'b', 'c'];
// const cb = (item) => console.log(item);
// array1.forEach(cb);

let totalSales = 0;
const addToTotalSales = function (value) {
  totalSales += value;
};
const monthlySales = [1234, 2345, 3456, 4567, 5678];

for (let i = 0; i < monthlySales.length; i++) {
  addToTotalSales(monthlySales[i]);
}

// Output the total to the console
console.log('Total Sales are', totalSales);
// Expected result: Total Sales are 17280
