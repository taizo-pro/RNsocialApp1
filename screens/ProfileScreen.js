import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, Image,} from 'react-native'
import * as firebase from "firebase";
import { Header, Body, Right, Left, Container, Title,  } from 'native-base';

export default class ProfileScreen extends React.Component {

  render() {
    return(
      <Container>
      <Header style={{backgroundColor: 'mediumpurple'}}>
        <Left></Left>
        <Body>
          <Title style={{color: 'white'}}>マイページ</Title>
        </Body>
        <Right></Right>
      </Header>

      <ScrollView>
      <View>
        
          <TouchableOpacity style={styles.columnView}>
            <Text>プロフィールを変更する</Text>
            <Image 
              style={{width: 20, height: 20}}
              source={require('../assets/arrow-forward.png')} 
            />
          </TouchableOpacity>
        
          <TouchableOpacity style={styles.columnView}>
            <Text>パスワードを変更する</Text>
            <Image 
              style={{width: 20, height: 20}}
              source={require('../assets/arrow-forward.png')} 
            />
          </TouchableOpacity>  
        
          <TouchableOpacity style={styles.columnView}>
            <Text>お問い合わせ</Text>
            <Image 
              style={{width: 20, height: 20}}
              source={require('../assets/arrow-forward.png')} 
            />
          </TouchableOpacity>
        
          <TouchableOpacity style={styles.columnView}>
            <Text>利用規約</Text>
            <Image 
              style={{width: 20, height: 20}}
              source={require('../assets/arrow-forward.png')} 
            />
          </TouchableOpacity>
        
      </View>
      </ScrollView>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  columnView: {
    height: 45, 
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'space-between', 
    borderBottomWidth: 0.5, 
    borderBottomColor: 'lightgrey',
  },
})