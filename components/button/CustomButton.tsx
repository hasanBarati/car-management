import { tintColorDark, tintColorLight } from "@/constants/Colors";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ThemedText } from "../ThemedText";

interface MainButtonProps {
  onPress: () => void;
  text?: string;
  type?:"mainButton" | "secondaryButton"
}
export default function CustomButton({
  onPress,
  text="ذخیره",
  type="mainButton"
}: MainButtonProps) {

    const buttonStyleType=type==="mainButton"?styles.mainButton:styles.secondaryButton
    const textStyleType=type==="mainButton"?styles.mainButtonText:styles.secondaryButtonText
  return (
    <TouchableOpacity style={[styles.button,buttonStyleType]} onPress={onPress}>
      <ThemedText style={textStyleType}>{text}</ThemedText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button:{
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,

  },  
  mainButton: {
    backgroundColor: tintColorLight,
  },
  mainButtonText: {
    color: tintColorDark,
  },
  secondaryButton: {
    backgroundColor: tintColorDark,
  },
  secondaryButtonText: {
    color: tintColorLight,
  },
});
