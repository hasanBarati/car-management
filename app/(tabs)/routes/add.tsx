import MapScreen from "@/components/Map";
import ReminderFormView from "@/components/pages/reminders/FormView";
import { useReminderFormActions } from "@/components/pages/reminders/useFormAction";
import { ThemedText } from "@/components/ThemedText";
import URLs from "@/constants/Urls";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const ADDRoute = () => {
  const router = useRouter();
  const { control, errors, handleSubmit, handleFormSubmit } =
    useReminderFormActions();

  return (
    <View style={styles.container} >
      <MapScreen />
      <View style={styles.statsContainer}>
        <View style={styles.statsRow}>
          <ThemedText style={styles.statsText}>
            مسافت طی شده: 19 کیلومتر
          </ThemedText>
          <ThemedText style={styles.statsText}>مدت زمان: 40 دقیقه</ThemedText>
        </View>
        <View style={styles.statsRow}>
          <ThemedText style={styles.statsText}>مصرف بنزین: 15 لیتر</ThemedText>
          <ThemedText style={styles.statsText}>
            زمان سپری شده: 30 دقیقه
          </ThemedText>
        </View>
        <View style={styles.statsRow}>
          <ThemedText style={styles.statsText}>میانگین سرعت: 70km</ThemedText>
          <ThemedText style={styles.statsText}>
            کل مسافت: 142 کیلومتر
          </ThemedText>
        </View>
      </View>
      {/* Stop Button */}
      <TouchableOpacity style={styles.stopButton}>
        <ThemedText style={styles.stopButtonText}>توقف</ThemedText>
      </TouchableOpacity>
   
  
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },

  statsContainer: { flex: 1, padding: 10, backgroundColor: "#333" },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  statsText: { color: "#fff", fontSize: 14 },
  stopButton: {
    position: "absolute",
    bottom: 80,
    left: "50%",
    transform: [{ translateX: -50 }],
    backgroundColor: "green",
    padding: 10,
    borderRadius: 50,
  },
  stopButtonText:{}
});

export default ADDRoute;
