## Bonus

- Task 1: map()
- Task 2: DOM

## Task 1: map()

Like `forEach(`), the `map()` method will do something with every element in an array. A key difference is that map expects a returned value for every element to put into a new array.

To understand what this means, we consider this example implemented with a standard for loop.

```js
// Function to convert an age to a phase of life
const getLifePhase = function (age) {
  if (age < 4) return 'Toddler';
  if (age < 13) return 'Kid';
  if (age < 18) return 'Teenager';
  if (age < 65) return 'Adult';
  // if no other condition is met
  return 'Elder';
};

// Array of ages, for example
const ages = [2, 7, 15, 29, 45, 44, 59, 65, 88];

// Loop to convert each age to its life phase
const phases = [];
for (let i = 0; i < ages.length; i++) {
  const age = ages[i];
  phases[i] = getLifePhase(age);
}

// Output to console
console.log(phases);
// Expected result:
// [
//   'Toddler',  'Kid',
//   'Teenager', 'Adult',
//   'Adult',    'Adult',
//   'Adult',    'Elder',
//   'Elder'
// ]
```

Modifying the for loop to use the Array map method would look like this.

```js
// Loop to convert each age to its life phase
const phases = ages.map(getLifePhase);
```

- You have an array of objects that stores firstName and lastName values of your friends as follows:

```js
let users = [
  { firstName: 'Susan', lastName: 'Steward' },
  { firstName: 'Daniel', lastName: 'Longbottom' },
  { firstName: 'Jacob', lastName: 'Black' },
];
```

Use the map() method to iterate over the array and join the values of firstName and lastName. Expected outcome:

```js
// ["Susan Steward", "Daniel Longbottom", "Jacob Black"]
```

## Task 2: DOM

## Links

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
- https://www.freecodecamp.org/news/javascript-map-how-to-use-the-js-map-function-array-method/
