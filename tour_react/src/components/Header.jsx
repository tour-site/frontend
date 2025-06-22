// 📁 src/components/Header.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Header.css';
import '../assets/css/Modal.css';

const Header = () => {
  const navigate = useNavigate();

  const [modalMode, setModalMode] = useState(null); // 'login', 'signup', 또는 null
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [error, setError] = useState('');

  const [signupForm, setSignupForm] = useState({
    username: '',
    password: '',
    confirm: '',
    email: '',
  });

  const handleLogin = () => {
    if (!id || !pw) {
      setError('아이디와 비밀번호 모두 입력해주세요');
      return;
    }
    setError('');
    // 로그인 처리 로직
  };

  const closeModal = () => {
    setModalMode(null);
    setId('');
    setPw('');
    setError('');
  };

  return (
    <header className="navbar">
      <div
        className="logo"
        onClick={() => navigate('/')}
        style={{ cursor: 'pointer' }}
        role="button"
        tabIndex={0}
      >
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
        <button className="login-btn" onClick={() => setModalMode('login')}>
          로그인
        </button>
        <button className="signup-btn" onClick={() => setModalMode('signup')}>
          회원가입
        </button>

        {modalMode && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              {modalMode === 'login' ? (
                <>
                  <h2>로그인</h2>
                  <input
                    type="text"
                    className="input-field"
                    placeholder="아이디"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                  />
                  <input
                    type="password"
                    className="input-field"
                    placeholder="비밀번호"
                    value={pw}
                    onChange={(e) => setPw(e.target.value)}
                  />
                  {error && <p className="error-message">{error}</p>}
                  <div className="button-group">
                    <button onClick={handleLogin}>로그인</button>
                    <button onClick={() => setModalMode('signup')}>회원가입</button>
                  </div>

                  {/* ✅ 카카오 로그인 버튼 */}
                  <div style={{ marginTop: '10px' }}>
                    <img
                      src="../img/kakao_login_medium_narrow.png"
                      alt="카카오 로그인"
                      style={{ height: '45px', cursor: 'pointer' }}
                      onClick={() => {
                        const REST_API_KEY = '6072eebb0dff3eeffb672644496c0d24';
                        const REDIRECT_URI = 'http://localhost:5173/oauth/callback/kakao';
                        const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code&prompt=login`;
                        window.location.href = kakaoURL;
                      }}
                    />
                  </div>
                </>
              ) : (
                <>
                  <h2>회원가입</h2>
                  <input
                    type="text"
                    className="input-field"
                    placeholder="아이디"
                    required
                    value={signupForm.username}
                    onChange={(e) =>
                      setSignupForm((prev) => ({ ...prev, username: e.target.value }))
                    }
                  />
                  <input
                    type="password"
                    className="input-field"
                    placeholder="비밀번호"
                    required
                    value={signupForm.password}
                    onChange={(e) =>
                      setSignupForm((prev) => ({ ...prev, password: e.target.value }))
                    }
                  />
                  <input
                    type="password"
                    className="input-field"
                    placeholder="비밀번호 확인"
                    required
                    value={signupForm.confirm}
                    onChange={(e) =>
                      setSignupForm((prev) => ({ ...prev, confirm: e.target.value }))
                    }
                  />
                  <input
                    type="email"
                    className="input-field"
                    placeholder="이메일"
                    required
                    value={signupForm.email}
                    onChange={(e) =>
                      setSignupForm((prev) => ({ ...prev, email: e.target.value }))
                    }
                  />
                  <div className="button-group">
                    <button>가입하기</button>
                    <button onClick={closeModal}>닫기</button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
