// 📁 src/router/Router.jsx
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import MainPage from '../page/MainPage';
import Login from '../page/Login';
import Signup from '../page/Signup';
import DetailPage from '../page/DetailPage';
import Map from '../page/Map';
import FestivalPage from '../page/FestivalPage';

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/festival" element={<FestivalPage />} />
        <Route path="/map" element={<Map />} />
      </Route>
    </Routes>
  );
}
