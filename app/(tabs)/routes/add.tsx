import MapScreen from "@/components/Map";
import { ThemedText } from "@/components/ThemedText";
import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View, Alert } from "react-native";
import * as Location from "expo-location";
import haversine from "haversine-distance";
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps';

interface Coordinates {
  latitude: number;
  longitude: number;
}

interface LocationData {
  coords: Coordinates;
  timestamp: number;
}

const ADDRoute: React.FC = () => {
  const [location, setLocation] = useState<LocationData | null>(null);
  const [route, setRoute] = useState<Coordinates[]>([]);
  const [totalDistance, setTotalDistance] = useState<number>(0);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [averageSpeed, setAverageSpeed] = useState<number>(0);
  const [fuelConsumption, setFuelConsumption] = useState<number>(0);
  const [tracking, setTracking] = useState<boolean>(false);
  const [region, setRegion] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission to access location was denied');
        return;
      }

      let { coords } = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: coords.latitude,
        longitude: coords.longitude,
      });
      setRegion({
        latitude: coords.latitude,
        longitude: coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    })();
  }, []);

  useEffect(() => {
    if (tracking) {
      startTracking();
    } else {
      stopTracking();
    }

    return () => stopTracking();
  }, [tracking]);

  const startTracking = async (): Promise<void> => {
    setStartTime(new Date());
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      alert("Location permission is required to track your route.");
      return;
    }

    Location.watchPositionAsync(
      {
        accuracy: Location.Accuracy.High,
        timeInterval: 1000, // هر ثانیه یکبار
        distanceInterval: 5, // هر 10 متر
      },
      (newLocation: Location.LocationObject) => {
        console.log("run watch user newLocationr",newLocation)
        const { coords } = newLocation;
        if (location) {
          const distance = haversine(
            location.coords,
            coords
          ) / 1000; // مسافت به کیلومتر
          setTotalDistance((prev) => prev + distance);
          setFuelConsumption((prev) => prev + distance * 0.08); // مصرف بنزین تقریبی
        }
        console.log("run watch user",coords)
        setLocation({ latitude: coords.latitude, longitude: coords.longitude });
        setRoute((prev) => [...prev, coords]);

    
        const currentTime = new Date();
        const timeElapsed = startTime
          ? (currentTime.getTime() - startTime.getTime()) / 1000 / 60 // به دقیقه
          : 0;
        setElapsedTime(timeElapsed);
        if (totalDistance > 0) {
          setAverageSpeed(Number((totalDistance / (timeElapsed / 60)).toFixed(2))); // میانگین سرعت
        }
      }

    );
  };

  const stopTracking = (): void => {
    setTracking(false);
    setStartTime(null);
  };

  const calculateDistance = (startCoords, endCoords) => {
    const startLat = startCoords.latitude;
    const startLng = startCoords.longitude;
    const endLat = endCoords.latitude;
    const endLng = endCoords.longitude;

    const earthRadius = 6371; // Radius of the Earth in kilometers
    const dLat = degreesToRadians(endLat - startLat);
    const dLng = degreesToRadians(endLng - startLng);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(degreesToRadians(startLat)) *
        Math.cos(degreesToRadians(endLat)) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return earthRadius * c * 1000; // Distance in meters
  };

  const degreesToRadians = (degrees) => {
    return degrees * (Math.PI / 180);
  };

  // console.log(route)
  console.log(location)
  return (
    <View style={styles.container}>
      {region && (
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={region}
          showsUserLocation
        >
          {location && (
            <Marker
              coordinate={location}
              title="موقعیت فعلی شما"
            />
          )}
          {route.length > 1 && (
            <Polyline coordinates={route} strokeColor="#00BFFF" strokeWidth={4} />
          )}
        </MapView>
      )}
      <View style={styles.statsContainer}>
        <View style={styles.statsRow}>
          <ThemedText style={styles.statsText}>
            مسافت طی شده: {totalDistance.toFixed(2)} کیلومتر
          </ThemedText>
          <ThemedText style={styles.statsText}>
            مدت زمان: {elapsedTime.toFixed(2)} دقیقه
          </ThemedText>
        </View>
        <View style={styles.statsRow}>
          <ThemedText style={styles.statsText}>
            مصرف بنزین: {fuelConsumption.toFixed(2)} لیتر
          </ThemedText>
          <ThemedText style={styles.statsText}>
            میانگین سرعت: {averageSpeed.toFixed(2)} km/h
          </ThemedText>
        </View>
      </View>
      {/* دکمه شروع/توقف */}
      <TouchableOpacity
        style={styles.stopButton}
        onPress={() => setTracking((prev) => !prev)}
      >
        <ThemedText style={styles.stopButtonText}>
          {tracking ? "توقف" : "شروع"}
        </ThemedText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  statsContainer: { flex: 1, padding: 10, backgroundColor: "#333" },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  statsText: { color: "#fff", fontSize: 14 },
  stopButton: {
    position: "absolute",
    bottom: 80,
    left: "50%",
    transform: [{ translateX: -50 }],
    backgroundColor: "green",
    padding: 10,
    borderRadius: 50,
  },
  stopButtonText: { color: "#fff", fontSize: 16 },
  map: {
    flex: 1,
  },
});

export default ADDRoute;