import React, { Component } from "react";
import { StatusBar, BackHandler, StyleSheet } from "react-native";
import { createSwitchNavigator, createStackNavigator, NavigationActions } from "react-navigation";
import Colors from "../colors";
import {Container, View, Button, Icon} from 'native-base'

//@index(F:.js):import ${variable:pascal} from ${relpath}
import AddTask from "./add-task"
import Home from "./home"
import Messages from "./messages"
import Notifications from "./notifications"
import Profile from "./profile"
import Settings from "./settings"
///index

export //@index(D:/.js):${variable:pascal},



///index
{ };

let MainNavigator = createSwitchNavigator({
    //@index(F:/.js):"${variable:kebab}":${variable:pascal},
    "add-task":AddTask,
    "home":Home,
    "messages":Messages,
    "notifications":Notifications,
    "profile":Profile,
    "settings":Settings,
    ///index
},{
    initialRouteName:'home'
});

export default class Main extends Component {
    constructor(props) {
        super(props);
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
        return true;
    };

    componentWillUnmount() {
        this._didFocusSubscription && this._didFocusSubscription.remove();
        this._willBlurSubscription && this._willBlurSubscription.remove();
    }

    navigate(routeName,params){
        this.navigator.dispatch(NavigationActions.navigate({routeName, params}));
    }
    navigator;
    render() {
        return (
            <Container>
                <Container>
                    <MainNavigator ref ={ref=>{this.navigator=ref}} />
                </Container>
                <View style={Styles.menu}>
                    <Button icon transparent onPress={() => this.navigate('home')}>
                        <Icon name="home" style={{ color: "white" }} />
                    </Button>
                    <Button icon transparent onPress={() => this.navigate('messages')}>
                        <Icon
                            type="MaterialIcons"
                            name="message"
                            style={{ color: "white" }}
                        />
                    </Button>
                    <Button icon transparent onPress={() => this.navigate('notifications')}>
                        <Icon
                            type="MaterialCommunityIcons"
                            name="bell"
                            style={{ color: "white" }}
                        />
                    </Button>
                    <Button icon transparent onPress={() => this.navigate('profile')}>
                        <Icon name="person" style={{ color: "white" }} />
                    </Button>
                    <Button icon transparent onPress={() => this.navigate('settings')}>
                        <Icon type="Octicons" name="gear" style={{ color: "white" }} />
                    </Button>
                </View>
            </Container>
        );
    }
}
let Styles = StyleSheet.create({
    menu: {
        height: 60,
        backgroundColor: Colors.primary,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly"
    }
});
