import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../api/axiosInstance.js';
import '../assets/css/MyPage.css';

function Mypage() {
  const [user, setUser] = useState(null);
  const [userType, setUserType] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    nickname: '',
    profileImage: null,  // 업로드할 파일
  });
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('jwt');
    navigate('/');
  };

  // 초기 데이터 불러오기
  useEffect(() => {
    axiosInstance
      .get('/api/member/mypage')
      .then((res) => {
        setUser(res.data);
        setFormData({
          name: res.data.name || '',
          email: res.data.email || '',
          nickname: res.data.nickname || '',
          profileImage: null,
        });
        setUserType(res.data.profileImage ? '카카오 회원' : '일반 회원');
      })
      .catch((err) => {
        alert('로그인 정보가 없거나 세션이 만료되었습니다.');
        logout();
      });
  }, []);

  // 입력 변경 처리
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'profileImage') {
      setFormData((prev) => ({ ...prev, profileImage: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // 저장 버튼 클릭
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('nickname', formData.nickname);
      if (formData.profileImage) data.append('profileImage', formData.profileImage);

      await axiosInstance.put('/api/member/update', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      alert('회원정보가 수정되었습니다.');
      window.location.reload();
    } catch (error) {
      console.error(error);
      alert('회원정보 수정에 실패했습니다.');
    }
  };

  return (
    <div className="mypage-container" style={{ padding: '1rem' }}>
      <h2 className="mypage-title">마이페이지</h2>

      {user ? (
        <>
          <p className="mypage-type"><strong>회원 유형:</strong> {userType}</p>

          {/* 수정 폼 */}
          <form className="mypage-form" onSubmit={handleSubmit} encType="multipart/form-data">
            <label>이름</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label>이메일 (수정 불가)</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              disabled
            />

            <label>닉네임</label>
            <input
              type="text"
              name="nickname"
              value={formData.nickname}
              onChange={handleChange}
            />

            <label>프로필 이미지</label>
            <input
              type="file"
              name="profileImage"
              accept="image/*"
              onChange={handleChange}
            />

            <div className="button-group">
              <button type="submit" className="submit-btn">저장</button>
              <button
                type="button"
                className="cancel-btn"
                onClick={() => window.location.reload()}
              >
                취소
              </button>
            </div>
          </form>

          {/* 원래 JSON 출력 */}
          <pre className="mypage-json" style={{ marginTop: '2rem' }}>
            {JSON.stringify(user, null, 2)}
          </pre>
        </>
      ) : (
        <p className="mypage-loading">불러오는 중...</p>
      )}

      <button className="mypage-logout-button" onClick={logout}>로그아웃</button>
    </div>
  );
}

export default Mypage;
