// 📁 src/pages/LoginPage.jsx
import { useEffect } from 'react';

function LoginPage() {
  useEffect(() => {
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init('6072eebb0dff3eeffb672644496c0d24'); // 실제 키
    }
  }, []);

  const handleLogin = () => {
    const REST_API_KEY = '6072eebb0dff3eeffb672644496c0d24';
    const REDIRECT_URI = 'http://localhost:5173/oauth/callback/kakao';
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code&prompt=login`;

    // 인가 코드 요청
    window.location.href = kakaoURL;
  };

  return (
    <div>
      <h2>로그인 페이지</h2>
      <button onClick={handleLogin}>카카오 로그인</button>
    </div>
  );
}

export default LoginPage;
