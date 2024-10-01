import { AppDispatch, State } from "@/types/state.type";
import { User, UserData } from "@/types/user.interface";
import { adaptDataToClient } from "@/utils/adapters";
import { ApiActionName, REDUCER_NAME } from "@/utils/constant";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";

export const fetchUsers = createAsyncThunk<
  User[],
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  `${REDUCER_NAME}/${ApiActionName.FetchUsers}`,
  async (_, { extra: api }) => {
    try {
      const { data } = await api.get<UserData[]>('');
      return data.map((item)=>adaptDataToClient(item));
    } catch (error) {
      return Promise.reject(error);
    }
  }
);
