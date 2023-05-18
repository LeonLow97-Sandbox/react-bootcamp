import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from '../thunks/fetchUsers';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    isLoading: false,
    data: [],
    error: null,
  },
  extraReducers(builder) {
    // action type: 'users/fetch/pending'
    builder.addCase(fetchUsers.pending);
    builder.addCase(fetchUsers.fulfilled);
    builder.addCase(fetchUsers.rejected);
  },
});

export const usersReducer = usersSlice.reducer;
