import { plcaholderColor, tintColorDark } from "@/constants/Colors";
import React from "react";
import { Controller } from "react-hook-form";
import { StyleSheet, Text, View } from "react-native";
import RNPickerSelect from "react-native-picker-select";



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
          useNativeAndroidPickerStyle={false}
          onValueChange={(val) => onChange(val)}
          items={items}
          style={{
            inputAndroid: [styles.input, errorMessage && styles.errorInput],
            placeholder: { color: plcaholderColor },
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
    borderRadius: 10,
    height:45, 
    paddingHorizontal: 10, 
    justifyContent: "center", 
    marginBottom: 10, 
    fontFamily: "IranSans",
  },
  errorInput: { borderColor: "red", borderWidth: 1 },
  errorText: { color: "red", fontSize: 12, marginBottom: 10 },
});

export default SelectInputField;
