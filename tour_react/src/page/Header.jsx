import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Component/Header.css';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="navbar">
      <div className="logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }} role="button" tabIndex={0}>
        ⛰️ 한길여행
      </div>

      <nav className="menu">
        <ul className="nav-list">
          <li onClick={() => navigate("/map")}>지도로 보기</li>
          <li onClick={() => navigate("/image-gallery")}>이미지로 보기</li>
          <li onClick={() => navigate("/festival")}>축제</li>
          <li onClick={() => navigate("/recommend")}>최적 코스 추천</li>
        </ul>
      </nav>

      <div className="auth-buttons">
        <button
          className="login-btn"
          onClick={() => window.open('/login-window', 'LoginWindow', 'width=500,height=600')}
        >
          로그인
        </button>
        <button
          className="signup-btn"
          onClick={() => window.open('/signup-window', 'SignupWindow', 'width=500,height=600')}
        >
          회원가입
        </button>
      </div>
    </header>
  );
};

export default Header;
