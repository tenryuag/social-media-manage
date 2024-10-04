import { createSlice } from '@reduxjs/toolkit';

const accountsSlice = createSlice({
  name: 'accounts',
  initialState: { accounts: [] },
  reducers: {
    addAccount(state, action) {
      state.accounts.push(action.payload);
    },
    removeAccount(state, action) {
      state.accounts = state.accounts.filter(
        account => account.id !== action.payload
      );
    },
  },
});

export const { addAccount, removeAccount } = accountsSlice.actions;
export default accountsSlice.reducer;
