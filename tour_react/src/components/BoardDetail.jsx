import React, {useState} from 'react';
import BoardEdit from './BoardEdit'; 
import DeleteButton from './BoardDelete';
import { useParams, useNavigate} from 'react-router-dom';
import '../assets/css/BoardDetail.css';

const BoardDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

  const postList = JSON.parse(localStorage.getItem('postList')) || [];
  const post = postList.find(p => p.id.toString() === id);

  const handleUpdate = (updatedPost) => {
    const updatedList = postList.map(p =>
      p.id === updatedPost.id ? updatedPost : p
    );
    localStorage.setItem('postList', JSON.stringify(updatedList));
    setIsEditing(false);
    window.location.reload(); // 새로고침으로 업데이트 반영
  };

  if (!post) return <p className="detail-not-found">해당 글을 찾을 수 없습니다.</p>;

  if (isEditing) {
    return (
      <BoardEdit
        post={post}
        onUpdate={handleUpdate}
        onCancel={() => setIsEditing(false)}
      />
    );
  }

  return (
    <div className="detail-container">
        <h2 className="detail-title">제목 : {post.title}</h2>
      <div className="detail-meta">
        <span>작성자 : {post.author}</span>
        <span>{post.date}</span>
      </div>
      <div className="detail-content">{post.content}</div>
      <div className='button-group'>
       <DeleteButton
          postId={post.id}
          onDelete={() => navigate('/board')} // 삭제 후 목록으로 이동
        />
       <button
          className="detail-back-button"
          style={{ marginLeft: '10px', backgroundColor: '#999' }}
          onClick={() => setIsEditing(true)}
        >
          수정
        </button>
        <button className="detail-back-button" onClick={() => navigate(-1)}>
          목록으로
        </button>
        </div>
    </div>
  );
};

export default BoardDetail;
