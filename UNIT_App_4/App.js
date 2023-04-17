/**
 * DO NOT DELETE THIS HEADER!
 * This file is the property of Maydm (c). Maydm is a 501(c)(3) registered nonprofit created to provide girls
 * and youth of color in grades 6 -12 with the skills, experiences, and connections to pursue careers in and
 * change the face of STEM. 
 * Written By: Anjali Gali, Maydm Programs Team
 * Edited By: *INSERT YOUR NAME HERE*
 */

/** Welcome to your fourth app! In this application, you are going to make a stylesheet from scratch. Please 
 * revise what you learned about yesterday, with regards to flexBoxes and justifyContent. You can also 
 * reference past projects to see how you accomplished certain things. 
 * 
 * STEP 1: Create a new expo folder called 'stylesheet-vs-dynamic' by running the following command in your terminal. 
 *          expo init stylesheet-vs-dynamic
 * STEP 2: Copy (Ctrl + C) and Paste (Ctrl + V) the content in this file into your App.js file.
 * STEP 3: Start the app by running the command 'npx expo start.', and scanning the provided QR Code with your 
 *         app.
 * STEP 4: Add the required content to each of the sections.
 * STEP 5: Call over your teacher to ask any questions and show them your work.
 **/

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    /** Students must fill in the requirements in order to setup the space.*/
    <View style={styles.container}>
      <View style={styles.redBar}/>
      <View style={styles.blueBar}/>
      <View style={styles.greenBar}/>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
/** 
 * This is an example of a stylesheet. A Stylesheet makes it easier for us to organize all our code and 
 * and styles into one spot. It is different from dynamic styling, where the styling is done inside of the 
 * item itself. 
 * 
 * Here are some stylesheet components that may be helpful to you: 
 * flex: 1 - This tells us we are using a flexbox
 * backgroundColor: '#fff' - This helps us set the background color using the flexbox
 * alignItems: 'center' - This helps align items to either the 'left', 'right' or 'center'
 * justifyContent: 'center' - This helps align items to either the 'left', 'right' or 'center',
 */
const styles = StyleSheet.create({
  container: {
    
  },
  /** TODO: Set this up so that 
   *        * The bar has a red background color. 
   *        * Set in the center using the flexbox. 
   **/
  redBar: {
    
  },
  /** TODO: Set this up so that 
   *        * The bar has a green background color. 
   *        * Set to the left using the flexbox. 
   **/
  greenBar: {
   
  },
  /** TODO: Set this up so that 
   *        * The bar has a blue background color. 
   *        * Set to the right using the flexbox. 
   **/
  blueBar: {
    
  }
});
