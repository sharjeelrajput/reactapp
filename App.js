import { StatusBar } from 'expo-status-bar';
import { Button, Linking, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react'


export default function App() {
  const [authorName, setAuthorName] = useState(' React Native App.') ;
  const [sessionObj, setSessionObj] = useState({ number : 0, title : 'Clicked ...' });
  const [isClicked, setIsClicked] = useState(false)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{authorName}</Text>
      <Button title=" YouTube Channel" onPress={() => {
        setAuthorName(" Sharjeel is working on it");        
        setSessionObj({number : ++sessionObj.number, title : "Clicked ..."});
        setIsClicked(true);
      }}>        
      </Button>
      <Text> {isClicked ? 'Button has been clicked' : 'Not clicked...'}</Text>
      <Text> {sessionObj.number} times {sessionObj.title}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text : {
    margin: 10
  }
});
