
/** DO NOT DELETE THIS HEADER!
 * This file is the property of Maydm (c). Maydm is a 501(c)(3) registered nonprofit created to provide girls
 * and youth of color in grades 6 -12 with the skills, experiences, and connections to pursue careers in and
 * change the face of STEM. 
 * Written By: Anjali Gali, Maydm Programs Team
 * Edited By: *INSERT YOUR NAME HERE*
 **/ 
 
 /** 
  * In this file, you will complete the following challenge activities to test your knowledge of Math Functions Skills.
  * 
  * Start by imagining that you are the owner of 'Pet's Connect', an app that helps pet
  * owners set up play dates for their pets and find dog parks, walking routes, food and vet services. 
  * Your goal is to make it easier for owners to connect with each other and to help pets find new 
  * friends!
  * 
  * You are discussing your business to a prospective buyer, who is ready to pay $100,000 for your idea. 
  * Complete the variable definitions below to complete your sales pitch!
  **/
 const Name = ""; //TODO: Insert your name here!
 const businessName = "Pet's Connect"; 
 let totalDogs = 63;
 let totalCats = 65;
 let totalFish = 12;
 let totalVets = 20;
 let totalParks = 10;

 /** ARITHMETIC: 
 * Addition --> +
 * Subtraction --> -
 * Multiplication --> *
 * Division --> /
 * Modulo (Remainder) --> %
 */

// CHALLENGE 1: How do you find the total number of pets on the app? 
let totalPets = null; //TODO: Edit this line by replacing 'null' to output the total number of pets. 

// CHALLENGE 2: Suppose there are some parks that are for dogs and some parks that are only for kids. Given the 
// information below, how can you calculate the number of dog parks in an area? 

let kidParks = 9;
let dogParks = null; //TODO: Edit this line by replacing 'null' to output the total number of dog parks.

// BONUS CHALLENGE: Try using an Assignment Operator to complete the below statement. 
let dogParks2 = totalParks;
dogParks2 = dogParks2 - kidParks; // <-- Convert this to Assignment Operator Version. 


// CHALLENGE 3: Suppose that friend groups can only have upto three animals at a time. How many friend groups 
// are there comprising of ONLY dogs.

let dogFriendGroups = null; // TODO: Edit this line to output the total number of dog friend groups. 

// CHALLENGE 4: If each vet can only serve two cats at a time, how many cats will be left over? HINT: How do you calculate the remainder value? 

let catsLeftOver = null; // TODO: Edit this line to output the total number of cats left over. 

 /** MATH: 
  * There are many ways to perform Math functions in JavaScript.
  * The 'Math' library can be envisioned as a toolbox that you can pull tools out of whenever you need.
  * JavaScript makes doing Math a little bit easier by having some in-built tools for us to use. 
  * 
  * Math.random(): This outputs a random number. 
  * Math.floor(): This outputs the largest integer less than or equal to the given number. 
  */

 //CHALLENGE 5: There are two Samson's on your app. One of them is a cat, and the other is a dog. Create two, completely different ID's for them using the Math.random function. 

 let samsonTheCat = Math.random();
 let samsonTheDog = null;

 // CHALLENGE 6: Get the minimum number of cat bags from the following variable using Math.floor()
let catBags = 7.956;
let minimumCatBags = null;

/**
 * The function below is the sales pitch you have created!
 */
console.log("Hi! My name is " + Name + ", and I am the creator and developer of "+ businessName+", an app to make you the best possible pet owner around. Through "+ businessName + "you can meet other pet owners, setup playdates for your pet and find new places for you and your pet to visit. We understand the bond between you and your pet, and we want to help you foster new memories and friends. \n");

console.log("So far, we have " + totalPets + " pets on our app. The breakdown is " + totalCats + " cats, " + totalDogs + " dogs, and " + totalFish + "fish. We track " + dogParks +" different dog parks in the city of Madison, with a total of " + dogFriendGroups + "dog's friend groups so far. \n");

console.log("With your generous funding, we can make the app a better platform for cat owners too! Right now there are " + catsLeftOver + " cats waiting to find a vet for them. We could access more veterinary hospitals in the city using your app. Furthermore, we want to create unique ID's for every pet, not just those with the same name! We hope you consider funding our business, because all animals deserve to have memories to cherish with their owners!");



