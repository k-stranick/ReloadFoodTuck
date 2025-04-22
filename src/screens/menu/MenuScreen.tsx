import { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import { universalFetch } from "../../services/fetchApi";
import { QuickItemCard } from "./QuickItemCard";
import { useResponsiveColumns } from "../../hooks/useResponsiveColumns";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MenuStackParamList } from "../../config/types/Navigation.types";
import { Item } from "../../config/types/Product.types"; // Adjust the import path as necessary
import { ThemedView } from "../../components/ThemedView";
import { Color } from "../../config/constants/Colors";

type MenuScreenProps = Readonly<{
  navigation: NativeStackNavigationProp<MenuStackParamList, "MenuScreen">;
}>;

export default function MenuScreen({ navigation }: MenuScreenProps) {
  const [menuItems, setMenuItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const numColumns = useResponsiveColumns({
    minWidth: 200,
    minColumns: 2,
    maxColumns: 4,
  });

  useEffect(() => {
    const loadMenu = async () => {
      const data = await universalFetch<Item[]>("foodMenuQuick");
      if (data) setMenuItems(data);
      setLoading(false);
    };

    loadMenu();
  }, []);

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
            { item }: { item: Item } //TODO: WHY IS THIS THROWING AN ERROR
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
