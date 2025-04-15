import { CartState } from "../config/types/CartState";
import { CartItem, Item } from "../config/types/Product.types";

export const addItemToCart = (state: CartState, item: Item) => {
    const existingItem: CartItem | undefined = state.cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        const newItem: CartItem = { ...item, quantity: 1 };
        state.cartItems.push(newItem);

        // Alternatively, you can use the spread operator to create a new array:    
        // state.cartItems = [...state.cartItems, { ...item, quantity: 1 }];

        // or use the push method directly:
        // state.cartItems.push({ ...item, quantity: 1 });
    }

    state.totalQuantity += 1;
    state.totalPrice += item.price;
};

export const removeItemFromCart = (state: CartState, itemId: number) => {
    const existingItem = state.cartItems.find((cartItem) => cartItem.id === itemId);

    if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalPrice -= existingItem.price * existingItem.quantity;
        state.cartItems = state.cartItems.filter((cartItem) => cartItem.id !== itemId);
    }
};

export const clearCartItems = (state: CartState) => {
    state.cartItems = [];
    state.totalQuantity = 0;
    state.totalPrice = 0;
};

