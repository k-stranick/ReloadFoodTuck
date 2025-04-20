import { StyleSheet, Pressable } from "react-native";
import { Card } from "../../components/Card";
import { ItemCardProps } from "../../config/types/Product.types";

export const QuickItemCard = ({ item, onPress }: ItemCardProps) => (
  <Pressable style={{ flex: 1 }} onPress={onPress}>
    <Card
      image={item.img_url}
      title={item.name}
      subtitle={`$${item.base_price}`}
      // onPress={onPress}
      style={{ flex: 1 }} // ensures compatibility with FlatList grids
    />
  </Pressable>
);
