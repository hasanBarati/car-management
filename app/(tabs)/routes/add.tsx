import polyline from "@mapbox/polyline";
import React, { useCallback, useState, useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import * as Location from "expo-location";

interface Coordinates {
  latitude: number;
  longitude: number;
}

const ADDRoute: React.FC = () => {
  const [startLocation, setStartLocation] = useState<Coordinates | null>(null);
  const [endLocation, setEndLocation] = useState<Coordinates | null>(null);
  const [mapKey, setMapKey] = useState<number>(0);
  const [route, setRoute] = useState<Coordinates[] | null>(null);
  const [steps, setSteps] = useState<any[]>([]);
  const [distanceInfo, setDistanceInfo] = useState<string | null>(null);
  const [currentLocation, setCurrentLocation] = useState<Coordinates | null>(
    null
  );

  const handleMapPress = useCallback(
    (event: any) => {
      const { coordinate } = event.nativeEvent;

      if (!startLocation) {
        setStartLocation(coordinate);
      } else if (!endLocation) {
        setEndLocation(coordinate);
      } else {
        console.log("Both locations are already set. Reset to add new ones.");
      }
    },
    [startLocation, endLocation]
  );

  const resetMap = () => {
    setStartLocation(null);
    setEndLocation(null);
    setRoute(null);
    setSteps([]);
    setMapKey((prevKey) => prevKey + 1);
  };

  const handleRoute = async () => {
    if (!startLocation || !endLocation) {
      console.error("Start and end locations must be set.");
      return;
    }

    const apiKey = "service.d876c0452b1c4218b5282581ff1e72f0";
    const directionUrl = `https://api.neshan.org/v5/direction?type=car&origin=${startLocation.latitude},${startLocation.longitude}&destination=${endLocation.latitude},${endLocation.longitude}`;
    const distanceUrl = `https://api.neshan.org/v1/distance-matrix?type=car&origins=${startLocation.latitude},${startLocation.longitude}&destinations=${endLocation.latitude},${endLocation.longitude}`;
    const requestOptions = {
      method: "GET",
      headers: { "api-key": apiKey },
    };



    try {
      // Fetch direction data
      const directionResponse = await fetch(directionUrl, requestOptions);
      const directionData = await directionResponse.json();

      if (directionData.routes?.[0]?.overview_polyline?.points) {
        const decodedRoute = polyline
          .decode(directionData.routes[0].overview_polyline.points)
          .map(([latitude, longitude]) => ({ latitude, longitude }));
        setRoute(decodedRoute);
        const routeSteps = directionData.routes?.[0]?.legs[0]?.steps || [];
        setSteps(routeSteps);
      }

      // Fetch distance data
      const distanceResponse = await fetch(distanceUrl, requestOptions);
      // console.log(distanceResponse)
      const distanceData = await distanceResponse.json();
      console.log(distanceData);
      if (
        distanceData.rows?.[0]?.elements?.[0]?.distance?.text &&
        distanceData.rows[0].elements[0].duration?.text
      ) {
        setDistanceInfo(
          `مسافت: ${distanceData.rows[0].elements[0].distance.text}, زمان: ${distanceData.rows[0].elements[0].duration.text}`
        );
      }
    } catch (error) {
      console.error("Error fetching route or distance:", error);
      alert("خطایی در دریافت اطلاعات رخ داده است.");
    }
  };

  useEffect(() => {
    const getCurrentLocation = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== "granted") {
          console.error("Permission to access location was denied");
          return;
        }

        const location = await Location.getCurrentPositionAsync({});
        setCurrentLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });

        // Watch the user's location
        Location.watchPositionAsync(
          {
            accuracy: Location.Accuracy.High,
            timeInterval: 5000,
            distanceInterval: 1,
          },
          (location) => {
            setCurrentLocation({
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            });
          }
        );
      } catch (error) {
        console.error("Error getting current location:", error);
      }
    };

    getCurrentLocation();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        key={mapKey}
        style={styles.map}
        onPress={handleMapPress}
        initialRegion={{
          latitude: route?.[0]?.latitude || 35.6892,
          longitude: route?.[0]?.longitude || 51.389,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        {startLocation && <Marker coordinate={startLocation} title="مبدأ" />}
        {endLocation && <Marker coordinate={endLocation} title="مقصد" />}
        {route && route.length > 0 && (
          <Polyline coordinates={route} strokeWidth={4} strokeColor="blue" />
        )}
        {steps.map((step, index) => {
          const stepCoordinates = polyline.decode(step.polyline);
          return (
            <React.Fragment key={index}>
              <Polyline
                coordinates={stepCoordinates.map(([lat, lng]) => ({
                  latitude: lat,
                  longitude: lng,
                }))}
                strokeWidth={4}
                strokeColor="red"
              />
              <Marker
                coordinate={{
                  latitude: step.start_location[1],
                  longitude: step.start_location[0],
                }}
                title={`Step ${index + 1}`}
                description={step.instruction}
              />
            </React.Fragment>
          );
        })}
        {currentLocation && (
          <Marker
            coordinate={currentLocation}
            title="موقعیت فعلی"
            pinColor="green"
          />
        )}
      </MapView>
      {distanceInfo && <Text style={styles.info}>{distanceInfo}</Text>}
      <Button title="مسیریابی" onPress={handleRoute} />
      <Button title="تنظیم مجدد" onPress={resetMap} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
  info: {
    marginBottom: 10,
    textAlign: "center",
    fontSize: 16,
    color: "white",
  },
});

export default ADDRoute;
