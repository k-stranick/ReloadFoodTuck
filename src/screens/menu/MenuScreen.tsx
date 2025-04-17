import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator, Text } from "react-native";
import { universalFetch } from "../../services/fetchApi";
import { ItemCard } from "./QuickAccessItemCard"; // Adjust the import path
import { useResponsiveColumns } from "../../hooks/useResponsiveColumns";

type MenuItem = {
  id: number;
  name: string;
  description: string;
  base_price: number;
  img_url: string;
};

export default function MenuScreen() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const numColumns = useResponsiveColumns({
    minWidth: 200,
    minColumns: 2,
    maxColumns: 4,
  });

  useEffect(() => {
    const loadMenu = async () => {
      const data = await universalFetch<MenuItem[]>("foodMenuQuick"); // apiConfig key
      if (data) setMenuItems(data);
      setLoading(false);
    };

    loadMenu();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View style={{ padding: 16 }}>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id.toString()}
        key={numColumns}
        numColumns={numColumns}
        renderItem={(props: { item: MenuItem }) => (
          <ItemCard
            item={{
              id: props.item.id,
              name: props.item.name,
              price: props.item.base_price,
              img_url: props.item.img_url,
            }}
            handlePress={() => {
              console.log("Tapped:", props.item.name);
              // navigate to item detail
            }}
          />
        )}
      />
    </View>
  );
}
