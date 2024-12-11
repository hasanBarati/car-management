import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import { ThemedText } from "../../ThemedText";
import Logo from "@/assets/icons/logo";
import Back from "@/assets/icons/back";
import { ThemedView } from "../../ThemedView";
import { useNavigation } from "expo-router";

const PagesHeader = ({
  image,
  title,
}: {
  image: ImageSourcePropType;
  title: string;
}) => {
  const navigation=useNavigation()
  return (
    <ImageBackground
      source={image} 
      style={styles.background}
      resizeMode="cover"
    >
      <ThemedView style={styles.cover}></ThemedView>
      <View style={styles.container}>
        <TouchableOpacity style={styles.leftIcon}>
          <Back onPress={()=>navigation.goBack()}/>
        </TouchableOpacity>
        <ThemedText style={styles.title} type="subtitle">
          {title}
        </ThemedText>
        <TouchableOpacity style={styles.rightIcon}>
          <Logo />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: 200, // Adjust height as needed
    position: "relative",
  },
  cover: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#020502",
    opacity: 0.7,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    // alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingTop: 30,
  },
  leftIcon: {
    width: 64,
    height: 64,
  },
  rightIcon: {
    width: 64,
    height: 64,
  },
  icon: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  title: {
    textAlign: "center",
    marginTop: 100,
    fontSize: 25,
    // fontWeight: 'bold',
    // lineHeight: 32,
  },
});

export default PagesHeader;
