import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

interface RestrictedRouteProps {
  redirect: string;
  component: JSX.Element;
}

export const PrivateRoute: FC<RestrictedRouteProps> = ({
  redirect,
  component,
}) => {
  const { isLoggedIn, isRefreshing } = useAuth();

  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return <div>{shouldRedirect ? <Navigate to={redirect} /> : component}</div>;
};
