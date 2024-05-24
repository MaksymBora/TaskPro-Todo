import { Route, Routes } from 'react-router-dom';
import { Layout } from './Global/Layout';
import Home from '@/Pages/Home/Home';
import Welcome from '@/Pages/Welcome/Welcome';

export function App() {
  return (
    <Routes>
      <Route index path="/welcome" element={<Welcome />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}
