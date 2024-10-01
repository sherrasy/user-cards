import { UsersState } from '@/types/state.type';
import { createSlice } from '@reduxjs/toolkit';
import { REDUCER_NAME } from '@utils/constant';
import { fetchUsers } from './api-actions';

const initialState: UsersState = {
  users: null,
  isLoading: false,
  isPosting: false,
  hasError: false,
  hasPostingError: false,
};

export const userData = createSlice({
  name: REDUCER_NAME,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.users = payload;
        state.isLoading = false;
        state.hasError = false;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});
