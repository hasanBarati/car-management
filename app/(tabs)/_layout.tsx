import Logo from "@/assets/icons/logo";
import { HapticTab } from "@/components/HapticTab";
import Header from "@/components/Header";
import PagesHeader from "@/components/PagesHeader";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors, tintColorLight } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Tabs } from "expo-router";
import React from "react";
import { Platform, Text, View } from "react-native";
// import Logo from "@/assets/icons/logo";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: "#4caf50" },
        header: () => <Header />, // Add a button to the header
        tabBarInactiveTintColor: "#fff",
        tabBarActiveTintColor: tintColorLight,
        // tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        // headerShown: false,

        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "صفحه ",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={25} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "پروفایل",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={25} name="user" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="support"
        options={{
          title: "پشتیبانی",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={25} name="phone" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: "تنظیمات",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={25} name="setting" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(reminders)/index"
        options={{
          href: null,
          header: () => (
            <PagesHeader
              image={require("@/assets/images/repaire.jpg")}
              title={"یادآورها"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(reminders)/add"
        options={{
          href: null,
          header: () => (
            <PagesHeader
              image={require("@/assets/images/repaire.jpg")}
              title={"ثبت یادآور"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="repaire/index"
        options={{
          href: null,
          header: () => (
            <PagesHeader
              image={require("@/assets/images/repaire.jpg")}
              title={"تاریخچه تعمیرات "}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="repaire/add"
        options={{ 
          href: null,
          header: () => (
            <PagesHeader
              image={require("@/assets/images/repaire.jpg")}
              title={"ثبت تعمیرات "}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="repaire/add-reapire-locataion"
        options={{
          href: null,
          header: () => (
            <PagesHeader
              image={require("@/assets/images/repaire.jpg")}
              title={"ذخیره تعمیرگاه "}
            />
          ),
        }}
      />
    </Tabs>
  );
}
