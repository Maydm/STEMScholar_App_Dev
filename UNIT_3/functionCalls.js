/** DO NOT DELETE THIS HEADER!
 * This file is the property of Maydm (c). Maydm is a 501(c)(3) registered nonprofit created to provide girls
 * and youth of color in grades 6 -12 with the skills, experiences, and connections to pursue careers in and
 * change the face of STEM. 
 * Written By: Anjali Gali, Maydm Programs Team
 * Edited By: *INSERT YOUR NAME HERE*
 **/ 

 /** 
  * In this file, you will complete the following challenge activities to test your knowledge of JavaScript
  * Functions and Function Calls.
  **/

 // GLOBAL VARIABLES - DO NOT EDIT!!
 let petName;
 let petSize;
 let petColor;
 let petTail;
 let petLegs;
 let petSpecies;

 /**
  * FUNCTIONS: 
  * Functions are one of the most fundamental building blocks in JavaScript. It is a reusable set of statements
  * to perform a task or calculate a value, based on inputs (PARAMETERS) you pass in. 
  * 
  * To accomplish this, we are going to create virtual pets! Start by answering the following questions: 
  * 
  * 1. What is your pet's name? 
  * BEGIN ANSWER: 
  * 
  * 2. What kind of animal would your pet be? 
  * BEGIN ANSWER: 
  * 
  * 3. Where does it live? 
  * BEGIN ANSWER: 
  * 
  */

 /**
  * Now that we have 'designed' our pets, let's create the different functions required for our project.
  * 
  * Functions are divided into four different types: 
  *  --> Function Declarations
  *  --> Anonymous Functions
  *  --> Arrow Functions
  */

 function petCreate(){ 
    // This is an example of a FUNCTION DECLARATION. 
    // We add a 'function' delaration at the beginning, then the name of our function.
    // TODO: CHALLENGE 1: On the line below, print to the console: "VIRTUAL PET CREATION IN PROGRESS!"
    
    // Put your print statement above! ^^
 }

 /**
  * This function will be used to set the different features of your pet.
  */
 function petFeatures(myPetsName){ // What kind of function is this? 
    // In a function, you can make your own LOCAL variables. These variables are only available inside of 
    // the function, and cannot be accepted by others. 
    let petStatus = "created";
    //TODO: CHALLENGE 2: Try to change 'petStatus' to "not created yet" in the 'petCreate()' above. Does it work?
    
    // But you can also edit GLOBAL variables, which are variables created outside all the functions and can 
    // be used by any functions. 
    petName = myPetsName; // This global variable sets your pet's name to whatever you prefer.
   

    //TODO: CHALLENGE 3: Set these variables to strings that tell you a little bit about your pet. 
    petSize = "";
    petSpecies = "";
    petColor = "";
    petTail = "";
    petLegs = ""; 

    return petStatus; // If this method is successful, we will send this value to 
 }

 var environment = function()
 // This is an example of anonymous function, which does not have a name, but it's data is stored inside of a 
 // variable.
 {
    // In the string below, write a little bit about the environment your pet lives in. What kinds of trees or 
    // plants live in this area? What food does it eat in it's environment? 
    return "";
 }

 const petAge = (yearBorn, currentYear) => {
    // These are Arrow Functions, commonly used in React Native. These are an easier way of creating your 
    // functions. Here, we have named the function 'petAge', with the year that your pet was born, as well as the 
    // current year. 
    // TODO: CHALLENGE 4: Change the statement below so it return the age of your pet! 
    // HINT: How do you use both the currentYear and yearBorn values? '
    
    return ; // <-- Write down your return value statement here
 }


// FUNCTION CALLS ==> 

 petCreate();
 petFeatures(""); // <-- TODO: CHALLENGE: Add the name of your pet in the string here!
 petAge();



