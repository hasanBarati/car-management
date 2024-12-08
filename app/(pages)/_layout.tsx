import "react-native-reanimated";
import { SafeAreaView, StyleSheet } from "react-native";
import { Stack } from "expo-router";
import Header from "@/components/Header";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { IconSymbol } from "@/components/ui/IconSymbol";

export default function PagesLayout() {
  return (
    <SafeAreaView>
      <Stack>
        <Stack.Screen name="reminders" />
        <Stack.Screen name="services" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
  },
});
