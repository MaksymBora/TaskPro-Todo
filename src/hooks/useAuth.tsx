import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from '@/redux/auth/authSelector';

export const useAuth = () => {
  const isLoggedIn: boolean = useSelector(selectIsLoggedIn);
  const isRefreshing: boolean = useSelector(selectIsRefreshing);

  return { isLoggedIn, isRefreshing };
};
