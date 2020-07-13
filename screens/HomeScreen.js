import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import * as firebase from "firebase";
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class HomeScreen extends React.Component {
  state = {
    email: '',
    displayName: ''
  }

  componentDidMount() {
    // const {email, displayName} = firebase.auth().currentUser

    // this.setState({email, displayName})
  }

  signOutUser = () => {
    firebase.auth().signOut()
  }

  render() {
    return(
      <View style={styles.container}>
        {/* <Text>こんにちは {this.state.email}!</Text> */}

        <TouchableOpacity 
          style={{marginTop: 32}}
          onPress={this.signOutUser}
        >
          <Text>ログアウト</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})