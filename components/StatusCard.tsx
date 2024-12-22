import { ThemedText } from "@/components/ThemedText";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { IRoute, MaintenanceItem } from "@/types/ndex";
import { convertDataToContent } from "@/utils";
import { useRouter } from "expo-router";
import React, { Children } from "react";
import { StyleSheet, View } from "react-native";

type StatusCardProps<T> = {
  item: T;
  type?: string;
};

export type CardItem = IRoute | MaintenanceItem;

const StatusCard = <T extends CardItem>({
  item,
  type = "status",
}: StatusCardProps<T>) => {
  const data = convertDataToContent(item, type);
  const router = useRouter();
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={styles.cardHeaderDetail}>
          <View style={[styles.indicator, { backgroundColor: data?.color }]} />
          <ThemedText type="titleColor">{data?.title}</ThemedText>
        </View>
        <View style={styles.cardHeaderDetail}>
          <IconSymbol name="delete" size={18} color="white" />
          {/* <TouchableHighlight onPress={() => router.push({pathname:`/${URLs.ADD_REMINDERS}`,params:item})}>
            <IconSymbol size={18} name="edit" color="white" />
          </TouchableHighlight> */}
        </View>
      </View>
      <View style={styles.cardContent}>
        {Children.toArray(
          data?.content?.map(({ label, value, wrapperCol = 12, className }) => {
            return (
              <ThemedText type="subtitle" style={styles.cardText}>
                  {label}:{value}
              </ThemedText>
            );
          })
        )}
        {/* <ThemedText type="subtitle" style={styles.cardText}>
          تاریخ سر رسید: {item.date}
        </ThemedText>
        <ThemedText type="subtitle" style={styles.cardText}>
          کیلومتر باقی مانده: {item.remaining}
        </ThemedText>
        <ThemedText type="subtitle" style={styles.cardText}>
          وضعیت یادآور: {item.status}
        </ThemedText> */}
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
