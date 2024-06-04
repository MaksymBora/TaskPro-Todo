import { createSlice } from '@reduxjs/toolkit';
import { createNewBoard, fetchBoards } from './boardOperation';

interface Board {
  id: string;
  boardTitle: string;
  icon: string;
  bgImage: string;
}

interface BoardState {
  boards: Board[];
  loading: boolean;
  error: string | null;
}

const initialState: BoardState = {
  boards: [],
  loading: false,
  error: null,
};

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(createNewBoard.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createNewBoard.fulfilled, (state, { payload }) => {
        state.boards = payload;
      })
      .addCase(createNewBoard.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload as string | null;
      })
      .addCase(fetchBoards.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBoards.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        state.boards = payload;
      })
      .addCase(fetchBoards.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload as string | null;
      }),
});
