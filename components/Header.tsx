import Logo from "@/assets/icons/logo";
import React from "react";
import { StyleSheet, View } from "react-native";
import { ThemedText } from "./ThemedText";

const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <ThemedText type="subtitle">Dena +</ThemedText>
        <ThemedText>توربو مدل 95</ThemedText>
      </View>
      <Logo />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer:{
    
  }
});
export default Header;
