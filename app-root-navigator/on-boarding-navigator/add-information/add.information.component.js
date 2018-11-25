import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {View,Text, Container, Item, Input, Button} from 'native-base';
import * as firebase from 'react-native-firebase';

export default class componentName extends Component {
  async updateDB(){
    await firebase.firestore().doc(`clients/${firebase.auth().currentUser.uid}`).update({...this.state});
    this.props.navigation.navigate('add-address');
  }
  render() {
    return (
      <Container style={{alignItems:'center',justifyContent:'center', padding: 20}}>
        <Item rounded style={Styles.formItem}>
          <Input placeholder="First Name" onChangeText={firstName=> this.setState({firstName:firstName})} style={Styles.inputItem}/>
        </Item>
        <Item rounded style={Styles.formItem}>
          <Input placeholder="Last Name" onChangeText={lastName=> this.setState({lastName:lastName})} style={Styles.inputItem}/>
        </Item>
        <Item rounded style={Styles.formItem}>
          <Input placeholder="Email" onChangeText={email=> this.setState({email:email})} style={Styles.inputItem}/>
        </Item>
        <Button full rounded style={[{backgroundColor:Colors.primary},Styles.formItem]} onPress={()=>this.updateDB()}><Text>Continue</Text></Button>
      </Container>
    )
  }
}

let Styles = StyleSheet.create({
  formItem:{
    margin: 10
  },
  inputItem: {
    textAlign:'center'
  }
})