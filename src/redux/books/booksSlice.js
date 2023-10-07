import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const uniqueID = 'K3hT3NWmvS6GWRCzhZYc';
const baseUrl = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${uniqueID}/books`;

export const getData = createAsyncThunk('books/getData', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(baseUrl);
    const returnedData = response.data;

    if (returnedData === '') return [];

    const booksArray = Object.keys(returnedData).map((key) => {
      const data = returnedData[key][0];
      return {
        itemId: key,
        author: data.author,
        title: data.title,
        category: data.category,
      };
    });
    return booksArray;
  } catch (error) {
    return rejectWithValue('No Books Found.');
  }
});

export const itemAsync = createAsyncThunk('books/bookAdded', async (newItem, { rejectWithValue }) => {
  try {
    const response = await axios.post(baseUrl, newItem);

    if (response.status === 201) {
      return newItem;
    }

    return rejectWithValue('New Book Not Added');
  } catch (error) {
    return rejectWithValue('New Book Not Added');
  }
});

export const removeItemAsync = createAsyncThunk('books/bookRemoved', async (itemId, { rejectWithValue }) => {
  try {
    const response = await axios.delete(`${baseUrl}/${itemId}`);

    if (response.status === 201) {
      return itemId;
    }

    return rejectWithValue('Failed to remove book');
  } catch (error) {
    return rejectWithValue('Failed to remove book');
  }
});

const initialState = {
  books: [],
  stateReport: 'idle',
  addReport: 'idle',
  deleteReport: 'idle',
  errorReport: null,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
      state.push(action.payload);
    },
    bookRemoved: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
      const itemToRemove = action.payload;
      return state.filter((book) => book.item_id !== itemToRemove);
    },
    resetStatus: (state) => {
      state.statusFetch = 'idle';
      state.statusAdd = 'idle';
      state.statusRemove = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.statusFetch = 'loading';
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.statusFetch = 'succeeded';
        state.books = action.payload;
      })
      .addCase(itemAsync.pending, (state) => {
        state.statusAdd = 'loading';
      })
      .addCase(itemAsync.fulfilled, (state, action) => {
        state.statusAdd = 'succeeded';
        state.books.push(action.payload);
      })
      .addCase(removeItemAsync.pending, (state) => {
        state.statusRemove = 'loading';
      })
      .addCase(removeItemAsync.fulfilled, (state, action) => {
        state.statusRemove = 'succeeded';
        state.books = state.books.filter((book) => book.itemId !== action.payload);
      });
  },
});

export const { bookAdded, bookRemoved } = booksSlice.actions;
export default booksSlice.reducer;
