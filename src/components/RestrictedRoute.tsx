import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '@/redux/auth/authSelector';

interface RestrictedRouteProps {
  redirect: string;
  component: JSX.Element;
}

export const RestrictedRoute: FC<RestrictedRouteProps> = ({
  redirect,
  component,
}) => {
  const isLoggedIn: boolean = useSelector(selectIsLoggedIn);

  return <div>{isLoggedIn ? <Navigate to={redirect} /> : component}</div>;
};
