import React, { useContext,useEffect, useState,useRef } from 'react';
import { UserContext } from '../../components/UserContext/UserContext';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './MyPage.module.css';

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
    if (!/^.{8,15}$/.test(id)) {
      alert('아이디는 8~15자 이내여야 합니다.');
      return false;
    }
    const pwValid = /^.{8,15}$/.test(password);
    const pwTypeCount = [/[a-z]/, /[A-Z]/, /[0-9]/].filter((r) => r.test(password)).length;
    if (!pwValid || pwTypeCount < 2) {
      alert('비밀번호는 8~15자이며, 대/소문자/숫자 중 2가지 이상 조합해야 합니다.');
      return false;
    }
    if (!/^.{1,12}$/.test(nickname)) {
      alert('닉네임은 1~12자 이내여야 합니다.');
      return false;
    }
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
    setUser(form);
    setMessage('변경사항이 반영되었습니다.');
  };

  const handleLogout = () => {
    if (window.confirm('로그아웃 하시겠습니까?')) {
      navigate('/login'); // ← 로그아웃 후 로그인 페이지로 이동
    }
  };

  const handleWithdrawal = () => {
    if (window.confirm('정말로 탈퇴하시겠습니까? 탈퇴 시 모든 정보가 삭제됩니다.')) {
      // 실제 서버 연동이 있을 경우 API 호출 필요
      alert('회원 탈퇴가 완료되었습니다.');
      navigate('/'); // 탈퇴 후 메인 페이지로 이동
    }
  };

  return (
    <div className={styles.pagelayout}>
      {/* ✅ 왼쪽 사이드 메뉴 */}
      <aside className={styles.sidemenu}>
        <nav>
          <h2>마이페이지</h2>
          <ul>
            <li>
              <details open>
                <summary>회원정보 수정</summary>
                <ul>
                  <li>원서접수 안내</li>
                  <li>원서접수 신청</li>
                  <li>원서접수 현황</li>
                  <li>장애유형별 편의제공안내</li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>합격자/답안발표</summary>
                <ul>
                  <li>합격자 조회</li>
                  <li>답안 확인</li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>시험일정</summary>
                <ul>
                  <li>필기 일정</li>
                  <li>실기 일정</li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>필기시험안내</summary>
                <ul>
                  <li>시험과목</li>
                  <li>시험방법</li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>실기시험안내</summary>
                <ul>
                  <li>시험과목</li>
                  <li>시험방법</li>
                </ul>
              </details>
            </li>
          </ul>
        </nav>
      </aside>

      {/* ✅ 오른쪽 마이페이지 본문 */}
      <main className={styles.mypagemain}>
        <div className={styles.mypagecontainer}>
          <div className={styles.logoutbuttonarea}>
            <button className={styles.logoutbtn} onClick={handleLogout}>
              로그아웃
            </button>
          </div>

          <h2>개인 정보 입력</h2>
          <form onSubmit={handleSubmit} className={styles.mypageform}>
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
            </select>
            <small style={{ color: 'gray' }}>가입 시 입력한 성별은 변경할 수 없습니다.</small>

            <label>생년월일</label>
            <input type="date" name="birth" value={form.birth} readOnly />

            <label>휴대폰 번호</label>
            <input type="tel" name="phone" value={form.phone} onChange={handleChange} />

            <div className={styles.buttongroup}>
            <button type="button" onClick={handleReset} className={styles.cancelbtn}>
              취소
            </button>
            <button type="submit" className={styles.submitbtn}>
              정보 수정
            </button>
          </div>

          <div className={styles.withdrawalarea}>
            <button type="button" className={styles.withdrawalbtn} onClick={handleWithdrawal}>
              회원 탈퇴
            </button>
          </div>

            {error && <p className={styles.errormessage}>{error}</p>}
            {message && <p className={styles.successmessage}>{message}</p>}
          </form>
        </div>
      </main>
    </div>
  );
};

export default MyPage;
