import React, { createContext, useContext, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; // This is one of the import statements you will need to have for your project to work. 
//TODO: CHALLENGE 1: Import NavigationContainer from the react-navigation/native library
import { createStackNavigator } from '@react-navigation/stack';
// This is one of the import statements you will need to have for your project to work. 
//TODO: CHALLENGE 2: Import createStackNavigator from the react-navigation/stack library

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
        setUser(true);
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
      {/** TODO: CHALLENGE 4: Create a button below that logs a use out */}
      <Button 
      onPress = {() => {
      setUser(false);
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
      { hasUser? <Stack.Screen name="Feed" component={FeedScreen} /> 
        : <Stack.Screen name="Login" component={LoginScreen} />
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