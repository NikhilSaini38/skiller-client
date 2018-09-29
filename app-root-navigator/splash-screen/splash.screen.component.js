import React, { Component } from 'react'
import { Styles, Functions } from '.';
import { Root, Container, View, Text, Spinner } from 'native-base';
import Colors from "../colors";
import * as Animatable from "react-native-animatable";
import { StatusBar } from 'react-native'

var AnimatedContainer = Animatable.createAnimatableComponent(Container);

export default class componentName extends Component {

  constructor(props) {
    super(props);
    this.state = {
      screenTransition: "fadeIn"
    }
  }


  componentDidMount() {
    setTimeout(() => {
      setTimeout(() => {
        this.props.navigation.navigate("login");
      }, 2000);
    }, 5000);
  }
  componentWillUnmount() {
    this.setState({ screenTransition: "fadeOut" });
  }

  render() {
    return (
      <AnimatedContainer style={Styles.screen} animation={this.state.screenTransition} duration={500}>
        <StatusBar
          backgroundColor="#fff0"
          translucent={true}
          barStyle="light-content"
        />
        <Text style={Styles.title}>SKILLER</Text>
        <Spinner style={Styles.spinner} color={Colors.success} size={200} ></Spinner>
      </AnimatedContainer>
    )
  }
}