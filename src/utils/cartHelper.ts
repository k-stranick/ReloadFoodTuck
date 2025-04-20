import { CartState } from '../config/types/CartState';
import { CartItem, Item, Topping } from '../config/types/Product.types';

export const addItemToCart = (
    state: CartState,
    item: Item,
    selectedToppings: Topping[] = []
) => {
    const excludedToppings = selectedToppings
        .filter((t) => t.default && t.selected);

    const toppingKey = excludedToppings.map((t) => `no-${t.id}`).sort().join("-");

    const existingItem = state.cartItems.find(
        (cartItem) =>
            cartItem.id === item.id &&
            (cartItem.excludedToppings?.map((t) => `no-${t.id}`).sort().join("-") ?? "") === toppingKey
    );

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        const newItem: CartItem = {
            ...item,
            quantity: 1,
            excludedToppings, // 👈 store only removed default toppings
        };
        state.cartItems.push(newItem);
    }

    const basePrice = item.base_price;
    state.totalQuantity += 1;
    state.totalPrice += basePrice;
};
export const removeItemFromCart = (state: CartState, itemId: number) => {
    const existingItem = state.cartItems.find(
        (cartItem) => cartItem.id === itemId
    );

    if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalPrice -= existingItem.base_price * existingItem.quantity;
        state.cartItems = state.cartItems.filter(
            (cartItem) => cartItem.id !== itemId
        );
    }
};

export const clearCartItems = (state: CartState) => {
    state.cartItems = [];
    state.totalQuantity = 0;
    state.totalPrice = 0;
};


//base_price + (existingItem.excludedToppings?.reduce((acc, topping) => acc + (topping.price ?? 0), 0) ?? 0)
// + (existingItem.toppings?.reduce((acc, topping) => acc + (topping.price ?? 0), 0) ?? 0) // Add the price of selected toppings