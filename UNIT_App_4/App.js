//FIXME: Add comments here
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
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  /** set this up so that the bar is red and set in the center using the flexbox. */
  redBar: {

  },
  greenBar: {

  },
  blueBar: {

  }
});
