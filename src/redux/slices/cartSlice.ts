import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartState } from '../../config/types/CartState';
import { Item, Topping } from '../../config/types/Product.types';
import {
    addItemToCart,
    clearCartItems,
    removeItemFromCart,
} from '../../utils/cartHelper';

/**
 * Payload structure for adding an item to the cart.
 */
interface AddToCartPayload {
    item: Item;
    toppings: Topping[];
    quantity: number;
}

// Initial state for the cart slice
const initialState: CartState = {
    cartItems: [],
    totalQuantity: 0,
    totalPrice: 0,
};

// Create the cart slice
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: { //Reducers define how the state is updated in response to actions. Each reducer function takes two arguments: the current state and an action object dispatched.

        /**
         * Adds an item to the cart.
         * @param state - The current state of the cart.
         * @param action - The payload containing the item, toppings, and quantity.
         */
        addToCart: (state, action: PayloadAction<AddToCartPayload>) => {
            const { item, toppings, quantity } = action.payload;
            addItemToCart(state, item, toppings, quantity);
        },

        /**
         * Removes an item from the cart by its ID.
         * @param state - The current state of the cart.
         * @param action - The payload containing the ID of the item to remove.
         */
        removeFromCart: (state, action: PayloadAction<number>) => {
            const itemId = action.payload;
            removeItemFromCart(state, itemId);
        },

        /**
         * Clears all items from the cart.
         * @param state - The current state of the cart.
         */
        clearCart: (state) => {
            clearCartItems(state);
        },
    },
});

// Export actions for use in components
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

// Export the reducer for use in the Redux store
export const cartReducer = cartSlice.reducer;