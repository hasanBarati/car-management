import CustomButton from "@/components/button/CustomButton";
import CustomDatePicker from "@/components/form/DatePicker";
import SelectInputField from "@/components/form/SelectInput";
import SwitchInputField from "@/components/form/SwitchInput";
import TextInputField from "@/components/form/TextInput";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import {
  ScrollView,
  StyleSheet,
  View
} from "react-native";
import * as Yup from "yup";

// Validation schema using Yup
const schema = Yup.object().shape({
  title: Yup.string().required("عنوان یادآور الزامی است"),
  type: Yup.string().required("لطفا نوع یادآور را انتخاب کنید"),
  date: Yup.string().required("تاریخ سررسید الزامی است"),
  mileage: Yup.number()
    .typeError("کیلومتر خودرو باید عدد باشد")
    .required("کیلومتر خودرو الزامی است"),
});

const ReminderForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
  };
  console.log(errors);
  return (
    <ScrollView style={styles.container}>
      {/* Title Input */}

      <TextInputField
        control={control}
        name="title"
        placeholder="عنوان یادآور"
        errorMessage={errors.title?.message}
      />

      <SelectInputField
        control={control}
        name="type"
        placeholder="نوع یادآور"
        items={[
          { label: "نوع 1", value: "type1" },
          { label: "نوع 2", value: "type2" },
        ]}
        errorMessage={errors.type?.message}
      />

      <TextInputField
        control={control}
        name="date"
        placeholder="تاریخ سررسید"
        errorMessage={errors.title?.message}
      />

      <CustomDatePicker/>
      <TextInputField
        control={control}
        name="numeric"
        placeholder="کیلومتر خودرو"
        errorMessage={errors.title?.message}
        inputMode="numeric"
      />

      <SwitchInputField
        control={control}
        name="notification"
        label="یادآوری با نوتیفیکیشن"
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
          onPress={() => console.log("object")}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 14, flex: 1,marginTop:20 },

  buttonRow: {
    flexDirection: "row",
    // justifyContent: "space-between",
    gap:10,
    marginTop: 20,
  },

});

export default ReminderForm;
