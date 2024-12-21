import { yupResolver } from "@hookform/resolvers/yup";
import { useFocusEffect, useRouter } from "expo-router";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import Toast from "react-native-toast-message";
import * as Yup from "yup";
import { RepaireFormInputs } from "./FormView";


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

  const router=useRouter()
  const handleFormSubmit = (data: RepaireFormInputs) => {
    console.log("Form Data:", data);
    Toast.show({
        type: "success",
        text1: "موفقیت",
        text2: "اطلاعات با موفقیت ثبت شد",
        // visibilityTime: 3000, // مدت زمان نمایش (۳ ثانیه)
        // autoHide: true,       // بستن خودکار
      });
  //  router.push('/repaire/add-reapire-locataion')
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
    }, [reset,params?.title])
  );

  return {
    control,
    errors,
    handleSubmit,
    resetForm,
    handleFormSubmit,
  };
};
