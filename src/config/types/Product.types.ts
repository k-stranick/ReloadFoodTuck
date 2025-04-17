
export interface Item {
    readonly id: number;
    readonly name: string;
    readonly price: number;
    readonly img_url: string;
    readonly description?: string; // Optional property for description
}

export interface ItemCardProps {
    readonly item: Item;
    readonly handlePress?: () => void; // Optional onPress function for when the card is pressed
    readonly handleButton?: (item: Item) => void; // Optional function to add item to cart with button (need to rename TODO:RENAME)
}

export interface CartItem extends Item {
    quantity: number; // Quantity of the item in the cart
}
