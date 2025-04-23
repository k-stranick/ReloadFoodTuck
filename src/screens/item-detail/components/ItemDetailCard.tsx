import { View, Text, Pressable } from "react-native";
import { ItemDetailCardProps } from "./ItemDetailCard.types";
import { Card } from "../../../components/Card";
import { ThemedText } from "../../../components/ThemedText";
import { styles } from "../ItemDetail.styles";
import QuantityControls from "./QuantityControls";
import ToppingsSection from "./ToppingSelection";

/**
 * ItemDetailCard Component
 * 
 * This component renders the details of a menu item, including its image, name, price,
 * description, toppings (removable and additional), quantity controls, and an "Add to Cart" button.
 * 
 * @param removeList - List of toppings that can be removed.
 * @param addList - List of additional toppings that can be added.
 * @param item - The menu item being displayed.
 * @param onAddToCart - Function to handle adding the item to the cart.
 * @param onSelectTopping - Function to handle selecting/deselecting a topping.
 * @param quantity - The current quantity of the item.
 * @param increment - Function to increment the quantity.
 * @param decrement - Function to decrement the quantity.
 * @returns A React component that renders the item details card.
 */
export const ItemDetailCard = ({
  removeList,
  addList,
  item,
  onAddToCart,
  onSelectTopping,
  quantity,
  increment,
  decrement,
}: ItemDetailCardProps) => {

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
        <ToppingsSection
          title="Remove"
          toppings={removeList} // Array of removable toppings
          onSelectTopping={onSelectTopping} // Function Passed as prop to handle topping selection
        />
      )}

      {addList.length > 0 && (
        <ToppingsSection
          title="Add"
          toppings={addList} // Array of Toppings that can be added
          onSelectTopping={onSelectTopping}
        />
      )}

      {/* Quantity & Add to Cart */}
      <View style={styles.actionRow}>
        <QuantityControls
          quantity={quantity} // Current quantity of the item
          increment={increment!} // Function to increment the quantity
          decrement={decrement!} // Function to decrement the quantity
        />

        <Pressable
          onPress={onAddToCart} // Handler for adding the item to the cart
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
