import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { Controller } from "react-hook-form";
import { tintColorDark } from "@/constants/Colors";

interface TextInputFieldProps {
  control: any;
  name: string;
  placeholder: string;
  rules?: object;
  errorMessage?: string;
  inputMode?:'decimal'| 'email'| 'none'| 'numeric'| 'search'| 'tel'| 'text'| 'url'
}

const TextInputField: React.FC<TextInputFieldProps> = ({
  control,
  name,
  placeholder,
  rules = {},
  errorMessage,
  inputMode="none"
}) => (
  <View>
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          style={[styles.input, errorMessage && styles.errorInput]}
          placeholder={placeholder}
          placeholderTextColor="#fff"
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
          inputMode={inputMode}
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
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    textAlign:"right"
  },
  errorInput: { borderColor: "red", borderWidth: 1 },
  errorText: { color: "red", fontSize: 12, marginBottom: 10 },
});

export default TextInputField;
