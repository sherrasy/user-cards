import { store } from "@/store";
import { User } from "./user.interface";

export type UsersState = {
    users: User[] | null
    currentUserId: number | null;
    isLoading: boolean;
    isPosting: boolean;
    hasError: boolean; 
    hasPostingError: boolean; 
  };


export type AppDispatch = typeof store.dispatch;
export type State = ReturnType<typeof store.getState>;
