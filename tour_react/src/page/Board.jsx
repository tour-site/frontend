import React, { useState, useEffect, useContext } from 'react';
import BoardList from "../components/BoardList";
import { UserContext } from '../components/UserContext';
import '../assets/css/Board.css';

const Board = () => {
  const [posts, setPosts] = useState([]);
  const { currentUser } = useContext(UserContext);

  const handleWriteClick = () => {
    if (!currentUser) {
      alert('로그인이 필요합니다.');
      return;
    }

    const authorName = encodeURIComponent(currentUser.username); // username 대신 name 등 필요한 필드명으로!
    const url = `/boardwrite?author=${authorName}`;
    window.open(url, '_blank');
  };

  useEffect(() => {
    const updatePosts = () => {
      const saved = localStorage.getItem('postList');
      if (saved) {
        const parsed = JSON.parse(saved);
        setPosts(parsed);
      }
    };

    updatePosts(); // 첫 렌더링 시
    window.addEventListener('focus', updatePosts); // 창이 focus될 때마다

    return () => {
      window.removeEventListener('focus', updatePosts);
    };
  }, []);

  return (
    <div className="board-container">
      <h2 className="board-title">📝 게시판</h2>
      <BoardList posts={posts} />
      {currentUser && (
        <div className="write-button-area">
          <button type="button" onClick={handleWriteClick}>
            ✍️ 작성하기
          </button>
        </div>
      )}
    </div>
  );
};

export default Board;
