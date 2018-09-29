import {StyleSheet} from 'react-native';
import colors from "../colors";

export default StyleSheet.create(
    {
        screen:{
            backgroundColor:colors.primary,
            alignItems:"center"
        },
        title:{
            color:"#FFFFFFEE",
            fontSize:28,
            zIndex:1,
            top:"45%"
        },
        spinner:{
            zIndex:0,
            top:"36%"
        }
    }
);