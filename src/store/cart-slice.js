import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    basket: [],
    totalQuantity: 0,
    totalAmount: 0,
    changed: false,
  },
  reducers: {
    addItemsToCart(state, action) {
      console.log("Adding item to Cart...");
      state.changed = true;
      const newItem = action.payload;
      state.basket.push({
        id: newItem.id,
        title: newItem.title,
        image: newItem.image,
        price: newItem.price,
        rating: newItem.rating,
      });
      state.totalQuantity++;
      state.totalAmount = state.totalAmount + newItem.price;
    },

    removeItemFromCart(state, action) {
      state.changed = true;
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

    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.totalAmount = action.payload.totalAmount;
      state.basket = action.payload.basket;
    },

    showNotification() {
      console.log("Show Notification called !!!");
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;