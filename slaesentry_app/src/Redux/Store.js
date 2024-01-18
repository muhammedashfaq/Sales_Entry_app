// store.js
import { configureStore } from '@reduxjs/toolkit';
import detailsReducer from '../Redux/actionSlice';

const store = configureStore({
  reducer: {
    details: detailsReducer,
  },
});

export default store;
