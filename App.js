import * as React from 'react';

import {NavigationContainer,} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import LoadingScreen from './screens/LoadingScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import HomeScreen from './screens/HomeScreen'
import ChatScreen from './screens/ChatScreen';
import ProfileScreen from './screens/ProfileScreen';
import PostScreen from './screens/PostScreen';

import * as firebase from "firebase";
import { cos } from 'react-native-reanimated';

var firebaseConfig = {
  apiKey: "AIzaSyAjgGAS2AomIDr4MFmGfQezpoXjpiEH6o8",
  authDomain: "socialapp1-e3cf0.firebaseapp.com",
  databaseURL: "https://socialapp1-e3cf0.firebaseio.com",
  projectId: "socialapp1-e3cf0",
  storageBucket: "socialapp1-e3cf0.appspot.com",
  messagingSenderId: "217133595072",
  appId: "1:217133595072:web:fec34bd399458d6e6c3025",
  measurementId: "G-GEWYS4SH5Q"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Chat' component={ChatScreen} />
      <Tab.Screen name='Post' component={PostScreen} />
      <Tab.Screen name='Profile' component={ProfileScreen} />
    </Tab.Navigator>
  )
}

export default function App() {

  return(
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  )
}