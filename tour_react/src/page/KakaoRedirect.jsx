// 📁 src/pages/KakaoRedirect.jsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function KakaoRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    if (code) {
      axios
        .get(`http://localhost:8010/api/auth/kakao?code=${code}`)
        .then((res) => {
          console.log(res); // ✅ 여기 추가
          localStorage.setItem('jwt', res.data.token);
          navigate('/mypage');
        })
        .catch(() => {
          alert('로그인 실패');
          navigate('/login');
        });
    }
  }, []);

  return <p>로그인 처리 중...</p>;
}

export default KakaoRedirect;
