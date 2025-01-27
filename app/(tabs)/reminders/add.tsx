import ReminderFormView from "@/components/pages/reminders/FormView";
import { useReminderFormActions } from "@/components/pages/reminders/useFormAction";
import URLs from "@/constants/Urls";
import { useRouter } from "expo-router";
import React from "react";

const ADDReminder = () => {
  const router = useRouter();
  const { control, errors, handleSubmit, handleFormSubmit,isPending } =
    useReminderFormActions();

  return (
    <ReminderFormView
      control={control}
      errors={errors}
      onSubmit={handleSubmit(handleFormSubmit)}
      onCancel={() => router.push(`/${URLs.REMINDERS}`)}
      isPending
    />
  );
};

export default ADDReminder;
