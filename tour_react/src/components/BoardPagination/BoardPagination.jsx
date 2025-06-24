import React from 'react';
import styles from './BoardPagination.module.css';

const Pagination = ({ totalPosts, postsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  if (totalPages <= 1) return null;

  const pageNumbers = [...Array(totalPages)].map((_, idx) => idx + 1);

  return (
    <div className={styles.pagination}>
      {/* ◀ 이전 버튼 */}
      {currentPage > 1 && (
        <button onClick={() => onPageChange(currentPage - 1)}>◀</button>
      )}

      {/* 페이지 번호들 */}
      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={page === currentPage ? styles.active : ''}
        >
          {page}
        </button>
      ))}

      {/* 다음 버튼 ▶ */}
      {currentPage < totalPages && (
        <button onClick={() => onPageChange(currentPage + 1)}>▶</button>
      )}
    </div>
  );
};

export default Pagination;
