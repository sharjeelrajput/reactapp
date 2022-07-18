import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#eee',
      alignItems: 'center',
      justifyContent: 'center',

    },
    heading : {
      margin: 10,
      fontSize: 24,
      fontStyle: 'italic',
    },
    heading2: {
       margin: 10,
      fontSize: 20,
      fontStyle: 'italic',
    },
    centerContent: {
        justifyContent: 'center',
        alignItems: 'center',    
    },
    view1:{
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#ff0000',
        borderColor: '#fff'
    },
    view2:{
        flex: 2,
        width: 100,
        height: 100,
        backgroundColor: '#ff00ff',
        borderColor: '#fff'
    },
    listPanel: {
        flex: 3,
        width: '100%',
        height: '100%',
        backgroundColor: '#ffff00',
        borderColor: '#fff'
    },
    view3:{
        flex: 1,
        width: 100,
        height: 100,
        backgroundColor: '#ffff00',
        borderColor: '#fff',
    },
    textD : {
        fontSize: 16       
    },
    listStyle: {              
        width: '100%',
        fontSize: 18,
        // margin:5,
        padding: 10,
        borderBottomColor: '#fff',        
        borderWidth: 1,
        
    },
    autocomplete: {
        position: 'absolute',
        width: '90%',
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: { width : 2 , height : 2 },
        elevation: 4,
        shadowOpacity: 0.8,
        shadowRadius: 4,
        
        padding: 10,
        borderRadius: 8,
        zIndex: 100
    },
    origin: {
        top: Constants.statusBarHeight,
    },
    destination: {
        top: 120,
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
      searchBtn : {
        backgroundColor: '#bbb',
        paddingVertical: 8,
        
      }
  });

  export default styles;