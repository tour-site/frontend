// 📁 src/pages/KakaoRedirect.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const KakaoRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");

    if (code) {
      axios.get(`http://localhost:8100/api/auth/kakao?code=${code}`, {
        withCredentials: true, // 쿠키를 사용하기 위해 withCredentials 설정
      })
        .then((res) => {
          console.log("✅ JWT 쿠키 저장 성공:", res);

          // 로그인 이후 필요한 작업 (예: 유저 상태 저장 등)
          // localStorage 저장은 제거함: 쿠키 기반 인증 사용
          navigate("/mypage");
        })
        .catch((err) => {
          console.error("❌ 카카오 로그인 실패", err);
        });
    }
  }, [navigate]);

  return <div>로그인 중입니다. 잠시만 기다려 주세요...</div>;
};

export default KakaoRedirect;
