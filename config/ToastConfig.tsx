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
    />
  ),
  error: (props: ToastProps) => (
    <ErrorToast
      {...props}
      style={{ borderLeftColor: "red" }}
      text1Style={{
        fontSize: 18,
        fontWeight: "400",
      }}
      text2Style={{
        fontSize: 16,
        fontWeight: "300",
      }}
    />
  ),
};
