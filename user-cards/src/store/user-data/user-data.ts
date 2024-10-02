import { UsersState } from '@/types/state.type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { REDUCER_NAME } from '@utils/constant';
import { fetchUsers, updateUser } from './api-actions';
import { UpdateUserStatus } from '@/types/update-user-status.type';

const initialState: UsersState = {
  users: null,
  currentUserId:null,
  isLoading: false,
  isPosting: false,
  hasError: false,
  hasPostingError: false,
};

export const userData = createSlice({
  name: REDUCER_NAME,
  initialState,
  reducers: {
    setCurrentUserId: (state, action: PayloadAction<number | null>) => {
      state.currentUserId = action.payload;
    },
    updateUserStatus: (state, action: PayloadAction<UpdateUserStatus>) => {
      if(!state.users){
        return;
      }
      const {payload}=action;
      const {id, isHidden, isArchived} = payload
      const userId = state.users.findIndex((item) => item.id === id)
      if (userId !== -1) {
        const currentHidden = isHidden ? isHidden : state.users[userId].isHidden;
        const currentArchived = isArchived ? isArchived : state.users[userId].isArchived;
        state.users[userId] = { ...state.users[userId], isHidden:currentHidden, isArchived:currentArchived }
        state.currentUserId = null;
      }   
     },
  },
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
      })
      .addCase(updateUser.pending, (state) => {
        state.isPosting = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        if(!state.users){
          return;
        }
        const userId = state.users.findIndex((item) => item.id === payload.id)
        if (userId !== -1) {
          state.users[userId] = { ...payload }
        }   
        state.isPosting = false;
        state.hasPostingError = false;
      })
      .addCase(updateUser.rejected, (state) => {
        state.isPosting = false;
        state.hasPostingError = true;
      });
  },
});

export const { setCurrentUserId, updateUserStatus } = userData.actions;
