// Data Types

// NUMBBERS

// for example 1, 9, 20 (integers numbers)
// 22.1, 2.2 (floating point numbers)

// STRINGS
// for example 
// console.log("I love to code!");
// console.log('This is javascript programming language.');

//BOOLEAN
// represents true or false

// UNDEFINED
//undefined means a variable has been declared but hasn't been given a value yet

// NULL
// null means the variable has been intentionally set to "nothing" and does not hold any value.

// BigInt Data types
// It is used for vary large numbers that exceed the limit of the number types like 
// 1234567788n

// An Object

// An Object is a collection of key-value pairs

// let student =  {
//     name: 'Alice',
//     age: 20
// };
// console.log(student);

// SYMBOL

// A symbol is a special type of value in JavaScript that is always unique and cannot be changed. It often used to create unique labels or idnetifiers for properties

// Symbol('mySymbol')

// let age = 30;
// console.log(`First age: ${age}`);

// age = 19;
// console.log(`Age after reassignment: ${age}`);

// let name = 'Hello";
// console.log(name);

// Concatenation of strings
// Examples: 

// Using + Operator

// let firstName = "John";
// let lastName = "Doe";
// let fullName = firstName + " " + lastName;
// console.log(`Name with proper spacing: ${fullName}`);

// //Example II:
// let fName = "John";
// let lName = "Rai";
// let name = fName + lName;
// console.log(`Name with no proper spacing: ${name}`);

// Using += Operator

// let greeting = "Hello";
// greeting += ", Shyam!"; 
// console.log(greeting);

// using concat() method

// let str1 = "Hello";
// let str2 = 'world!';

// let result = str1.concat(' ', str2);
// console.log(result);

// Multi-line comments 
/*
 I am a multiline comment.
 This is helpful for longer explanations.
*/
// let firstName = "Kamal";
// let lastName = "Hassan";
// let fullName = firstName + " "+  lastName
// console.log(fullName);
// // reassigning value
// firstName = "Kamala";
// lastName = "Karki";
// let fName = firstName + " " + lastName;
// console.log(fName);

// const crypticKey1= Symbol("saltNpepper");
// const crypticKey2= Symbol("saltNpepper");
// console.log(crypticKey1 === crypticKey2); // false
// console.log(crypticKey1 === crypticKey1); // true

// Bracket Notation (To access charaters from a Strings)

// let greeting = "Hello";
// console.log(greeting[4]); // o

// To get last character of a string (the length of the string minus one)

// const fullName = "Kapil Rai";
// console.log(fullName[fullName.length - 1]); // i

// To get multiple charaters from string

// let firstName = "Rahul";
// let lastName = "Gandhi";
// let fName = firstName + " " + lastName;
// let result = fName[3] + fName[6]; // u and G
// console.log(result);

// creating new line in strings 
// console.log("JavaScript is a programming language. \nIt can create newline in a string");
// console.log("\n");

// Insert quotes inside a string
// let statement = "She said. \"Hello!\"";
// console.log("This is a string with quote: ", statement);

// statement = "She\'s my world!";
// console.log(statement);

// string interpolation
let firstName = "Kamala";
let lastName = "Harris";
let userName = `Full Name: ${firstName} ${lastName}`;
console.log(userName);

let statement = "JavaScript was created in just 10 days!"
