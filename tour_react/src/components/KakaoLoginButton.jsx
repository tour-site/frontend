const KAKAO_AUTH_URL =
  `https://kauth.kakao.com/oauth/authorize?` +
  `client_id=508dee8faeb3b565b74e57fbe8e66fc0` + // 너의 REST API 키
  `&redirect_uri=http://localhost:5173/oauth/callback/kakao` +
  `&response_type=code` +
  `&prompt=login`; // ✅ 요거 추가!

const handleLogin = () => {
  window.location.href = KAKAO_AUTH_URL;
};

export default function KakaoLoginButton() {
  return <button onClick={handleLogin}>카카오로 로그인</button>;
}
