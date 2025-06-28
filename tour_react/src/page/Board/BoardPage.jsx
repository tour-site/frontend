import React, { useEffect, useState } from "react";
import { fetchBoards } from "../../api/boardApi";
import { useNavigate } from "react-router-dom";
import '../../assets/css/BoardPage.css';
import Pagination from '../../components/BoardPagination';

const BoardPage = () => {
  const [boards, setBoards] = useState([]);
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentBoards = boards.slice(indexOfFirst, indexOfLast);

  useEffect(() => {
    fetchBoards()
      .then((res) => {
        const sorted = res.data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setBoards(sorted);
      })
      .catch((err) => console.error("게시글 조회 실패:", err));
  }, []);


  const handleWrite = () => {
    navigate("/board/write");
  };

  const handleDetail = (id) => {
    navigate(`/board/${id}`);
  };

  return (
    <div className="board-container">
      <h2 className="board-title">📋 게시판</h2>
      <div className="write-button-wrapper">
        <button className="write-button" onClick={handleWrite}>글쓰기</button>
      </div>
      <hr />
      <ul>
        {currentBoards.length === 0 ? (
          <p>등록된 게시글이 없습니다.</p>
        ) : (
          currentBoards.map((board) => (
            <li
              key={board.id}
              onClick={() => handleDetail(board.id)}
              style={{ cursor: "pointer", marginBottom: "1rem" }}
            >
              <h4>{board.title}</h4>
              {/* <p>{board.content.length > 100 ? board.content.slice(0, 100) + "..." : board.content}</p> */}
              <p>작성자: {board.writerNickname} ({board.email})</p>
              <p>👍 {board.likeCount} / 💬 {board.commentCount}</p>
              <hr />
            </li>
          ))
        )}
      </ul>

      <Pagination
        totalPosts={boards.length}
        postsPerPage={postsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default BoardPage;
