import React, { useContext,useEffect, useState,useRef } from 'react';
import { UserContext } from '../components/UserContext';
import { useNavigate, useLocation } from 'react-router-dom';
import '../assets/css/MyPage.css';

const initialUserData = {
  id: '',
  password: '',
  name: '홍길동',
  nickname: '',
  email: 'hong@example.com',
  gender: '남성',
  birth: '1990-01-01',
  phone: '010-1234-5678',
  profileImage: '',
};

const MyPage = () => {
  const [user, setUser] = useState(null);
  const [form, setForm] = useState(initialUserData);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const location = useLocation();
  const { id, password } = location.state || {};
  // useContext 적용
  const { currentUser, setCurrentUser } = useContext(UserContext);



  useEffect(() => {
  if (currentUser) {
    const prefilledData = {
      ...initialUserData,
      id: currentUser.username || '',
      password: currentUser.password || '',
    };
    setUser(prefilledData);
    setForm(prefilledData);
  }
  }, [currentUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { id, nickname, email, password } = form;

    // 아이디: 8 ~ 15자
    if (!/^.{8,15}$/.test(id)) {
      alert('아이디는 8~15자 이내여야 합니다.');
      return false;
    }
    // 비밀번호: 8 ~ 15자, 2종류 조합 (대문자/소문자/숫자)
    const pwValid = /^.{8,15}$/.test(password);
    const pwTypeCount =
      [/[a-z]/, /[A-Z]/, /[0-9]/].filter((r) => r.test(password)).length;

    if (!pwValid || pwTypeCount < 2) {
      alert('비밀번호는 8~15자이며, 대문자/소문자/숫자 중 2가지 이상 조합해야 합니다.');
      return false;
    }

    // 닉네임: 1 ~ 12자
    if (!/^.{1,12}$/.test(nickname)) {
      alert('닉네임은 1~12자 이내여야 합니다.');
      return false;
    }

    // 이메일 형식
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('올바른 이메일 형식이 아닙니다.');
      return false;
    }

    return true;
  };

  const handleReset = () => {
    setForm(user);
    setMessage('');
    setError('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setUser(form); // 실제로는 API 호출
    setMessage('변경사항이 반영되었습니다.');
  };

  const handleLogout = () => {
    if (window.confirm('로그아웃 하시겠습니까?')) {
      setCurrentUser(null); // 전역 로그인 정보 초기화
      navigate('/');
    }
  };

  return (
    <div className="mypage-container">
      <div className="logout-button-area">
        <button className="logout-btn" onClick={handleLogout}>
          로그아웃
        </button>
      </div>

      <h2>개인 정보 입력</h2>
      <form onSubmit={handleSubmit} className="mypage-form">

        <label>아이디</label>
        <input type="text" name="id" value={form.id} onChange={handleChange} />

        <label>비밀번호</label>
        <input type="text" name="password" value={form.password} onChange={handleChange} />

        <label>이름</label>
        <input
          type="text"
          name="name"
          value={form.name}
          readOnly
          style={{ backgroundColor: '#f5f5f5', borderColor: '#ccc', cursor: 'not-allowed' }}
        />
        <small style={{ color: 'gray' }}>이름은 변경할 수 없습니다.</small>

        <label>닉네임</label>
        <input type="text" name="nickname" value={form.nickname} onChange={handleChange} />

        <label>이메일</label>
        <input
          type="email"
          name="email"
          value={form.email}
          readOnly
          style={{ backgroundColor: '#f5f5f5', borderColor: '#ccc', cursor: 'not-allowed' }}
        />
        <small style={{ color: 'gray' }}>가입 시 입력한 이메일은 변경할 수 없습니다.</small>

        <label>성별</label>
        <select name="gender" value={form.gender} disabled>
          <option value="남성">남성</option>
          <option value="여성">여성</option>
          <option value="기타">기타</option>
        </select>
        <small style={{ color: 'gray' }}>가입 시 입력한 성별은 변경할 수 없습니다.</small>

        <label>생년월일</label>
        <input type="date" name="birth" value={form.birth} readOnly />

        <label>휴대폰 번호</label>
        <input type="tel" name="phone" value={form.phone} onChange={handleChange} />

        <div className="button-group">
          <button type="button" onClick={handleReset} className="cancel-btn">
            취소
          </button>
          <button type="submit" className="submit-btn">
            정보 수정
          </button>
        </div>

        {error && <p className="error-message">{error}</p>}
        {message && <p className="success-message">{message}</p>}
      </form>
    </div>
  );
};

export default MyPage;
