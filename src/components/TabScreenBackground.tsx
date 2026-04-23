import { View } from "react-native";

export default function TabScreenBackground() {
  return (
    <View className="mt-12">
      <View
        pointerEvents="none"
        className="absolute -left-24 -top-7 h-64 w-64 rounded-full bg-accent"
      />
      <View
        pointerEvents="none"
        className="absolute right-[-80px] top-20 h-72 w-72 rounded-full bg-secondary"
      />
    </View>
  );
}
