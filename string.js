// Template Literals, and String Interpolation
// const name = "Alice";
// const greeting = `Hello, ${name}!`;
// console.log(greeting);

// // Oder way to concatenation of strings

// const fullName = "Alice";
// const age = 25;
// const message = "My name is " + fullName + " and I am " + age + " years old.";
// console.log(message);

// Examples of template literals and string interpolation

// const fName = "Harry";
// const userAge = 28;
// const output = `My name is ${fName} and I am ${userAge} years old.`
// console.log(output);
// console.log("\n");

// // Can use without escape charater (\n)
// let poem = `Roses are red,
// Violets are blue,
// JavaScript is fun,
// And so are you.`
// console.log(poem);

// // Example II:

// const song = "Bohemian Rhapsody";
// const score = 9.5;
// const highscore = 10;
// const result = `One of my favorite song is "${song}". I rated it ${(score / highscore) * 100}%.`;
// console.log(result);

// String and Substing
// Hello world!, here 'Hello' and 'world!' are substring
// The indexOf() method
// let word = "JavaScript is awesome!";
// let position = word.indexOf("is");
// console.log(position); // 11

// let name = "Karma";
// console.log(name.indexOf('r')); // 2

// const sent = 'Hello I am your botNepal!'
// console.log(sent.indexOf('botNepal!'));//16

// // What happens when substring isn't founf?

// let userName = "Kamala Karki";
// console.log(userName.indexOf('Stha')); //-1

// let sentence = "JavaScript is awesome, and JavaScript is powerful!";
// console.log(sentence.indexOf('JavaScript', 10)); // 27
// console.log(sentence.indexOf('is',15));// 38
// console.log(sentence.indexOf('Is', 5)); // -1 note: case sensitive

// The prompt() method, and Uses:
// Example of the promt() method 

/*
// This is html file segment: 

<button id="prompt-btn">Show Prompt</button>
<p id="output"></p>
<scrpt src="index.js"></scrpt>

// This is js file segment: 

const btn = document.getElementById("prompt-btn");
const output = document.getElementById("output");
btn.addEventListener("click", () => {
    const userName = prompt("What is your name?", "Guest");
    output.textContent = "Hello, " + userName + "!";
}); */