import { View, Text } from "react-native";
import React from "react";

const EmptyCard = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>No items found</Text>
    </View>
  );
};

export default EmptyCard;
