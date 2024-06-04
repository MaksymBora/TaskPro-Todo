import { useSelector } from 'react-redux';
import { selectBoards } from '@/redux/dashboard/boardSelect';

export const useBoard = () => {
  const boards = useSelector(selectBoards);

  return { boards };
};
