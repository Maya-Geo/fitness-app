import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WelcomePage from '../screens/WelcomePage';
import Login from '../screens/Login';
// import Register from '../screens/Register';
import HomePage from '../screens/HomePage';
import FullBody from '../screens/FullBody';
import UpperBody from '../screens/UpperBody';
import LowerBody from '../screens/LowerBody';
import HydrationPage from '../screens/HydrationPage';
import SettingsPage from '../screens/SettingsPage';
import Trainees from '../screens/Trainees';
import DietPage from '../screens/DietPage';


import { createStackNavigator } from '@react-navigation/stack';
import Registerr from '../screens/Registerr';




const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
         <Stack.Navigator initialRouteName="WelcomePage">
        <Stack.Screen
          name="Welcome"
          component={WelcomePage}
          options={{ headerShown: false }}
        />

        <Stack.Screen
        name="Login"
        component={Login}
        options= {{ headerShown: false }}
        />
        
        
        {/* <Stack.Screen 
        name="Register"
        component={Register}
        options={{headerShown: false}}
        /> */}

        <Stack.Screen
        name="Registerr"
        component={Registerr}
        options={{headerShown: false}}
      />

        <Stack.Screen
        name="HomePage"
        component={HomePage}
        options= {{headerShown: false}}
        />

        <Stack.Screen
        name="FullBody"
        component={FullBody}
        options= {{headerShown: false}}
        />

       <Stack.Screen
        name="UpperBody"
        component={UpperBody}
        options= {{headerShown: false}}
        />

       <Stack.Screen
        name="LowerBody"
        component={LowerBody}
        options= {{headerShown: false}}
        />
        
        <Stack.Screen
        name="DietPage"
        component={DietPage}
        options= {{headerShown: false}}
        />

        <Stack.Screen
        name="HydrationPage"
        component={HydrationPage}
        options= {{headerShown: false}}
        />

        <Stack.Screen
        name="Settings"
        component={SettingsPage}
        options= {{headerShown: false}}
        />


        <Stack.Screen
        name="Trainees"
        component={Trainees}
        options= {{headerShown: false}}
        />  

        


        



    </Stack.Navigator>
   
  )
}

export default StackNavigator

const styles = StyleSheet.create({})