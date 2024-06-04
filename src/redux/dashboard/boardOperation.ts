import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface CreateDashboardResponse {
  id: string;
  boardTitle: string;
  icon: string;
  bgImage: string;
}

interface CredentialsProps {
  boardTitle: string;
  icon: string;
  bgImage: string;
}

export const createNewBoard = createAsyncThunk(
  'dashboard/createNewBoard',
  async (credentials: CredentialsProps, thunkAPI) => {
    try {
      const res = await axios.post<CreateDashboardResponse[]>(
        '/user/createboard',
        credentials
      );

      return res.data;
    } catch (error) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }

      return thunkAPI.rejectWithValue('An unknown error occurred');
    }
  }
);

export const fetchBoards = createAsyncThunk(
  'dashboard/fetch',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/user/boards');

      return res.data;
    } catch (error) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }

      return thunkAPI.rejectWithValue('An unknown error occurred');
    }
  }
);
