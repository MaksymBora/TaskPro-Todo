import { createSlice } from '@reduxjs/toolkit';
import { loginUser, refreshing, registerUser } from './authOperation';

interface User {
  name: string;
  email: string;
}

interface AuthState {
  user: User;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  token: string | null;
}

const initialState: AuthState = {
  user: {
    name: '',
    email: '',
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        const { name, email, token } = payload.user;
        state.user = { name, email };
        state.token = token;
        state.isLoggedIn = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        const { name, email, token } = payload.user;
        state.user = { name, email };
        state.token = token;
        state.isLoggedIn = true;
      })
      .addCase(refreshing.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshing.fulfilled, (state, { payload }) => {
        const { name, email, token } = payload.user;
        state.user = { name, email };
        state.token = token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshing.rejected, state => {
        state.isRefreshing = false;
      }),
});
