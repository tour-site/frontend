// 📁 src/pages/Mypage.jsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Mypage() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('jwt');
    navigate('/');
  };

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (!token) {
      navigate('/login');
      return;
    }

    axios
      .get('http://localhost:8010/api/member/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setUser(res.data))
      .catch(() => {
        alert('세션이 만료되었습니다.');
        logout();
      });
  }, []);

  return (
    <div>
      <h2>마이페이지</h2>
      {user ? (
        <pre>{JSON.stringify(user, null, 2)}</pre>
      ) : (
        <p>불러오는 중...</p>
      )}
      <button onClick={logout}>로그아웃</button>
    </div>
  );
}

export default Mypage;
