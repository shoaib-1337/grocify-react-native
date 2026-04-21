import ListHeroCard from "@/components/List/ListHeroCard";
import TabScreenBackground from "@/components/TabScreenBackground";
import { useClerk, useUser } from "@clerk/expo";
import { ScrollView } from "react-native";

export default function ListScreen() {
  const { user } = useUser();
  const { signOut } = useClerk();

  return (
    <ScrollView
      className="flex-1 bg-background py-4"
      showsHorizontalScrollIndicator={false}
      contentContainerClassName="p-20 gap-14"
    >
      <TabScreenBackground />
      <ListHeroCard/>
    </ScrollView>
  );
}
