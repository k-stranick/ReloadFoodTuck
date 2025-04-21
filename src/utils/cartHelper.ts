import { CartState } from '../config/types/CartState';
import { CartItem, Item, Topping } from '../config/types/Product.types';

// helper that sums up cart quantities & prices
export function recalcCart(state: CartState) {
  state.totalQuantity = state.cartItems.reduce((sum, ci) => sum + ci.quantity, 0);
  state.totalPrice = state.cartItems.reduce((sum, ci) => sum + ci.base_price * ci.quantity, 0);
}

function alphabetical(a: string, b: string): number {
  return a.localeCompare(b);
}

export function addItemToCart(
  state: CartState,
  item: Item,
  toppings: Topping[] = [],
  quantityToAdd: number = 1
) {
  // defaults turned ON → removed
  const excludedToppings = toppings.filter(t => t.default && t.selected);
  // extras turned ON → added
  const addedToppings = toppings.filter(t => !t.default && t.selected);

  // build a unique modKey so identical combos merge
  const key = [
    ...excludedToppings.map(t => `no-${t.id}`),
    ...addedToppings.map(t => `add-${t.id}`),
  ].sort(alphabetical).join('_');

  const existing = state.cartItems.find(ci =>
    ci.id === item.id &&
    ci.modKey === key
  );

  if (existing) {
    existing.quantity += quantityToAdd;
  } else {
    const basePrice = item.base_price ?? 0;
    const extrasTotal = addedToppings.reduce((sum, t) => sum + (t.price ?? 0), 0);

    const newLine: CartItem = {
      ...item,
      quantity: quantityToAdd,
      excludedToppings,
      addedToppings,
      modKey: key,
      base_price: basePrice + extrasTotal,
    };
    state.cartItems.push(newLine);
  }

  // recompute totals
  recalcCart(state);
}

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