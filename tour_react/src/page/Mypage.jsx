// 📁 src/pages/Mypage.jsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../api/axiosInstance.js';
import '../assets/css/MyPage.css';

function Mypage() {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('info');
  const [userPosts, setUserPosts] = useState([]);
  const [userComments, setUserComments] = useState([]);
  const [userType, setUserType] = useState('');
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    nickname: '',
    profileImage: null,
  });

  const logout = () => {
    navigate('/');
  };

  // ✅ 회원정보 불러오기
  useEffect(() => {
    axiosInstance.get('/api/member/mypage')
      .then(res => {
        setUser(res.data);
        setFormData({
          name: res.data.name || '',
          email: res.data.email || '',
          nickname: res.data.nickname || '',
          profileImage: null,
        });
        setUserType(res.data.profileImage ? '카카오 회원' : '일반 회원');
      })
      .catch(() => {
        alert('로그인 정보가 없거나 세션이 만료되었습니다.');
        logout();
      });
  }, []);

  // ✅ 게시글 불러오기
  useEffect(() => {
    if (activeTab === 'posts') {
      axiosInstance.get('/api/mypage/posts')
        .then(res => setUserPosts(res.data))
        .catch(() => alert('게시글 불러오기 실패'));
    }
  }, [activeTab]);

  // ✅ 댓글 불러오기
  useEffect(() => {
    if (activeTab === 'comments') {
      axiosInstance.get('/api/mypage/comments')
        .then(res => setUserComments(res.data))
        .catch(() => alert('댓글 불러오기 실패'));
    }
  }, [activeTab]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'profileImage' ? files[0] : value
    }));
  };

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
    <div className="mypage-wrapper">
      {/* 📌 사이드 메뉴 */}
      <aside className="mypage-sidebar">
        <h3 className="mypage-sidebar-title">마이페이지</h3>
        <ul className="mypage-sidebar-menu">
          <li onClick={() => setActiveTab('info')} className={activeTab === 'info' ? 'mypage-tab-active' : ''}>회원정보 수정</li>
          <li onClick={() => setActiveTab('posts')} className={activeTab === 'posts' ? 'mypage-tab-active' : ''}>게시글 내역</li>
          <li onClick={() => setActiveTab('comments')} className={activeTab === 'comments' ? 'mypage-tab-active' : ''}>댓글 내역</li>
        </ul>
      </aside>

      {/* 📌 메인 컨텐츠 */}
      <div className="mypage-container">
        {activeTab === 'info' && (
          <>
            <h2 className="mypage-title">회원정보 수정</h2>
            {user ? (
              <form className="mypage-form" onSubmit={handleSubmit} encType="multipart/form-data">
                <p className="mypage-type"><strong>회원 유형:</strong> {userType}</p>
                <label className="mypage-label">이름</label>
                <input type="text" name="name" value={formData.name} disabled className="mypage-input" />

                <label className="mypage-label">이메일</label>
                <input type="email" name="email" value={formData.email} disabled className="mypage-input" />

                <label className="mypage-label">닉네임</label>
                <input type="text" name="nickname" value={formData.nickname} onChange={handleChange} className="mypage-input" />

                <div className="mypage-button-group">
                  <button type="submit" className="mypage-submit-btn">저장</button>
                  <button type="button" className="mypage-cancel-btn" onClick={() => navigate('/')}>취소</button>
                  <button type="button" className="mypage-logout-btn" onClick={logout}>로그아웃</button>
                </div>
              </form>
            ) : (
              <p className="mypage-loading">불러오는 중...</p>
            )}
          </>
        )}

        {activeTab === 'posts' && (
          <div>
            <h2 className="mypage-title">📄 게시글 작성내역</h2>
            {userPosts.length > 0 ? (
              <div className="mypage-post-list">
                {userPosts.map((post) => (
                  <div key={post.id} className="mypage-post-card">
                    <h3 className="mypage-post-title">{post.title}</h3>
                    <p className="mypage-post-content">{post.content}</p>
                    <div className="mypage-post-meta">
                      <span>❤️ {post.likeCount}</span>
                      <span>💬 {post.commentCount}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="mypage-loading">작성한 게시글이 없습니다.</p>
            )}
          </div>
        )}

        {activeTab === 'comments' && (
          <div>
            <h2 className="mypage-title">💬 댓글 작성 내역</h2>
            {userComments.length === 0 ? (
              <p className="mypage-loading">작성한 댓글이 없습니다.</p>
            ) : (
              <ul className="mypage-comment-list">
                {userComments.map((comment) => (
                  <li key={comment.id} className="mypage-comment-item">
                    <p><strong>게시글:</strong> {comment.postTitle}</p>
                    <p><strong>댓글 내용:</strong> {comment.content}</p>
                    <p className="mypage-comment-date">{new Date(comment.createdAt).toLocaleString()}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Mypage;
