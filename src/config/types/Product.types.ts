
export interface Item {
    readonly id: number;
    readonly name: string;
    // readonly price: number;
    readonly base_price: number; // Optional property for base price
    readonly img_url: string;
    readonly description?: string; // Optional property for description
    toppings?: Topping[];
    excludedToppings?: Topping[];
}

export interface Topping {
    id: number; // Unique identifier for the topping
    name: string; // Name of the topping
    price?: number; // Price of the topping
    selected?: boolean; // Optional property to indicate if the topping is selected
    default?: boolean; // optional property to indicate if the topping is default
}

export interface ItemDetailCardProps {
    item: Item; // The item to be displayed in the card
    onAddToCart: () => void; // Function to handle adding the item to the cart
    onSelectTopping: (topping: Topping) => void; // Function to handle selecting a topping
    quantity: number; // Quantity of the item in the cart
}

export interface ItemCardProps {
    onPress?: () => void; // Optional onPress function for when the card is pressed
    readonly item: Item;
    readonly handlePress?: () => void; // Optional onPress function for when the card is pressed
    readonly handleButton?: (item: Item) => void; // Optional function to add item to cart with button (need to rename TODO:RENAME)
}

export interface CartItem extends Item {
    quantity: number; // Quantity of the item in the cart
    selectedToppings?: Topping[];
}
