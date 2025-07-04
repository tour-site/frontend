import '../assets/css/Board.css';
import React, { useState, useEffect, useContext } from 'react';
import BoardList from "../components/BoardList";
import Pagination from "./Board/BoardPagination";
import { UserContext } from '../components/UserContext';

const Board = () => {
  const [posts, setPosts] = useState([]);
  const { currentUser } = useContext(UserContext);

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = posts.slice(indexOfFirst, indexOfLast);

  const handleWriteClick = () => {
    if (!currentUser) {
      alert('로그인이 필요합니다.');
      return;
    }
    const authorName = encodeURIComponent(currentUser.username);
    window.open(`/boardwrite?author=${authorName}`, '_blank');
  };

  useEffect(() => {
    const updatePosts = () => {
      const saved = localStorage.getItem('postList');
      if (saved) {
        const parsed = JSON.parse(saved);
        setPosts(parsed);
      }
    };
    updatePosts();
    window.addEventListener('focus', updatePosts);
    return () => window.removeEventListener('focus', updatePosts);
  }, []);

  return (
    <div className="board-container">
      <h2 className="board-title">📝 게시판</h2>

      <BoardList
        posts={currentPosts}
        total={posts.length}
        indexOffset={indexOfFirst}
      />

      <Pagination
        totalPosts={posts.length}
        postsPerPage={postsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />

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
