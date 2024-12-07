import Logo from "@/assets/icons/logo";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { ThemedText } from "./ThemedText";

const Notifications = () => {
  const render = () => {
    return carStatus.map((status) => (
      <View
        style={[styles.statusCard, { backgroundColor: status.color }]}
      >
        <View style={styles.statusTextContainer}>
            <ThemedText>{status.name}</ThemedText>
            <ThemedText>{status.content}</ThemedText>
        </View>
         
      </View>
    ));
  };
  return (
    // <View style={styles.container}>
    <ScrollView horizontal>
      <View style={styles.container}>{render()}</View>
    </ScrollView>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
    gap:6
  },
  statusTextContainer: {
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    alignContent:"center"
  },
  statusCard: {
    width: 120,
    height: 60,
    backgroundColor: "red",
    borderRadius:5
  },
});
export default Notifications;

const carStatus = [
  { name: "دور موتور", color: "green", content: "2000 RPM" },
  { name: "باتری", color: "red", content: "نیاز به شارژ" },
  { name: "دما", color: "green", content: "80 درجه" },
  { name: "بیمه نامه", color: "orange", content: "انقضا 5 روز" },
  { name: "ترمز ها", color: "green", content: "مناسب" },
];
