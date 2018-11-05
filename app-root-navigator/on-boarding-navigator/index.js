import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

//@index(F:.js):import ${variable:pascal} from ${relpath}
import Slides from "./slides"
import { Toast } from 'native-base';
///index

export {
    //@index(D:/.js):${variable:pascal},

    ///index
}

let OnBoardingNavigator = createSwitchNavigator(
    {
        //@index(F:/.js):"${variable:kebab}":${variable:pascal},
        "slides":Slides,
        ///index
    }
);

export default class OnBoarding extends Component {

    constructor(props) {
        super(props);
        this.state={appExiting:false};
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
        if(this.state.appExiting){
            BackHandler.exitApp();
        }else{
            this.setState({appExiting:true});
            Toast.show({
                text:'Press back again to exit the App...',
                type:'danger',
                duration:3000
            });
            setTimeout(() => {
                this.setState({appExiting:false});
            }, 3000);
        }
        return true;
    };

    componentWillUnmount() {
        this._didFocusSubscription && this._didFocusSubscription.remove();
        this._willBlurSubscription && this._willBlurSubscription.remove();
    }

    render(){
        return(
            <OnBoardingNavigator></OnBoardingNavigator>
        )
    }

};
