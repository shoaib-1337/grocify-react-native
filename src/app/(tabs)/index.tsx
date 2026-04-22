import CompletedItems from "@/components/List/CompletedItems";
import ListHeroCard from "@/components/List/ListHeroCard";
import PendingItemCard from "@/components/List/PendingItemCard";
import TabScreenBackground from "@/components/TabScreenBackground";
import { useGroceryStore } from "@/store/grocery-store";
import { useEffect } from "react";
import { ScrollView, Text, View } from "react-native";

export default function ListScreen() {
  const { loadItems, items } = useGroceryStore();

  const pendingItems = items.filter((item) => !item.purchased);

  useEffect(() => {
    loadItems();
  }, [loadItems]);

  return (
    <ScrollView
      className="flex-1 bg-background py-4"
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ padding: 20, gap: 14 }}
    >
      <TabScreenBackground />
      <ListHeroCard />

      <View className="flex-row items-center justify-between px-1">
        <Text className="text-sm font-semibold uppercase tracking-[1px] text-muted-foreground">
          Shopping items
        </Text>
        <Text className="text-sm text-muted-foreground">
          {pendingItems.length} active
        </Text>
      </View>
      {pendingItems.map((item) => (
        <PendingItemCard key={item.id} item={item} />
      ))}
      <CompletedItems />
    </ScrollView>
  );
}
