import { insertNotification } from "@/service/reminders";
import { useMutation } from "@tanstack/react-query";
import { ReminderFormInputs } from "../FormView";
import Toast from "react-native-toast-message";

export default function useInsertReminder() {
  const { isPending, mutate, data } = useMutation({
    mutationFn: async (data: ReminderFormInputs) => {
      await insertNotification(data);
    },
    onSuccess: () => {
      Toast.show({
        type: "success",
        visibilityTime: 3000,
        autoHide: true,
      });
    },
    onError: (e) => {
      console.log("error", e);
    },
  });

  return { isPending, muteReminder: mutate, data };
}
