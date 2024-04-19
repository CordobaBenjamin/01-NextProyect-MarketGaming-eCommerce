import { useCallback } from 'react';

const useCart = () => {

    const addToCart = useCallback((price: number) => {
        const currentTotal = parseInt(localStorage.getItem('cartTotal') || '0', 10);
        const newTotal = currentTotal + price;
        localStorage.setItem('cartTotal', newTotal.toString());
    }, []);

    
    return { addToCart };
};

export default useCart;