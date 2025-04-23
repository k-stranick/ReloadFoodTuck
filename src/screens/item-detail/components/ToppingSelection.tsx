import { FlatList, View } from "react-native";
import { Topping } from "../../../config/types/Product.types";
import { ThemedText } from "../../../components/ThemedText";
import { styles } from "../ItemDetail.styles";
import renderTopping from "./ToppingItems";

/**
 * ToppingsSection Component
 * 
 * This component renders a section of toppings, either removable or additional, for a menu item.
 * It displays a title and a list of toppings, allowing users to select or deselect toppings.
 * 
 * @param title - The title of the section (e.g., "Remove" or "Add").
 * @param toppings - An array of toppings to display in the section.
 * @param onSelectTopping - A callback function triggered when a topping is selected or deselected.
 * 
 * @returns A React component that renders the toppings section.
 */
const ToppingsSection = ({
    title,
    toppings,
    onSelectTopping,
}: {
    //inline type definition for props 
    title: string;
    toppings: Topping[];
    onSelectTopping: (topping: Topping) => void; // Callback for selecting/deselecting a topping
}) => (
    <View style={styles.toppingSection}>
        <ThemedText style={styles.toppingLabel}>{title}</ThemedText>
        <FlatList
            data={toppings}
            keyExtractor={(topping) => (topping.joinId ? topping.joinId.toString() : topping.id.toString())} // Unique key for each topping
            renderItem={({ item }) => renderTopping(item, onSelectTopping)} // Render each topping using the renderTopping function
        />
    </View>
);

export default ToppingsSection