/* 
1.You should declare the following variables using let:

adjective
noun
verb
place
adjective2
noun2
2.You should assign the above variables some string values of your choice.

3.You should declare a firstStory variable.

4.You should use the following story template to create the first story and assign it to the firstStory variable: "Once upon a time, there was a(n) [adjective] [noun] who loved to eat [noun2]. The [noun] lived in a [place] and had [adjective2] nostrils that blew fire when it was [verb].";

5.You should output your first story to the console using the message "First story: [firstStory]".

6.You should assign new values to your adjective, noun, verb, place, adjective2, and noun2 variables.

7.You should declare a secondStory variable.

8.Create another story using the same template and assign it to the secondStory variable.

9.You should output your second story to the console using the message "Second story: [secondStory]".
*/
// First Story
let adjective = "hungery";
let noun = "dragon";
let verb = "eating";
let place = "dense forest";
let adjective2 = "big-mouth";
let noun2 = "meat"; //1 and 2

let firstStory = "Once upon a time, there was a(n) " + adjective + " " + noun + " who loved to eat " + noun2 + "." + " The " + noun + " lived in a " + place + " and had " + adjective2 + " nostrils that blew fire when it was " + verb + "."; // 3 and 4

console.log("First Story: " + firstStory); // 5

// Second Story

adjective = "muntant";
noun = "tiger";
verb = "yawning";
place = "Jungle";
adjective2 = "monstrous";
noun2 = "goat"; //6

let secondStory = "Once upon a time, there was a(n) " + adjective + " " + noun + " who loved to eat " + noun2 + "." + " The " + noun + " lived in a " + place + " and had " + adjective2 + " nostrils that blew fire when it was " + verb + "."; // 7 and 8
console.log("Second story: " + secondStory); // 9

