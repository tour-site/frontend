// 📁 src/pages/BoardDetailPage.jsx
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from '../../api/axiosInstance';
import '../../assets/css/BoardDetail.css';
import {
  fetchBoardById,
  fetchComments,
  postComment,
  toggleLike,
} from "../../api/boardApi";

const BoardDetailPage = () => {

  const { id } = useParams();
  const [board, setBoard] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [memberId] = useState(1); // ❗임시 memberId (나중에 로그인 사용자로 대체)
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const navigate = useNavigate();


  // 게시글 + 좋아요 + 댓글 불러오기
  useEffect(() => {
    fetchBoardById(id)
      .then((res) => {
        setBoard(res.data);
        setLikeCount(res.data.likeCount);
        setLiked(res.data.liked);
      })
      .catch((err) => console.error("게시글 로드 실패:", err));

    fetchComments(id)
      .then((res) => setComments(res.data))
      .catch((err) => console.error("댓글 로드 실패:", err));
  }, [id]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    try {
      await postComment(id, { content: newComment });
      const updated = await fetchComments(id);
      setComments(updated.data);
      setNewComment("");
    } catch (err) {
      console.error("댓글 등록 실패:", err);
    }
  };

  const handleLikeToggle = async () => {
    console.log("좋아요 버튼 클릭됨"); // 추가해보기
    try {
      const res = await toggleLike(id, memberId);
      setLiked(res.data.liked);
      setLikeCount(res.data.likeCount);
    } catch (err) {
      console.error("좋아요 실패:", err);
    }
  };

  const handleDeleteBoard = async () => {
    if (!window.confirm("정말 삭제하시겠습니까?")) return;

    try {
      await axiosInstance.delete(`/api/board/${id}`);
      alert("삭제되었습니다.");
      navigate("/board"); // 목록 페이지로 이동
    } catch (err) {
      console.error("삭제 실패:", err);
      alert("삭제 실패");
    }
  };

  if (!board) return <p>로딩 중...</p>;

  return (
    <div className="board-detail-container">
      <div className="board-detail-header">
        <h2 className="board-title"> {board.title}</h2>
        <p className="board-content">{board.content}</p>
        <p className="board-date">🕒 작성일: {new Date(board.createdAt).toLocaleString()}</p>
      </div>

      <div className="board-buttons">
        <button onClick={() => navigate(`/board/${id}/edit`)}>✏️ 수정</button>
        <button onClick={handleDeleteBoard} style={{ color: "red" }}>🗑️ 삭제</button>
        <button onClick={() => navigate("/board")}>📄 목록으로</button>
        <button onClick={handleLikeToggle}>
          {liked ? "💔 좋아요 취소" : "❤️ 좋아요"} ({likeCount})
        </button>
      </div>

      <hr />
      <div className="comment-section">
        <h3>💬 댓글</h3>
        <ul>
          {comments.length === 0 ? (
            <p>댓글이 없습니다.</p>
          ) : (
            comments.map((c) => (
              <li key={c.id}>
                <p>{c.content}</p>
                <span style={{ fontSize: "0.8rem", color: "#666" }}>
                  {new Date(c.createdAt).toLocaleString()}
                </span>
              </li>
            ))
          )}
        </ul>

        <form className="comment-form" onSubmit={handleCommentSubmit}>
          <textarea
            placeholder="댓글을 입력하세요"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            rows={3}
          ></textarea>
          <button type="submit">댓글 등록</button>
        </form>
      </div>
    </div>
  );
};

export default BoardDetailPage;
