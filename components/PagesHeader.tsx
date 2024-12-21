import Back from "@/assets/icons/back";
import Logo from "@/assets/icons/logo";
import { URLKeys } from "@/constants/Urls";
import { useRouter, Href } from "expo-router";
import React from "react";
import {
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

const PagesHeader = ({
  image,
  title,
  back,
}: {
  image: ImageSourcePropType;
  title: string;
  back?: URLKeys;
}) => {
  const router = useRouter();

  const handleBack = () => {
    if (back) {
      router.push(`/${back}` as Href);
    } else {
      router.back();
    }
  };
  return (
    <ImageBackground
      source={image}
      style={styles.background}
      resizeMode="cover"
    >
      <ThemedView style={styles.cover}></ThemedView>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleBack} style={styles.leftIcon}>
          <Back />
        </TouchableOpacity>
        <ThemedText style={styles.title} type="title">
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
