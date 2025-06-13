import { View, FlatList, ActivityIndicator } from "react-native";
import { QuickItemCard } from "./QuickItemCard";
import { useResponsiveColumns } from "../../hooks/useResponsiveColumns";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MenuStackParamList } from "../../config/types/Navigation.types";
import { Item } from "../../config/types/Product.types"; // Adjust the import path as necessary
import { ThemedView } from "../../components/ThemedView";
import { useMenuItems } from "../../hooks/useMenuItems"; // Adjust the import path as necessary

type MenuScreenProps = Readonly<{
  navigation: NativeStackNavigationProp<MenuStackParamList, "MenuScreen">;
}>;

export default function MenuScreen({ navigation }: MenuScreenProps) {
  const {menuItems, loading} = useMenuItems();
  const numColumns = useResponsiveColumns({
    minWidth: 200,
    minColumns: 2,
    maxColumns: 4,
  });

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <ThemedView>
      <View style={{ padding: 16 }}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.id.toString()}
          key={numColumns}
          numColumns={numColumns}
          renderItem={(
            { item }: { item: Item }
          ) => (
            <QuickItemCard
              item={{
                id: item.id,
                name: item.name,
                base_price: item.base_price,
                img_url: item.img_url,
                description: item.description,
              }}
              onPress={() => navigation.navigate("ItemDetailScreen", { item })}
            />
          )}
        />
      </View>
    </ThemedView>
  );
}
