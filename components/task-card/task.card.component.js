import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {View,Text, Spinner} from 'native-base';
import firebase from 'react-native-firebase';

export default class componentName extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    let {data} = await firebase.firestore().doc(`tasks/${this.props.id}`).get();
    this.setState({...data()})
  }

  spinner(props){return <Spinner {...props}/>}
  
  render() {
   <Spinner />
  }
}

let Styles = StyleSheet.create({
  card:{
    width: '80%',
    flex:0
  }
})