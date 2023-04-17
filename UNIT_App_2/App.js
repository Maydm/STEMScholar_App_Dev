/**
 * DO NOT DELETE THIS HEADER!
 * This file is the property of Maydm (c). Maydm is a 501(c)(3) registered nonprofit created to provide girls
 * and youth of color in grades 6 -12 with the skills, experiences, and connections to pursue careers in and
 * change the face of STEM. 
 * Written By: Anjali Gali, Maydm Programs Team
 * Edited By: *INSERT YOUR NAME HERE*
 */

/** Welcome to your second app! In this App, we will explore the Button, Image and ScrollView options.  
 * features.
 *
 * INSTRUCTIONS:
 * STEP 1: Create a new expo folder called 'react-core-components' by running the following command in your 
 * terminal. 
 *          expo init react-core-components
 * STEP 2: Copy (Ctrl + C) and Paste (Ctrl + V) the content in this file into the newly-created App.js file.
 * STEP 3: Start the app by running the command 'npx expo start', and scanning the provided QR Code with your 
 *         app.
 * STEP 4: Answer each of the questions in the sections below, and make the required changes as needed.
 * STEP 5: Call over your teacher to ask any questions and show them your work. 
 **/ 


/** Before we begin, we need to make sure we have all of the required tools to get started. So, 
 * we import them here:
 */
import { useState } from 'react';
import React, { Image, ScrollView, Button, Text, View } from 'react-native';

const App = () => {
  const[pressedCount, setPressedCount] = useState(0);

  return (
    /** This is a stylesheet, usd to change the stylistic presentation of the materials, 
     * TODO: In the text below, change the background color of the <View> tag to the color blue by: 
     *    * Choosing what part of the stylesheet will help you change the backgroundColor.
     *    * Figuring out how to get "blue" out of hex colors (you can Google This!).
     * */
    <View style={{
      backgroundColor: '#fff',
      justifyContent: 'center',
      flex: 1,
      margin:20
    }}>
      {/** A SCROLLVIEW is the area within which you can scroll up and down, or left and right in the space.
       * TODO: Answer the questions below and perform the required activity!
       *  * The First ScrollView says it scrolls "vertically." Does this mean it will scroll "left to right" 
       *    or "up to down?" What about the Second ScrollView? Test it out for yourself, and record your 
       *    answer below.
       *    MY ANSWER: 
       * 
       * 
       * 
       *  * Can you move the second scrollView so that it is in-between the first scrollView? What do you 
       *    observe happens? Record your answer below.
       *    MY ANSWER: 
       *     
       * 
       */} 
      
      <ScrollView vertical={true}> {/** First ScrollView */}
        
      </ScrollView>

      <ScrollView horizontal={true}> {/** Second ScrollView */}
          {/* TODO: In the stylesheet below, change the width to 1000, instead of 100.  What happens when you do this? Record your answers below.
          MY ANSWER: 
          
          
          */} 
          <Image 
          style = {{
            width: 100 *( 1 + pressedCount), 
            height: 100 * ( 1 + pressedCount)
            }}
            /** TODO: Set the source of the image to 'https://picsum.photos/100/100'*/
          source ={{uri: 'https://picsum.photos/100/100'}}
          />
        </ScrollView>
        <Text style={{margin: 16}}>
        {pressedCount > 0
          ? `The button was pressed ${pressedCount} times!`
          : 'The button isn\'t pressed yet'
        }
        </Text>
        <Button
        title='Press me'
        onPress={{/** TODO: Change this text to be the onPressButton text.  */}
        }
      />
    </View>
  );
};


export default App;
