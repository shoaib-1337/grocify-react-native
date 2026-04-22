import ListHeroCard from "@/components/List/ListHeroCard";
import TabScreenBackground from "@/components/TabScreenBackground";
import { useGroceryStore } from "@/store/grocery-store";
import { useEffect } from "react";
import { ScrollView } from "react-native";

export default function ListScreen() {
  const loadItems = useGroceryStore((state) => state.loadItems);

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
      
    </ScrollView>
  );
}
