//*********************************************************************************************************
//*********************************************************************************************************

                                 //      Introduction to the ES6 Challenges

/////*********************************************************************************************************
//*********************************************************************************************************
// ECMAScript is a standardized version of JavaScript with the goal of unifying the language's specifications and features.
// As all major browsers and JavaScript-runtimes follow this specification, the term ECMAScript is interchangeable with the term JavaScript.

// Most of the challenges on freeCodeCamp use the ECMAScript 5 (ES5) specification of the language, finalized in 2009. 
// But JavaScript is an evolving programming language. As features are added and revisions are made, new versions of the language are released for use by developers.

// The most recent standardized version is called ECMAScript 6 (ES6), released in 2015.
// This new version of the language adds some powerful features that will be covered in this section of challenges, including:

// Arrow functions
// Classes
// Modules
// Promises
// Generators
// let and const

// --------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------
//                                            TOPICS ES6
// --------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------

// 1 - Compare Scopes of the var and let Keywords
// 2 - Mutate an Array Declared with const
// 3 - Prevent Object Mutation
// 4 - Use Arrow Functions to Write Concise Anonymous Functions
// 5 - Write Arrow Functions with Parameters
// 6 - Set Default Parameters for Your Functions
// 7 - Use the Rest Parameter with Function Parameters
// 8 - Use the Spread Operator to Evaluate Arrays In-Place
// 9 - Use Destructuring Assignment to Extract Values from Objects
// 10- Use Destructuring Assignment to Assign Variables from Objects
// 11- Use Destructuring Assignment to Assign Variables from Nested Objects
// 12- Use Destructuring Assignment to Assign Variables from Arrays
// 13- Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
// 14- Use Destructuring Assignment to Pass an Object as a Function's Parameters
// 15- Create Strings using Template Literals
// 16- Write Concise Object Literal Declarations Using Object Property Shorthand
// 17- Write Concise Declarative Functions with ES6
// 18- Use class Syntax to Define a Constructor Function
// 19- Use getters and setters to Control Access to an Object
// 20- Create a Module Script
// 21- Use export to Share a Code Block
// 22- Reuse JavaScript Code Using import
// 23- Use * to Import Everything from a File
// 24- Create an Export Fallback with export default
// 25- Import a Default Export
// 26- Create a JavaScript Promise
// 27- Complete a Promise with resolve and reject
// 28- Handle a Fulfilled Promise with then
// 29- Handle a Rejected Promise with catch

// ------------------------
// ----------------------------------------------------------
// Q1 Compare Scopes of the var and let Keywords
// ----------------------------------------------------------
// ------------------------
function checkScope() {
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
 
  console.log('Function scope i is: ', i);
  return i;
}

// ------------------------
// ----------------------------------------------------------
// Q2 Mutate an Array Declared with const
// ----------------------------------------------------------
// ------------------------
const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line

  // Using s = [2, 5, 7] would be invalid

  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
  // Only change code above this line
}
editInPlace();
// ------------------------
// ----------------------------------------------------------
// Q3 Prevent Object Mutation
// ----------------------------------------------------------
// ------------------------
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Only change code below this line

  Object.freeze(MATH_CONSTANTS);
  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

// ------------------------
// ----------------------------------------------------------
// Q4 Use Arrow Functions to Write Concise Anonymous Functions
// ----------------------------------------------------------
// ------------------------

const magic = () => {
  return new Date();
};

// ------------------------
// ----------------------------------------------------------
// Q5 Write Arrow Functions with Parameters
// ----------------------------------------------------------
// ------------------------
const myConcat = (arr1, arr2) =>{
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));

// ------------------------
// ----------------------------------------------------------
// Q6 Set Default Parameters for Your Functions
// ----------------------------------------------------------
// ------------------------

const increment = (number, value = 1) => number + value;

console.log(5,2);
console.log(increment(5));

// ------------------------
// ----------------------------------------------------------
// Q7 Use the Rest Parameter with Function Parameters
// ----------------------------------------------------------
// ------------------------


//Solution
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3)); 

// ------------------------
// ----------------------------------------------------------
// Q8 Use the Spread Operator to Evaluate Arrays In-Place
// ----------------------------------------------------------
// ------------------------
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
//arr2 = [];  // Change this line
arr2 = [...arr1];
console.log(arr2);

// ------------------------
// ----------------------------------------------------------
// Q9 Use Destructuring Assignment to Extract Values from Objects
// ----------------------------------------------------------
// ------------------------
const HIGH_TEMPERATURES1 = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line
const {today,tomorrow}=HIGH_TEMPERATURES


// ------------------------
// ----------------------------------------------------------
// Q10 Use Destructuring Assignment to Assign Variables from Objects
// ----------------------------------------------------------
// ------------------------

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};
const {today:highToday ,tomorrow:highTomorrow}= HIGH_TEMPERATURES2;


// ------------------------
// ----------------------------------------------------------
// Q11 Use Destructuring Assignment to Assign Variables from Nested Objects
// ----------------------------------------------------------
// ------------------------
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// Only change code below this line

const{today:{ low: lowToday , high: highToday }}=LOCAL_FORECAST;


let a = 8, b = 6;
// Only change code below this line
[a, b] = [b, a];
console.log(b, a);

// ------------------------
// ----------------------------------------------------------
// Q13 Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
// ----------------------------------------------------------
// ------------------------
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {	
  // Only change code below this line
  const [a,b,...arr] = list; // Change this line
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);

// ------------------------
// ----------------------------------------------------------
// Q14 Use Destructuring Assignment to Pass an Object as a Function's Parameters
// ----------------------------------------------------------
// ------------------------
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = ({max , min}) => (max + min) / 2.0; 


// ------------------------
// ----------------------------------------------------------
// Q15 Create Strings using Template Literals
// ----------------------------------------------------------
// ------------------------
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  const failureItems = [];
  for (let i = 0; i < arr.length; i++) {
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
  }

  return failureItems;
}

const failuresList = makeList(result.failure);
// ------------------------
// ----------------------------------------------------------
// Q16 Write Concise Object Literal Declarations Using Object Property Shorthand
// ----------------------------------------------------------
// ------------------------


const createPerson = (name, age, gender) => {

  return  ({ name, age, gender});
};
var zodiac = createPerson("Zodiac", 56, "male");
console.log(zodiac);
// ------------------------
// ----------------------------------------------------------
// Q17 Write Concise Declarative Functions with ES6
// ----------------------------------------------------------
// ------------------------

const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
bicycle.setGear(3);
console.log(bicycle.gear);


// ------------------------
// ----------------------------------------------------------
// Q18 Use class Syntax to Define a Constructor Function
// ----------------------------------------------------------
// ------------------------

// Only change code below this line
class Vegetable {
  constructor(name) {
    this.name = name;
  }
}
const carrot = new Vegetable('carrot');
// Only change code above this line

///const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'

// ------------------------
// ----------------------------------------------------------
// Q19 Use getters and setters to Control Access to an Object
// ----------------------------------------------------------
// ------------------------

// Only change code below this line
class Thermostat {
  constructor(fahrenheit) {
    this._fahrenheit = fahrenheit;
  }
    // getter
  get temperature() {
    return (5 / 9) * (this._fahrenheit - 32);
  }
  //// setter
  set temperature(celsius) {
    this._fahrenheit = (celsius * 9.0) / 5 + 32;
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
console.log(thermos.temperature);
//const temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
//temp = thermos.temperature; // 26 in Celsius
console.log(thermos.temperature)


// ------------------------
// ----------------------------------------------------------
// Q20 Create a Module Script
// ----------------------------------------------------------
// ------------------------
// {/* <html>
//   <body>
//      {/* Only change code below this line  */}
// <script type="module" src="index.js"></script>
//     {/* Only change code above this line  */}
//   </body>
// </html> */}

// ------------------------
// ----------------------------------------------------------
// Q21 Use export to Share a Code Block
// ----------------------------------------------------------
// ------------------------
const uppercaseString = (string) => {
  return string.toUpperCase();
}
export { uppercaseString };
const lowercaseString = (string) => {
  return string.toLowerCase()
}
export { lowercaseString };

// ------------------------
// ----------------------------------------------------------
// Q22 Reuse JavaScript Code Using import
// ----------------------------------------------------------
// ------------------------
  import { uppercaseString } from './string_functions.js';
  import { lowercaseString } from './string_functions.js';
// Only change code above this line

uppercaseString("hello");
lowercaseString("WORLD!");

// ------------------------
// ----------------------------------------------------------
// Q23 Use * to Import Everything from a File
// ----------------------------------------------------------
// ------------------------
import * as stringFunctions from "./string_functions.js";
// Only change code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

// ------------------------
// ----------------------------------------------------------
// Q24 Create an Export Fallback with export default
// ----------------------------------------------------------
// ------------------------
export default function subtract(x, y) {
  return x - y;
}

// ------------------------
// ----------------------------------------------------------
// Q25 Import a Default Export
// ----------------------------------------------------------
// ------------------------
import subtract from "./math_functions.js";
// Only change code above this line

subtract(7,4);

// ------------------------
// ----------------------------------------------------------
// Q26 Create a JavaScript Promise
// ----------------------------------------------------------
// ------------------------
const makeServerRequest1 = new Promise((resolve, reject) => {
});

// ------------------------
// ----------------------------------------------------------
// Q27 Complete a Promise with resolve and reject
// ----------------------------------------------------------
// ------------------------
const makeServerRequest2 = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;
    
  if(responseFromServer) {
    // Change this line
        resolve("We got the data");
  } else {  
    // Change this line
        reject("Data not received");
  }
});

// ------------------------
// ----------------------------------------------------------
// Q28 Handle a Fulfilled Promise with then
// ----------------------------------------------------------
// ------------------------
const makeServerRequest3 = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  // let responseFromServer = true;


  makeServerRequest.then(result => {
    console.log(result)
  });


  // if(responseFromServer) {
  //   resolve("We got the data");
  // } else {  
  //   reject("Data not received");
  // }
});

// ------------------------
// ----------------------------------------------------------
// Q29 Handle a Rejected Promise with catch
// ----------------------------------------------------------
// ------------------------

const makeServerRequest4 = new Promise((resolve, reject) => {
});


makeServerRequest.catch(error => {
  console.log(error);
});



