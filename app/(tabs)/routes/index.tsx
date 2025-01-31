import SearchInput from "@/components/form/SearchInput";
import Card from "@/components/card";
import URLs from "@/constants/Urls";
import { IRoute, MaintenanceItem } from "@/types/ndex";
import { useRouter } from "expo-router";
import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Routes = () => {
  const RenderItem = ({ item }: { item: IRoute }) => {
    return <Card item={item} type="route" />;
  };
  const router = useRouter();
  return (
    <View style={styles.container}>
      <SearchInput />
      <View style={styles.cardContainer}>
        <FlatList
          data={data}
          renderItem={({ item }) => <RenderItem item={item} />}
          keyExtractor={(item) => String(item.id)}
          contentContainerStyle={{ paddingBottom: 50 }}
        />
      </View>
      <TouchableOpacity
        style={styles.fab}
        onPress={() => router.push(`/${URLs.ADD_ROUTES}`)}
      >
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 14,
  },
  cardContainer: {
    height: "auto",
    flex: 1,
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

export default Routes;

const data: IRoute[] = [
  {
    id: 1,
    date: "104/12/10",
    title: "تهرانسر - افسریه",
    distance: "19 کیلومتر",
    duration: "40 دقیقه",
    fuelConsumption: "15 لیتر",
    avgSpeed: "70km",
  },
  {
    id: 2,
    date: "104/12/11",
    title: "ولنجک - میدان آزادی",
    distance: "22 کیلومتر",
    duration: "50 دقیقه",
    fuelConsumption: "18 لیتر",
    avgSpeed: "65km",
  },
  {
    id: 3,
    date: "104/12/12",
    title: "جردن - تجریش",
    distance: "10 کیلومتر",
    duration: "30 دقیقه",
    fuelConsumption: "8 لیتر",
    avgSpeed: "60km",
  },
  {
    id: 4,
    date: "104/12/13",
    title: "پیروزی - انقلاب",
    distance: "15 کیلومتر",
    duration: "35 دقیقه",
    fuelConsumption: "12 لیتر",
    avgSpeed: "68km",
  },
  {
    id: 5,
    date: "104/12/14",
    title: "سعادت آباد - ونک",
    distance: "12 کیلومتر",
    duration: "25 دقیقه",
    fuelConsumption: "10 لیتر",
    avgSpeed: "75km",
  },
];
