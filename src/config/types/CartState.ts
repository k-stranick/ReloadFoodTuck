import { CartItem } from "./Product.types";

export interface CartState {
    cartItems: CartItem[]; // Array of items in the cart
    totalQuantity: number; // Total quantity of items in the cart
    totalPrice: number; // Total price of items in the cart
}
export interface CartContextType extends CartState {
    addToCart: (item: CartItem) => void; // Function to add an item to the cart
    removeFromCart: (itemId: number) => void; // Function to remove an item from the cart
    clearCart: () => void; // Function to clear the cart
}