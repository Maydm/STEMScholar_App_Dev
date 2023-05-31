import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Button, TextInput, Image } from 'react-native';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import {getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';

// TODO: import front page
// TODO: import search page
// TODO: import add new photo page

/** Upon loading the file, we automatically instantiate a page with the following: 
 *  - search bar - textInput option where we can search for specifically tagged photographs and images.
 *      - This should also contain a way to filter out all the selected images.  
 *  - A bunch of images organized on the page. 
 *      - when an image is clicked it should pop up with a simple description of the application. 
 *  - bottom tab navigator to navigate between:
 *      - home
 *      - adding new photo
 *      - search for new image
*/

/** Upon loading the file, we automatically instantiate a page with two buttons - a login button and a sign up button, along with the beginning of our react page.*/
/**<Image 
              source={{uri: element}}
              style={styles.images}
            />*/

export default function Explore({navigation}) {
  const storage = getStorage();
  const [imageUrls, setImageUrls] = useState([]);

  function displayImages(){
    
    
  }

  React.useEffect(() => {
      // Create a reference under which you want to list
      const listRef = ref(storage);
      const auth = getAuth();
      //displayImages();
      onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        // Find all the prefixes and items.
        listAll(listRef)
        .then((res) => {
            res.items.map((itemRef) => {
              // All the items under listRef.
              //console.log("getStorage passed!");
              getDownloadURL(ref(storage, itemRef.fullPath))
                .then((url) => {
                  //console.log(url);
                  setImageUrls(current => [...current, url]);
                  //console.log(url);
                });
            });
          }).catch((error) => {
            // Uh-oh, an error occurred!
            console.log(error);
          });
        
        // ...
      } else {
        // User is signed out
        // ...
        navigation.navigate('Login');
        //console.log('SignOut');
      }
    });
    }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{ flexDirection:"row-reverse"}}>
          <Button 
            style={styles.button}
            title = "Log Out" 
            color= 'black'
            onPress={() => signOut(getAuth())}/>
        </View>
      <View style={{ flexDirection:"column"}}>
        <View style={{ flexDirection:"row"}}>
          <Text style={styles.text}>
            EXPLORE
          </Text>
        </View>
      </View>
        <View style={{flexDirection:"column"}}>  
        {imageUrls && 
          imageUrls.map((image, i) => (
            <Image style={styles.images} source={{uri: image}} key={i}/>
          )
        )}
        </View>
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
    padding:30,
    margin:10,
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
  
  images:{
    alignItems: 'center',
    justifyContent: 'center',
    width:300,
    height:300,
    margin:20,
  }
  
});


