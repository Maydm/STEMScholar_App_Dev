/**
 * DO NOT DELETE THIS HEADER!
 * This file is the property of Maydm (c). Maydm is a 501(c)(3) registered nonprofit created to provide girls
 * and youth of color in grades 6 -12 with the skills, experiences, and connections to pursue careers in and
 * change the face of STEM. 
 * Written By: Anjali Gali, Maydm Programs Team
 * Edited By: *INSERT YOUR NAME HERE*
 */

/**Welcome to your very first React Native App! In this App, we will explore the View, Text and Text Input 
 * features. Before we begin, we need to make sure we have all of the required tools to get started. So, 
 * we import them here:
 */
import React, { useState } from 'react'; // From the 'react' toolbox, we are using the 'useState' tool.
import { View, Text, TextInput } from 'react-native';
/** */
const App = () => {
  // TODO: CHALLENGE 1: Change the value of useState(). What happens and why?

  const [name, setName] = useState(''); // Here, we are setting up a constant variable 'name' that can be 
                                        // set to another value using 'setName'. We will use this so you can input your 
                                        // name. 

  return (
    /** Here, we are going to create some of the basic layout for our app, before we add functionality. 
     * The first thing we will add is a style. 
     * TODO: CHALLENGE 2: In 'View', add padding of size 16 to make some space. x
     * TODO: CHALLENGE 3: In 'Text', add a vertical margin of size 16 to make some space. 
     * 
     */
    <View style={{padding: 16}}>
      <Text style={{ marginVertical: 16 }}>
      {name ? `Hello ${name}!` : 'What is your name?\n'}
      </Text>
      {/** Here we have the TextInput component, where we will be entering text into the app.
       * TODO: CHALLENGE 4: If you change secureTextEntry to 'false', what happens to the text you enter?
       * TODO: CHALLENGE 5: onChangeText is empty. It needs to use the text stored inside it to the value of
       * name. Do this using the 'setName' from earlier.
       */}
      <TextInput
        style={{ padding: 8, backgroundColor: '#f5f5f5' }}
        secureTextEntry = {true}
        onChangeText={text => setName(text)
        }
      />
      {/** The Text component can control the font, font size, font color, and fontWeight.
       * TODO: CHALLENGE 6: Make "quick brown fox" bold using fontWeight.
      */}
      <Text>
        The
          <Text style = {{fontWeight: "bold"}}>  quick brown fox </Text>
        jumps over the lazy dog
      </Text>
    </View>
  );
};
/** */
export default App;
