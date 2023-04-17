/**
 * DO NOT DELETE THIS HEADER!
 * This file is the property of Maydm (c). Maydm is a 501(c)(3) registered nonprofit created to provide girls
 * and youth of color in grades 6 -12 with the skills, experiences, and connections to pursue careers in and
 * change the face of STEM. 
 * Written By: Anjali Gali, Maydm Programs Team
 * Edited By: *INSERT YOUR NAME HERE*
 */

/** Welcome to the third app! For this app, you are presented with a puzzle. There is tiger scrambled up in 
 * the app, and you must use your experience with flexBoxes, justifyContent and flexDirection to change and 
 * alter their positions, to complete the picture provided.
 * 
 * STEP 1: Create a new expo folder called 'flexbox-puzzle' by running the following command in your terminal. 
 *          expo init flexbox-puzzle
 * STEP 2: Copy (Ctrl + C) and Paste (Ctrl + V) the content in this file into your App.js file.
 * STEP 3: Start the app by running the command 'npx expo start.', and scanning the provided QR Code with your 
 *         app.
 * STEP 4: Move the 'tiger' folder to your assets folder.
 * STEP 5: Answer each of the questions in the sections below.
 * STEP 6: Based on the positions of each image, change the photo links to be the apprpriate piece that
 *         goes in that position.
 * STEP 7: Call over your teacher to ask any questions and show them your work. 
 * */

import { StatusBar } from 'expo-status-bar';
import { Image, Text, View } from 'react-native';

export default function App() {
  return (
    // The stylesheets in each component contain options to align each item (alignItem), set the 
    // justifyContent and the flexDirection. 
    
    <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center', 
    }}>
      <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#F5FCFF',
        }}>
      <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {/** TODO: 
         * What position is the puzzle piece below in, currently? 
         * ANS:  
         * 
         * What position is it supposed to be in? 
         * ANS:
         * 
         * */}
        <Image style={
          {
            width: 100,
            height: 100,
            backgroundColor: 'blue',
            margin: 5,
          }
        }source={require("./assets/tiger/image_part_001.jpg")}/> {/** After answering all the questions, change the image link to be wheichever is appropriate.*/}

         {/** TODO: 
         * What position is the puzzle piece below in, currently? 
         * ANS:  
         * 
         * What position is it supposed to be in? 
         * ANS:
         * 
         * */}
        <Image style={
          {
            width: 100,
            height: 100,
            backgroundColor: 'blue',
            margin: 5,
          }
        }source={require("./assets/tiger/image_part_002.jpg")}/> {/** After answering all the questions, change the image link to be wheichever is appropriate.*/}
      </View>
      <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>

        {/** TODO: 
         * What position is the puzzle piece below in, currently? 
         * ANS:  
         * 
         * What position is it supposed to be in? 
         * ANS:
         * 
         * */}
        <Image style={
          {
            width: 100,
            height: 100,
            backgroundColor: 'blue',
            margin: 5,
          }
        }source={require("./assets/tiger/image_part_003.jpg")}/> {/** After answering all the questions, change the image link to be wheichever is appropriate.*/}

        {/** TODO: 
         * What position is the puzzle piece below in, currently? 
         * ANS:  
         * 
         * What position is it supposed to be in? 
         * ANS:
         * 
         * */}
        <Image style={
          {
            width: 100,
            height: 100,
            backgroundColor: 'blue',
            margin: 5,
          }
        }source={require("./assets/tiger/image_part_004.jpg")}/> {/** After answering all the questions, change the image link to be wheichever is appropriate.*/}
      </View>
      
    </View>
      <Text style ={{
        padding:50, 
        }}>
          Use the flexBox and justifyContent features to move the images until you get a bigger picture!
      </Text>
      <StatusBar style="auto" />
      </View>
  );
}

