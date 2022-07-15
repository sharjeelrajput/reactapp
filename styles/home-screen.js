import { StyleSheet } from 'react-native';
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
        flex: 3,
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
    view3:{
        flex: 1,
        width: 100,
        height: 100,
        backgroundColor: '#ffff00',
        borderColor: '#fff',
    },
    textD : {
        fontSize: 12       
    }
  });

  export default styles;