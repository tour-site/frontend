import React from 'react';
import BoardItem from './BoardItem';
import '../assets/css/BoardList.css';

const BoardList = ({ posts, total, indexOffset }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>No</th>
          <th>제목</th>
          <th>작성자</th>
          <th>작성일</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post, idx) => (
          <BoardItem
            key={post.id}
            post={post}
            index={total - (indexOffset + idx)}
          />
        ))}
      </tbody>
    </table>
  );
};

export default BoardList;
