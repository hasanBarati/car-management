import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { Controller } from "react-hook-form";
import { plcaholderColor, tintColorDark } from "@/constants/Colors";

interface TextInputFieldProps {
  control: any;
  name: string;
  placeholder: string;
  rules?: object;
  errorMessage?: string;
  inputMode?:
    | "decimal"
    | "email"
    | "none"
    | "numeric"
    | "search"
    | "tel"
    | "text"
    | "url";
    multiline?: boolean;
    numberOfLines?: number;
}

const TextInputField: React.FC<TextInputFieldProps> = ({
  control,
  name,
  placeholder,
  rules = {},
  errorMessage,
  inputMode = "none",
  multiline,
  numberOfLines
}) => {

  return (
    <View>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { onChange, onBlur, value } }) => {
          return (
            <TextInput
              style={[styles.input, errorMessage && styles.errorInput,multiline && styles.textArea]}
              placeholder={placeholder}
              placeholderTextColor={plcaholderColor}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              inputMode={inputMode}
              multiline={multiline}
              numberOfLines={numberOfLines}
            />
          );
        }}
      />
      {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#444",
    color: tintColorDark,
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    textAlign: "right",
    fontFamily: "IranSans",
  },
  textArea: {
    height: 100,
    textAlignVertical: "top", 
  },
  errorInput: { borderColor: "red", borderWidth: 1 },
  errorText: { color: "red", fontSize: 12, marginBottom: 10 },
});

export default TextInputField;
