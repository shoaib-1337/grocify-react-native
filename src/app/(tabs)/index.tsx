import CompletedItems from "@/components/List/CompletedItems";
import ListHeroCard from "@/components/List/ListHeroCard";
import PendingItemCard from "@/components/List/PendingItemCard";
import TabScreenBackground from "@/components/TabScreenBackground";
import { useGroceryStore } from "@/store/grocery-store";
import { FlatList, Text, View } from "react-native";

export default function ListScreen() {
  const { items } = useGroceryStore();

  const pendingItems = items.filter((item) => !item.purchased);

  return (
    <FlatList
      className="flex-1 bg-background "
      data={pendingItems}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PendingItemCard item={item} />}
      contentContainerStyle={{ padding: 20, gap: 14 }}
      contentInsetAdjustmentBehavior="automatic"
      ListHeaderComponent={
        <View style={{ gap: 14, paddingTop: 20 }}>
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
        </View>
      }
      ListFooterComponent={<CompletedItems />}
    />

    // <ScrollView
    //   className="flex-1 bg-background py-4"
    //   showsHorizontalScrollIndicator={false}
    //   contentContainerStyle={{ padding: 20, gap: 14 }}
    // >
    //   <TabScreenBackground />
    //   <ListHeroCard />

    //   <View className="flex-row items-center justify-between px-1">
    //     <Text className="text-sm font-semibold uppercase tracking-[1px] text-muted-foreground">
    //       Shopping items
    //     </Text>
    //     <Text className="text-sm text-muted-foreground">
    //       {pendingItems.length} active
    //     </Text>
    //   </View>
    //   {pendingItems.map((item) => (
    //     <PendingItemCard key={item.id} item={item} />
    //   ))}
    //   <CompletedItems />
    // </ScrollView>
  );
}
