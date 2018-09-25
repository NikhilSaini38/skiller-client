import {createSwitchNavigator,createStackNavigator} from 'react-navigation';
//@index(F:/.js):import ${variable:pascal} from ${relpath}
import SplashScreen from "./splash-screen"
///index

export default createSwitchNavigator(
    {
        //@index(F:/.js):"${variable:kebab}":${variable:pascal},
        "splash-screen":SplashScreen,
        ///index
    }
);