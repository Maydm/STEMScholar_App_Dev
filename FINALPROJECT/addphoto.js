import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Button, TextInput, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { getStorage, ref, uploadBytes } from "firebase/storage";
/** Upon loading the file, we automatically instantiate a page with the following: 
 *  - A way to select and add an image.  
 *  - Name: TextInput for you to name your work
 *  - Author: TextInput for you to describe author
 *  - Description: TextInput for you to describe your work
 *  - Post: Button for you to post your work. 
 *  - bottom tab navigator to navigate between:
 *      - home
 *      - adding new photo
 *      - search for new image
*/

/**<View style={styles.imageBox}/> - Removed from line 52. Refer back if pickImage fails.*/
/** Upon loading the file, we automatically instantiate a page with two buttons - a login button and a sign up button, along with the beginning of our react page.*/
export default function AddPhoto() {

  /** Method to add an image using image picker. */
const [image, setImage] = useState();
let id = 0;
uploadImage = async(uri) => {
  const storage = getStorage();
  var filename = uri.substring(uri.lastIndexOf('/') + 1, uri.length);
  const storageRef = ref(storage,filename);
  const response = await fetch(uri);
  const blob = await response.blob();
  console.log("success!!")
  uploadBytes(storageRef, blob);
  

  // 'file' comes from the Blob or File API
  // uploadBytes(blob).then((snapshot) => {
  //   console.log('Uploaded a blob or file!');
  // });
}

const pickImage = async () => {
  // No permissions request is necessary for launching the image library
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });
  console.log(result);

  if (!result.canceled) {
    setImage(result.assets[0].uri);
  }
};

  return (
    <ScrollView>
      <View style={styles.container}>
      <View style={{ flexDirection:"column"}}>
        <Text style={styles.text}>
          POST PHOTO
        </Text>
      </View>
      <View style={{flexDirection:"column"}}>
        <View style = {{flexDirection:"row-reverse"}}>
          <Button 
          style={styles.button} 
          title='Add Photo'
          onPress={pickImage}/>
        </View>
        <View style = {{flexDirection:"row"}}>
          
          {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        </View>
      </View>
      <View style = {{flexDirection:"row"}}>
        <View style = {{flexDirection:"column"}}>
          <Text style = {styles.subtext}>
              Title
            </Text>
            
            <Text style = {styles.subtext}>
              Author
            </Text>

            <Text style = {styles.subtext}>
              Description
            </Text>
            
        </View >
        <View style = {{flexDirection:"column"}}>
            <TextInput style={styles.input} placeholder='Stuff Here'/>
            <TextInput style={styles.input} placeholder='Stuff Here'/>
            <TextInput style={styles.largeInput} placeholder='Stuff Here'/>
        </View>
      </View >
      <Button 
          style={styles.button} 
          title='Post Photo'
          onPress={() => uploadImage(image)}/>
      <StatusBar style="auto" />
      </View>
    </ScrollView>
  );  
}
/** We use the functionality below to make our own stylesheet which we can then apply across the page.  */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'baseline',
    justifyContent: 'flex-start',
    margin:60
  },
  button:{
    paddingTop:30,
    margin:20,
  },
  subtext:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 40,
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
  

  largeInput: {
    height: 200, 
    width: 200, 
    margin: 20,
    marginTop: 30,
    padding: 20,
    backgroundColor:'#d9d9d9',
    color:'#fff'
  },
  images:{
    alignItems: 'center',
    justifyContent: 'center',
    width:300,
    height:300,
    margin:20,
  },
  imageBox:{
    width:300,
    height:300,
    backgroundColor:'#d9d9d9',
  }
  
});


