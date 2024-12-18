import CustomButton from "@/components/button/CustomButton";
import CustomDatePicker from "@/components/form/DatePicker";
import TextInputField from "@/components/form/TextInput";
import UploadImageField from "@/components/form/ImagePicker";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { ScrollView, StyleSheet, View } from "react-native";
import * as Yup from "yup";

const schema = Yup.object().shape({
  title: Yup.string().required("عنوان یادآور الزامی است"),

  type: Yup.string().required("لطفا نوع یادآور را انتخاب کنید"),
  date: Yup.string().required("تاریخ سررسید الزامی است"),
  mileage: Yup.number()
    .typeError("کیلومتر خودرو باید عدد باشد")
    .required("کیلومتر خودرو الزامی است"),
});

const RepaireForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
  };

  return (
    <ScrollView style={styles.container}>
      <TextInputField
        control={control}
        name="title"
        placeholder="عنوان تعمیر"
        errorMessage={errors.title?.message}
      />

      <CustomDatePicker
        control={control}
        name="date"
        placeholder=""
        errorMessage={errors.date?.message}
      />

      <TextInputField control={control} name="reason" placeholder="علت تعمیر" />

      <TextInputField
        control={control}
        name="cost"
        placeholder="هزینه تعمیر"
        inputMode="numeric"
      />
      <TextInputField control={control} name="brand" placeholder="برند قطعه" />
      <UploadImageField
        control={control}
        name="invoiceImage"
        label="تصویر فاکتور"
      />

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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 14, flex: 1, marginTop: 20 },
  buttonRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: 20,
  },
});

export default RepaireForm;
