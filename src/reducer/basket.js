import { createSlice } from "@reduxjs/toolkit";
export const basket = createSlice({
  name: "basket",
  initialState: { value: [] },
  reducers: {
    addBasket: (state, action) => {
      const newItem = action.payload.items;
      const existingItemIndex = state.value.findIndex(
        (item) => item.id === newItem.id
      );
      console.log("existingItemIndex", existingItemIndex);
      if (existingItemIndex !== -1) {
        // Eğer aynı ürün zaten sepette varsa, mevcut ürünün sayısını artır
        state.value[existingItemIndex].quantity++;
      } else {
        // Eğer ürün sepette yoksa, yeni bir ürün olarak ekle
        state.value.push({ ...newItem, quantity: 1 });
      }
    },
    removeBasket: (state, action) => {
      state.value = state.value.filter(
        (item) => item.id !== action.payload.item.id
      );
    },
  },
});

export const { addBasket, removeBasket } = basket.actions;
export default basket.reducer;
