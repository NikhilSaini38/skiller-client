import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {View,Text, Container, Item, Button, Input} from 'native-base';
import * as firebase from 'react-native-firebase';
import Colors from "../../colors";


export default class componentName extends Component {

  async updateDB(){
    await firebase.firestore().doc(`clients/${firebase.auth().currentUser.uid}`).collection('addresses').add({...this.state});
    this.props.navigation.navigate('add-card');
  }
  render() {
    return (
      <Container style={{alignItems:'center',justifyContent:'center', padding: 20}}>
        <Item rounded style={Styles.formItem}>
          <Input placeholder="Apartment Address" onChangeText={apartment=> this.setState({apartment:apartment})} style={Styles.inputItem}/>
        </Item>
        <Item rounded style={Styles.formItem}>
          <Input placeholder="Street Address" onChangeText={street=> this.setState({street:street})} style={Styles.inputItem}/>
        </Item>
        <Item rounded style={Styles.formItem}>
          <Input placeholder="City" onChangeText={city=> this.setState({city:city})} style={Styles.inputItem}/>
        </Item>
        <Item rounded style={Styles.formItem}>
          <Input placeholder="ZipCode" onChangeText={zip=> this.setState({zip:zip})} style={Styles.inputItem}/>
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