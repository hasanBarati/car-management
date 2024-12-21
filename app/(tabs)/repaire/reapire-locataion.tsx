import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import MapScreen from "@/components/Map";
import TextInputField from "@/components/form/TextInput";
import { useForm } from "react-hook-form";
import CustomButton from "@/components/button/CustomButton";
import { useLocalSearchParams } from "expo-router";

const AddReapireLocation = () => {
    const params=useLocalSearchParams()
  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    // defaultValues: {
    //     title:""
    // }
  });

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
  };
   useEffect(() => {
    setValue("title",params.title)
    // reset({
    //     title: params.title[0] || "",
    //     // type: params.type || "",
    //     // date: params.date || "",
    //     // mileage: params.mileage || "",
    //     // reason: params.reason || "",
    //     // cost: params.cost || "",
    //     // brand: params.brand || "",
    //     // description: params.description || "",
    //     // invoiceImage: params.invoiceImage || null,
    //   });
   }, []);
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
