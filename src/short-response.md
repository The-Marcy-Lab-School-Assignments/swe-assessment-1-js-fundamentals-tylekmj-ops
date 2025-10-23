# Mod 1 Assessment - Short Response Section

Write your responses directly in this file. Follow markdown formatting guidelines.

---

## Section 1: Short Response

### Question 1

This code will most likely throw a reference error. An error that occurs whenever a programmer attempts to use a nonexistant variable or a variable that hasn't been declared yet. While this code may seen like its technically declared the variable before use because of the `let currentStatus` that occurs before the `console.log(currentStatus)`. This isn't the case here because `currentStatus` is ONLY declared inside of an if statement so the program basically ignores the `currentStatus` initialization.

You could instead do this for a better result

```js
const react = (isReuben) => {
  let currentStatus; //Early declaration

  if (isReuben) {
    currentStatus = "Everything is just fine"; //Initialization
  } else {
    currentStatus = "Time to panic."; //Initialization
  }

  console.log(currentStatus);
};

react(true);
```

In this code the first thing I use is hoisting. A process where a programmer would declare a variable without initializing, intending to use it for later. Keep in mind that initializing and declaration are 2 different things even though they both involve setting up a variable.

Declaring a variable: `let currentStatus`

Initializing a variable: `currentStatus = "Everything is just fine`

Now that the variable is declared at the start of the function, We wont have to declare it again so we can remove the `let` keyword inside of the if statments as that'll give you a syntax error if you declare the same variable more than once. With the let keywords removed and the variable declared at the start of the function, the function should now work as intended.

### Question 2

The following code will print `"Michael Jordan"` because even though we're mutating the bestPlayer variable, theGOAT will also be mutated aswell since we previously made theGOAT equal to bestPlayer because both variables are objects and objects are reference types which means any object assigned to another object will share the exact same data even if you change one of them afterwards.

### Question 3 GO BACK TO THIS QUESTION!!!

The following code will print 2 things:

`Paul is the hardest working person in the room.`
`Laisha is the hardest working person in the room.`

We have 2 console.log() in this code with one being inside the shoutOut() function and one outside of the function. We also have 2 theHustler variables inside and outside of the shoutOut() function which is why the 2 console.log() prints 2 different things. theHustler inside of the shoutOut function is Paul and variables inside the function take priority over variable initializations outside of it. The console.log outside of the shoutOut() is Laisha because its outside of the function so it ignores anything in that function.

### Question 4

**Rest Parameters** are parameters in a function that can take an infinite number of arguments. **Rest Parameters** are basically empty arrays that automatically does a push(), taking in every argument and pushing it to the array. We write rest parameters by using the spread operator (...) then we just put the name of our parameter as usual (...param)

A use case for **Rest Parameters** would be something like this:

```js
const sum = (...arg) => {
  let total = 0;
  for (let i = 0; i < arg.length; i++) {
    total += arg[i];
  }

  return total
};

sum(1, 2, 10); // 13
sum(5); // 5
sum(100, 200, 800, 1, 1, 1); // 1103;
```

This function returns the sum of all the numbers inside the **rest parameter** by looping through however many numbers the rest parameter array have using .length since rest parameters has an infinite value and just adding them to the total.

MDN Reference:
[Rest Parameters – MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)


### Question 5


### Question 6

### Question 7


### Question 8

If I were making an e-commercec website with functionality. I would make a single item an object because items have multiple properties such as name, price, onsale?, how many of those items are on stock, etc. If i were to use a data type to represent the entire shopping cart then it'd be an array because I wouldn't need anymore information or properties since each individual item is already an object.

```js
let brush = {
    name: brush,
    price: 9.99,
    onsale: false,
    quantity: 25,
}

let apple = {
    name: brush,
    price: 1.99,
    onsale: false,
    quantity: 105,
}

let deodorant = {
    name: deodorant,
    price: 12.99,
    onsale: true,
    quantity: 12,
}

const shoppingCart = [brush, deodorant]
```