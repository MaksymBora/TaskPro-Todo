import { Route, Routes } from 'react-router-dom';
import { Layout } from './Global/Layout';
import Home from '@/Pages/Home/Home';
import Welcome from '@/Pages/Welcome/Welcome';
import AuthPage from '@/Pages/Welcome/Auth/AuthPage';

export function App() {
  return (
    <Routes>
      <Route index path="/welcome" element={<Welcome />} />
      <Route path="auth/:id" element={<AuthPage />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}
