# Tasks

## Task1

### Step 0: Preparation for exercises

1. Open `src` folder in VS code
2. Install the [vscode-live-server](https://github.com/ritwickdey/vscode-live-server) plugin to get live updates of your changes.
3. View your changes by

- Right click on `index.html` and select "Open with Live Server"
- or just open the `index.html` on your browser and refresh every time you change your code

### Step 1:

Write JavaScript below that logs:

- all the "p" element nodes of the document,
  - should log a list of nodes with a length of 6
- the first div element node
  - should log the ".site-header" node
- the element with id "jumbotron-text"
  - should log the "#jumbotron-text" node
- all the "p" elements contained inside the `.primary-content` element node
  - should log a list of nodes with a length of 3

### Step 2:

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting us!"

### Step 3:

The elements returned by `document.querySelector` have the same properties as a normal HTML element: for example, you can get access to their css **styles**.

```js
let myElement = document.querySelector('#myElement');
myElement.style.backgroundColor = 'red';
```

- Write JavaScript below that changes the background color of the page when the "Change color" button is clicked.

### Step 4:

When a user clicks the "Add some text" button, a new paragraph should be added below the buttons that says "Read more below."

### Step 5:

When the "Larger links!" button is clicked, the text of all links on the page should increase.

## Task2

1. Name three CSS selectors.
2. What is the difference between NodeList and Arrays?
3. How can you convert a NodeList to an Array? Refer to `./src/demo.html`

## Links

- [CSS Selectors](https://www.w3schools.com/CSS/css_selectors.asp)
- [ Javascript DOM manipulation cheatsheet ](https://dev.to/m0nm/javascript-dom-manipulation-cheatsheet-1jkb)
