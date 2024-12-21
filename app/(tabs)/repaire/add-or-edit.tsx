import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useRepaireFormActions } from "@/components/pages/repaire/useFormAction";
import RepaireFormView from "@/components/pages/repaire/FormView";
import URLs from "@/constants/Urls";

const AddOrEditRepaire: React.FC = () => {
  const params = useLocalSearchParams();
  const router = useRouter();

  const { control, errors, handleSubmit, handleFormSubmit } =
    useRepaireFormActions(params);

  return (
    <RepaireFormView
      control={control}
      errors={errors}
      onSubmit={handleSubmit(handleFormSubmit)}
      onCancel={() => router.push(`/${URLs.REPAIRE}`)}
    />
  );
};

export default AddOrEditRepaire;
