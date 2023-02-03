// function add(a, b) {
//   return a + b;
// }

// const add = function (a, b) {
//   return a + b;
// };

// const add = (a, b) => a + b;

// const logger = () => {
//   console.log('Hello W!');
// };

// logger();
// console.log(add(2, 3));
// logger();

// Traditional anonymous function
function foo(a, b) {
  const c = a * b;
  return c + 100;
}

// 1. Remove the word "function" and place arrow between the argument and opening body bracket
const foo = (a, b) => {
  const c = a * b;
  return c + 100;
};

// 2. Remove the body braces and word "return" — the return is implied.
() => 100;

// 3. Remove the parameter parentheses
() => 100;
