import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    bookAdded: (state, action) => {
      state.books.push(action.payload);
    },
    bookRemoved: (state, action) => {
      const itemId = action.payload;
      state.books = state.books.filter((book) => book.itemId !== itemId);
    },
  },
});

export const { bookAdded, bookRemoved } = bookSlice.actions;
export default bookSlice.reducer;
