import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, Container, Spinner } from 'native-base';
import { Colors } from "..";
import { createAnimatableComponent } from "react-native-animatable";

let AnimatedContainer = createAnimatableComponent(Container);

export default class componentName extends Component {
  render() {
    return (
      <AnimatedContainer style={Styles.container}>
        <Text style={Styles.title}>SKILLER</Text>
        <Spinner color="white" size={64}/>
      </AnimatedContainer>
    )
  }
}

let Styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  title: {
    color: 'white',
    fontSize: 64
  }
});