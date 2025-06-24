// 📁 src/pages/BoardListPage.jsx
import { useEffect, useState } from 'react';
import axios from '../../api/axiosInstance';
import { useNavigate } from 'react-router-dom';

export default function BoardListPage() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/api/board/list')
      .then(res => setPosts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="board-list">
      <h2>📌 게시판</h2>
      <button onClick={() => navigate('/board/write')}>글쓰기</button>
      <ul>
        {posts.map(post => (
          <li key={post.id} onClick={() => navigate(`/board/${post.id}`)}>
            <strong>{post.title}</strong> - {post.writer}
          </li>
        ))}
      </ul>
    </div>
  );
}
