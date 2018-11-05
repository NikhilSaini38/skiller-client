import React, { Component } from "react";
import { StatusBar } from "react-native";
import {
    createSwitchNavigator,
    createStackNavigator,
    NavigationActions
} from "react-navigation";
import firebase from "react-native-firebase";
import { View, Container, Root } from "native-base";

//@index(F:.js):import ${variable:pascal} from ${relpath}
import Colors from "./colors"
import Login from "./login"
import MainNavigator from "./main-navigator"
import OnBoardingNavigator from "./on-boarding-navigator"
import SplashScreen from "./splash-screen"
///index

export {
    //@index(D:/.js):${variable:pascal},
    Colors,
    ///index
};

let AppRootNavigator = createSwitchNavigator(
    {
        //@index(F:/.js):"${variable:kebab}":${variable:pascal},
        "login":Login,
        "main-navigator":MainNavigator,
        "on-boarding-navigator":OnBoardingNavigator,
        "splash-screen":SplashScreen,
        ///index
    },
    {
        initialRouteName: "splash-screen"
    }
);

export default class AppRoot extends Component {
    navigate(routeName, params) {
        this.navigation.dispatch(
            NavigationActions.navigate({
                routeName,
                params
            })
        );
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(
            async user => {
                if (user) {
                    let onboarding = await firebase.firestore().doc(`users/${user.uid}`).get();
                    onboarding.data().onboarding == true ? this.navigate('on-boarding-navigator') : this.navigate('main-navigator')
                } else {
                    this.navigate('login');
                }
            }
        )
    }

    render() {
        return (
            <Root>
                <StatusBar backgroundColor={Colors.primary} barStyle="light-content" />
                <AppRootNavigator ref={ref => { this.navigation = ref }} />
            </Root>
        );
    }
}
