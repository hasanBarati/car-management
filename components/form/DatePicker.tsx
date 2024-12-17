import { plcaholderColor, tintColorDark } from "@/constants/Colors";
import React from "react";
import { Controller } from "react-hook-form";
import { StyleSheet, Text, TextInput, View } from "react-native";
import DatePicker from "react-native-jalali-persian-date-picker";

interface CustomDatePickerProps {
  control: any;
  name: string;

  placeholder: string;
  rules?: object;
  errorMessage?: string;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  control,
  name,

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
        <View style={styles.calendarContainer}>
          <DatePicker
            value={value}
            onChange={(val) => onChange(val)}
            // style={styles.calendar}
          />
        </View>
      )}
    />
    {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
  </View>
);

const styles = StyleSheet.create({
  calendarContainer: {
    backgroundColor: "#444",
    color: "#fff",
    borderRadius: 10,
    height: 45,
    paddingHorizontal: 10,
    justifyContent: "center",
    marginBottom: 10,
    fontFamily: "IranSans",
  },
  calendar: {
    borderColor: "#ccc",
    borderWidth: 1,
    margin: 10,
    height: 450,
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 10,
    color: "white",
    // backgroundColor: "#444",
  },

  errorInput: { borderColor: "red", borderWidth: 1 },
  errorText: { color: "red", fontSize: 12, marginBottom: 10 },
});

export default CustomDatePicker;
