import React, { useState, useEffect } from "react";
import { StyleSheet, View, Alert } from "react-native";
import MapView, {
  Marker,
  UrlTile,
  PROVIDER_GOOGLE,
  Polyline,
} from "react-native-maps";
import * as Location from "expo-location";

interface Coordinates {
  latitude: number;
  longitude: number;
}

interface MapScreenProps {
  route: Coordinates[];
  location: Coordinates | null;
}

const darkMapStyle = [
  {
    elementType: "geometry",
    stylers: [{ color: "#242f3e" }],
  },
  {
    elementType: "labels.text.fill",
    stylers: [{ color: "#746855" }],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [{ color: "#242f3e" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#38414e" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#17263c" }],
  },
];

const MapScreen: React.FC<MapScreenProps> = ({ route,location}) => {
  // const [location, setLocation] = useState<Location.LocationObjectCoords>();
  const [errorMsg, setErrorMsg] = useState("");

  // useEffect(() => {
  //   (async () => {
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== "granted") {
  //       setErrorMsg("Permission to access location was denied");
  //       return;
  //     }

  //     let userLocation = await Location.getCurrentPositionAsync({});
  //     setLocation(userLocation.coords);
  //   })();
  // }, []);

  // if (!location) {
  //   return null;
  // }
  
  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      customMapStyle={darkMapStyle}
      userInterfaceStyle="dark"
      style={styles.map}
      initialRegion={{
        latitude: 32.4279,
        longitude: 53.688,
        latitudeDelta: 10,
        longitudeDelta: 10,
      }}

      //   provider={MapView.PROVIDER_GOOGLE}
    >
      <Marker   coordinate={location} title="موقعیت فعلی شما" />
      {route.length > 1 && (
        <Polyline coordinates={route} strokeColor="#00BFFF" strokeWidth={4} />
      )}
      {/* <Marker
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
          title="موقعیت شما"
        /> */}
      <UrlTile
        urlTemplate="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
        maximumZ={19}
      />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: { flex: 1 },
});

export default MapScreen;