## Tasks

- Task 1: Template literals & String interpolation
- Task 2: Ternary operator `condition ? exprIfTrue : exprIfFalse`
- Task 3: forEach()

## Task 1: Template literals & String interpolation

You can add two strings together using the **plus** operator `(+)` or string interpolation.

Here is an example that uses the `+` operator:

```js
const greetingStart = 'Hello, my name is ';
const name = 'Daniel';

const greeting = greetingStart + name;
console.log(greeting);
```

String interpolation is a useful JavaScript feature that allows you to put variables directly into a string. Here is example that uses String interpolation

```js
const greetingStart = 'Hello';
const name = 'Matti';

const greeting = `${greetingStart}, my name is ${name}`;

console.log(greeting);
```

1. Write a program that logs a message with a greeting and your name using the two concatenation methods we used
2. Rewrite the following variable using String interpolation

```js
const earthAge = 'Earth is estimated to be ' + age + ' billion years old.';
```

> Template literals are literals delimited with backtick **(`)** characters, allowing for multi-line strings and string interpolation with embedded expressions.

## Task 2: Ternary operator

1. Explain hpw the following code works?

```js
const drinks = 4.99;
const food = 6.65;
const total = drinks + food;

const result = `The total bill is ${total}. ${
  total > 10
    ? `Your card payment will be declined`
    : `Your card payment will be accepted`
}.`;

console.log(result);
```
- Food and drinks costs more than 10 so it will print "Your card payment will be declined" because the argument is true.

2. Refactor this code using ternary operator

```js
let age = 15;
let result;

if (age >= 18) {
  result = 'You are eligible to vote.';
} else {
  result = 'You are not eligible to vote yet.';
}

console.log(result);
```

## Task 3: forEach()

The `forEach()` method allows to run a function for every element of the array.

1. Given the following arraY

```js
const numbers = [1, 2, 3, 4, 5];
```

Use `forEach()` to double each number in the array and print the result

2. Refactor this code using `forEach()`

```js
let totalSales = 0;
// Function to add a value to the total sales
const addToTotalSales = function (value) {
  totalSales += value;
};

// Some sales numbers to experiment with
const monthlySales = [1234, 2345, 3456, 4567, 5678];

// Loop through all sales numbers to add them to the total
for (let i = 0; i < monthlySales.length; i++) {
  addToTotalSales(monthlySales[i]);
}

// Output the total to the console
console.log('Total Sales are', totalSales);
// Expected result: Total Sales are 17280
```

## Links

- [Template literals (Template strings)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- [How to use String Interpolation in JS](https://www.freecodecamp.org/news/javascript-string-format-how-to-use-string-interpolation-in-js/)
- [JavaScript Ternary Operator ](https://www.programiz.com/javascript/ternary-operator)
- [Learning Javascript forEach Loop](https://www.tutorialstonight.com/javascript-foreach-loop)
