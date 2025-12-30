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

let char = String.fromCharCode(65);
console.log(char);  //  A

char = String.fromCharCode(101);
console.log(char); // e

char = String.fromCharCode(99);
console.log(char); // c

