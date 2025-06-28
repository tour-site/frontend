// 📁 src/components/LoginModal.jsx
import React, { useState } from 'react';
import axiosInstance from '../api/axiosInstance';
import './css/Modal.css';
import { useNavigate } from 'react-router-dom';

const LoginModal = ({ closeModal, switchToSignup }) => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // ⬅️ 추가

  const handleLogin = async () => {
    if (!id || !pw) {
      setError('아이디와 비밀번호를 입력해주세요.');
      return;
    }

    try {
      const response = await axiosInstance.post('/api/member/login', {
        email: id,
        password: pw,
      });

      alert('로그인 성공!');
      setError('');
      closeModal(); // 로그인 성공 시 모달 닫기

    } catch (err) {
      console.error(err);
      setError('아이디 또는 비밀번호가 올바르지 않습니다.');
    }
  };

  const handleFindId = () => {
    closeModal();
    navigate('/find-id');
  };

  const handleFindPassword = () => {
    closeModal();
    navigate('/find-password');
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>로그인</h2>

        {/* ✅ 아이디/비번 찾기 링크 */}
        <div style={{ marginBottom: '10px', fontSize: '0.9rem', textAlign: 'right' }}>
          <span
            style={{ color: '#007bff', cursor: 'pointer', marginRight: '10px' }}
            onClick={handleFindId}
          >
            아이디 찾기
          </span>
          <span
            style={{ color: '#007bff', cursor: 'pointer' }}
            onClick={handleFindPassword}
          >
            비밀번호 찾기
          </span>
        </div>

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
          <button onClick={switchToSignup}>회원가입</button>
        </div>

        <div style={{ marginTop: '10px' }}>
          <img
            src="../img/kakao_login_medium_narrow.png"
            alt="카카오 로그인"
            style={{ height: '45px', cursor: 'pointer' }}
            onClick={() => {
              const REST_API_KEY = '6072eebb0dff3eeffb672644496c0d24';
              // const REDIRECT_URI = 'http://localhost:5173/oauth/callback/kakao'; // 개발시 사용
              const REDIRECT_URI = 'http://localhost:8321/oauth/callback/kakao';
              const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code&prompt=login`;
              window.location.href = kakaoURL;
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
