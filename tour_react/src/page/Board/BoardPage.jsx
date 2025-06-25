// 📁 src/pages/BoardPage.jsx
import React, { useEffect, useState } from "react";
import { fetchBoards } from "../../api/boardApi";
import { useNavigate } from "react-router-dom";

const BoardPage = () => {
  const [boards, setBoards] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBoards()
      .then((res) => setBoards(res.data))
      .catch((err) => console.error("게시글 조회 실패:", err));
  }, []);

  const handleWrite = () => {
    navigate("/board/write");
  };

  const handleDetail = (id) => {
    navigate(`/board/${id}`);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>📋 게시판</h2>
      <button onClick={handleWrite}>글쓰기</button>
      <hr />
      <ul>
        {boards.length === 0 ? (
          <p>등록된 게시글이 없습니다.</p>
        ) : (
          boards.map((board) => (
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
    </div>
  );
};

export default BoardPage;
