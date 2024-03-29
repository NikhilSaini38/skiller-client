import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

//@index(F:.js):import ${variable:pascal} from ${relpath}
import AddAddress from "./add-address"
import AddCard from "./add-card"
import AddInformation from "./add-information"
import Slides from "./slides"
///index

export {
    //@index(D:/.js):${variable:pascal},
    ///index
}

let OnBoardingNavigator = createSwitchNavigator(
    {
        //@index(F:/.js):"${variable:kebab}":${variable:pascal},
        "add-address":AddAddress,
        "add-card":AddCard,
        "add-information":AddInformation,
        "slides":Slides,
        ///index
    },
    {
        initialRouteName:'add-card'
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
