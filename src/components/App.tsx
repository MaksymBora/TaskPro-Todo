import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Layout } from './Global/Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { useAuth } from '@/hooks/useAuth';
import { refreshing } from '@/redux/auth/authOperation';
import { AppDispatch } from '@/redux/store';

const WelcomePage = lazy(() => import('@/Pages/Welcome/Welcome'));
const AuthPage = lazy(() => import('@/Pages/Auth/AuthPage'));
const HomePage = lazy(() => import('@/Pages/Home/Home'));

export function App() {
  const { isRefreshing, isLoggedIn } = useAuth();

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (isLoggedIn) {
      return;
    }

    dispatch(refreshing());
  }, [dispatch, isLoggedIn]);

  return (
    <div>
      {isRefreshing ? (
        <div>Loading</div>
      ) : (
        <Suspense fallback={<div>Loading</div>}>
          <Routes>
            <Route>
              <Route
                path="welcome"
                element={
                  <RestrictedRoute component={<WelcomePage />} redirect="/" />
                }
              />
              <Route
                path="auth/:id"
                element={
                  <RestrictedRoute component={<AuthPage />} redirect="/" />
                }
              />
            </Route>

            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                  <PrivateRoute component={<HomePage />} redirect="/welcome" />
                }
              />
            </Route>
          </Routes>
        </Suspense>
      )}
    </div>
  );
}
