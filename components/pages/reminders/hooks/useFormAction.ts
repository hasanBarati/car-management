import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { ReminderFormInputs } from "../FormView";
import { useFocusEffect } from "expo-router";
import { useCallback } from "react";
import useInsertReminder from "./useInsertData";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("عنوان یادآور الزامی است"),
  type: Yup.string().required("لطفا نوع یادآور را انتخاب کنید"),
  // date: Yup.string().required("تاریخ سررسید الزامی است"),
  mileage: Yup.number()
    .typeError("کیلومتر خودرو باید عدد باشد")
    .required("کیلومتر خودرو الزامی است"),
});

const defaultFormValues: ReminderFormInputs = {
  title: "",
  type: "",
  mileage: 0,
  notification: false,
};

export const useReminderFormActions = () => {
  
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ReminderFormInputs>({
    resolver: yupResolver(validationSchema),
    defaultValues: defaultFormValues,
  });
  const { isPending, muteReminder, isSuccess } = useInsertReminder();
  const handleFormSubmit = (data: ReminderFormInputs) => {
    muteReminder(data); 
    isSuccess && reset(defaultFormValues)
  };

  useFocusEffect(
    useCallback(() => {
      return () => {
        reset(defaultFormValues);
      };
    }, [reset])
  );

  return {
    control,
    errors,
    handleSubmit,
    handleFormSubmit,
    isPending,
  };
};
