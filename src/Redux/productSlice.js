import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchQuery: '',
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { setSearchQuery } = productSlice.actions;
export default productSlice.reducer;
