/** Upon loading the file, we automatically instantiate a page with the following: 
 *  - username section -> A textInput component
 *  - password section -> A textInput component
 *  - login -> A button to login
*/
import { StatusBar } from 'expo-status-bar';
import { useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

/** Upon loading the file, we automatically instantiate a page with two buttons - a login button and a sign up button, along with the beginning of our react page.*/
export default function Login({navigation}) {
  const [email, setEmail] = useState(""); // Sets the email
  const [password, setPassword] = useState(""); // Sets the password

  function SignIn(){
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      navigation.navigate('TabNav', {screen:'Explore'})
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + ": " + errorMessage);
    });
  }

  return (
    <View style={styles.container}>
      <View style={{ flexDirection:"column"}}>
        <Text style={styles.text}>
          LOGIN
        </Text>
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
          secureTextEntry={false}
          style={styles.input}
          onChangeText={(e) => setPassword(e)}/>
        </View >
      </View>
        <View style={{flexDirection:"column"}}>
              <Button 
              style={styles.button}
              title = "Log In" 
              color= 'black'
              onPress={() =>SignIn()}/> 
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
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
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


