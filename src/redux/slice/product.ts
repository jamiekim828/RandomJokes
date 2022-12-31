import { createSlice } from '@reduxjs/toolkit';
import { ProductType } from '../../types/type';

type InitialStateType = {
  products: ProductType;
};

const initialState: InitialStateType = {
  products: { setup: '', punchline: '' },
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const actions = productSlice.actions;
export default productSlice.reducer;
