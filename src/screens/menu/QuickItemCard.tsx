import { StyleSheet, Pressable } from "react-native";
import { Card } from "../../components/Card";
import { QuickItemCardProps } from "./QuickItemCard.types";
import { Color } from "../../config/constants/Colors";

export const QuickItemCard = ({ item, onPress }: QuickItemCardProps) => (
  <Pressable style={{ flex: 1 }} onPress={onPress}>
    <Card
      image={item.img_url}
      title={item.name}
      subtitle={`$${item.base_price}`}
      style={styles.card} // ensures compatibility with FlatList grids
    />
  </Pressable>
);

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: Color.BRIGHT_ORANGE,
    minHeight: 318,
    maxWidth: 220

  },
});
