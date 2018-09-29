import {createSwitchNavigator,createStackNavigator} from 'react-navigation';
//@index(F:/.js):import ${variable:pascal} from ${relpath}
import Login from "./login"
import SplashScreen from "./splash-screen"
///index

export default createSwitchNavigator(
    {
        //@index(F:/.js):"${variable:kebab}":${variable:pascal},
        "login":Login,
        "splash-screen":SplashScreen,
        ///index
    },
    {
        initialRouteName:"login"
    }
);