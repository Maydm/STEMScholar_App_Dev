//FIXME: Add more exercises related to numeric properties and strings here!
/** DO NOT DELETE THIS HEADER!
 * This file is the property of Maydm (c). Maydm is a 501(c)(3) registered nonprofit created to provide girls
 * and youth of color in grades 6 -12 with the skills, experiences, and connections to pursue careers in and
 * change the face of STEM. 
 * Written By: Anjali Gali, Maydm Programs Team
 * Edited By: *INSERT YOUR NAME HERE*
 **/ 

 /** 
  * In this file, you will complete the following challenge activities to test your knowledge of JavaScript
  * Basic Skills.
  **/

// This is a single line comment. It occupies only one line.

// It can be used to make a single comment.

// It can be used to describe one line of code. 

// TODO: CHALLENGE 1: Write your name on the line below

// _______________________________________

/** This is a Multi-Line Comment. 
 * It occupies multiple lines of code. 
 * It can be used to create Headers, aka descriptions of what all your code does together.
 */
/**
 * TODO: CHALLENGE 2: Write three sentences about what makes you unique. 
 * <--
 * 
 * 
 */

/**
 * VARIABLES: A Variable is an item used to store information to use in the future. 
 * A Variable can store :
 *  -- Numbers (integers)
 *  -- Letters and Symbols (chars)
 *  -- Sentences (strings)
 *  -- True or False (booleans) 
 */

const studentID = "FirstName LastName"; // We use a const to make our variable if we know our value won't change ever. 
// TODO: CHALLENGE 1: Change the line above, changing the words "FirstName LastName" to your full name. 

let currentYear = 2023; // we use var if our value will change in the future. 
let yearOfBirth = null; 
// TODO: CHALLENGE 2: Change the variable yearOfBirth to replace 'null' with the year that you were born. 

// TODO: CHALLENGE 3: What number will be stored in currentAge? 
// ANSWER: (write your answer on the line!) --> _____________________
//
let currentAge = currentYear - yearOfBirth;

/**
 * STRING CONCATENATION: String Concatenation is one way for us to print out values that aren't strings by 
 * attaching them at the end of strings. You can do this using a '+' sign. Remember that the string is held inside
 * of"" " (Look on the middle right side of your keyboard to find this symbol.)
 * 
 *  TEMPLATE LITERALS: Template Literals are another way for us to print out values that aren't strings by 
 * attaching them at the end of strings. You can do this using a '$' sign. Remember that the string is held inside
 * of `` (Look on the top left corner of your keyboard to find this symbol.)
 * 
 * Here are some examples below!
 */

 console.log // This is used to print out different values below.
 ("My student ID is " + studentID + ". \n") ;  

console.log("EXAMPLE: I was born in " + yearOfBirth); // String Concatenation

console.log(`EXAMPLE: And it is currently ${currentYear}`); // Template Literals

// TODO: CHALLENGE 4: Print out your current age so it appears in the following example form: "I am 16 years old"
// Once, using String Concatenation and once using a Template Literal. 
console.log(); // Edit the parentheses

// This is a boolean variable. It can either be set to true or false.

let boolean = false; 

// TODO: CHALLENGE 4: Create a boolean below called 'completed' and set it to true. What happens next? 

              // <-- Create your variable in this space!

if(completed){
    console.log("Congratulations! You finished your first activity. Call your instructor over to check out the work you did!");
}



//RESOURCES: 
// https://www.w3schools.com/js/js_comments.asp