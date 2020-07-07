import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import * as firebase from 'firebase';

export default class RegisterScreen extends React.Component {
  state = {
    userName: '',
    email: '',
    password: '',
    errorMessage: null,
  };

  handleSignUp = async () => {
    await firebase
    .auth()
    .createUserWithEmailAndPassword(this.state.email, this.state.password);

    this.props.navigation.navigate('Home')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.circle} />
        <View style={{marginTop: 64}}>
          <Image
            source={require('../assets/conversation.png')}
            style={{alignSelf: 'center'}}
          />
          <TouchableOpacity 
            style={styles.back}
            onPress={() => this.props.navigation.goBack()}
          >
            <Image 
              source={require('../assets/arrow.png')}
              style={{width: 16, height: 16, alignSelf: 'center' }}
            />
          </TouchableOpacity>
        </View>

        <View style={{marginHorizontal: 32}}>
          <Text style={styles.header}>ユーザー名</Text>
          <TextInput
            style={styles.input}
            placeholder="ユーザー名を入力してください"
            onChangeText={userName => {
              this.setState({userName});
            }}
            value={this.state.userName}
          />

          <Text style={styles.header}>メールアドレス</Text>
          <TextInput
            style={styles.input}
            placeholder="メールアドレスを入力してください"
            onChangeText={email => {
              this.setState({email});
            }}
            value={this.state.email}
          />

          <Text style={styles.header}>パスワード</Text>
          <TextInput
            secureTextEntry
            style={styles.input}
            placeholder="パスワードを入力してください"
            onChangeText={password => {
              this.setState({password});
            }}
            value={this.state.password}
          />

          <View style={{alignItems: 'center', marginTop: 64}}>
            <TouchableOpacity 
              style={styles.button} 
              onPress={this.handleSignUp}>
              <Text style={{color: 'white', fontWeight: '500'}}>登録する</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
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
  },
  back: {
    position: 'absolute',
    top: 20,
    left: 32,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(21, 22, 48, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
