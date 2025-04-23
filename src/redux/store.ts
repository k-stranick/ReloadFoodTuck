/**
 * Redux Store Configuration
 * 
 * This file sets up the Redux store for the application using Redux Toolkit's `configureStore`.
 * It combines all the reducers and provides strongly typed utilities for accessing the store's state
 * and dispatching actions.
 * 
 * The store is configured with the following reducer:
 * - `cartReducer`: Manages the state of the shopping cart, including items, quantities, and prices.
 * 
 * Exports:
 * - `store`: The configured Redux store, which combines all reducers and middleware.
 * - `RootState`: A TypeScript type representing the shape of the entire Redux state, inferred from the store.
 * - `AppDispatch`: A TypeScript type for the dispatch function, ensuring that dispatched actions are type-checked.
 * 
 * @example
 * // Accessing the store's state
 * import { useAppSelector } from '../hooks/useRedux';
 * const cartItems = useAppSelector((state) => state.cart.cartItems);
 * 
 * @example
 * // Dispatching an action
 * import { useAppDispatch } from '../hooks/useRedux';
 * import { addToCart } from './slices/cartSlice';
 * const dispatch = useAppDispatch();
 * dispatch(addToCart({ item, toppings, quantity }));
 */
import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './slices/cartSlice';

// Configure the Redux store with the cart reducer
export const store = configureStore({
    reducer: {
        cart: cartReducer, // Manages the cart state
    },
});

// Type representing the shape of the entire Redux state
export type RootState = ReturnType<typeof store.getState>;

// Type for the Redux dispatch function, ensuring actions are type-checked
export type AppDispatch = typeof store.dispatch;