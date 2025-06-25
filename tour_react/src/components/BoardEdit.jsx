import React, { useState } from 'react';
import '../assets/css/BoardEdit.css';

const BoardEdit = ({ post, onUpdate, onCancel }) => {
  const [title, setTitle] = useState(post.title);
  const [author, setAuthor] = useState(post.role === 'ROLE_ADMIN' ? '관리자' : post.writerNickname);
  const [content, setContent] = useState(post.content);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedPost = {
      ...post,
      title,
      author,
      content,
    };

    onUpdate(updatedPost);
  };

  return (
    <form className="edit-form" onSubmit={handleSubmit}>
      <label>
        제목
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        작성자
        <input value={author} readOnly />
        <small style={{ color: '#888', fontSize: '12px', marginTop: '4px' }}>
          작성자는 수정할 수 없습니다
        </small>
      </label>
      <label>
        내용
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={6}
        />
      </label>
      <div className="button-group">
        <button type="submit">수정 완료</button>
        <button type="button" onClick={onCancel}>취소</button>
      </div>
    </form>
  );
};

export default BoardEdit;
