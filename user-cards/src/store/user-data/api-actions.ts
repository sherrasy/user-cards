import { EditUserDto } from "@/dto/edit-user.dto";
import { AppDispatch, State } from "@/types/state.type";
import { User, UserData } from "@/types/user.interface";
import { adaptDataToClient, adaptDataToServer } from "@/utils/adapters";
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

export const updateUser = createAsyncThunk<
  User,
  EditUserDto,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  `${REDUCER_NAME}/${ApiActionName.EditUser}`,
  async (dto, { extra: api }) => {
    try {
      const updatedData = adaptDataToServer(dto)
      const { data } = await api.patch<UserData>(`/${dto.id}`, updatedData);
      return adaptDataToClient(data);
    } catch (error) {
      return Promise.reject(error);
    }
  }
);
