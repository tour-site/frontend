import React from 'react';
import { useNavigate } from 'react-router-dom';

const BoardItem = ({ post, index }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/board/${post.id}`);
  };

  return (
    <tr onClick={handleClick} style={{ cursor: 'pointer' }}>
      <td>{index}</td>
      <td>{post.title}</td>
      <td>{post.author}</td>
      <td>{post.date}</td>
    </tr>
  );
};

export default BoardItem;
