import { RootState } from '../store';

export const selectBoards = (state: RootState) => state.dashboard.boards;
export const selectCurrentBoard = (state: RootState) =>
  state.dashboard.currentBoard;

// export const selectBoardById = (boardId: string) => (state: RootState) =>
//   state.dashboard.boards.find(board => board.boardId === boardId);
