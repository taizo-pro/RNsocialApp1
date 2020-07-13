import React from 'react'
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native'
import * as firebase from "firebase";

export default class NotificationScreen extends React.Component {

  render() {
    return(
      <View style={styles.container}>
        <Text>Notification</Text>
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