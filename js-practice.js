
/* ================================================
   1. VARIABLES
================================================ */
const birthYear = 2004; 
let currentAge = 21;

let ageIn2030 = 2030 - birthYear;
console.log("Age in 2030:", ageIn2030);


/* ================================================
   2. DATA TYPES
================================================ */

let myString = "JavaScript";
let myNumber = 42;
let myBoolean = true;
let myNull = null;
let myUndefined;

console.log(typeof myString);     // string
console.log(typeof myNumber);     // number
console.log(typeof myBoolean);    // boolean
console.log(typeof myNull);       // object 
console.log(typeof myUndefined);  // undefined



/* ================================================
   3. ARRAYS
================================================ */
let favoriteFoods = ["Pizza", "Burgers", "Pasta", "Tacos"]; 
console.log(favoriteFoods);

favoriteFoods.push("Ice cream"); // push mean add at the end of array.
console.log(favoriteFoods);

favoriteFoods.shift(); // shift mean remove the first element added into array. 
console.log(favoriteFoods);


let pastaIndex = favoriteFoods.indexOf("Pasta"); // return the index if it found element or return -1 if it does not not. 
console.log(pastaIndex);


// Make all foods uppercase using map
let upperCaseFoods = favoriteFoods.map(food => food.toUpperCase());
console.log(upperCaseFoods);



