// FIXME: Add comments to code to setup and fix the required portions of code. 
/**
 * DO NOT DELETE THIS HEADER!
 * This file is the property of Maydm (c). Maydm is a 501(c)(3) registered nonprofit created to provide girls
 * and youth of color in grades 6 -12 with the skills, experiences, and connections to pursue careers in and
 * change the face of STEM. 
 * Written By: Anjali Gali, Maydm Programs Team
 * Edited By: *INSERT YOUR NAME HERE*
 */

/** Welcome to your second app! In this App, we will explore the Button, Image and ScrollView options.  
 * features. Before we begin, we need to make sure we have all of the required tools to get started. So, 
 * we import them here:
 */
import { useState } from 'react';
import React, { Image, ScrollView, Button, Text, View } from 'react-native';

const App = () => {
  const[pressedCount, setPressedCount] = useState(0);

  return (
    /** This is a stylesheet, try and change the background color. */
    <View style={{
      backgroundColor: '#fff',
      justifyContent: 'center',
      flex: 1,
      margin:20
    }}>
      {/* Nest the two ScrollViews.*/} 
      
      <ScrollView vertical={true}>
        <ScrollView horizontal={true}>
          {/* Set the width to 1000, instead of 100.*/} 
          <Image 
          style = {{
            width: 100 *( 1 + pressedCount), 
            height: 100 * ( 1 + pressedCount)
            }}
            /** set the source of the image to 'https://picsum.photos/100/100'*/
          source ={{uri: 'https://picsum.photos/100/100'}}
          />
          </ScrollView>
        </ScrollView>
        <Text style={{margin: 16}}>
        {pressedCount > 0
          ? `The button was pressed ${pressedCount} times!`
          : 'The button isn\'t pressed yet'
        }
        </Text>
        <Button
        title='Press me'
        onPress={() => 
        setPressedCount(pressedCount + 1)
        }
      />
    </View>
  );
};


export default App;
