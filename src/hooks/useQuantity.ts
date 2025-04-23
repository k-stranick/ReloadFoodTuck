
import { useState } from "react";

/**
 * useQuantity Hook
 * 
 * This custom React hook manages the state and logic for handling the quantity of an item.
 * It provides a simple interface for incrementing, decrementing, and directly setting the quantity.
 * 
 * @param initialValue - The initial value for the quantity (default is 1).
 * 
 * @returns An object containing:
 * - `quantity` (number): The current quantity value.
 * - `setQuantity` (function): A state setter function to directly update the quantity.
 * - `increment` (function): A function to increase the quantity by 1.
 * - `decrement` (function): A function to decrease the quantity by 1, ensuring it does not go below 1.
 * 
 * @example
 * // Usage in a component
 * const { quantity, increment, decrement } = useQuantity(1);
 * 
 * return (
 *   <div>
 *     <button onClick={decrement}>-</button>
 *     <span>{quantity}</span>
 *     <button onClick={increment}>+</button>
 *   </div>
 * );
 */
export function useQuantity(initialValue: number = 1) {
    const [quantity, setQuantity] = useState(initialValue);

    const increment = () => setQuantity((prev) => prev + 1);
    const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : prev));

    return { quantity, setQuantity, increment, decrement };
}