import React, { useState, useEffect } from 'react';
import BoardList from "../components/BoardList";
import '../assets/css/Board.css'

const Board = () => {
  const [posts, setPosts] = useState([]);

  const handleWriteClick = () => {
    window.open('/boardwrite', '_blank');
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
      
      <div className="write-button-area">
        <button type="button" onClick={handleWriteClick}>
          ✍️ 작성하기
        </button>
      </div>
    </div>
  );
};

export default Board;
