import { useState } from "react";
import '../assets/css/ImageGallery.css';

const ImageGallery = () => {
  const images = [1, 2, 3, 4, 5, 6, 7, 8]; // 예시 이미지 8개

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">이미지로 보기</h2>
      <div className="menu-box">
        <label className="menu-title" htmlFor="menu-select">카테고리</label>
      </div>
      <div className="image-grid">
        {images.map((img, index) => (
          <div key={index} className="image-card">
            <img src={`image${img}.jpg`} alt={`Image ${img}`} />
            <p>이미지 {img}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;