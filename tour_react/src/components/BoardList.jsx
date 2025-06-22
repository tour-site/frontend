// 게시글 목록 

import React from 'react';
import BoardItem from './BoardItem';
import '../assets/css/BoardList.css';

const BoardList = ({ posts }) => {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>No</th>
          <th>제목</th>
          <th>작성자</th>
          <th>작성일</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post, index) => (
          <BoardItem
            key={post.id}
            post={post}
            index={posts.length - index}
          />
        ))}
      </tbody>
    </table>
  );
};

export default BoardList;
