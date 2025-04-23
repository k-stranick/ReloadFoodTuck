import { View, TouchableOpacity } from "react-native";
import { Topping } from "../../../config/types/Product.types";
import { ThemedText } from "../../../components/ThemedText";
import { Color } from "../../../config/constants/Colors";
import { styles } from "../ItemDetail.styles";

/**
 * renderTopping Function
 * 
 * This function renders a single topping item as a touchable component. It displays
 * the topping's name, price (if applicable), and a visual indicator for whether the
 * topping is selected. When the topping is pressed, it triggers the `onSelectTopping` callback.
 * 
 * @param topping - The topping object to render.
 * @param onSelectTopping - A callback function triggered when the topping is selected or deselected.
 * 
 * @returns A React component that renders a single topping item.
 */
const renderTopping = (
    topping: Topping, // The topping object to render
    onSelectTopping: (topping: Topping) => void // Callback for selecting/deselecting the topping
) => (
    <TouchableOpacity
        onPress={() => onSelectTopping(topping)} // Trigger the callback when the topping is pressed
        style={styles.toppingItem} // Apply styling for the topping item
    >
        {/* Visual Indicator for Topping Selection */}
        <View
            style={[
                styles.toppingIndicator,
                {
                    backgroundColor: topping.selected
                        ? Color.TOGGLE_SELECTED // Selected state color
                        : Color.TOGGLE_UNSELECTED, // Unselected state color
                },
            ]}
        />
        {/* Topping Name and Price */}
        <ThemedText>
            {topping.name} 
            {!topping.default && topping.price
                ? ` ($${topping.price.toFixed(2)})` // Display the price if it's not a default topping
                : ""}
        </ThemedText>
    </TouchableOpacity>
);

export default renderTopping;