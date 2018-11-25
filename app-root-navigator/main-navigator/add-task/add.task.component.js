import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {View,Text, Container, Item, Input, H1, Button} from 'native-base';
import { Colors } from '../..';
import firebase from 'react-native-firebase';

export default class componentName extends Component {
  async addTask(){
    let doc = await firebase.firestore().collection('tasks').add({...this.state, posted:new Date(), status:'online'});
    await firebase.firestore().collection(`clients/${firebase.auth().currentUser.uid}/tasks`).add({taskId:doc.id});
    this.props.navigation.navigate('home');
  }
  render() {
    return (
      <Container style={{justifyContent:'center',padding:20}}>
        <H1>Add New Task</H1>
        <Item style={Styles.formItem}>
          <Input placeholder="Description" onChangeText={description=>this.setState({description:description})}></Input>
        </Item>
        <Item style={Styles.formItem}>
          <Input placeholder="Address" onChangeText={address=>this.setState({address:address})}></Input>
        </Item>
        <Item style={Styles.formItem}>
          <Input placeholder="Estimate" onChangeText={estimate=>this.setState({estimate:estimate})}></Input>
        </Item>
        <Button full rounded style={{backgroundColor:Colors.success}} onPress={()=>this.addTask()}><Text>Post</Text></Button>
      </Container>
    )
  }
}

let Styles = StyleSheet.create({
  
})