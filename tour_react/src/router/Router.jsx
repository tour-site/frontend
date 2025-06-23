// 📁 src/router/Router.jsx
import { Routes, Route } from 'react-router-dom';
import { UserProvider } from '../components/UserContext';
import Layout from '../components/Layout';
import MainPage from '../page/MainPage';
import DetailPage from '../page/DetailPage';
import Map from '../page/Map';
import ImageGallery from '../page/ImageGallery';
import Board from '../page/Board';
import MyPage from '../page/MyPage';
import BoardList from '../components/BoardList';
import BoardWrite from '../components/BoardWrite';
import BoardDetail from '../components/BoardDetail';

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
        <Route path="/board" element={<Board/>} />
        <Route path="/mypage" element={<MyPage/>} />
        <Route path="/boardlist" element={<BoardList/>} />
        <Route path="/boardwrite" element={<BoardWrite />} />
        <Route path="/board/:id" element={<BoardDetail />} />


        {/* <Route path="/festival" element={<FestivalPage />} /> */}
        {/* <Route path="/imagePOP/:id" element={<ImagePOP />} />  */}
        {/* ImagePOP 초반에 이미지 보기 용도로 만들어진거라 추후에 필요하면 쓰기 아님 삭제해도 무방 */}
      </Route>

    </Routes>
    </UserProvider>
  );
}
