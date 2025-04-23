import { CartState } from '../config/types/CartState';
import { CartItem, Item, Topping } from '../config/types/Product.types';

/**
 * Recalculates the total quantity and price of the cart.
 * @param state - The current cart state.
 */
export function recalculateCart(state: CartState): void {
  state.totalQuantity = state.cartItems.reduce((sum, ci) => sum + ci.quantity, 0);
  state.totalPrice = state.cartItems.reduce((sum, ci) => sum + ci.base_price * ci.quantity, 0);
}

/**
 * Sorts strings alphabetically.
 * @param a - The first string.
 * @param b - The second string.
 * @returns A number indicating the sort order.
 */
function alphabetical(a: string, b: string): number {
  return a.localeCompare(b);
}

/**
 * Filters toppings into excluded and added categories.
 * @param toppings - The list of toppings.
 * @returns An object containing excluded and added toppings.
 */
function filterToppings(toppings: Topping[]): { excludedToppings: Topping[]; addedToppings: Topping[] } {
  const excludedToppings = toppings.filter((t) => t.default && t.selected);
  const addedToppings = toppings.filter((t) => !t.default && t.selected);
  return { excludedToppings, addedToppings };
}

/**
 * Generates a unique modification key for a cart item based on its toppings.
 * @param excludedToppings - The excluded toppings.
 * @param addedToppings - The added toppings.
 * @returns A unique modification key.
 */
function generateModKey(excludedToppings: Topping[], addedToppings: Topping[]): string {
  return [
    ...excludedToppings.map((t) => `no-${t.id}`),
    ...addedToppings.map((t) => `add-${t.id}`),
  ]
    .sort(alphabetical)
    .join('_');
}

/**
 * Adds an item to the cart or updates its quantity if it already exists.
 * @param state - The current cart state.
 * @param item - The item to add.
 * @param toppings - The toppings for the item.
 * @param quantityToAdd - The quantity to add.
 */
export function addItemToCart(
  state: CartState,
  item: Item,
  toppings: Topping[] = [],
  quantityToAdd: number = 1
): void {
  const { excludedToppings, addedToppings } = filterToppings(toppings);
  const modKey = generateModKey(excludedToppings, addedToppings);

  const existingItem = state.cartItems.find((ci) => ci.id === item.id && ci.modKey === modKey);

  if (existingItem) {
    existingItem.quantity += quantityToAdd;
  } else {
    const basePrice = item.base_price ?? 0;
    const extrasTotal = addedToppings.reduce((sum, t) => sum + (t.price ?? 0), 0);

    const newCartItem: CartItem = {
      ...item,
      quantity: quantityToAdd,
      excludedToppings,
      addedToppings,
      modKey,
      base_price: basePrice + extrasTotal,
    };

    state.cartItems.push(newCartItem);
  }

  recalculateCart(state);
}

/**
 * Removes an item from the cart by its ID.
 * @param state - The current cart state.
 * @param itemId - The ID of the item to remove.
 */
export const removeItemFromCart = (state: CartState, itemId: number): void => {
  const existingItem = state.cartItems.find((cartItem) => cartItem.id === itemId);

  if (existingItem) {
    state.totalQuantity -= existingItem.quantity;
    state.totalPrice -= existingItem.base_price * existingItem.quantity;
    state.cartItems = state.cartItems.filter((cartItem) => cartItem.id !== itemId);
  }
};

/**
 * Clears all items from the cart.
 * @param state - The current cart state.
 */
export const clearCartItems = (state: CartState): void => {
  state.cartItems = [];
  state.totalQuantity = 0;
  state.totalPrice = 0;
};

