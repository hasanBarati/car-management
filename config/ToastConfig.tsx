import { BaseToast, ErrorToast, ToastProps } from "react-native-toast-message";

export const toastConfig = {
  success: (props: ToastProps) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: "green" }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 18,
        fontWeight: "400",
        textAlign: "right",
      }}
      text2Style={{
        fontSize: 16,
        fontWeight: "300",
        textAlign: "right",
      }}
      text1="موفقیت"
      text2="اطلاعات با موفقیت ثبت شد"
    />
  ),
  error: (props: ToastProps) => (
    <ErrorToast
      {...props}
      style={{ borderLeftColor: "red" }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 18,
        fontWeight: "400",
        textAlign: "right",
      }}
      text2Style={{
        fontSize: 16,
        fontWeight: "300",
        textAlign: "right",
      }}
      text1="خطا"
      text2="مشکلی پیش آمده است"
    />
  ),
  // You can add other types of toasts here
};

export default toastConfig;
