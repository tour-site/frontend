// 📁 src/pages/BoardWritePage.jsx
import React, { useState } from "react";
import { createBoard } from "../../api/boardApi";
import { useNavigate } from "react-router-dom";
import '../../assets/css/BoardWrite.css';

const BoardWritePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      alert("제목과 내용을 모두 입력해주세요.");
      return;
    }

    try {
      await createBoard({ title, content });
      alert("게시글이 등록되었습니다!");
      navigate("/board");
    } catch (err) {
      console.error("게시글 등록 실패:", err);
      alert("게시글 등록 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="board-write-wrapper">
      <div className="board-write-container">
        <h2 className="board-write-title">✍️ 글쓰기</h2>
        <form onSubmit={handleSubmit} className="board-write-form">
          <input
            type="text"
            className="board-write-input"
            placeholder="제목을 입력하세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="board-write-textarea"
            placeholder="내용을 입력하세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={10}
          ></textarea>
          <div className="board-write-buttons">
          <button type="button" className="board-write-cancel-btn" onClick={() => navigate('/board')}>
              취소
            </button>
          <button type="submit" className="board-write-button">등록</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BoardWritePage;
