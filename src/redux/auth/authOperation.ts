import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api';

const setAuthHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// const unsetAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = '';
// };

interface User {
  name: string;
  email: string;
  password: string;
}

interface UserLogIn {
  email: string;
  password: string;
}

interface AuthResponse {
  user: { name: string; email: string; token: string };
}

export const registerUser = createAsyncThunk(
  'auth/register',
  async (user: User, thunkAPI) => {
    try {
      const res = await axios.post<AuthResponse>('/auth/signup', user);

      setAuthHeader(res.data.user.token);

      return res.data;
    } catch (error) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }

      return thunkAPI.rejectWithValue('An unknown error occurred');
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (user: UserLogIn, thunkAPI) => {
    try {
      const res = await axios.post<AuthResponse>('/auth/signin', user);

      setAuthHeader(res.data.user.token);

      return res.data;
    } catch (error) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }

      return thunkAPI.rejectWithValue('An unknown error occurred');
    }
  }
);
