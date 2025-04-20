import {
  FlatList,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";
import { ItemDetailCardProps, Topping } from "../../config/types/Product.types";
import { Card } from "../../components/Card";
import { ThemedText } from "../../components/ThemedText";
import { Color } from "../../config/constants/Colors";

export const ItemDetailCard = ({
  item,
  onAddToCart,
  onSelectTopping,
  quantity,
}: ItemDetailCardProps) => {
  const renderTopping = ({ item: topping }: { item: Topping }) => (
    <TouchableOpacity
      onPress={() => onSelectTopping(topping)}
      style={styles.toppingItem}
    >
      <View
        style={[
          styles.toppingIndicator,
          {
            backgroundColor: topping.selected
              ? Color.TOGGLE_SELECTED
              : Color.TOGGLE_UNSELECTED,
          },
        ]}
      />
      <ThemedText>
        {topping.name} {topping.price ? `($${topping.price.toFixed(2)})` : ""}
      </ThemedText>
    </TouchableOpacity>
  );

  return (
    <Card
      image={item.img_url}
      title={item.name}
      subtitle={`$${item.base_price}`}
      style={styles.card}
    >
      <ThemedText>{item.description}</ThemedText>

      {/* Toppings */}
      <View style={styles.toppingSection}>
        <ThemedText style={styles.toppingLabel}>Toppings:</ThemedText>
        <FlatList
          data={item.toppings}
          keyExtractor={(topping) => topping.id.toString()}
          renderItem={renderTopping}
        />
      </View>

      {/* Quantity & Add to Cart */}
      <View style={styles.actionRow}>
        <Text style={styles.quantityText}>Quantity: {quantity}</Text>
        <Pressable
          onPress={onAddToCart}
          style={({ pressed }: { pressed: boolean }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
        >
          <Text style={styles.buttonText}>Add to Cart</Text>
        </Pressable>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
  },
  toppingSection: {
    marginTop: 12,
  },
  toppingLabel: {
    marginBottom: 6,
  },
  toppingItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
  },
  toppingIndicator: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    marginRight: 8,
  },
  actionRow: {
    flexDirection: "row",
    marginTop: 16,
    alignItems: "center",
  },
  quantityText: {
    marginRight: 10,
  },
  button: {
    backgroundColor: Color.BUTTON_COLOR2,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  buttonPressed: {
    backgroundColor: Color.BUTTON_COLOR2_PRESSED,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});
