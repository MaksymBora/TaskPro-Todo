import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '@/redux/auth/authSelector';

interface RestrictedRouteProps {
  redirect: string;
  component: JSX.Element;
}

export const PrivateRoute: FC<RestrictedRouteProps> = ({
  redirect,
  component,
}) => {
  const isLoggedIn: boolean = useSelector(selectIsLoggedIn);

  const shouldRedirect = !isLoggedIn;

  return <div>{shouldRedirect ? <Navigate to={redirect} /> : component}</div>;
};
