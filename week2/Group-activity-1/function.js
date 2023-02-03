
const add = (a, b) => a + b;
console.log(add(2, 3));

const square = (n) => n * n;
console.log(square(3));

const myFunc = (a, b) => {
    const chuck = 42;
    return a + b + chuck;
};

const sayHello = () => "Hello there";
console.log(sayHello());

const myObj = () => ({cost: 500})
console.log(myObj());

const greet = (name, age) =>  {
    return 'Hello, I am ' + name + ', and I am ' + age + ' years old.'
}
console.log(greet('Arber', '24'));