import {
  FlatList,
  View,
  TouchableOpacity,
  Text,
  Pressable,
} from "react-native";
import { ItemDetailCardProps, Topping } from "../../config/types/Product.types";
import { Card } from "../../components/Card";
import { ThemedText } from "../../components/ThemedText";
import { Color } from "../../config/constants/Colors";
import { styles } from "./ItemDetail.styles";

export const ItemDetailCard = ({
  removeList,
  addList,
  item,
  onAddToCart,
  onSelectTopping,
  quantity,
  onQuantityChange,
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
        {topping.name}
        {!topping.default && topping.price
          ? ` ($${topping.price.toFixed(2)})`
          : ""}
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
      <ThemedText type="subtitle">{item.description}</ThemedText>

      {/* Toppings Section */}
      {removeList.length > 0 && (
        <View style={styles.toppingSection}>
          <ThemedText style={styles.toppingLabel}>Remove</ThemedText>
          <FlatList
            data={removeList}
            keyExtractor={(t) => t.joinId!.toString()}
            renderItem={renderTopping}
          />
        </View>
      )}

      {addList.length > 0 && (
        <View style={styles.toppingSection}>
          <ThemedText style={styles.toppingLabel}>Add</ThemedText>
          <FlatList
            data={addList}
            keyExtractor={(t) => t.id.toString()}
            renderItem={renderTopping}
          />
        </View>
      )}

      {/* Quantity & Add to Cart */}
      <View style={styles.actionRow}>
        <View style={styles.quantityRow}>
          <Pressable
            onPress={() => onQuantityChange(Math.max(1, quantity - 1))}
            style={({ pressed }) => [
              styles.qtyButton,
              pressed && styles.qtyButtonPressed,
            ]}
          >
            <Text style={styles.qtyButtonText}>–</Text>
          </Pressable>

          <View style={styles.qtyDisplay}>
            <Text style={styles.qtyDisplayText}>{quantity}</Text>
          </View>

          <Pressable
            onPress={() => onQuantityChange(quantity + 1)}
            style={({ pressed }) => [
              styles.qtyButton,
              pressed && styles.qtyButtonPressed,
            ]}
          >
            <Text style={styles.qtyButtonText}>+</Text>
          </Pressable>
        </View>

        <Pressable
          onPress={onAddToCart}
          style={({ pressed }) => [
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
