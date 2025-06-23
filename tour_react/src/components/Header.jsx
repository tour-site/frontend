import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../api/axiosInstance.js';
import './css/Header.css';
import './css/Modal.css';
import LoginModal from './LoginModal.jsx';
import SignupModal from './SignupModal.jsx';

const Header = () => {
  const navigate = useNavigate();
  const [modalMode, setModalMode] = useState(null); // 'login', 'signup', null
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [logoutTrigger, setLogoutTrigger] = useState(false); // ✅ 로그아웃 후 재검증 유도

  // ✅ 로그인 상태 확인
  useEffect(() => {
    axiosInstance.get('/api/member/mypage')
      .then(() => setIsLoggedIn(true))
      .catch(() => setIsLoggedIn(false));
  }, [modalMode, logoutTrigger]); // 모달 변경 또는 로그아웃 후 트리거로 상태 재확인

  const closeModal = () => setModalMode(null);

  const handleLogout = async () => {
    try {
      await axiosInstance.post('/api/member/logout');
      setIsLoggedIn(false); // 즉시 UI 반영
      setLogoutTrigger(prev => !prev); // 상태 트리거
      alert('로그아웃 되었습니다.');
      navigate('/'); // ✅ 로그아웃 후 홈으로 이동
    } catch {
      alert('로그아웃 실패');
    }
  };
  

  return (
    <header className="navbar">
      <div className="logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
        ⛰️ 한길여행
      </div>

      <nav className="menu">
        <ul className="nav-list">
          <li onClick={() => navigate('/map')}>지도로 보기</li>
          <li onClick={() => navigate('/image-gallery')}>이미지로 보기</li>
          <li onClick={() => navigate('/festival')}>축제</li>
          <li onClick={() => navigate('/recommend')}>최적 코스 추천</li>
        </ul>
      </nav>

      <div className="auth-buttons">
        {isLoggedIn ? (
          <>
            <button onClick={() => navigate('/mypage')}>마이페이지</button>
            <button onClick={handleLogout}>로그아웃</button>
          </>
        ) : (
          <>
            <button onClick={() => setModalMode('login')}>로그인</button>
            <button onClick={() => setModalMode('signup')}>회원가입</button>
          </>
        )}
      </div>

      {modalMode === 'login' && (
        <LoginModal
          closeModal={closeModal}
          switchToSignup={() => setModalMode('signup')}
        />
      )}
      {modalMode === 'signup' && (
        <SignupModal
          closeModal={closeModal}
          switchToLogin={() => setModalMode('login')}
        />
      )}
    </header>
  );
};

export default Header;
