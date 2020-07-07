import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default class LoadingScreen extends React.Component {
  render() {
    return(
      <View style={StyleSheet.container}>
        <Text>ローディング</Text>
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