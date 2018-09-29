import React, { Component } from "react";
import { Styles, Functions } from ".";
import { ImageBackground, StatusBar } from "react-native";
import { Container, Text, View, Item, Input, Button } from "native-base";
import colors from "../colors";
import { createAnimatableComponent } from "react-native-animatable";

var AnimatedContainer = createAnimatableComponent(ImageBackground);
var AnimatedText = createAnimatableComponent(Text);
var AnimatedView = createAnimatableComponent(View);
export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileSubmitted: false
    };
  }

  submitMobile(){
    this.setState({mobileSubmitted:true})
  }

  showloginPanel() {
    return (
      <AnimatedView style={Styles.loginPanel} animation="fadeInUp" delay={1000}>
        <Item full rounded style={[Styles.inputItem, Styles.panelItem]}>
          <Input
            placeholder="Mobile Number"
            placeholderTextColor={colors.hint}
            style={Styles.input}
          />
        </Item>
        <Button full rounded large style={[Styles.button, Styles.panelItem]} onPress={()=>this.submitMobile()}>
          <Text>Get OTP</Text>
        </Button>
      </AnimatedView>
    );
  }
  showOTPPanel() {
    return (
      <AnimatedView style={Styles.loginPanel} animation="fadeInUp" delay={1000}>
        <Item full rounded style={[Styles.inputItem, Styles.panelItem]}>
          <Input
            placeholder="One Time Password"
            placeholderTextColor={colors.hint}
            style={Styles.input}
          />
        </Item>
        <Button full rounded large style={[Styles.button, Styles.panelItem]}>
          <Text>Submit OTP</Text>
        </Button>
        <Button full rounded large style={[Styles.button, Styles.panelItem]} onPress={()=>this.setState({mobileSubmitted:false})}>
          <Text>Try another number</Text>
        </Button>
      </AnimatedView>
    );
  }

  render() {
    return (
      <Container style={{ backgroundColor: colors.primary }}>
        <AnimatedContainer
          animation="fadeIn"
          source={require("./background.jpg")}
          style={[Styles.screen]}
        >
          <StatusBar
            backgroundColor="#fff0"
            translucent={true}
            barStyle="light-content"
          />
          <AnimatedText style={Styles.brand} animation="fadeInUp" delay={500}>
            SKILLER
          </AnimatedText>
          {this.state.mobileSubmitted
            ? this.showOTPPanel()
            : this.showloginPanel()}
        </AnimatedContainer>
      </Container>
    );
  }
}
