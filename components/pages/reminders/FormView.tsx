import CustomButton from "@/components/button/CustomButton";
import CustomDatePicker from "@/components/form/DatePicker";
import SelectInputField from "@/components/form/SelectInput";
import SwitchInputField from "@/components/form/SwitchInput";
import TextInputField from "@/components/form/TextInput";
import React from "react";
import { Control, FieldErrors } from "react-hook-form";
import { ScrollView, StyleSheet, View } from "react-native";

export interface ReminderFormInputs {
  title: string;
  // date: string;
  type: string;
  mileage: number;
  notification?: boolean;

}

interface ReminderFormViewProps {
  control: Control<ReminderFormInputs>;
  errors: FieldErrors<ReminderFormInputs>;
  onSubmit: () => void;
  onCancel: () => void;
  isPending:boolean
}

const ReminderFormView: React.FC<ReminderFormViewProps> = ({
  control,
  errors,
  onSubmit,
  onCancel,
  isPending
}) => {
  return (
    <ScrollView style={styles.container}>
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
          { label: "سرویس دوره ای", value: "type1" },
          { label: "تعمیر", value: "type2" },
          { label: "بیمه", value: "type3" },
          { label: "معاینه فنی", value: "type4" },
        ]}
        errorMessage={errors.type?.message}
      />

      {/* <CustomDatePicker
        control={control}
        name="date"
        placeholder=""
        errorMessage={errors.date?.message}
  
      /> */}
      <TextInputField
        control={control}
        name="mileage"
        placeholder="کیلومتر خودرو"
        errorMessage={errors.mileage?.message}
        inputMode="numeric"
      />

      <SwitchInputField
        control={control}
        name="notification"
        label="یادآوری با نوتیفیکیشن"
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

export default ReminderFormView;
