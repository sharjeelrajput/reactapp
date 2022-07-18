import { StatusBar } from 'expo-status-bar';
import { Button, Linking, StyleSheet, Text, View , ScrollView} from 'react-native';
import React, { useState } from 'react';
import HomeStyle from './styles/home-screen';

export default function App() {
  const [authorName, setAuthorName] = useState(' React Native App.') ;
  const [sessionObj, setSessionObj] = useState({ number : 0, title : 'Clicked ...' });
  const [isClicked, setIsClicked] = useState(false);
  const [UserList, setUserList] = useState([
    { name : 'sharjeel' , age : 36},
    { name : 'Umer' , age : 31},
    { name : 'Ali' , age : 21},
    { name : 'Usman' , age : 44},
    { name : 'Shahan' , age : 361},
    { name : 'Ghafoor' , age : 44},
    { name : 'Asim' , age : 41},
    { name : 'Waqas' , age : 336},
    { name : 'Asif' , age : 316},
    { name : 'Brain' , age : 37},
    { name : 'Darren' , age : 30},
  ])
  
  const buttonClickHandler = () =>{
    setAuthorName(" Sharjeel is working on it...");        
    setSessionObj({number : ++sessionObj.number, title : "Clicked ..."});
    setIsClicked(true);
  }

  return (
    <View style={HomeStyle.container}>
      <View style={[HomeStyle.view1, HomeStyle.centerContent]}>
        <Text style={HomeStyle.textD}> Text 1 {UserList.length} : </Text>
      </View>
      <ScrollView style={[HomeStyle.listPanel]}>
      {
        UserList.map(user => {
          return (
            <View style={[HomeStyle.centerContent, HomeStyle.listStyle]}>
              <Text style={[HomeStyle.textD]}> {user.name} - {user.age}</Text>
          </View>
          )
        })
      }
      </ScrollView>
    
      {/* <Text style={HomeStyle.heading}>{authorName}</Text>
      <Button title=" YouTube Channel" onPress={buttonClickHandler}>        
      </Button>
      <Text style={HomeStyle.heading2}> {isClicked ? 'Button has been clicked' : 'Not clicked...'}</Text>
      <Text style={HomeStyle.heading2}> {sessionObj.number} times {sessionObj.title}</Text>
      <StatusBar style="auto" /> */}
    </View>
  );
}
