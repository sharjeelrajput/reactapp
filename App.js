import { StatusBar } from 'expo-status-bar';
import { Button, Linking, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import HomeStyle from './styles/home-screen';

export default function App() {
  const [authorName, setAuthorName] = useState(' React Native App.') ;
  const [sessionObj, setSessionObj] = useState({ number : 0, title : 'Clicked ...' });
  const [isClicked, setIsClicked] = useState(false)
  
  const buttonClickHandler = () =>{
    setAuthorName(" Sharjeel is working on it...");        
    setSessionObj({number : ++sessionObj.number, title : "Clicked ..."});
    setIsClicked(true);
  }

  return (
    <View style={HomeStyle.container}>
      <View style={[HomeStyle.view1, HomeStyle.centerContent]}>
        <Text style={HomeStyle.textD}> Text 1</Text>
      </View>
      <View style={[HomeStyle.view2, HomeStyle.centerContent]}>
        <Text style={HomeStyle.textD}> Text 1</Text>
      </View>
      <View style={[HomeStyle.view3, HomeStyle.centerContent]}>
        <Text style={HomeStyle.textD}> Text 1</Text>
      </View>
      {/* <Text style={HomeStyle.heading}>{authorName}</Text>
      <Button title=" YouTube Channel" onPress={buttonClickHandler}>        
      </Button>
      <Text style={HomeStyle.heading2}> {isClicked ? 'Button has been clicked' : 'Not clicked...'}</Text>
      <Text style={HomeStyle.heading2}> {sessionObj.number} times {sessionObj.title}</Text>
      <StatusBar style="auto" /> */}
    </View>
  );
}
