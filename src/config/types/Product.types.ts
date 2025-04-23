export interface Item {
    readonly id: number;
    readonly name: string;
    readonly base_price: number; // Optional property for base price
    readonly img_url: string;
    readonly description?: string; // Optional property for description
    toppings?: Topping[];
}

export interface Topping {
    joinId?: number // uniqueIdentifier for the join table used in removing toppings 
    id: number; // Unique identifier for the topping
    name: string; // Name of the topping
    price?: number; // Price of the topping
    selected?: boolean; // Optional property to indicate if the topping is selected
    default?: boolean; // optional property to indicate if the topping is default
}

export interface CartItem extends Item {
    quantity: number; // Quantity of the item in the cart
    addedToppings: Topping[]; //Array of toppings added to the item
    excludedToppings: Topping[]; //Array of toppings removed from the item
    modKey?: string; // unique key for this item+mod combo
}
