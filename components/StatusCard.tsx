import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import React from "react";
import { ThemedText } from "@/components/ThemedText";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { MaintenanceItem } from "@/types/ndex";
import { useRouter } from "expo-router";

const StatusCard = ({ item }: { item: MaintenanceItem }) => {
  const router=useRouter()
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={styles.cardHeaderDetail}>
          <View style={[styles.indicator, { backgroundColor: item.color }]} />
          <ThemedText type="titleColor">{item.title}</ThemedText>
        </View>
        <View style={styles.cardHeaderDetail}>
          <IconSymbol name="delete" size={18} color="white" />
          <TouchableHighlight onPress={() => router.push({pathname:"/add",params:item})}>
            <IconSymbol size={18} name="edit" color="white" />
          </TouchableHighlight>
        </View>
      </View>
      <View style={styles.cardContent}>
        <ThemedText type="subtitle" style={styles.cardText}>
          تاریخ سر رسید: {item.date}
        </ThemedText>
        <ThemedText type="subtitle" style={styles.cardText}>
          کیلومتر باقی مانده: {item.remaining}
        </ThemedText>
        <ThemedText type="subtitle" style={styles.cardText}>
          وضعیت یادآور: {item.status}
        </ThemedText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#333",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    position: "relative",
    direction: "rtl",
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardHeaderDetail: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 6,
    marginBottom: 8,
  },
  indicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginLeft: 8,
  },
  cardTitle: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  cardContent: {
    marginVertical: 8,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  cardText: {
    fontSize: 14,
    color: "white",
    marginBottom: 4,
    width: "48%",
  },
  cardActions: {
    flexDirection: "row",
    position: "absolute",
    top: 16,
    right: 16,
  },
});

export default StatusCard;
