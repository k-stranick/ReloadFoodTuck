import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartState } from '../../config/types/CartState';
import { Item } from '../../config/types/Product.types';
import { addItemToCart, clearCartItems, removeItemFromCart } from '../../utils/cartHelper';

const initializeState: CartState = {
    cartItems: [],
    totalQuantity: 0,
    totalPrice: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initializeState,
    reducers: {
        addToCart: (state, action: PayloadAction<Item>) => {
            const item = action.payload;
            addItemToCart(state, item);
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            const itemId = action.payload;
            removeItemFromCart(state, itemId);
        },
        clearCart: (state) => {
            clearCartItems(state);
        },
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
