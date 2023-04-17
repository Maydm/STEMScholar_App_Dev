import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import SignUp from './signup';
// TODO: import sign up page

/** Upon loading the file, we automatically instantiate a page with two buttons - a login button and a sign up button, along with the beginning of our react page.*/
export default function LandingPage({navigation}) {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection:"row"}}>
          <Text style={styles.text}>
            AESTHETIC PHOTO APP
          </Text>
        </View>
  
        <View style={{ flexDirection:"row"}}>
          <View style={styles.button}>
            <Button 
              title="Sign Up" 
              color= 'black'
              onPress={() =>
                navigation.navigate('SignUp')
                }/> 
          </View>
  
          <View style={styles.button}>
            <Button 
            title = "Log In" 
            color= 'black'
            onPress={() =>
              navigation.navigate('Login')}/> 
          </View>
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
      paddingTop:200,
      margin:20,
    },
  
    text: {
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 30,
      fontWeight: 'bold',
    }
  });