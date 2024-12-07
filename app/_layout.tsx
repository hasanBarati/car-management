import {
  DarkTheme,
  ThemeProvider
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  console.log("colorScheme", colorScheme);
  return (
    <SafeAreaView
      style={styles.safeArea}
      >
      <StatusBar backgroundColor={"black"} translucent={true}/>
      {/* <ScrollView> */}
        {/* <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}> */}
        <ThemeProvider value={DarkTheme}>
          <Stack>
            <Stack.Screen name="(header)" options={{ headerShown: true ,  gestureEnabled: true,}} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
        </ThemeProvider>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
  },
  safeArea: {
    flex: 1,
    backgroundColor: 'black', // Match this to the app's background
    paddingTop: StatusBar.currentHeight, // Ensure content starts after the StatusBar
  },
});
