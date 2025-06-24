import React, { useState } from 'react';
import { useNavigate ,useSearchParams } from 'react-router-dom';
import styles from'./BoardWrite.module.css';

const BoardWrite = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const authorParam = searchParams.get('author') || '';
  const [author, setAuthor] = useState(authorParam);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

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
      window.opener.location.reload();
    }
    window.close();
  };

  const handleReset = () => {
    setTitle('');
    setContent('');
    setAuthor(authorParam); // 작성자는 초기값으로 되돌림
    };

  return (
    <div className={styles.writecontainer}>
      <h2>✍️ 새 글 작성</h2>
      <form className={styles.writeform} onSubmit={handleSubmit}>
        <label>
          제목
          <input
            type="text"
            placeholder="제목을 작성해주세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <label>
          작성자
          <input
            name="author"
            value={author}
            readOnly
          />
        </label>

        <label>
          내용
          <textarea
            placeholder="내용을 입력하세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={6}
          />
        </label>

        <div className={styles.buttonrow}>
          <button
            type="button"
            className={styles.detailbackbutton}
            onClick={() => navigate('/board')}
          >
            ← 목록으로
          </button>
          <div className={styles.submitbuttonwrapper}>
            <button type="submit" className={styles.submitbutton}>
              등록
            </button>
          </div>
            <button type="button" onClick={handleReset}>초기화</button>
        </div>
      </form>
    </div>
  );
};

export default BoardWrite;
