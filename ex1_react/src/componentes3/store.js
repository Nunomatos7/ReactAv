import { configureStore } from '@reduxjs/toolkit';
import saldoReducer from './saldoSlice';

export const store = configureStore({
  reducer: {
    saldo: saldoReducer,
  },
});

export default store;
