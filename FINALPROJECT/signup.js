import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import auth from "./firebaseConfig";
// TODO: import front page

/** Upon loading the file, we automatically instantiate a page with the following: 
 *  - username section -> A textInput component
 *  - email section -> A textInput component
 *  NOTE: The next two should match. 
 *  - password section -> A textInput component
 *  - confirm password section -> A textInput component
 *  - login -> A button to login
*/

/** Upon loading the file, we automatically instantiate a page with two buttons - a login button and a sign up button, along with the beginning of our react page.*/
export default function Signup({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  function Register() {
    const auth = getAuth();
    console.log(email);
    console.log(password);
    console.log(auth);

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
      navigation.navigate('TabNav', {screen:'Explore'})
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + ": " + errorMessage);
      // ..
    });
    
  }
  

  return (
    <View style={styles.container}>
      <View style={{ flexDirection:"column"}}>
        <Text style={styles.text}>
          REGISTER
        </Text>
      </View>
      <View style={{flexDirection:"column"}}>
        <View style = {{flexDirection:"row"}}>
          <Text style = {styles.subtext}>
            Username
          </Text>
          <TextInput 
          style={styles.input}
          onChangeText={(e) => setUsername(e)}/>
        </View >
      </View>
      <View style={{flexDirection:"column"}}>
        <View style = {{flexDirection:"row"}}>
          <Text style = {styles.subtext}>
            Email_____
          </Text>
          <TextInput 
          style={styles.input}
          onChangeText={(e) => setEmail(e)}/>
        </View >
      </View>
      <View style={{flexDirection:"column"}}>
        <View style = {{flexDirection:"row"}}>
          <Text style = {styles.subtext}>
            Password
          </Text>
          <TextInput 
          style={styles.input}
          onChangeText={(e) => setPassword(e)}/>
        </View >
      </View>
        <View style={{flexDirection:"column"}}>
              <Button 
              style={styles.button}
              title = "Sign Up" 
              color= 'black'
              onPress={() => Register()}/> 
        </View>
      <StatusBar style="auto" />
    </View>
  );  
}
/** We use the functionality below to make our own stylesheet which we can then apply across the page.  */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    flexDirection:"column", 
    paddingTop:30,
    margin:20,
  },
  subtext:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  }, 
  
  input: {
    height: 25, 
    width: 200, 
    margin: 20,
    backgroundColor:'#d9d9d9'
  },
  
  
});



