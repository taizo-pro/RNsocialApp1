import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default class RegisterScreen extends React.Component {
  render() {
    return(
      <View style={StyleSheet.container}>
        <Text>登録</Text>
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