// // In this workshop, you are going to continue learning about strings by building a Teacher Chatbot.
// console.log("Hi there!");

// const botName = "teacherBot";

// const greeting = `My name is ${botName}.`;
// console.log(greeting);

// const subject = "JavaScript";
// const topic = "strings";

// const sentence = `Today, you will learn about ${topic} in ${subject}.`;
// console.log(sentence);

// const strLengthIntro = `Here is an example of using the length property on the word ${subject}.`;
// console.log(strLengthIntro);

// console.log(subject.length);

// console.log(`Here is an example of using the length property on the word ${topic}.`);
// console.log(topic.length);

// console.log(`Here is an example of accessing the first letter in the word ${subject}.`);

// console.log(subject[0]);

// console.log(`Here is an example of accessing the second letter in the word ${subject}.`);
// console.log(subject[1]);

// console.log(`Here is an example of accessing the last letter in the word ${subject}.`);

// const lastCharacter = subject[subject.length - 1];
// console.log(lastCharacter);

// const learningIsFunSentence = "Learning is fun.";

// console.log("Here are examples of finding the positions of substrings in the sentence.");

// console.log(learningIsFunSentence.indexOf("Learning"));

// console.log(learningIsFunSentence.indexOf("fun"));
// console.log(learningIsFunSentence.indexOf("learning"));
// console.log("I hope you enjoyed learning today.")

//ASCII with charCodeAt() and fromCharCode()

// charCodeAt() method helps you retrieve the ASCII value of a character:

// let letter = "A";
// console.log(letter.charCodeAt(0));  // 65

// letter = "a";
// console.log(letter.charCodeAt()); //97

// let symbol = "!";
// console.log(symbol.charCodeAt());  // 33

// let alpha = "C";
// console.log(alpha.charCodeAt(3)); // NaN(Not a number)

//fromCharCode() method allows you to do the opposite

// let char = String.fromCharCode(65);
// console.log(char);  //  A

// char = String.fromCharCode(101);
// console.log(char); // e

// char = String.fromCharCode(99);
// console.log(char); // c

// the includes() method returns true and false result:
// string.includes(searchValue);

// let phrase = "JavaScript is awesome!";
// console.log(phrase.includes("is")); // true
// console.log(phrase.includes("$")); // false

// phrase = "I love JavaScript!";
// console.log(phrase.includes("Javascript")); // Case-sensitive resule false

// let text = "Hello, JavaScript world!";
// let result = text.includes("JavaScript", 7);
// console.log(result); // true
// console.log(text.includes("Hello", 2));

// let words = "Hello, My name is Kapil Rai!";
// console.log(words.includes("My", 2)); //true
// console.log(words.includes("name", 10)); // ture
// console.log(words.includes("name", 11)); // false
// console.log(words.includes("name", 8)); //ture

// Extract a Substring from a string
// the slice() method
// string.slice(startIndex, endIndex);

// let message = "Hello I am botNep!";
// console.log(message.slice(0, 4)); // Hell
// console.log(message.slice(0, 6)); // "Hello "
// console.log(message.slice(10)); //" botNepal!"
// console.log(message.slice(-2)); // p!

// let sentence = "Learning JavaScript is fun!";
// let extracted = sentence.slice(9, -5);

// console.log(extracted); // "JavaScript is"

// let message = "JavaScript is fun!";
// let lastWord = message.slice(-6);

// console.log(lastWord); // "s fun!"

let sentence = "Learning JavaScript is fun!";

let extracted = sentence.slice(9, -5);

console.log(extracted); // "JavaScript is fun!"