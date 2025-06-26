// 📁 src/router/Router.jsx
import { Routes, Route } from 'react-router-dom';
import { UserProvider } from '../components/UserContext';
import Layout from '../components/Layout';
import MainPage from '../page/MainPage';
import DetailPage from '../page/DetailPage';
import Map from '../page/map';
import ImageGallery from '../page/ImageGallery';
import KakaoRedirect from '../page/KakaoRedirect';
import Mypage from '../page/Mypage';
import FindIdPage from '../page/FindIdPage';
import FindPasswordPage from '../page/FindPasswordPage';
import BoardWritePage from '../page/Board/BoardWritePage';
import BoardDetailPage from '../page/Board/BoardDetailPage';
import BoardEditPage from '../page/Board/BoardEditPage';
import BoardPage from '../page/Board/BoardPage';

export default function AppRouter() {
  return (
    <UserProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/map" element={<Map />} />
          <Route path="/image-gallery" element={<ImageGallery />} />
          <Route path="/oauth/callback/kakao" element={<KakaoRedirect />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/find-id" element={<FindIdPage />} />
          <Route path="/find-password" element={<FindPasswordPage />} />

          <Route path="/board" element={<BoardPage />} />
          <Route path="/board/write" element={<BoardWritePage />} />
          <Route path="/board/:id" element={<BoardDetailPage />} />
          <Route path="/board/:id/edit" element={<BoardEditPage />} />

          {/* <Route path="/imagePOP/:id" element={<ImagePOP />} /> */}
        </Route>
      </Routes>
    </UserProvider>
  );
}
