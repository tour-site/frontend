import React, { useState } from 'react';
import '../assets/css/BoardWrite.css';
const BoardWrite = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
  e.preventDefault();

  //입력창 빈칸 확인
   // 빈칸 확인
  if (!title.trim()) {
    alert('제목을 입력해주세요.');
    return;
  }
  if (!author.trim()) {
    alert('작성자를 입력해주세요.');
    return;
  }
  if (!content.trim()) {
    alert('내용을 입력해주세요.');
    return;
  } 

  const newPost = {
    id: Date.now(),
    title,
    author,
    content,
    date: new Date().toISOString().split('T')[0],
  };

  const existing = JSON.parse(localStorage.getItem('postList')) || [];
  const updated = [newPost, ...existing];
  localStorage.setItem('postList', JSON.stringify(updated));
  alert('글이 등록되었습니다!');
  if (window.opener) {
  window.opener.location.reload(); // 부모 창 새로고침!
    }
  window.close();
};


  return (
    <div className='write-container'>
      <h2>✍️ 새 글 작성</h2>
      <form className='write-form' onSubmit={handleSubmit}>
        <label>제목
            <input
            type="text"
            placeholder="제목을 작성해주세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
        </label>
        
        <label>작성자
            <input
            type="text"
            placeholder="작성자를 입력하세요"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            />
        </label>
        <label>내용
        <textarea
          placeholder="내용을 입력하세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={6}
        />
        </label>
        <button type="submit">등록</button>
      </form>
    </div>
  );
};

export default BoardWrite;
