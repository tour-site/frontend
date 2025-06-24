// 📁 src/pages/BoardDetailPage.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

  // 게시글 + 좋아요 + 댓글 불러오기
  useEffect(() => {
    fetchBoardById(id)
      .then((res) => {
        setBoard(res.data);
        setLikeCount(res.data.likeCount);
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
    try {
      const res = await toggleLike(id, memberId);
      setLiked(res.data.liked);
      setLikeCount(res.data.likeCount);
    } catch (err) {
      console.error("좋아요 실패:", err);
    }
  };

  if (!board) return <p>로딩 중...</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h2>{board.title}</h2>
      <p>{board.content}</p>
      <p>🕒 작성일: {new Date(board.createdAt).toLocaleString()}</p>

      <button onClick={handleLikeToggle}>
        {liked ? "💔 좋아요 취소" : "❤️ 좋아요"} ({likeCount})
      </button>

      <hr />
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
              <hr />
            </li>
          ))
        )}
      </ul>

      <form onSubmit={handleCommentSubmit}>
        <textarea
          placeholder="댓글을 입력하세요"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          rows={3}
          style={{ width: "100%", padding: "0.5rem" }}
        ></textarea>
        <button type="submit" style={{ marginTop: "0.5rem" }}>
          댓글 등록
        </button>
      </form>
    </div>
  );
};

export default BoardDetailPage;
