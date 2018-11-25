import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {View,Text, Container, Item, Button, Input} from 'native-base';
import * as firebase from 'react-native-firebase';

export default class componentName extends Component {

  async updateDB(){
    await firebase.firestore().doc(`clients/${firebase.auth().currentUser.uid}`).collection('cards').add({...this.state});
    await firebase.firestore().doc(`clients/${firebase.auth().currentUser.uid}`).update({onboarding:false})
  }
  render() {
    return (
      <Container style={{alignItems:'center',justifyContent:'center', padding: 20}}>
        <Item rounded style={Styles.formItem}>
          <Input placeholder="Card Number" onChangeText={number=> this.setState({number:number})} style={Styles.inputItem}/>
        </Item>
        <Item rounded style={Styles.formItem}>
          <Input placeholder="Expiry month" onChangeText={expMonth=> this.setState({expMonth:expMonth})} style={Styles.inputItem}/>
        </Item>
        <Item rounded style={Styles.formItem}>
          <Input placeholder="Expiry year" onChangeText={expYear=> this.setState({expYear:expYear})} style={Styles.inputItem}/>
        </Item>
        <Item rounded style={Styles.formItem}>
          <Input placeholder="CVC/CVC" onChangeText={cvv=> this.setState({cvv:cvv})} style={Styles.inputItem}/>
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