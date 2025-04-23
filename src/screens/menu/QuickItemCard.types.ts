import { Item } from "../../config/types/Product.types";

export interface QuickItemCardProps {
    onPress?: () => void; // Optional onPress function for when the card is pressed
    readonly item: Item;
    readonly handlePress?: () => void; // Optional onPress function for when the card is pressed
    readonly handleButton?: (item: Item) => void; // Optional function to add item to cart with button (need to rename TODO:RENAME)
}