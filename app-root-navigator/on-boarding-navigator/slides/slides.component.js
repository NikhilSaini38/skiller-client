import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {View,Text, Button, Container, DeckSwiper, Card, H1, CardItem} from 'native-base';
import firebase from 'react-native-firebase';

export default class componentName extends Component {
  slides=[
    <View style={Styles.card}></View>
  ];
  render() {
    return (
      <Container style={{backgroundColor:Colors.primary}}>
          <DeckSwiper
            dataSource={this.slides}
            renderItem={item=>{return item}}
            renderEmpty={()=><View style={Styles.card}>
              <Text style={{textAlign:'center', fontSize:24, marginBottom:50}}>We hope you enjoy the services of Skiller platform!!!</Text>
              <Button full rounded onPress={()=>this.props.navigation.navigate('add-information')}><Text>Ok,lets go!!!</Text></Button>
            </View>}
            onSwipeLeft={()=>{this.slides=this.slides.slice(0,-1)}}
            looping={false}
          />
      </Container>
    )
  }
}

let Styles = StyleSheet.create({
  card:{
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    width: 300,
    height: 500,
    top:'10%',
    backgroundColor:'white',
    borderRadius: 30,
    padding:'15%'
  }
})