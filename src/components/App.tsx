import { Route, Routes } from 'react-router-dom';
import { Layout } from './Global/Layout';
import Home from '@/Pages/Home/Home';
import Welcome from '@/Pages/Welcome/Welcome';
import AuthPage from '@/Pages/Welcome/Auth/AuthPage';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

export function App() {
  return (
    <Routes>
      <Route>
        <Route
          path="welcome"
          element={<RestrictedRoute component={<Welcome />} redirect="/" />}
        />
        <Route
          path="auth/:id"
          element={<RestrictedRoute component={<AuthPage />} redirect="/" />}
        />
      </Route>

      <Route path="/" element={<Layout />}>
        <Route
          index
          element={<PrivateRoute component={<Home />} redirect="/welcome" />}
        />
      </Route>
    </Routes>
  );
}
