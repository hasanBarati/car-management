import { ThemedText } from "@/components/ThemedText";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { CarRepairHistory } from "@/types/ndex";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, TouchableHighlight, View } from "react-native";

const RepaireCard = ({ item }: { item: CarRepairHistory }) => {
  const router=useRouter()
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={styles.cardHeaderDetail}>
      
          <ThemedText type="titleColor">{item.title} </ThemedText>
          <ThemedText >{item.date} </ThemedText>
        </View>
        <View style={styles.cardHeaderDetail}>
          <IconSymbol name="delete" size={18} color="white" />
          <TouchableHighlight onPress={() => router.push({pathname:"/repaire/add",params:item})}>
            <IconSymbol size={18} name="edit" color="white" />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => router.push({pathname:"/add",params:item})}>
            <IconSymbol size={18} name="enviromento" color="white" />
          </TouchableHighlight>
        </View>
      </View>
      <View style={styles.cardContent}>
        <ThemedText type="subtitle" style={styles.cardText}>
          علت تعمیر: {item.reason}
        </ThemedText>
        <ThemedText type="subtitle" style={styles.cardText}>
          هزینه تعمیر: {item.cost}
        </ThemedText>
        <ThemedText type="subtitle" style={styles.cardText}>
        توضیحات: {item.description}
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
    marginBottom: 6,

  },
  cardActions: {
    flexDirection: "row",
    position: "absolute",
    top: 16,
    right: 16,
  },
});

export default RepaireCard;
