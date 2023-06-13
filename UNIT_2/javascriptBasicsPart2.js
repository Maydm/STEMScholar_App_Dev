//FIXME: Replace all null vals!
/* DO NOT DELETE THIS HEADER!
 * This file is the property of Maydm (c). Maydm is a 501(c)(3) registered nonprofit created to provide girls
 * and youth of color in grades 6 -12 with the skills, experiences, and connections to pursue careers in and
 * change the face of STEM. 
 * Written By: Anjali Gali, Maydm Programs Team
 * Edited By: *INSERT YOUR NAME HERE*
 */ 
 

 /** 
  * In this file, you will complete the following challenge activities to test your knowledge of Conditionals 
  * and Logical Operators. 
  **/

 /** REVISION: It's okay if you don't remember the answers to these questions! You can consult a previous 
  * worksheet or ask a teacher!
  * 
  * Do you remember what a Boolean is? Write your answer down below! 
  * -->
  * 
  * Do you remember what a Variable is? Write your answer down below!
  * --> 
  * 
  */

  let boolean; // If we do not set it ahead of time, this variable is UNDEFINED. 
  boolean = true;
 
  /**
  * CONDITIONALS: A conditional is how computers make decisions when running a program. Computers do this 
  * using three important coding blocks:
  */

if(boolean) 
{
    // An IF statement says "if this condition is true, I will execute the code inside of here!"
    console.log("The value stored in the boolean is called a truthy!");

}
else if (!boolean) 
{
    // An ELSE IF statement says "otherwise, if this other condition is true, 
    // I will execute a different set of code. " 
    console.log("The value stored in the boolean is called a falsey!");

}
else
{ 
    // An ELSE statement only executes if the other two statements fail. 
    console.log("Do I execute?");

}
// TODO: CHALLENGE 1: What happens if you set 'boolean' variable to true? What if boolean is false? What if 
//there is no value? 
// Try it out!
/**  YOUR ANSWER --> 
 * 
*/

// TODO: CHALLENGE 2: Create a boolean variable named 'weather'. Set weather to "rainy." Then create 
// conditionals that print out what activities you enjoy doing in different weather. We have a template for you 
// below. 
let weather;
                //<-- Set the variable 'weather' to "rainy"

if(null){ // <-- replace 'null' with a statement that represents what happens if it is raining? 
    console.log("I will ...");

} else if(null) { //<-- replace 'null' with a statement that represents what happens if it is sunny? 
    console.log();
} else {
                // <-- Write your own console.log statement!
}

/**
 * COMPARATORS: Comparison Operators make it easy for us to compare different values and variables. They can 
 * return either 'true' or 'false' depending on the comparison. They are: 
 * 
 * === strictly equals
 * !== strictly not equals
 *  >  greater than
 *  >= greater than or equal to
 *  <  less than
 *  <= less than or equal to
 */

// TODO: CHALLENGE 3: Evaluate the following if statements and print to the console whether the following statements are true
// or false. The first two are done for you!
if(1 === '1'){
    console.log("false");
}
if(1 === 1){
    console.log("true");
}
if(300 >= 299){
    console.log("");
}
if(3 < 1){
    console.log();
}
if((7 + 1) === (4 + 4)){


}if(19 !== "nineteen"){

}
if(700 < 600){

}
if((300 + 400) === 700){

}
/**
 * LOGICAL OPERATOR: Logical Operators are used to check multiple conditions in one statement. There are three different kinds: 
 * AND: &&
 * OR:  ||
 * NOT: !
 */
weather = "sunny";
let iansPizza = "open";

if((weather === "sunny") && (iansPizza === "open")) // AND (&&) operator
{
    console.log("It's sunny, and Ian's is open today! Let's go there for lunch.");
}
if((weather == "sunny") || (iansPizza === "open")) // OR (||) operator
{
    console.log("It might be sunny, OR Ian's might be open today, but I don't know for sure.");
}
if(!(weather == sunny)&&!(iansPizza === "open")) // NOT(!); AND (&&) operator
{
    console.log("It is not sunny, and Ian's is not open! Let's order some tacos!");
}

// TODO: CHALLENGE 4: write a statement of your own below using any two logical operators and the  
// variables below. The statement must reflect what is printed to the console. 
var zoo = "closed";
var cleaning = "scheduled";
var pandaExhibit = "open"

if(null){ //<-- replace 'null' with a statement that represents what is printed to the console.
    console.log("The zoo is open, but there will be a scheduled cleaning today, so the panda exhibit might or might not be open.");
}

/**
 * SWITCH STATEMENTS: 
 * Switch statements make it easier for you to write out a bunch of different IF, ELSE IF statements at once. 
 * Instead, all we have to do is write different 'cases' for different possibilities. 
 */

const animal = "goat";

switch(animal){ //Start of the switch statement, specifying what variable we want to use.
    case "lion": // For each case we use a string.
        console.log("ROAR!");
        break; // This statement tells us "We found the right option, let's leave the switch statement."
    case "frog": 
        console.log("RIBBET!");
        break;
    case "cicada":
        console.log("CACOPHONOUS SCREECHING!");
        break;
    default: // Default is the automatic option, if none of the above match. 
        console.log("BAAAA!")        
}


// TODO: CHALLENGE 5: Turn the code below into a switch statement like the one above. 

var food = "pizza";
// IF - ELSE VERSION
if(food === "salad"){
    console.log("My salad has tomatoes, lettuce and carrots!");
}
else if(food === "sandwich"){
    console.log("My favourite sandwich is the BLT.");
}
else{
    console.log("Enjoy your meal!");
}

// SWITCH VERSION
switch(null) //<-- replace 'null' with a statement that represents the start of your switch statement here!
{

}    