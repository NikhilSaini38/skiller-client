import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {View,Text, Container, Fab, Icon, Content, Spinner} from 'native-base';
import Colors from "../../colors";
import firebase from 'react-native-firebase';
import {TaskCard} from '../../../components/'
import * as _ from 'lodash';

export default class componentName extends Component {
  render() {
    return (
        <Container>
        <Content>
          {
            <Spinner />
          }
        </Content>
          <Fab
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: Colors.waiting }}
            position="bottomRight"
            onPress={() =>{this.props.navigation.navigate('add-task')}}>
            <Icon name="add" />
            </Fab>
        </Container>
    )
  }
}

let Styles = StyleSheet.create({
  
})