import { useState } from "react";

export function useQuantity(initialValue: number = 1) {
    const [quantity, setQuantity] = useState(initialValue);

    const increment = () => setQuantity((prev) => prev + 1);
    const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : prev));

    return { quantity, setQuantity, increment, decrement };
}