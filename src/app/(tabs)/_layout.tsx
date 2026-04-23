import { useGroceryStore } from "@/store/grocery-store";
import { useAuth } from "@clerk/expo";
import { Redirect } from "expo-router";
import { NativeTabs } from "expo-router/unstable-native-tabs";
import { useEffect } from "react";
import { useColorScheme } from "react-native";

export default function TabsLayout() {
  const { isSignedIn, isLoaded } = useAuth();
  const { loadItems } = useGroceryStore();

  const colorScheme = useColorScheme();
  const tintColor =
    colorScheme === "dark" ? "hsl(142 70% 54%)" : "hsl(147 75% 33%)";

  useEffect(() => {
    loadItems();
  }, []);

  if (!isLoaded) {
    return null;
  }

  if (!isSignedIn) {
    return <Redirect href="/(auth)/sign-in" />;
  }

  return (
    <NativeTabs tintColor={tintColor}>
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>List</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="list.bullet.clipboard" md="list" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="planner">
        <NativeTabs.Trigger.Icon sf="plus" md="add" />
        <NativeTabs.Trigger.Label>Planner</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="insights">
        <NativeTabs.Trigger.Icon sf="chart.bar" md="analytics" />
        <NativeTabs.Trigger.Label>Insights</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
