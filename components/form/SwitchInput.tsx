import React from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { Controller } from "react-hook-form";

interface SwitchInputFieldProps {
  control: any;
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
        <Switch value={value} onValueChange={onChange} />
      )}
    />
    <Text style={styles.label}>{label}</Text>
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
