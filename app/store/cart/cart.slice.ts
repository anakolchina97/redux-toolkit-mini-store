import { IProduct } from './../product/product.types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IProduct[] = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state: any, action: PayloadAction<IProduct>) => {
      state.push(action.payload);
    },
    removeItem: (state: any, action: PayloadAction<{ id: number }>) => {
      return state.filter((p: { id: number }) => p.id !== action.payload.id);
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
