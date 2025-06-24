import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const [activeSection, setActiveSection] = useState('edit');
  const [posts, setPosts] = useState([
    { id: 1, title: '첫 글입니다', content: '내용입니다.', date: '2024-06-01' },
    { id: 2, title: '두 번째 글', content: '다른 내용입니다.', date: '2024-06-10' },
    { id: 3, title: '세 번째 글', content: '테스트입니다.', date: '2024-06-11' },
    { id: 4, title: '네 번째 글', content: '예시입니다.', date: '2024-06-12' },
    { id: 5, title: '다섯 번째 글', content: '게시물입니다.', date: '2024-06-13' },
    { id: 6, title: '여섯 번째 글', content: '추가된 내용입니다.', date: '2024-06-14' },
  ]);

  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  // 페이징 상태
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  useEffect(() => {
    setUser(initialUserData);
    setForm(initialUserData);
  }, []);

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
      navigate('/');
    }
  };

  const handleWithdrawal = () => {
    if (window.confirm('정말로 탈퇴하시겠습니까? 탈퇴 시 모든 정보가 삭제됩니다.')) {
      alert('회원 탈퇴가 완료되었습니다.');
      navigate('/');
    }
  };

  const handleDeletePost = (id) => {
    if (window.confirm('해당 글을 삭제하시겠습니까?')) {
      const updatedPosts = posts.filter((p) => p.id !== id);
      setPosts(updatedPosts);

      const newTotalPages = Math.ceil(updatedPosts.length / postsPerPage);
      if (currentPage > newTotalPages) {
        setCurrentPage(newTotalPages > 0 ? newTotalPages : 1);
      }
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={i === currentPage ? 'active-page' : ''}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="page-layout">
      <aside className="side-menu">
        <nav>
          <h2>마이페이지</h2>
          <ul>
            <li>
              <details open={activeSection === 'edit'}>
                <summary onClick={() => setActiveSection('edit')}>회원정보 수정</summary>
              </details>
            </li>
            <li>
              <details open={activeSection === 'activity'}>
                <summary onClick={() => setActiveSection('activity')}>나의 활동</summary>
              </details>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="mypage-main">
        <div className="mypage-container">
          <div className="logout-button-area">
            <button className="logout-btn" onClick={handleLogout}>로그아웃</button>
          </div>

          {activeSection === 'edit' && (
            <>
              <h2>개인 정보 입력</h2>
              <form onSubmit={handleSubmit} className="mypage-form">
                <label>아이디</label>
                <input type="text" name="id" value={form.id} onChange={handleChange} />

                <label>비밀번호</label>
                <input type="password" name="password" value={form.password} onChange={handleChange} />

                <label>이름</label>
                <input type="text" name="name" value={form.name} readOnly style={{ backgroundColor: '#f5f5f5' }} />
                <small style={{ color: 'gray' }}>이름은 변경할 수 없습니다.</small>

                <label>닉네임</label>
                <input type="text" name="nickname" value={form.nickname} onChange={handleChange} />

                <label>이메일</label>
                <input type="email" name="email" value={form.email} readOnly style={{ backgroundColor: '#f5f5f5' }} />
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

                <div className="button-group">
                  <button type="button" onClick={handleReset} className="cancel-btn">취소</button>
                  <button type="submit" className="submit-btn">정보 수정</button>
                </div>

                <div className="withdrawal-area">
                  <button type="button" className="withdrawal-btn" onClick={handleWithdrawal}>회원 탈퇴</button>
                </div>

                {error && <p className="error-message">{error}</p>}
                {message && <p className="success-message">{message}</p>}
              </form>
            </>
          )}

          {activeSection === 'activity' && (
            <div className="activity-section">
              <h2>작성글 목록</h2>
              <table className="activity-table">
                <thead>
                  <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>내용</th>
                    <th>작성일</th>
                    <th>삭제</th>
                  </tr>
                </thead>
                <tbody>
                  {currentPosts.map((post, index) => (
                    <tr key={post.id}>
                      <td>{indexOfFirstPost + index + 1}</td>
                      <td>{post.title}</td>
                      <td>{post.content}</td>
                      <td>{post.date}</td>
                      <td>
                        <button onClick={() => handleDeletePost(post.id)}>삭제</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {totalPages > 1 && (
                <div className="pagination">
                  <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                  >
                    이전
                  </button>
                  {renderPageNumbers()}
                  <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                  >
                    다음
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default MyPage;
