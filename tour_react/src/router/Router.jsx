// 📁 src/router/Router.jsx
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import KakaoRedirect from "../pages/KakaoRedirect.jsx";
import Mypage from "../pages/Mypage.jsx";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/oauth/callback/kakao" element={<KakaoRedirect />} />
      <Route path="/mypage" element={<Mypage />} />
    </Routes>
  );
};

export default Router;
