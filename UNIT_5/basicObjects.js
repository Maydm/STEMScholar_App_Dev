/** DO NOT DELETE THIS HEADER!
 * This file is the property of Maydm (c). Maydm is a 501(c)(3) registered nonprofit created to provide girls
 * and youth of color in grades 6 -12 with the skills, experiences, and connections to pursue careers in and
 * change the face of STEM. 
 * Written By: Anjali Gali, Maydm Programs Team
 * Edited By: *INSERT YOUR NAME HERE*
 **/ 

 /** 
  * In this file, you will complete the following challenge activities to test your knowledge of Objects
  * and how to use them. 
  **/

 /**
  * OBJECTS: 
  * Objects are built-in data types for storing values that come in pairs. Eg: (StudentID, Name) or 
  * (FirstName, LastName). They can store more variables too - the main point is that they are linked 
  * together always! 
  * 
  * We also use DOT NOTATION to access the properties of each item!
  **/

 /**
  * Imagine you are the owner of a store that sells jewelery. You may have to store information about the type
  * of jewelery, materials used, gems, age of the item, etc. To accomplish this, we are going to create a 
  * 'database' of all the items in the store, using what we know about Objects and Arrays. 
  **/

const jeweleryDatabase = [];

// Below, we create a function that automatically instantiates and creates our object with all the required 
// information.
function newJeweleryItem(id, jewelMaterial, jewelGem, jewelAge, jewelType){
    return jeweleryItem = {
        jewelID: id,                // <-- KEY &
        information: {              // <-- VALUE
            material: jewelMaterial,//<-- Property 1
            gem: jewelGem,          // <-- Property 2
            age: jewelAge,          // <-- Property 3
                          // TODO: CHALLENGE 1: Add a 4th property here that records the 'type' of jewelery and
                          // sets it to the jewelType value above. 

            // But once we've made our items, how do we get them or change them? 
            // To accomplish this, we use Getters and Setters!
            get jewelID(){
                // NOTE: This is an example of a method in an Object!
                return this.jewelID;
            },
            set jewelID(newJewelID){
                this.jewelID = newJewelID;
            } 
            //TODO: CHALLENGE 2: Make getters and setters for the rest of the properties, including material,
            // gem and age!
        }
    };
}

// Now that we can make new objects, let's practice making new objects in the function below: 
function addJeweleryItems(){
    // The command below make a new piece of jewelry
    jeweleryDatabase.push( 
        // TODO: CHALLENGE 3: Do you remember what the push() command does? What about pop()?
        /**
         * Write your answer here!
         */
        newJeweleryItem(
            15264, 
            "Silver", 
            "Ruby", 
            10, 
            "Necklace"
        )
    );
    // TODO: CHALLENGE 4: Make 10 new pieces of jewelery, all different, using the template above!
    jeweleryDatabase.push(
        // Create a new value here!

    );
    jeweleryDatabase.push(
        // Create a new value here!

    );
    jeweleryDatabase.push(
        // Create a new value here!

    );
    jeweleryDatabase.push(
        // Create a new value here!

    );
    jeweleryDatabase.push(
        // Create a new value here!

    );
    jeweleryDatabase.push(
        // Create a new value here!

    );
    jeweleryDatabase.push(
        // Create a new value here!

    );
    jeweleryDatabase.push(
        // Create a new value here!

    );
    jeweleryDatabase.push(
        // Create a new value here!

    );
    jeweleryDatabase.push(
        // Create a new value here!

    );
    jeweleryDatabase.push(
        // Create a new value here!

    );
}
addJeweleryItems();

// Now we can use the Getters and Setters to get and set new values. 

console.log(jeweleryDatabase[0].jewelID); // This gets the jewelID and prints the value 15264
jeweleryDatabase[0].jewelID = 1002; // This sets the jewelID to 1002. 

// TODO: CHALLENGE 5: Iterate through all the values in the jeweleryDatabase and SET each jewelID by multiplying
// the value by 2. (HINT: try using a forEach() iterator?)

// What about deleting the objects? To do so, we simply use the 'delete' operator and access the item. 
delete jeweleryDatabase[0].information.jewelAge;

// TODO: CHALLENGE 6: Using a loop, access every item and delete its jewelAge. 











