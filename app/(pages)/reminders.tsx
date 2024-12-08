import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import Header from "@/components/Header";
import { ThemedText } from "@/components/ThemedText";

const Reminders = () => {
  return (
    <SafeAreaView>
      <Header />
      <ThemedText>Reminders</ThemedText>
    </SafeAreaView>
  );
};

export default Reminders;
