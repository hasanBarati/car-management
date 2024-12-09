import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import Header from "@/components/Header";
import { ThemedText } from "@/components/ThemedText";
import PagesHeader from "@/components/pages/header/PagesHeader";
import RemindersContent from "@/components/pages/reminders";
import PageContent from "@/components/pages/content";

const Reminders = () => {
  return (
    <>
        <PagesHeader
          image={require("@/assets/images/repaire.jpg")}
          title={"یادآورها"}
        />
        <PageContent>
          <RemindersContent />
        </PageContent>
    </>
  );
};

export default Reminders;
