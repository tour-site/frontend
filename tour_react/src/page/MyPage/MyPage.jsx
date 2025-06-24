// 📁 src/pages/Mypage.jsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../api/axiosInstance.js'; // ✅ 공통 axios 인스턴스 사용
import styles from './MyPage.module.css';
function Mypage() {
  const [user, setUser] = useState(null);
  const [userType, setUserType] = useState(''); // 일반 or 카카오
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('jwt'); // 일반 로그인용 (쿠키 로그인이면 필요 없음)
    navigate('/');
  };

  useEffect(() => {
    axiosInstance
      .get('/api/member/mypage')
      .then((res) => {
        setUser(res.data);
        // ✅ 카카오회원 여부는 필드로 구분 (예시로 profileImage 유무로 판별)
        if (res.data.profileImage) {
          setUserType('카카오 회원');
        } else {
          setUserType('일반 회원');
        }
      })
      .catch((err) => {
        alert('로그인 정보가 없거나 세션이 만료되었습니다.');
        logout();
      });
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>마이페이지</h2>
      {user ? (
        <>
          <p><strong>회원 유형:</strong> {userType}</p>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </>
      ) : (
        <p>불러오는 중...</p>
      )}
      <button onClick={logout}>로그아웃</button>
    </div>
  );
}

export default Mypage;
