import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Layout } from './Global/Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const WelcomePage = lazy(() => import('@/Pages/Welcome/Welcome'));
const AuthPage = lazy(() => import('@/Pages/Auth/AuthPage'));
const HomePage = lazy(() => import('@/Pages/Home/Home'));

export function App() {
  return (
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
            element={<RestrictedRoute component={<AuthPage />} redirect="/" />}
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
  );
}
