import { useSelector } from 'react-redux';
import {
  selectBoards,
  selectCurrentBoard,
} from '@/redux/dashboard/boardSelect';

export const useBoard = () => {
  const boards = useSelector(selectBoards);
  const currentBoards = useSelector(selectCurrentBoard);

  return { boards, currentBoards };
};
