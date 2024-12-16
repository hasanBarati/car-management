import { tintColorDark, tintColorLight } from "@/constants/Colors";
import React from "react";
import { Controller } from "react-hook-form";
import { StyleSheet, Switch, Text, View } from "react-native";
import { ThemedText } from "../ThemedText";


interface SwitchInputFieldProps {
  control:any;
  name: string;
  label: string;
  defaultValue?: boolean;
}

const SwitchInputField: React.FC<SwitchInputFieldProps> = ({
  control,
  name,
  label,
  defaultValue = false,
}) => (
  <View style={styles.container}>
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field: { onChange, value } }) => (
        <Switch
          value={value}
          onValueChange={onChange}
          thumbColor={value ? tintColorDark : tintColorLight} 
          trackColor={{ false: tintColorDark, true: tintColorDark }}
        />
      )}
    />
    <ThemedText style={styles.label}>{label}</ThemedText>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  label: { color: "#fff" },
});

export default SwitchInputField;
