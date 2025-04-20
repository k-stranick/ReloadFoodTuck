// import { CartState } from '../config/types/CartState';
// import { CartItem, Item, Topping } from '../config/types/Product.types';

// export const addItemToCart = (
//     state: CartState,
//     item: Item,
//     selectedToppings: Topping[] = []
// ) => {
//     const excludedToppings = selectedToppings
//         .filter((t) => t.default && t.selected);

//     const toppingKey = excludedToppings.map((t) => `no-${t.id}`).sort().join("-");

//     const existingItem = state.cartItems.find(
//         (cartItem) =>
//             cartItem.id === item.id &&
//             (cartItem.excludedToppings?.map((t) => `no-${t.id}`).sort().join("-") ?? "") === toppingKey
//     );

//     if (existingItem) {
//         existingItem.quantity += 1;
//     } else {
//         const newItem: CartItem = {
//             ...item,
//             quantity: 1,
//             excludedToppings, // 👈 store only removed default toppings
//         };
//         state.cartItems.push(newItem);
//     }

//     const basePrice = item.base_price;
//     state.totalQuantity += 1;
//     state.totalPrice += basePrice;
// };

// export function addItemToCart(
//     state: CartState,
//     item: Item,
//     toppings: Topping[] = []
//   ) {
//     // Which defaults were turned _off_?
//     const excludedToppings = toppings.filter(t => t.default && !t.selected);
  
//     // Which extras were turned _on_?
//     const addedToppings = toppings.filter(t => !t.default && t.selected);
  
//     // Build a key so identical mod‐sets merge into one line item
//     const key = [
//       // e.g. no-3_no-5 for removed
//       ...excludedToppings.map(t => `no-${t.id}`),
//       // e.g. add-8_add-9 for added
//       ...addedToppings.map(t => `add-${t.id}`),
//     ]
//       .sort()
//       .join("_");
  
//     // Look for an existing line with same itemId + same mods
//     const existing = state.cartItems.find(ci =>
//       ci.id === item.id &&
//       ci.modKey === key
//     );
  
//     if (existing) {
//       existing.quantity += 1;
//     } else {
//       const basePrice = item.base_price ?? 0;
//       // Sum up extra‐price of added sauces
//       const extrasTotal = addedToppings.reduce(
//         (sum, t) => sum + (t.price || 0),
//         0
//       );
  
//       state.cartItems.push({
//         ...item,
//         quantity: 1,
//         excludedToppings,
//         addedToppings,
//         modKey: key,                 // store for future merges
//         base_price: basePrice + extrasTotal,
//       });
//     }
  
//     // Recompute totals however you do that in clearCartItems
//     recalcCart(state);
//   }
import { CartState } from '../config/types/CartState';
import { CartItem, Item, Topping } from '../config/types/Product.types';

// helper that sums up cart quantities & prices
export function recalcCart(state: CartState) {
  state.totalQuantity = state.cartItems.reduce((sum, ci) => sum + ci.quantity, 0);
  state.totalPrice    = state.cartItems.reduce((sum, ci) => sum + ci.base_price * ci.quantity, 0);
}

export function addItemToCart(
  state: CartState,
  item: Item,
  toppings: Topping[] = []
) {
  // defaults turned ON → removed
  const excludedToppings = toppings.filter(t => t.default && t.selected);
  // extras turned ON → added
  const addedToppings = toppings.filter(t => !t.default && t.selected);

  // build a unique modKey so identical combos merge
  const key = [
    ...excludedToppings.map(t => `no-${t.id}`),
    ...addedToppings.map(t => `add-${t.id}`),
  ].sort().join('_');

  const existing = state.cartItems.find(ci =>
    ci.id === item.id &&
    ci.modKey === key
  );

  if (existing) {
    existing.quantity += 1;
  } else {
    const basePrice   = item.base_price ?? 0;
    const extrasTotal = addedToppings.reduce((sum, t) => sum + (t.price || 0), 0);

    const newLine: CartItem = {
      ...item,
      quantity:       1,
      excludedToppings,
      addedToppings,
      modKey:         key,
      base_price:     basePrice + extrasTotal,
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

// export function recalcCart(state: CartState) {
//     // Total up all quantities
//     state.totalQuantity = state.cartItems
//       .reduce((sum, ci) => sum + ci.quantity, 0);
  
//     // Total up all line‑item costs
//     state.totalPrice = state.cartItems
//       .reduce((sum, ci) => sum + (ci.base_price * ci.quantity), 0);
//   }
//base_price + (existingItem.excludedToppings?.reduce((acc, topping) => acc + (topping.price ?? 0), 0) ?? 0)
// + (existingItem.toppings?.reduce((acc, topping) => acc + (topping.price ?? 0), 0) ?? 0) // Add the price of selected toppings