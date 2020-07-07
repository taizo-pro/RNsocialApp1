import React from 'react'
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native'
import * as firebase from "firebase";

export default class ChatScreen extends React.Component {

  render() {
    return(
      <View style={styles.container}>
        <Text>Chat</Text>
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