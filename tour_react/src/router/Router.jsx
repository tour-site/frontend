// 📁 src/router/Router.jsx
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import MainPage from '../page/MainPage';
import DetailPage from '../page/DetailPage';
import Map from '../page/Map';
import FestivalPage from '../page/FestivalPage';
import ImageGallery from '../page/ImageGallery';
import KakaoRedirect from '../page/KakaoRedirect';
import Mypage from '../page/Mypage';
import FindIdPage from '../page/FindIdPage';
import FindPasswordPage from '../page/FindPasswordPage';
// import ImagePOP from '../page/ImagePOP';


export default function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/festival" element={<FestivalPage />} />
        <Route path="/map" element={<Map />} />
        <Route path="/image-gallery" element={<ImageGallery />} />
        <Route path="/oauth/callback/kakao" element={<KakaoRedirect />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/find-id" element={<FindIdPage />} />
        <Route path="/find-password" element={<FindPasswordPage />} />

        {/* <Route path="/imagePOP/:id" element={<ImagePOP />} />  */}
        {/* ImagePOP 초반에 이미지 보기 용도로 만들어진거라 추후에 필요하면 쓰기 아님 삭제해도 무방 */}
      </Route>

    </Routes>
  );
}
