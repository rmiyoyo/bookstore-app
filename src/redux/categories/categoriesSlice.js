import { createSlice } from '@reduxjs/toolkit';

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    status: 'Under construction',
    categories: [],
  },
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload === 'Under construction' ? 'Under construction' : state.status;
    },
  },
});

export const { setStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
