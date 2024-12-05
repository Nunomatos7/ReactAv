import { createSlice } from '@reduxjs/toolkit';

export const saldoSlice = createSlice({
  name: 'saldo',
  initialState: {
    valor: 0,
  },
  reducers: {
    depositar: (state, action) => {
      state.valor += action.payload;
    },
    levantar: (state, action) => {
      if (state.valor >= action.payload) {
        state.valor -= action.payload;
      } else {
        alert("Saldo insuficiente!");
      }
    },
  },
});

export const { depositar, levantar } = saldoSlice.actions;
export default saldoSlice.reducer;
