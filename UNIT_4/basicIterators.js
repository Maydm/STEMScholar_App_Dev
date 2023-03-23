/** DO NOT DELETE THIS HEADER!
 * This file is the property of Maydm (c). Maydm is a 501(c)(3) registered nonprofit created to provide girls
 * and youth of color in grades 6 -12 with the skills, experiences, and connections to pursue careers in and
 * change the face of STEM. 
 * Written By: Anjali Gali, Maydm Programs Team
 * Edited By: *INSERT YOUR NAME HERE*
 **/ 

 /** 
  * In this file, you will complete the following challenge activities to test your knowledge of Iterators 
  * and how to use them. 
  **/

/**
 * FIRST CLASS OBJECTS:  
 * Functions in JavaScript can have built in methods and properties, like .name() and .toString()
 * You can also add your own. 
 * They can be assigned to variables, arrays and other objects! This makes it easy for us to make assigning
 * descriptive objects easier.  
 */

// In the function below, we are going to create a First-Class Object that describes yourself. 
const firstClassStudent = (id) => {
    return (id = 12345678)
};

console.log(firstClassStudent.name); // This return the name of the variable (firstClassStudent).

//TODO: CHALLENGE 1: How do you make this return the student ID? 

console.log(firstClassStudent.toString()); // This returns what is contained in the body of the function. 

firstClassStudent.firstName = ""; //TODO: CHALLENGE 2: Insert your first name here.  

//TODO: CHALLENGE 3: Create a new property for firstClassStudent called ".hasPet" and set it to true or false, 
//depending on if you have a pet. 

/**
 * ITERATORS: 
 * Suppose you have an array and want to easily filter specific values or iterate over 
 * each value. To accomplish this, we can use iterator methods. 
 * These are built-in methods making it easy to create and manipulate values. 
 */

const nameArray = ["","",""]; //TODO: CHALLENGE 4: In this array, add the names of your friends 
                                //(add as many as you'd like!)
const numberArray = [1,2,3,4,5,6];

// The "forEach" method makes it easier to check each value in the array. 
numberArray.forEach(number => {
        // This function says "For all the numbers in numberArray, print each one out to the console."
        console.log(number + " ");
    }
);

// TODO: CHALLENGE 5: Print out each of the names in nameArray using a 'forEach' loop, with a space between 
// each name.

// The ".filter" method helps you make a method that filters out values in the array that meet a condition. 
const bigNumbers = numberArray.filter(number => {
        // This function says that "For all numbers in the numberArray, return all th enumbers greater than 3."
        return number > 3;
    }
);

// TODO: CHALLENGE 6: How would you change the above statement so it returns values less than 5? 
/**
 * Write your answer here!
 * 
 */

// TODO: CHALLENGE 7: Make your own statement that filters the nameArray to include all names starting with 
// the letter 'A'. (HINT: Try using the '.startsWith' property of strings.)








// The '.reduce' method takes in up to four parameters, 'previousValue', 'currentValue', 'currentIndex' and 
// 'array'. However, we don't need to specify the array since it's already being called. 
const sum = numberArray.reduce((previousValue, currentValue) => 
    {
        // This method sums up all the values in currentValue and stores it in the variable 'sum'. 
        return previousValue + currentValue;
    }
);

// TODO: CHALLENGE 8: Write a similar method as the one above that stores the product of
// all the values in the array multiplied together in a variable called 'mult.'





// The .map method is used to iterate through each element in the array. It works best for strings! 
// Unlike .forEach, if you use .map, you can't directly change any of the values inside the array. 
// So this adds extra security!

const doubledNumbers = numberArray.map(number => {
        return (number * 2);
    }
);

//TODO: CHALLENGE 9: Create a new method that uses the .map method to print out all the strings in nameArray 
// with the extension " has joined the chat!"


