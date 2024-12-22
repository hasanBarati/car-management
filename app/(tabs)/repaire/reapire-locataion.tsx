import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import MapScreen from "@/components/Map";
import TextInputField from "@/components/form/TextInput";
import { useForm } from "react-hook-form";
import CustomButton from "@/components/button/CustomButton";


const AddReapireLocation = () => {

  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
  });

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
  };

  return (
    <View style={styles.container}>
      <TextInputField
        control={control}
        name="title"
        placeholder="نام تعمیرگاه"
      />
      <MapScreen />

      <View style={styles.buttonRow}>
        <CustomButton
          text="ذخیره"
          type="mainButton"
          onPress={handleSubmit(onSubmit)}
        />
        <CustomButton
          text="لغو"
          type="secondaryButton"
          onPress={() => reset()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 14, flex: 1, marginTop: 20 },
  buttonRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: 20,
    paddingBottom: 30,
  },
});
export default AddReapireLocation;
