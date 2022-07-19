import { StatusBar } from "expo-status-bar";
import config  from './config';
import {
  Button,
  Linking,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState, useRef } from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import HomeStyle from "./styles/home-screen";
import GooglePlacesInput from "./components/google-places-autocomplete";
import MapViewDirections from "react-native-maps-directions";

export default function App() {
  const [authorName, setAuthorName] = useState(" React Native App.");
  const [sessionObj, setSessionObj] = useState({
    number: 0,
    title: "Clicked ...",
  });
  const [isClicked, setIsClicked] = useState(false);
  // const GOOGLE_MAPS_APIKEY = "AIzaSyCqDIRwcGDeIBdt-yHuC0p8F_y-H468dms";
  const GOOGLE_MAPS_APIKEY = config.GOOGLE_MAPS_APIKEY;
  const [UserList, setUserList] = useState([
    { name: "sharjeel 2", age: 256 },
    { name: "Umer", age: 351 },
    { name: "Ali", age: 121 },
    { name: "Usman", age: 344 },
    { name: "Shahan", age: 311 },
    { name: "Ghafoor", age: 124 },
    { name: "Asim", age: 442 },
    { name: "Waqas", age: 356 },
    { name: "Asif", age: 366 },
    { name: "Brain", age: 187 },
    { name: "Darren", age: 190 },
  ]);

  const buttonClickHandler = () => {
    setAuthorName(" Sharjeel is working on it...");
    setSessionObj({ number: ++sessionObj.number, title: "Clicked ..." });
    setIsClicked(true);

  };

  const { width, height } = Dimensions.get("window");
  const ASPECT_RATIO = width / height;
  const LATITUDE_DELTA = 0.02;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
  const mapRef = useRef(MapView);
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [findIt, setfindIt] = useState(false);

  let INITIAL_POSITION = {
    latitude: 40.76711,
    longitude: -73.979704,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  };

  const updateLocation = (position, title) => {
    if (title !== undefined && title === "origin") {
      setOrigin(position);      
    } else {
      setDestination(position);      
    }
    mapRef.current.getCamera().then((mapCam) => {
      if (mapCam) {
        mapCam.center = position;
        mapRef.current.animateCamera(mapCam, { duration: 1000 });
        mapRef.current.fitToCoordinates([origin, destination]);
      }
    });
  };

  return (
    <View style={HomeStyle.container}>
      <View style={[HomeStyle.autocomplete, HomeStyle.origin]}>
        <GooglePlacesInput title="origin" updateLocation={updateLocation} />
      </View>
      <View style={[HomeStyle.autocomplete, HomeStyle.destination]}>
        <GooglePlacesInput
          title="Destination"
          updateLocation={updateLocation}
        />
      </View>
      <View style={[HomeStyle.view1, HomeStyle.centerContent]}>
        <MapView
          ref={mapRef}
          style={HomeStyle.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={INITIAL_POSITION}
        >
          {origin && <Marker title="Start point" coordinate={origin}></Marker>}
          {destination && (
            <Marker title="sharjeel here" coordinate={destination}></Marker>
          )}
          { origin && destination && findIt && 
            <MapViewDirections
              origin={origin}
              destination={destination}
              apikey={GOOGLE_MAPS_APIKEY}
            />
          }
        </MapView>
        <View>
          <TouchableOpacity
            style={HomeStyle.searchBtn}
            onPress={(e) => {
              setfindIt(true);
              mapRef.current.fitToCoordinates([origin, destination]);
            }}
          >
            <Text>Search Directions</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* <ScrollView style={[HomeStyle.listPanel]}>
      {
        UserList.map(user => {
          return (
            <View style={[HomeStyle.centerContent, HomeStyle.listStyle]}>
              <Text style={[HomeStyle.textD]} key={user.age.toString()}> {user.name} - {user.age}</Text>
          </View>
          )
        })
      }
      </ScrollView> */}

      {/* <Text style={HomeStyle.heading}>{authorName}</Text>
      <Button title=" YouTube Channel" onPress={buttonClickHandler}>        
      </Button>
      <Text style={HomeStyle.heading2}> {isClicked ? 'Button has been clicked' : 'Not clicked...'}</Text>
      <Text style={HomeStyle.heading2}> {sessionObj.number} times {sessionObj.title}</Text>
      <StatusBar style="auto" /> */}
    </View>
  );
}
