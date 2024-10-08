import { User } from '@frontend-types/user.interface';
import {  State } from '@frontend-types/state.type';
import { createSelector } from '@reduxjs/toolkit';

export const getIsLoading = (state: State): boolean => state.isLoading;
export const getIsPosting = (state: State): boolean => state.isPosting;
export const getHasError = (state: State): boolean => state.hasError;
export const getHasPostingError = (state: State): boolean =>  state.hasPostingError;
export const getUsers = (state: State): User[] | null => state.users;
export const getCurrentUserId = (state: State): number | null => state.currentUserId;
export const getActiveUsers = () =>
    createSelector(
      [getUsers],
      (users): null | User[] => {
        if (!users) {
          return null;
        }
        return users.filter((item)=> !item.isArchived && !item.isHidden);
      }
);

export const getArchivedUsers = () =>
    createSelector(
      [getUsers],
      (users): null | User[] => {
        if (!users) {
          return null;
        }
        return users.filter((item)=> item.isArchived && !item.isHidden);
      }
);

export const getUserById = (id?:string) =>
    createSelector(
      [getUsers],
      (users): null | User => {
        if (!users || !id) {
          return null;
        }
        const userIndex = users.findIndex((item) => item.id === +id); 
        const user = userIndex !==-1? users[userIndex] : null;
        return user;
      }
);