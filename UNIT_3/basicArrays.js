/** DO NOT DELETE THIS HEADER!
 * This file is the property of Maydm (c). Maydm is a 501(c)(3) registered nonprofit created to provide girls
 * and youth of color in grades 6 -12 with the skills, experiences, and connections to pursue careers in and
 * change the face of STEM. 
 * Written By: Anjali Gali, Maydm Programs Team
 * Edited By: *INSERT YOUR NAME HERE*
 **/ 

 /** 
  * In this file, you will complete the following challenge activities to test your knowledge of JavaScript
  * Arrays and Lists.
  **/

 /**
  * ARRAYS: 
  * Arrays are lists of ordered, stored data. They can hold items that are of any data type. Below are some 
  * examples of different arrays. 
  */

 const emptyArray = []; // This is an array instantiated with nothing in it. The square brackets indicate an array. 
 
 let numberArray = [1, 2, 3, 4, 6] // This array is instantiated with 5 numbers in it, separated by commas. 

 let mixedArray = [1, "lettuce", 'a', false] // This array has 5 items in it, all of different types. 

 /** Array elements are arranged by index values, starting at 0 as the first element index. Elements can 
  * be accessed by their index using the array name, and the index surrounded by square brackets.  */
 
 let exampleArray = [3, 6, 9];
 //                  ^  ^  ^
 //                  |  |  |
 // Indexes:        [0  1  2]

console.log(exampleArray[0]); // 3
console.log(exampleArray[1]); // 6
console.log(exampleArray[2]); // 9

 // TODO: CHALLENGE 1: Instantiate a mixed array called 'myArray' containing you name, age, and your 
 // favourite animal. 


 // TODO: CHALLENGE 2: What happens when you try to print the emptyArray? Why do you think this happens? 
 //
 //
 //

 // TODO: CHALLENGE 3: Print to the console the third value of 'numberArray' and the string in 'mixedArray'. 


 /** Arrays are mutable, meaning you can add and remove items from the lists, even if they are const variables! 
  You can reassign the values or use 'pop()' or 'push()'. */

numberArray.pop(); //Removes the number at the end of the line. 
numberArray.push(5); //Adds the number '5' at the end of the line. 

// TODO: CHALLENGE 4: Remove all the values in the 'mixedArray' that is not a string, and replace it with different
// vegetables of your choice. 

/**
 * The .length property of a JavaScript array indicates the number of elements the array contains.
 */
console.log(emptyArray.length); // 0

// TODO: CHALLENGE 5: What value do you get when you print the mixedArray length to the console? 
//
//
//