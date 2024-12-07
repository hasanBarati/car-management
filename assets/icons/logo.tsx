import { StyleSheet } from "react-native";
import Svg, { Circle } from "react-native-svg";


export default function Logo() {
  return (
    <Svg width="60" height="60" viewBox="0 0 60 60" fill="none">
    <Circle cx="30" cy="30" r="30" fill="#82857D" />
    <Circle cx="19" cy="20" r="9" fill="white" />
    <Circle cx="19" cy="41" r="9" fill="#0FB900" />
    <Circle cx="41" cy="20" r="9" fill="#0FB900" />
    <Circle cx="41" cy="41" r="9" fill="white" />
  </Svg>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
