// 📁 src/router/Router.jsx
import { Routes, Route } from 'react-router-dom';
import { UserProvider } from '../components/UserContext/UserContext';
import Layout from '../components/Layout/Layout';
import MainPage from '../page/MainPage/MainPage';
import DetailPage from '../page/DetailPage/DetailPage';
import Map from '../page/map/map';
import ImageGallery from '../components/ImageGallery/ImageGallery';
import Board from '../page/Board/Board';
import MyPage from '../page/MyPage/MyPage';
import BoardList from '../components/BoardList/BoardList';
import BoardWrite from '../components/BoardWrite/BoardWrite';
import BoardDetail from '../components/BoardDetail/BoardDetail';
import AdminPage from '../page/AdminPage/AdminPage';
import KakaoRedirect from '../page/KakaoRedirect';
import FindIdPage from '../page/FindIdPage';
import FindPasswordPage from '../page/FindPasswordPage';
import BoardDetailPage from '../page/Board/BoardDetailPage';
import BoardPage from '../page/Board/BoardPage';

// import FestivalPage from '../page/FestivalPage';
// import ImagePOP from '../page/ImagePOP';

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

        {/* <Route path="/imagePOP/:id" element={<ImagePOP />} /> */}
        <Route path="/board" element={<Board/>} />
        <Route path="/mypage" element={<MyPage/>} />
        <Route path="/boardlist" element={<BoardList/>} />
        <Route path="/boardwrite" element={<BoardWrite />} />
        <Route path="/board/:id" element={<BoardDetail />} />
        <Route path="/adminpage" element={<AdminPage />} />


        {/* <Route path="/festival" element={<FestivalPage />} /> */}
        {/* <Route path="/imagePOP/:id" element={<ImagePOP />} />  */}
        {/* ImagePOP 초반에 이미지 보기 용도로 만들어진거라 추후에 필요하면 쓰기 아님 삭제해도 무방 */}
      </Route>
    </Routes>
    </UserProvider>
  );
}
