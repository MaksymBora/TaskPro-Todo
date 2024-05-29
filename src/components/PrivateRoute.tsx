import { FC } from 'react';
import { Navigate } from 'react-router-dom';

interface RestrictedRouteProps {
  redirect: string;
  component: JSX.Element;
}

export const PrivateRoute: FC<RestrictedRouteProps> = ({
  redirect,
  component,
}) => {
  const shouldRedirect = true;

  return <div>{shouldRedirect ? <Navigate to={redirect} /> : component}</div>;
};
