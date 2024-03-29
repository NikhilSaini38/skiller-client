import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

//@index(F:.js):import ${variable:pascal} from ${relpath}
///index

export {
    //@index(D:/.js):${variable:pascal},
    ///index
}

let {{ pascalCase name }}Navigator = createSwitchNavigator(
    {
        //@index(F:/.js):"${variable:kebab}":${variable:pascal},
        ///index
    }
);

export default class {{ pascalCase name }} extends Component {
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
            <{{pascalCase name}}Navigator></{{pascalCase name}}Navigator>
        )
    }

};
