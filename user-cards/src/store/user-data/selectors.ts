import {  State } from '@frontend-types/state.type';

export const getIsLoading = (state: State): boolean => state.isLoading;
export const getIsPosting = (state: State): boolean => state.isPosting;
export const getHasError = (state: State): boolean => state.hasError;
export const getHasPostingError = (state: State): boolean =>  state.hasPostingError;
