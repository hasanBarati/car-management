import { ThemedText } from "@/components/ThemedText";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { IRoute, MaintenanceItem } from "@/types/ndex";
import { convertDataToContent } from "@/utils";
import { useRouter } from "expo-router";
import React, { Children } from "react";
import { ActivityIndicator, StyleSheet, TouchableHighlight, View } from "react-native";

export interface CardAction<T> {
  icon: string;
  onPress: (item: T) => void;
  color?: string;
  loading?: boolean;
}

type StatusCardProps<T> = {
  item: T;
  type?: string;
  actions?: CardAction<T>[];
};

export type CardItem = IRoute | MaintenanceItem;

const Card = <T extends CardItem>({
  item,
  type = "status",
  actions=[]
}: StatusCardProps<T>) => {
  const data = convertDataToContent(item, type);
  const router = useRouter();
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={styles.cardHeaderDetail}>
          {type === "status" && (
            <View
              style={[styles.indicator, { backgroundColor: data?.color }]}
            />
          )}
          <ThemedText type="titleColor">{data?.title}</ThemedText>
          <ThemedText>{data?.date}</ThemedText>
        </View>
        <View style={styles.cardHeaderDetail}>
          {actions.map((action, index) => (
            <TouchableHighlight
              key={index}
              onPress={() => action.onPress(item)}
              underlayColor="transparent"
              disabled={action.loading}
            >
              {action.loading ? (
                <ActivityIndicator
                  size="small"
                  color={action.color || "white"}
                />
              ) : (
                <IconSymbol
                  name={action.icon}
                  size={18}
                  color={action.color || "white"}
                />
              )}
            </TouchableHighlight>
          ))}
          {/* <IconSymbol name="delete" size={18} color="white" /> */}
          {/* <TouchableHighlight onPress={() => router.push({pathname:`/${URLs.ADD_REMINDERS}`,params:item})}>
            <IconSymbol size={18} name="edit" color="white" />
          </TouchableHighlight> */}
        </View>
      </View>
      <View style={styles.cardContent}>
        {Children.toArray(
          data?.content?.map(({ label, value, className }) => {
            return (
              <ThemedText
                type="subtitle"
                style={[styles.cardText, { ...className }]}
              >
                {label}:{value}
              </ThemedText>
            );
          })
        )}
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
    textAlign: "left",
  },
  cardActions: {
    flexDirection: "row",
    position: "absolute",
    top: 16,
    right: 16,
  },
});

export default Card;
