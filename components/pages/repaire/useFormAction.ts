import { yupResolver } from "@hookform/resolvers/yup";
import { useFocusEffect, useRouter } from "expo-router";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import Toast from "react-native-toast-message";
import * as Yup from "yup";
import { RepaireFormInputs } from "./FormView";
import URLs  from "@/constants/Urls";


const validationSchema = Yup.object({
  title: Yup.string().required("عنوان تعمیر الزامی است"),
  date: Yup.string().required("تاریخ  الزامی است"),
  reason: Yup.string().optional(),
  cost: Yup.number().optional(),
  description: Yup.string().optional(),
  brand: Yup.string().optional(),
});

const defaultFormValues: RepaireFormInputs = {
  title: "",
  date: "",
  reason: "",
  cost: 0,
  description: "",
  brand: "",
};

export const useRepaireFormActions = (params: Partial<RepaireFormInputs>) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RepaireFormInputs>({
    resolver: yupResolver(validationSchema),
    defaultValues: defaultFormValues,
  });

  const router = useRouter();
  const handleFormSubmit = (data: RepaireFormInputs) => {
    console.log("Form Data:", data);
    Toast.show({
      type: "success",
      visibilityTime: 3000,
      autoHide: true,
    });
    router.push(`/${URLs.REPAIRE_LOCATION}`);
  };

  const resetForm = (params: Partial<RepaireFormInputs>) => {
    reset({
      ...defaultFormValues,
      ...params,
    });
  };

  useFocusEffect(
    useCallback(() => {
      reset(params);
      return () => {
        reset(defaultFormValues);
      };
    }, [reset, params?.title])
  );

  return {
    control,
    errors,
    handleSubmit,
    resetForm,
    handleFormSubmit,
  };
};
