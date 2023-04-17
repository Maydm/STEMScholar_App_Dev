/**
 * DO NOT DELETE THIS HEADER!
 * This file is the property of Maydm (c). Maydm is a 501(c)(3) registered nonprofit created to provide girls
 * and youth of color in grades 6 -12 with the skills, experiences, and connections to pursue careers in and
 * change the face of STEM. 
 * Written By: Anjali Gali, Maydm Programs Team
 * Edited By: *INSERT YOUR NAME HERE*
 */

/** Welcome to your fifth app! In this application, you are going to create a navigational structure in order 
 * to help your user log in and log out. It may be helpful to review how to make if and else statements. 
 * 
 * STEP 1: Create a new expo folder called 'stack-tab-drawer' by running the following command in your 
 * terminal. 
 *          expo init stack-tab-drawer
 * STEP 2: Import the following commands: 
 *         npm install @react-navigation/native
 *         npm install @react-navigation/stack
 * STEP 3: Copy (Ctrl + C) and Paste (Ctrl + V) the content in this file into your App.js file.
 * STEP 4: Start the app by running the command 'npx expo start.', and scanning the provided QR Code with your 
 *         app.
 * STEP 5: Add the required content to each of the sections.
 * STEP 6: Call over your teacher to ask any questions and show them your work.
 **/

import React, { createContext, useContext, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';
// Our global authentication state, with default values
export const AuthContext = createContext({
  hasUser: false, 
  setUser: () => {},
});

const LoginScreen = () => {
  const { setUser } = useContext(AuthContext);

  return (
    <View style={styles.layout}>
      {/** TODO: CHALLENGE 3: Create a button below that creates a new User. */}
      <Button onPress = {() => {
        //Add code here
      }}
      title = "Press Me!" />
      <Text style={styles.title}>Login</Text>
    </View>
  );
};

const FeedScreen = () => {
  const { setUser } = useContext(AuthContext);

  return (
    <View style={styles.layout}>
    
      <Text style={styles.title}>Feed</Text>
      {/** TODO: CHALLENGE 4: Create a button below that logs a user out */}
      <Button 
      onPress = {() => {
          // Add code here
    }}
      title = "Press Me!"
    />
    </View>
  );
};

const Stack = createStackNavigator();

export const AppNavigator = () => {
  const { hasUser } = useContext(AuthContext);
  //const isLoggedIn = this.state.isLoggedIn;
  return (
    <Stack.Navigator>
      {/** TODO: CHALLENGE 5: Create an if-else loop that navigated users to the FeedScreen if they are logged in and to the Login Screen if they are logged out. */}
      { //Add code here!
      } 
    </Stack.Navigator>
  );
};

const App = () => {
  // This is linked to our global authentication state.
  // We connect this in React to re-render components when changing this value.
  const [hasUser, setUser] = useState(false);

  return (
    <AuthContext.Provider value={{ hasUser, setUser }}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    marginBottom: 16,
  },
});