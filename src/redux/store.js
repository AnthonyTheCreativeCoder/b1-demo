import { configureStore } from '@reduxjs/toolkit';
import imagifyReducer from './slices/imagify'; // Adjust path if needed

const store = configureStore({
  reducer: {
    imagify: imagifyReducer, // Add the imagify reducer here
  },
});

export default store;
