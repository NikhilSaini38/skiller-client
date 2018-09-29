import {StyleSheet} from 'react-native';
import colors from '../colors';

export default StyleSheet.create(
    {
        screen:{
            justifyContent:"space-evenly",
            alignItems:"center",
            padding:20,
            flex:1
        },
        brand:{
            color:"rgba(255,255,255,0.9)",
            fontSize:64
        },
        loginPanel:{
            width:"100%",
            backgroundColor:"rgba(255,255,255,0.8)",
            borderRadius:30,
            padding:10
        },
        panelItem:{
            margin:10
        },
        inputItem:{
            borderColor:colors["accent-dark"]
        },
        input:{
            color: "black",
            textAlign:"center"
        },
        button:{
            backgroundColor:colors.primary
        }
    }
);