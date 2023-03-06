console.log("===========I. Variables & Datatypes=======")
console.log("====================A. Q + A====================")
/** A. Q + A
 * How do we assign a value to a variable?
    A. we can assign a value to a variable be using the let OR const     keywords, var name, assign operator, them adding a value
    
 * How do we change the value of a variable?
    A. we can change the vale if we used the let keyword initially. We can declare the var again then use the assign operator then add our new value. We CANNOT change a value assigned using the const keyword.

 * How do we assign an existing variable to a new variable?
    A. we can use the same steps from Q1 using the new var then adding the existing var after the assign operator.
 * Remind me, what are declare, assign, and define?
    A. we use declare to create a var, and "assign" to assign with the = operator, and "define" to mean the whole process
 * What is pseudocoding and why should you do it?
    A. pseudocoding is the process of explaining our code step by step before or during the writing of our code and that will help us understanding our code before writing it.
 * What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
    A. 90%. because understanding the problem and layout or pseudocoding if needed will help a lot and cut the time needed to solve the problem and write the code.
 */

/////////////////////////////////////////////////////
console.log("====================B. Strings====================")
//1- Create a variable called firstVariable
//2- Assign it the value of the string "Hello World"
let firstVariable = "Hello World";
// 3- Change the value of this variable to some number
firstVariable = 123;
// 4- Store the value of firstVariablein a new variable called secondVariable
let secondVariable = firstVariable;
// 5- Change the value of secondVariableto any string.
secondVariable = "anyString"
// 6- What is the value of firstVariable?
console.log(firstVariable);
// 7a- Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
let yourName = "Arwa";
// 7b- Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
console.log("Hello, my name is " + yourName); 


console.log("====================C. Booleans====================")

//Using the provided variable definitions, replace the blanks so that all log statements print true in the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a !== b);
console.log(c > d);
console.log('Name' === 'Name');
// // FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);


// REVIEW ////////////////
// console.log(false === false || false && false === false || true); 
// console.log(false && false || false || false && false || true);


console.log(false && false || false || false || false || true);
console.log(false === false)
console.log(e == 'Kevin');
// try dif answers
console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == '48');

console.log("====================D. The farm====================")

// 1- Declare a variable animal. Set it to be either "cow" or something else
let animal = "cow";

// 2- Write code that will print out "mooooo" if the it is equal to cow
// 3- Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
if ( animal === "cow"){
    console.log("mooooo")
} else {
    console.log("Hey! Your're not a cow")
}

console.log("====================E. Driver's Ed====================")
// 1- Make a variable that holds a person's age; be semantic

let personAge = 30;

if (personAge >= 16){
    console.log("Here are the keys!")
} else if (personAge < 16) { 
    console.log("Sorry, your're too young.")
}

console.log("=======II. Loops======")
console.log("====================EA. The basics====================")
//Write a loop that will print out all the numbers from 0 to 10, inclusive
let nums = 0;
for (let i = 0; i >= 10; i++){
    console.log(i)
}