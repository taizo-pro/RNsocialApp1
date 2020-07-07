import * as React from 'react';

import {NavigationContainer,} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

// import LoadingScreen from './screens/LoadingScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import HomeScreen from './screens/HomeScreen'

import * as firebase from "firebase";

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

// const AppStack = createStackNavigator({
//   Home: HomeScreen
// })

// const AuthStack = createStackNavigator({
//   Login: LoginScreen,
//   Register: RegisterScreen
// })

// export default createAppContainer(
//   createSwitchNavigator(
//     {
//       Loading: LoadingScreen,
//       App: AppStack,
//       Auth: AuthStack
//     },
//     {
//       initialRouteName: 'Loading'
//     }
//   )
// )

const Stack = createStackNavigator()

export default function App() {

  return(
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Login'
        screenOptions={{
          headerTintColor: 'white',
          headerStyle: {
            
          }
        }}
      >
          {/* <Stack.Screen name='Loading' component={LoadingScreen} options={{headerShown: false}} /> */}
          <Stack.Screen name='SignIn' component={LoginScreen} options={{headerShown: false}}/>
          <Stack.Screen name='SignUp' component={RegisterScreen} options={{headerShown: false}}/>
          <Stack.Screen name='Home' component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}