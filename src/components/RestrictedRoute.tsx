import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

interface RestrictedRouteProps {
  redirect: string;
  component: JSX.Element;
}

export const RestrictedRoute: FC<RestrictedRouteProps> = ({
  redirect,
  component,
}) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirect} /> : component;
};
