import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    basket: [],
    totalQuantity: 0,
    totalAmount: 0
  },
  reducers: {
    addItemsToCart(state, action) {
    console.log("Adding item to Cart...");   
    const newItem = action.payload;
    state.basket.push({
        id: newItem.id,
        title: newItem.title,
        image: newItem.image,
        price: newItem.price,
        rating: newItem.rating
      });
      state.totalQuantity++;
      state.totalAmount = state.totalAmount + newItem.price;
    },

    removeItemFromCart(state, action) {
      const itemId = action.payload;
      const index = state.basket.findIndex((item) => item.id === itemId);
      if (index >= 0) {
        const existingItem = state.basket.find((item) => item.id === itemId);
        state.basket.splice(index, 1);
        state.totalQuantity--;
        state.totalAmount = state.totalAmount - existingItem.price;
      } else {
        console.warn(`Item id ${action.payload} not found in the Basket`);
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;