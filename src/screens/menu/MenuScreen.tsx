// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   TouchableOpacity,
// } from "react-native";

// const MenuScreen = () => {
//   const menuItems = [
//     { id: "1", name: "Burger", price: "$5.99" },
//     { id: "2", name: "Pizza", price: "$8.99" },
//     { id: "3", name: "Tacos", price: "$3.99" },
//     { id: "4", name: "Salad", price: "$4.99" },
//   ];

//   const renderMenuItem = ({
//     item,
//   }: {
//     item: { id: string; name: string; price: string };
//   }) => (
//     <TouchableOpacity style={styles.menuItem}>
//       <Text style={styles.itemName}>{item.name}</Text>
//       <Text style={styles.itemPrice}>{item.price}</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Menu</Text>
//       <FlatList
//         data={menuItems}
//         renderItem={renderMenuItem}
//         keyExtractor={(item) => item.id}
//         contentContainerStyle={styles.list}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     padding: 16,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 16,
//     textAlign: "center",
//   },
//   list: {
//     paddingBottom: 16,
//   },
//   menuItem: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     padding: 16,
//     marginBottom: 8,
//     backgroundColor: "#f9f9f9",
//     borderRadius: 8,
//     shadowColor: "#000",
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   itemName: {
//     fontSize: 18,
//   },
//   itemPrice: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
// });

// export default MenuScreen;

import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator, Text } from "react-native";
import { universalFetch } from "../../services/fetchApi";
import { apiConfig } from "../../services/apiConfig";
import { ItemCard } from "./QuickAccessItemCard"; // Adjust the import path
import { useResponsiveColumns } from "../../hooks/useResponsiveColumns";
type MenuItem = {
  id: number;
  name: string;
  description: string;
  base_price: number;
  img_url?: string;
};

export default function MenuScreen() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);

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
        renderItem={({ item }) => (
          <ItemCard
            item={{
              id: item.id,
              name: item.name,
              price: item.base_price,
              img_url: item.img_url,
            }}
            handlePress={() => {
              console.log("Tapped:", item.name);
              // navigate to item detail
            }}
          />
        )}
      />
    </View>
  );
}
