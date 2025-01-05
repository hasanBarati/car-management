import polyline from "@mapbox/polyline";
import React, { useCallback, useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";

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
    const url = `https://api.neshan.org/v5/direction?type=car&origin=${startLocation.latitude},${startLocation.longitude}&destination=${endLocation.latitude},${endLocation.longitude}`;
    const requestOptions = {
      method: "GET",
      headers: { "api-key": apiKey },
    };

    try {
      const response = await fetch(url, requestOptions);
      const data = await response.json();

      if (data.routes?.[0]?.overview_polyline?.points) {
        const decodedCoordinates = polyline
          .decode(data.routes[0].overview_polyline.points)
          .map(([latitude, longitude]) => ({
            latitude,
            longitude,
          }));

        setRoute(decodedCoordinates);
      }

      // Parse steps and add them to the state
      const routeSteps = data.routes?.[0]?.legs[0]?.steps || [];
      setSteps(routeSteps);

    } catch (error) {
      console.error("Error fetching route:", error);
    }
  };

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

        {/* Loop over steps to display each one */}
        {steps.map((step, index) => {
          const stepCoordinates = polyline.decode(step.polyline);
          return (
            <React.Fragment key={index}>
              <Polyline
                coordinates={stepCoordinates.map(([lat, lng]) => ({ latitude: lat, longitude: lng }))}
                strokeWidth={4}
                strokeColor="red"
              />
              {/* Add a marker for the starting point of each step */}
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
      </MapView>
      <Button title="مسیریابی" onPress={handleRoute} />
      <Button title="تنظیم مجدد" onPress={resetMap} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
});

export default ADDRoute;


const mapHtml = `<!DOCTYPE html>
<html lang="fa">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Neshan Leaflet Map</title>

    <link rel="stylesheet" href="https://static.neshan.org/sdk/leaflet/v1.9.4/neshan-sdk/v1.0.8/index.css" />
    <script src="https://static.neshan.org/sdk/leaflet/v1.9.4/neshan-sdk/v1.0.8/index.js"></script>
    <script src="./Polyline.encoded.js"></script>

    <style>
        body {
            height: 100vh;
            width: 100vw;
            margin: 0;
        }

        #map {
            height: 100%;
            width: 100%;
        }
    </style>
</head>

<body>
    <div id="map"></div>
    <script>

        // example of response data from direction-API v4
        // request URL : https://api.neshan.org/v4/direction?type=car&origin=35.700785062128666,51.38881156907395&destination=35.703189177622946,51.3908984545814&alternative=false

        var exampleResponse = {
            "routes": [
                {
                    "overview_polyline": {
                        "points": "cy{xEa{sxHCyEr@}FIi@MWi@Um@L[l@A^{Jr@"
                    },
                    "legs": [
                        {
                            "summary": "میدان انقلاب اسلامی - کارگر شمالی",
                            "distance": {
                                "value": 555.0,
                                "text": "۵۷۵ متر"
                            },
                            "duration": {
                                "value": 99.0,
                                "text": "۲ دقیقه"
                            },
                            "steps": [
                                {
                                    "name": "آزادی",
                                    "instruction": "در جهت شرق در آزادی قرار بگیرید",
                                    "bearing_after": 88,
                                    "type": "depart",
                                    "distance": {
                                        "value": 197.0,
                                        "text": "۲۰۰ متر"
                                    },
                                    "duration": {
                                        "value": 35.0,
                                        "text": "۱ دقیقه"
                                    },
                                    "polyline": "cy{xEa{sxHAkBAmBDa@BKHs@BWD]J{@",
                                    "start_location": [
                                        51.388811,
                                        35.70082
                                    ]
                                },
                                {
                                    "name": "کارگر شمالی",
                                    "instruction": "در میدان انقلاب اسلامی، از خروجی سوم، خارج شوید",
                                    "rotaryName": "میدان انقلاب اسلامی",
                                    "bearing_after": 111,
                                    "type": "rotary",
                                    "modifier": "straight",
                                    "exit": 3,
                                    "distance": {
                                        "value": 146.0,
                                        "text": "۱۵۰ متر"
                                    },
                                    "duration": {
                                        "value": 38.0,
                                        "text": "۱ دقیقه"
                                    },
                                    "polyline": "}w{xEohtxHDSBUCUESEKGKSOUEW@UJORKXAN?N",
                                    "start_location": [
                                        51.390956,
                                        35.700632
                                    ]
                                },
                                {
                                    "name": "",
                                    "instruction": "به مسیر خود ادامه دهید",
                                    "bearing_after": 354,
                                    "type": "exit rotary",
                                    "modifier": "right",
                                    "exit": 3,
                                    "distance": {
                                        "value": 212.0,
                                        "text": "۲۲۵ متر"
                                    },
                                    "duration": {
                                        "value": 39.0,
                                        "text": "۱ دقیقه"
                                    },
                                    "polyline": "a|{xEuitxH_ADaBLO@{BRmAH",
                                    "start_location": [
                                        51.391154,
                                        35.701293
                                    ]
                                },
                                {
                                    "name": "کارگر شمالی",
                                    "instruction": "در مقصد قرار دارید",
                                    "bearing_after": 0,
                                    "type": "arrive",
                                    "distance": {
                                        "value": 0.0,
                                        "text": ""
                                    },
                                    "duration": {
                                        "value": 0.0,
                                        "text": ""
                                    },
                                    "polyline": "}g|xEahtxH",
                                    "start_location": [
                                        51.390885,
                                        35.703188
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }

        // Create a Leaflet map
        const neshanMap = new L.Map("map", {
            key: "web.ff233630c7064c87a5544216029a36c6"
            maptype: "standard-day",
            poi: false,
            traffic: false,
            center: [35.700936, 51.391194],
            zoom: 16,
        })

        // iterate through response steps
        for (let k = 0; k < Object.keys(exampleResponse.routes).length; k++) {

            for (let j = 0; j < Object.keys(exampleResponse.routes[k].legs).length; j++) {

                for (let i = 0; i < Object.keys(exampleResponse.routes[k].legs[j].steps).length; i++) {
                    var step = exampleResponse.routes[k].legs[j].steps[i];

                    // decode Encoded polyline and draw on map
                    L.Polyline.fromEncoded(step.polyline, {
                        color: "#250ECD",
                        weight: 12
                    }).addTo(neshanMap);

                    // add point in start of step
                    L.circleMarker([step.start_location[1], step.start_location[0]], {
                        weight: 1,
                        color: "#FFFFFF",
                        radius: 5,
                        fill: true,
                        fillColor: "#9fbef9",
                        fillOpacity: 1.0
                    }).addTo(neshanMap);
                }
            }
        }

    </script>
</body>

</html>`;
