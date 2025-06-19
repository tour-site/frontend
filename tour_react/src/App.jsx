// 📁 src/App.jsx
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home.jsx';
import LoginPage from './pages/LoginPage.jsx';
import KakaoRedirect from './pages/KakaoRedirect.jsx';
import Mypage from './pages/MyPage.jsx';


const isLoggedIn = () => !!localStorage.getItem('jwt');

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/oauth/callback/kakao" element={<KakaoRedirect />} />
      <Route
        path="/mypage"
        element={isLoggedIn() ? <Mypage /> : <Navigate to="/login" />}
      />
    </Routes>
  );
}

export default App;
