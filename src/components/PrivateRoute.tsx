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
  const { isLoggedIn } = useAuth();

  const shouldRedirect = !isLoggedIn;

  return <div>{shouldRedirect ? <Navigate to={redirect} /> : component}</div>;
};
