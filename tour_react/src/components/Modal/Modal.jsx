// src/components/Modal/Modal.jsx
import React, { useEffect, useRef } from 'react';
import styles from './Modal.module.css';

const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) modalRef.current?.focus();
  }, [isOpen]);

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      ref={modalRef}
      tabIndex={-1}
      onKeyDown={handleKeyDown}
    >
      <div className={styles.content} onClick={e => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="모달 닫기">&times;</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
