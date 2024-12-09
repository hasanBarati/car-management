import { Stack } from "expo-router";
import "react-native-reanimated";

export default function PagesLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="reminders" />
      <Stack.Screen name="services" />
    </Stack>
  );
}

