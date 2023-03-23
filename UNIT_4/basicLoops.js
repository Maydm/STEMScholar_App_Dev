/** DO NOT DELETE THIS HEADER!
 * This file is the property of Maydm (c). Maydm is a 501(c)(3) registered nonprofit created to provide girls
 * and youth of color in grades 6 -12 with the skills, experiences, and connections to pursue careers in and
 * change the face of STEM. 
 * Written By: Anjali Gali, Maydm Programs Team
 * Edited By: *INSERT YOUR NAME HERE*
 **/ 

 /** 
  * In this file, you will complete the following challenge activities to test your knowledge of Loops and how to 
  * use them. 
  **/

 /**
  * LOOPS: 
  * A loop is a programming tool that is used to repeat a set of instructions. 
  * Every repitition in the loop is called an Iteration. 
  * A loop will iterate until it meets a specific condition that makes it stop.
  */

 /**
  * The main types of loops in any programming language are: 
  * --> For Loops
  * --> While Loops
  */

 // for (let i = "starting point"; i < "ending point"; i moves forward/ backwards a certain number of steps)
 for (let i = 0; i < 4; i += 1) { 
    console.log(i + "\n");
    //TODO: CHALLENGE 1: What does this print out? 
  };
  let array = [1,2,3,4,5];
  // This array shows you how to iterate through an array:
  for(let j = 0; j < array.length; j++){
    console.log(array[j] + ", ");
  }
  //TODO: CHALLENGE 2: Can you think of a way to make it print only the first three values? 


  

  //TODO: CHALLENGE 2: How would you change the for loop above to make it print out the variables backwards (in reverse)? 

  let i = 0; 
  // while ("this condition is true")
  while(i < 6){
    console.log(i + "\n");
    i++;
    if(i === 5){
        break; // This is like a fail switch, exits the loop immediately.
    }
    //TODO: CHALLENGE 3: How do you change the "While" loop so outputs the same thing as the for loop, using only a break statement?
  }
  //TODO: CHALLENGE 4: Make any loop you like - either a for loop or a while loop - that prints out one 
  // word that describes you, 5 times. Examples of some words are: "special", "artistic", "funny", "important". 

 
  

  /** 
   * You can also nest loops so that there is a loop inside of a loop:   
   **/ 

  for(i = 0; i < 3; i += 1){ // Loop 1: Forwards
    console.log("Exiting this loop in ");
    for(j = 3; j < 2; j -= 1){ // Loop 2: In Reverse
        console.log(j + ",");
    }
    console.log("\n");
  }
  //TODO: CHALLENGE 5: Describe, in your own words, what is being printed out here. 
  /**
   * 
   */

  //TODO: CHALLENGE 6: How can you change Loop 2 to a "while" loop.

 /** 
  * There is one other loop that is specific to JavaScript: 
  * --> Do-While
  */

 let x = 0;
 let y = 2;
 
 do { // Do: the task inside this loop
    console.log(x*y);
    x += 1;
 } while(x < 3) //While: this condition is true

 //TODO: CHALLENGE 7: Create a Do-While Loop that prints out the statement given that 
 // the value stored in 'number' is even (HINT: Try using a modulo function (%)).
 let statement = "This number is even!"
 let number = 2;

 do {

 } while(number);



