import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext/UserContext';
import Signup from '../Signup/Signup';
import Modal from '../Modal/Modal';
import styles from './Header.module.css';
// import styles from './Modal.module.css';

const fakeUsers = [
  { id: 1, username: 'admin', password: '1234', role: 'admin' },
  { id: 2, username: 'guest', password: '1234', role: 'guest' },
];

const Header = () => {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const [modalMode, setModalMode] = useState(null);
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [error, setError] = useState('');

  const closeModal = () => {
    setModalMode(null);
    setId('');
    setPw('');
    setError('');
  };

  const handleLogin = () => {
    if (!id || !pw) {
      setError('아이디와 비밀번호 모두 입력해주세요');
      return;
    }

    const matchedUser = fakeUsers.find(
      (user) => user.username === id && user.password === pw
    );

    if (matchedUser) {
      setCurrentUser(matchedUser);
      localStorage.setItem('currentUser', JSON.stringify(matchedUser));
      setError('');
      closeModal();
      navigate('/');
    } else {
      setError('아이디 또는 비밀번호가 올바르지 않습니다');
    }
  };

  return (
    <header className={styles.navbar}>
      <div
        className={styles.logo}
        onClick={() => navigate('/')}
        style={{ cursor: 'pointer' }}
        role="button"
        tabIndex={0}
      >
        ⛰️ 한길여행
      </div>

      <nav className={styles.menu}>
        <ul className={styles.navlist}>
          <li onClick={() => navigate('/map')}>지도로 보기</li>
          <li onClick={() => navigate('/image-gallery')}>이미지로 보기</li>
          <li onClick={() => navigate('/board')}>게시판</li>
        </ul>
      </nav>

      <div className={styles.authbuttons}>
        {currentUser ? (
          <div className={styles.userinfo}>
            <span>{currentUser.username}님 환영합니다!</span>
            {currentUser?.role === 'guest' && (
              <button
                className={styles.mypagebtn}
                onClick={() =>
                  navigate('/mypage', {
                    state: {
                      id: currentUser.username,
                      password: currentUser.password,
                    },
                  })
                }
              >
                마이페이지
              </button>
            )}
            <button
              onClick={() => {
                const confirmLogout = window.confirm('로그아웃 하시겠습니까?');
                if (confirmLogout) {
                  setCurrentUser(null);
                  localStorage.removeItem('currentUser'); // localStorage에서도 제거
                  alert('다음에 또 만나요~ 😊');
                  navigate('/');
                }
              }}
            >
              로그아웃
            </button>
          </div>
        ) : (
          <>
            <button className={styles.loginbtn} onClick={() => setModalMode('login')}>
              로그인
            </button>
            <button className={styles.signupbtn} onClick={() => setModalMode('signup')}>
              회원가입
            </button>
          </>
        )}

        <Modal isOpen={!!modalMode} onClose={closeModal}>
              {modalMode === 'signup' ? (
                <Signup closeModal={closeModal} />
              ) : (
                <>
                  <h2>로그인</h2>
                  <input
                    type="text"
                    className={styles.inputfield}
                    placeholder="아이디"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                  />
                  <input
                    type="password"
                    className={styles.inputfield}
                    placeholder="비밀번호"
                    value={pw}
                    onChange={(e) => setPw(e.target.value)}
                  />
                  {error && <p className={styles.errormessage}>{error}</p>}
                  <div className={styles.buttongroup}>
                    <button onClick={handleLogin}>로그인</button>
                    <button onClick={() => setModalMode('signup')}>회원가입</button>
                  </div>
                </>
              )}
        </Modal>
      </div>
    </header>
  );
};

export default Header; 


