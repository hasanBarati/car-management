import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { useColorScheme } from "@/hooks/useColorScheme";
import { SafeAreaView, StatusBar, StyleSheet, Text } from "react-native";
import Toast from "react-native-toast-message";
import { toastConfig } from "@/config/ToastConfig";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    IranSans: require("../assets/fonts/IRANSansWebFaNum.ttf"),
    IranSansMedium: require("../assets/fonts/IRANSansWebFaNum-Medium.ttf"),
    IranSansBold: require("../assets/fonts/IRANSansWebFaNum-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.safeArea}>
           
      <StatusBar backgroundColor={"black"} translucent={true} />
    
      {/* <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}> */}
      <ThemeProvider value={DarkTheme}>
 
      <Stack
          screenOptions={{
            headerShown: false, // Disable individual headers for screens
          }}
        >
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </ThemeProvider>
      <Toast config={toastConfig} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,

  },
  safeArea: {
    flex: 1,
    backgroundColor: "black", 
    paddingTop: StatusBar.currentHeight, 
  },
});
