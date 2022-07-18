import React from 'react';
import { StyleSheet, Dimensions, Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import config  from './../config';


const GooglePlacesInput = (props) => {
  return (
    <>  
    <GooglePlacesAutocomplete style={styles.autocompleteBox}
      placeholder={props.title}
      fetchDetails
      onFail={error => console.error(error)}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true        
        const position = { 
            longitude: details.geometry.location.lng,
            latitude : details.geometry.location.lat
        }
        props.updateLocation(position, props.title);
      }}
      query={{
        key: config.GOOGLE_MAPS_APIKEY,
        language: 'en',
      }}
    />
    </>
  );
};

export default GooglePlacesInput;


const styles = StyleSheet.create({
    autocompleteBox : {
        borderColor: '#ff0000',
        borderWidth: 1,
    }
});