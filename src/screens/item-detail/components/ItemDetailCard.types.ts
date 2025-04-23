import { StyleProp, ViewStyle } from 'react-native';
import { Item, Topping } from '../../../config/types/Product.types';

export interface ItemDetailCardProps {
    item: Item; // The item to be displayed in the card
    onAddToCart: () => void; // Function to handle adding the item to the cart
    onSelectTopping: (topping: Topping) => void; // Function to handle selecting a topping
    quantity: number; // Quantity of the item in the cart
    removeList: Topping[];
    addList: Topping[];
    style?: StyleProp<ViewStyle>; // Optional style for the card
    increment?: () => void; // Optional function to increment the quantity
    decrement?: () => void; // Optional function to decrement the quantity
}