import { UsersState } from '@/types/state.type';
import { createSlice } from '@reduxjs/toolkit';
import { REDUCER_NAME } from '@utils/constant';

const initialState: UsersState= {
  users: null,
  isLoading: false,
  isPosting: false,
  hasError: false,
  hasPostingError: false,
};

export const userData = createSlice({
  name: REDUCER_NAME,
  initialState,
  reducers: {  },
  extraReducers() {
  },
});
