// const greetingStart = 'Hello, my name is ';
// const name = 'Arber';

// const greeting = greetingStart + name;
// console.log(greeting);

// const greetingStart = 'Hello';
// const name = 'Arber';

// const greeting = `${greetingStart}, my name is ${name}`;

// console.log(greeting);

// const earthAge = 'Earth is estimated to be';
// const age = 5;
// const tellAge = `${earthAge} ${age} billion years old.` 
// console.log(tellAge);

let age = 18;

const result = `You are ${
  age >= 18
  ? `eligible to vote`
  : `not eligible to vote yet`
}.`;
console.log(result);

// // Task 3.2

// // Loop through all sales numbers to add them to the total
// monthlySales.forEach(addToTotalSales);

// // Often, developers using forEach will NOT declare the function separately; rather, they will put it right inside the call to forEach, as follows.
// monthlySales2.forEach(function (value) {
//   totalSales += value;
// });