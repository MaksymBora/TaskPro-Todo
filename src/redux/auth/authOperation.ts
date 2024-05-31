import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api';

const setAuthHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

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

interface RootState {
  auth: {
    token: string;
  };
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

export const refreshing = createAsyncThunk(
  'auth/refreshing',
  async (_, thunkAPI) => {
    const { auth } = thunkAPI.getState() as RootState;

    const { token } = auth;

    if (!token) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(token);

      const response = await axios.get<AuthResponse>('/auth/current');

      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }

      return thunkAPI.rejectWithValue('An unknown error occurred');
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/auth/logout');

    clearAuthHeader();

    return undefined;
  } catch (error) {
    if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error.message);
    }

    return thunkAPI.rejectWithValue('An unknown error occurred');
  }
});
