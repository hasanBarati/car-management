import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import CustomButton from "@/components/button/CustomButton";
import CustomDatePicker from "@/components/form/DatePicker";
import TextInputField from "@/components/form/TextInput";
import UploadImageField from "@/components/form/ImagePicker";
import { Control, FieldErrors } from "react-hook-form";
import Toast from "react-native-toast-message";

export interface RepaireFormInputs {
  title: string;
  date: string;
  reason?: string;
  cost?: number;
  description?: string;
  brand?: string;
  invoiceImage?: File | null;
}

interface RepaireFormViewProps {
  control: Control<RepaireFormInputs>;
  errors: FieldErrors<RepaireFormInputs>;
  onSubmit: () => void;
  onCancel: () => void;
}

const RepaireFormView: React.FC<RepaireFormViewProps> = ({
  control,
  errors,
  onSubmit,
  onCancel,
}) => {
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
        placeholder="تاریخ سررسید"
        errorMessage={errors.date?.message}
      />
      <TextInputField
        control={control}
        name="reason"
        placeholder="علت تعمیر"
      />
      <TextInputField
        control={control}
        name="cost"
        placeholder="هزینه تعمیر"
        inputMode="numeric"
      />
      <TextInputField
        control={control}
        name="brand"
        placeholder="برند قطعه"
      />
      <UploadImageField
        control={control}
        name="invoiceImage"
        label="تصویر فاکتور"
      />
      <TextInputField
        control={control}
        name="description"
        placeholder="توضیحات"
        multiline
        numberOfLines={4}
      />
      <View style={styles.buttonRow}>
        <CustomButton text="ذخیره" type="mainButton" onPress={onSubmit} />
        <CustomButton text="لغو" type="secondaryButton" onPress={onCancel} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 14,
    flex: 1,
    marginTop: 20,
  },
  buttonRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: 20,
    paddingBottom: 30,
  },
});

export default RepaireFormView;
