import { ThemedText } from "@/components/ThemedText";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import StatusCard from "../cards/StatusCard";
import { IconSymbol } from "@/components/ui/IconSymbol";

const data = [
  {
    id: "1",
    title: "تعویض روغن",
    date: "104/12/10",
    status: "فعال",
    remaining: "5km",
    color: "orange",
  },
  {
    id: "2",
    title: "تعویض لنت جلو",
    date: "104/12/10",
    status: "فعال",
    remaining: "5km",
    color: "red",
  },
];

const RemindersContent = () => {
  const RenderItem = ({ item }) => {
    return (
      <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={styles.cardHeaderDetail}>
          <View style={[styles.indicator, { backgroundColor: item.color }]} />
          <ThemedText type="titleColor">{item.title}</ThemedText>
        </View>
        <View style={styles.cardHeaderDetail}>
          <IconSymbol name="delete" size={24} color="white" />
          <IconSymbol size={25} name="edit" color='white' />
        </View>
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.cardText}>تاریخ سر رسید: {item.date}</Text>
        <Text style={styles.cardText}>
          کیلومتر باقی مانده: {item.remaining}
        </Text>
        <Text style={styles.cardText}>وضعیت یادآور: {item.status}</Text>
      </View>
    </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="جستجو بر اساس وضعیت، تاریخ و عنوان"
          placeholderTextColor="#888"
        />
        <TouchableOpacity style={styles.searchIcon}>
          <Text>🔍</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardContainer}>
        <FlatList
          data={data}
          renderItem={({ item }) => <RenderItem item={item} />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 100 }}
          style={{ flex: 1 }}
        />
      </View>

      <TouchableOpacity style={styles.fab}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    // marginBottom: 16,
    marginVertical: 20,
    borderRadius: 8,
    backgroundColor: "#444",
    // paddingHorizontal: 10,
    height: 50,
  },
  searchInput: {
    flex: 1,
    color: "#fff",
    fontSize: 16,
  },
  searchIcon: {
    marginLeft: 8,
  },
  list: {
    padding: 16,
  },
  cardContainer: {
    height: "auto",
  },
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
    gap:4

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

    flexDirection:"row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    // width:500
  },
  cardText: {
    fontSize: 14,
    color: "#aaa",
    marginBottom: 4,

    width:"48%"

  },
  cardActions: {
    flexDirection: "row",
    position: "absolute",
    top: 16,
    right: 16,
  },
  actionButton: {
    marginLeft: 8,
    padding: 8,
    backgroundColor: "#555",
    borderRadius: 4,
  },
  fab: {
    position: "absolute",
    bottom: 24,
    right: 24,
    width: 60,
    height: 60,
    backgroundColor: "#2ecc71",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  fabText: {
    fontSize: 24,
    color: "#fff",
  },
});

export default RemindersContent;
