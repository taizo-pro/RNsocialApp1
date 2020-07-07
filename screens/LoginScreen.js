import React from 'react'
import {View, Text, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native'
import * as firebase from "firebase";

export default class LoginScreen extends React.Component {
  state = {
    email: '',
    password: '',
    errorMessage: null
  }

  handleLogin = () => {
    const {email, password} = this.state

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => this.setState({errorMessage: error.message}))
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.circle} />
        <View style={{marginTop: 64}}>
          <Image
            // source={require('../assets/conversation.png')}
            style={{alignSelf: 'center'}}
          />
        </View>

        <View style={{marginHorizontal: 32}}>
          <Text style={styles.header}>メールアドレス</Text>
          <TextInput 
            style={styles.input}
            placeholder='メールアドレスを入力してください'
            onChangeText={email => {
              this.setState({email})
            }}
            value={this.state.email}
          />

          <Text style={styles.header}>パスワード</Text>
          <TextInput 
            secureTextEntry
            style={styles.input}
            placeholder='パスワードを入力してください'
            onChangeText={password => {
              this.setState({password})
            }}
            value={this.state.password}
          />
          
          <View style={{alignItems: 'center', marginTop: 64}}>
            <TouchableOpacity 
              style={styles.button} 
              onPress={this.handleLogin}
            >
              <Text style={{color: 'white', fontWeight: '500'}}>ログイン</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={{alignSelf: 'center', marginTop: 32}}
              onPress={() => this.props.navigation.navigate('SignUp')}
            >
              <Text style={{color: 'black', fontSize: 13 }}>
                初めてご利用の方  <Text style={{fontWeight: '500', color: '#9075E3'}}>新規登録</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    backgroundColor: '#F4F5F7',
  },
  circle: {
    width: 550,
    height: 550,
    borderRadius: 500 / 2,
    backgroundColor: '#FFF',
    position: 'absolute',
    left: -120,
    top: -20,
  },
  header: {
    fontWeight: '500',
    fontSize: 16,
    color: 'grey',
    marginTop: 32,
  },
  input: {
    marginTop: 20,
    height: 58,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'grey',
    opacity: 0.7,
    borderRadius: 30,
    paddingHorizontal: 16,
    color: 'grey',
    fontWeight: '500',
  },
  button: {
    borderRadius: 4,
    backgroundColor: '#9075E3',
    marginHorizontal: 30,
    height: 50,
    width: 330,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
