import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { useColorScheme } from "@/hooks/useColorScheme";
import {
  AppStateStatus,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
} from "react-native";
import Toast from "react-native-toast-message";
import { toastConfig } from "@/config/ToastConfig";
import { focusManager, QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { useAppState } from "@/hooks/useAppState";
import { useRefreshOnFocus } from "@/hooks/useRefreshOnFocus";
import { useOnlineManager } from "@/hooks/useOnlineManager";


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();


function onAppStateChange(status: AppStateStatus) {
  if (Platform.OS !== 'web') {
    focusManager.setFocused(status === 'active');
  }
}

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 2 } },
});


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




  // useAppState(onAppStateChange);
  useOnlineManager();
  // useReactQueryDevTools(queryClient);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor={"black"} translucent={true} />

      {/* <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}> */}
      <ThemeProvider value={DarkTheme}>
        <QueryClientProvider client={queryClient}>
          <Stack
            screenOptions={{
              headerShown: false, // Disable individual headers for screens
            }}
          >
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
        </QueryClientProvider>
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

