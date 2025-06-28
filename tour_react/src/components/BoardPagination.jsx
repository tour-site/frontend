import React from 'react';
import '../assets/css/paging.css';

const Pagination = ({ totalPosts, postsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  if (totalPages <= 1) return null;

  // 블럭당 페이지 수
  const pagesPerBlock = 10;

  // 현재 블럭 번호 (0부터 시작)
  const currentBlock = Math.floor((currentPage - 1) / pagesPerBlock);
  const startPage = currentBlock * pagesPerBlock + 1;
  const endPage = Math.min(startPage + pagesPerBlock - 1, totalPages);

  // 블럭 페이지 배열 생성
  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {/* ≪ 이전 블럭 */}
      {startPage > 1 && (
        <button onClick={() => onPageChange(startPage - 1)}>≪</button>
      )}

      {/* 이전 페이지 */}
      <button
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
      >
        이전
      </button>

      {/* 현재 블럭의 페이지 버튼들 */}
      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={page === currentPage ? "active" : ""}
        >
          {page}
        </button>
      ))}

      {/* 다음 페이지 */}
      <button
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
      >
        다음
      </button>

      {/* ≫ 다음 블럭 */}
      {endPage < totalPages && (
        <button onClick={() => onPageChange(endPage + 1)}>≫</button>
      )}
    </div>
  );
};

export default Pagination;
