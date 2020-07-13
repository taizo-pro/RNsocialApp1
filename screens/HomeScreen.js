import React from 'react'
import {View, Text, StyleSheet,} from 'react-native';
import {Container, Header, Left, Body, Right, Title} from 'native-base'
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
      <Container>
        <Header style={{backgroundColor: 'mediumpurple'}}>
          <Left></Left>
          <Body>
            <Title>ホーム</Title>
          </Body>
          <Right></Right>
        </Header>
      <View style={styles.container}>
        {/* <Text>こんにちは {this.state.email}!</Text> */}

        <TouchableOpacity 
          style={{marginTop: 32}}
          onPress={this.signOutUser}
        >
          <Text>ログアウト</Text>
        </TouchableOpacity>
      </View>

      </Container>
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