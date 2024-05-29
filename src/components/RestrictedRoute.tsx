import { FC } from 'react';
import { Navigate } from 'react-router-dom';

interface RestrictedRouteProps {
  redirect: string;
  component: JSX.Element;
}

export const RestrictedRoute: FC<RestrictedRouteProps> = ({
  redirect,
  component,
}) => {
  const isLogin = false;

  return <div>{isLogin ? <Navigate to={redirect} /> : component}</div>;
};
