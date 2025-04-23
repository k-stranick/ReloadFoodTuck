import { View, Text, Pressable } from "react-native";
import { styles } from "../ItemDetail.styles";

/**
 * QuantityControls Component
 * 
 * This component renders controls for managing the quantity of an item. It includes
 * buttons to increment and decrement the quantity, as well as a display for the current quantity.
 * 
 * @param quantity - The current quantity of the item.
 * @param increment - A function to increment the quantity.
 * @param decrement - A function to decrement the quantity.
 * 
 * @returns A React component that renders the quantity controls.
 */
const QuantityControls = ({
  quantity,
  increment,
  decrement,
}: {
  quantity: number; // The current quantity of the item
  increment: () => void; // Function to increment the quantity
  decrement: () => void; // Function to decrement the quantity
}) => (
  <View style={styles.quantityRow}>
    {/* Decrement Button */}
    <Pressable
      onPress={decrement} // Trigger the decrement function when pressed
      style={({ pressed }) => [
        styles.qtyButton,
        pressed && styles.qtyButtonPressed, // Apply pressed styling
      ]}
    >
      <Text style={styles.qtyButtonText}>–</Text>
    </Pressable>

    {/* Quantity Display */}
    <View style={styles.qtyDisplay}>
      <Text style={styles.qtyDisplayText}>{quantity}</Text>
    </View>

    {/* Increment Button */}
    <Pressable
      onPress={increment} // Trigger the increment function when pressed
      style={({ pressed }) => [
        styles.qtyButton,
        pressed && styles.qtyButtonPressed, // Apply pressed styling
      ]}
    >
      <Text style={styles.qtyButtonText}>+</Text>
    </Pressable>
  </View>
);
export default QuantityControls;