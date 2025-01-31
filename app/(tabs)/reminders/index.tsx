import Card, { CardAction, CardItem } from "@/components/card";
import EmptyCard from "@/components/card/empty";
import CardLoading from "@/components/card/loading";
import SearchInput from "@/components/form/SearchInput";
import { useDeleteRiminder } from "@/components/pages/reminders/hooks/useDelete";
import useGetRiminder from "@/components/pages/reminders/hooks/useGetReminder";
import URLs from "@/constants/Urls";
import { MaintenanceItem } from "@/types/ndex";
import { useRouter } from "expo-router";
import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

const Reminders = () => {
  const { data, isLoading } = useGetRiminder();
  const { deleteMutate, isPending } = useDeleteRiminder();

  const actions: CardAction<CardItem>[] = [
    {
      icon: "delete",
      onPress: (item) => deleteMutate(+item.id),
      color: "red",
      loading: isPending,
    },
  ];

  const RenderItem = ({ item }: { item: MaintenanceItem }) => {
    return <Card item={item} actions={actions} />;
  };
  const router = useRouter();
  return (
    <View style={styles.container}>
      <SearchInput />
      <View style={styles.cardContainer}>
        <FlatList
          data={data}
          renderItem={({ item }) => <RenderItem item={item} />}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={isLoading ? CardLoading : EmptyCard}
          contentContainerStyle={{ paddingBottom: 50 }}
        />
      </View>
      <TouchableOpacity
        style={styles.fab}
        onPress={() => router.push(`/${URLs.ADD_REMINDERS}`)}
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

export default Reminders;

// const data: MaintenanceItem[] = [
//   {
//     id: "1",
//     title: "تعویض روغن",
//     date: "104/12/10",
//     status: "فعال",
//     remaining: "5km",
//     color: "orange",
//   },
//   {
//     id: "2",
//     title: "تعویض لنت جلو",
//     date: "104/12/10",
//     status: "فعال",
//     remaining: "5km",
//     color: "red",
//   },
//   {
//     id: "3",
//     title: "تعویض روغن",
//     date: "104/12/10",
//     status: "فعال",
//     remaining: "5km",
//     color: "orange",
//   },
//   {
//     id: "4",
//     title: "تعویض لنت جلو",
//     date: "104/12/10",
//     status: "فعال",
//     remaining: "5km",
//     color: "red",
//   },
//   {
//     id: "5",
//     title: "تعویض روغن",
//     date: "104/12/10",
//     status: "فعال",
//     remaining: "5km",
//     color: "orange",
//   },
//   {
//     id: "6",
//     title: "تعویض لنت جلو",
//     date: "104/12/10",
//     status: "فعال",
//     remaining: "5km",
//     color: "red",
//   },
// ];
