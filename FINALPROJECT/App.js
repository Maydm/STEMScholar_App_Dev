import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LandingPage from './landingPage';
import SignUp from './signup';
import Login from './login';
import Explore from './explore';
import AddPhoto from './addphoto';
import Ionicons from 'react-native-vector-icons/Ionicons'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNav(){
  return(
    <Tab.Navigator initialRouteName="Explore"
      screenOptions={(route)=> ({
        tabBarIcon: (tabInfo) => {
          let iconName;
            if (route.route.name === "Explore") {
              iconName = 'search';
            } else if (route.route.name === "AddPhoto") {
              iconName = 'add';
            }
            return <Ionicons
              name={iconName}
              size={24}
              color={tabInfo.focused ? "#006600" : "#8e8e93"}
            />;
          }
      })}>
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="AddPhoto" component={AddPhoto} />
    </Tab.Navigator>
  )
  
}

/** Upon loading the file, we automatically instantiate a page with two buttons - a login button and a sign up button, along with the beginning of our react page.*/
export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="LandingPage">
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="TabNav" component={TabNav} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  
  );  
}
