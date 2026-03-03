import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};
// create slice 
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // add item in cart
        addToCart: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        // remove item from cart
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        // update quantity
        updateQuantity: (state, action) => {
            const item = state.items.find(item => item.id === action.payload.id);
            if (item && action.payload.quantity >= 1) {
                item.quantity = action.payload.quantity;
            }
        },
        // remove all item from cart
        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
