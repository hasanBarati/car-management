import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Controller } from "react-hook-form";
import RNPickerSelect from "react-native-picker-select";
import { tintColorDark } from "@/constants/Colors";

interface SelectInputFieldProps {
  control: any;
  name: string;
  items: { label: string; value: string }[];
  placeholder: string;
  rules?: object;
  errorMessage?: string;
}

const SelectInputField: React.FC<SelectInputFieldProps> = ({
  control,
  name,
  items,
  placeholder,
  rules = {},
  errorMessage,
}) => (
  <View>
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value } }) => (
        <RNPickerSelect
          onValueChange={(val) => onChange(val)}
          items={items}
          style={{
            inputAndroid: [styles.input, errorMessage && styles.errorInput],
            placeholder: { color: "#fff" },
          }}
          placeholder={{ label: placeholder, value: null }}
          value={value}
        />
      )}
    />
    {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
  </View>
);

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#444",
    color: tintColorDark,
    // padding: 4,
    borderRadius: 16,
    marginBottom: 10,
  },
  errorInput: { borderColor: "red", borderWidth: 1 },
  errorText: { color: "red", fontSize: 12, marginBottom: 10 },
});

export default SelectInputField;
