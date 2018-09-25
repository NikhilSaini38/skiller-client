import React, { Component } from 'react'
import {Styles,Functions} from '.';
import { Root, Container, View, Text } from 'native-base';

export default class componentName extends Component {
  render() {
    return (
      <Container style={Styles.screen}>
        <Text style={Styles.title}>Skiller</Text>
      </Container>
    )
  }
}