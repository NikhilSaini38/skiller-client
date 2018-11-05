import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {View,Text, Button, Container, DeckSwiper, Card, H1, CardItem} from 'native-base';
import firebase from 'react-native-firebase';

export default class componentName extends Component {
  slides=[
    {
      content:"slide 1"
    },
    {
      content:"slide 2"
    },
    {
      content:"slide 3"
    },
    {
      content:"slide 4"
    },
    {
      content:"slide 5"
    }
  ];
  render() {
    return (
      <Container>
          <DeckSwiper
            dataSource={this.slides}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem cardBody>
                  <H1>{item.content}</H1>
                </CardItem>
              </Card>
            }
            onSwipeLeft={()=>{this.slides=this.slides.slice(0,-1)}}
          />
      </Container>
    )
  }
}

let Styles = StyleSheet.create({
  
})