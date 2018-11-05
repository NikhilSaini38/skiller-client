import React, { Component } from 'react';
import { StatusBar,BackHandler } from 'react-native';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

//@index(F:.js):import ${variable:pascal} from ${relpath}
import Home from "./home"
import { Container } from 'native-base';
import { Colors } from '..';
///index

export {
    //@index(D:/.js):${variable:pascal},

    ///index
}

let MainNavigator = createSwitchNavigator(
    {
        //@index(F:/.js):"${variable:kebab}":${variable:pascal},
        "home":Home,
        ///index
    }
);

export default class Main extends Component {
    constructor(props) {
        super(props);
        this._didFocusSubscription = props.navigation.addListener('didFocus', payload =>
            BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressAndroid)
        );
    }

    componentDidMount() {
        this._willBlurSubscription = this.props.navigation.addListener('willBlur', payload =>
            BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressAndroid)
        );
    }

    onBackButtonPressAndroid = () => {
    };

    componentWillUnmount() {
        this._didFocusSubscription && this._didFocusSubscription.remove();
        this._willBlurSubscription && this._willBlurSubscription.remove();
    }

    render(){
        return(
            <Container>
                <MainNavigator></MainNavigator>
            </Container>
        )
    }

};
