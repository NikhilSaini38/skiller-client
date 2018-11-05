import React, { Component } from "react";
import {
  StyleSheet,
  ImageBackground,
  Keyboard,
  Alert,
  BackHandler
} from "react-native";
import {
  View,
  Text,
  Container,
  Item,
  Input,
  Button,
  Spinner,
  Toast
} from "native-base";
import { Colors } from "..";
import firebase from "react-native-firebase";

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonDisabled: false,
      phone: ""
    };
    this._didFocusSubscription = props.navigation.addListener(
      "didFocus",
      payload =>
        BackHandler.addEventListener(
          "hardwareBackPress",
          this.onBackButtonPressAndroid
        )
    );
  }

  componentDidMount() {
    this._willBlurSubscription = this.props.navigation.addListener(
      "willBlur",
      payload =>
        BackHandler.removeEventListener(
          "hardwareBackPress",
          this.onBackButtonPressAndroid
        )
    );
  }

  onBackButtonPressAndroid = () => {
    Alert.alert(
      "Exit Skiller?",
      undefined,
      [
        { text: "Cancel", onPress: () => {}, style: "cancel" },
        {
          text: "OK",
          onPress: () => BackHandler.exitApp(),
          style: "destructive"
        }
      ],
      { cancelable: true }
    );
    return true;
  };

  componentWillUnmount() {
    this._didFocusSubscription && this._didFocusSubscription.remove();
    this._willBlurSubscription && this._willBlurSubscription.remove();
  }
  async getOTP() {
    if (this.state.phone.length > 10 && !this.state.buttonDisabled) {
      Keyboard.dismiss();
      this.setState({ buttonDisabled: true });
      firebase
        .auth()
        .signInWithPhoneNumber(this.state.phone, false)
        .then(
          () => {
            Toast.show({
              text: `OTP sent successfully`,
              position: "bottom",
              type: "success",
              duration: 3000
            });
            this.setState({ buttonDisabled: false });
          },
          () => {
            Toast.show({
              text:
                "Couldn't log in! Please check your number and try again...",
              position: "bottom",
              type: "warning",
              duration: 3000
            });
            this.setState({ buttonDisabled: false });
          }
        )
        .catch(() => {
          Toast.show({
            text: "Couldn't log in! Please check your number and try again...",
            position: "bottom",
            type: "warning",
            duration:3000
          });
          this.setState({ buttonDisabled: false });
        });
      // this.setState({buttonDisabled:false});
    }
  }

  render() {
    return (
      <ImageBackground
        source={require("./coffee.jpg")}
        resizeMethod="auto"
        style={Styles.Image}
      >
        <Text style={Styles.title}>SKILLER</Text>
        <View style={Styles.panel}>
          <Item style={[Styles.panelElement]}>
            <Input
              disabled={this.state.buttonDisabled}
              style={Styles.panelInput}
              placeholder="Full Mobile Number"
              placeholderTextColor={Colors.hint}
              keyboardType="phone-pad"
              returnKeyType="done"
              onChangeText={text => {
                this.setState({ phone: text });
              }}
              onSubmitEditing={event => {
                this.getOTP();
              }}
            />
          </Item>
          <Button
            disabled={this.state.buttonDisabled}
            full
            medium
            rounded
            style={[
              this.state.buttonDisabled
                ? Styles.buttonDisabled
                : Styles.buttonEnabled,
              Styles.panelElement
            ]}
            onPress={() => this.getOTP()}
          >
            {this.state.buttonDisabled ? (
              <Spinner color="white" />
            ) : (
              <Text>LOGIN</Text>
            )}
          </Button>
        </View>
      </ImageBackground>
    );
  }
}

let Styles = StyleSheet.create({
  Image: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 30
  },
  panel: {
    backgroundColor: "#FFFFFFAA",
    padding: 10,
    borderRadius: 30,
    alignItems: "center"
  },
  title: {
    color: "white",
    fontSize: 64
  },
  panelElement: {
    margin: 10
  },
  panelInput: {
    borderRadius: 30,
    borderColor: Colors["accent-dark"],
    borderWidth: 1,
    borderStyle: "solid",
    textAlign: "center"
  },
  buttonEnabled: {
    backgroundColor: Colors.primary
  },
  buttonDisabled: {
    backgroundColor: "grey"
  }
});
