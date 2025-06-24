// 📁 src/api/boardApi.js
// ✅ 게시판 API 통합 모듈

import axiosInstance from './axiosInstance';

// 📌 게시글 전체 조회 (리스트)
export const fetchBoards = () =>
  axiosInstance.get('/api/board');

// 📌 게시글 단건 조회 (상세페이지)
export const fetchBoardById = (id) =>
  axiosInstance.get(`/api/board/${id}`);

// 📌 게시글 생성
export const createBoard = (data) =>
  axiosInstance.post('/api/board', data);

// 📌 게시글 수정
export const updateBoard = (id, data) =>
  axiosInstance.put(`/api/board/${id}`, data);

// 📌 게시글 삭제
export const deleteBoard = (id) =>
  axiosInstance.delete(`/api/board/${id}`);

// 📌 댓글 작성
export const postComment = (boardId, data) =>
  axiosInstance.post(`/api/board/${boardId}/comments`, data);

// 📌 댓글 목록 조회
export const fetchComments = (boardId) =>
  axiosInstance.get(`/api/board/${boardId}/comments`);

// 📌 댓글 삭제
export const deleteComment = (commentId) =>
  axiosInstance.delete(`/api/board/comments/${commentId}`);

// 📌 좋아요 토글 (있으면 취소, 없으면 추가)
export const toggleLike = (boardId) =>
    axiosInstance.post(`/api/board/${boardId}/like`);

// 📌 좋아요 개수 조회
export const fetchLikeCount = (boardId) =>
  axiosInstance.get(`/api/board/${boardId}/likes/count`);
