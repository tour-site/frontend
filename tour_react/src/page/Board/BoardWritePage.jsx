// 📁 src/pages/BoardWritePage.jsx
import React, { useState } from "react";
import { createBoard } from "../../api/boardApi";
import { useNavigate } from "react-router-dom";

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
    <div style={{ padding: "2rem" }}>
      <h2>✍️ 글쓰기</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="제목을 입력하세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
          />
        </div>
        <div>
          <textarea
            placeholder="내용을 입력하세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={10}
            style={{ width: "100%", padding: "0.5rem" }}
          ></textarea>
        </div>
        <button type="submit" style={{ marginTop: "1rem" }}>
          등록
        </button>
      </form>
    </div>
  );
};

export default BoardWritePage;
