import { configureStore } from '@reduxjs/toolkit';
import imageReducer from './categorySlice';

export const store = configureStore({
  reducer: {
    image: imageReducer,
  },
});

