import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import '../assets/css/ImageGallery.css';
import '../assets/css/Category.css'

const regions = [
  '강서구', '금정구', '기장군', '남구', '동구',
  '동래구', '부산진구', '북구', '사상구', '사하구',
  '서구', '수영구', '연제구', '영도구', '중구', '해운대구'
];

const categories = ['여행지', '맛집', '숙소'];

const categoryApiMap = {
  여행지: 'place',
  맛집: 'foods',
  숙소: 'stays',
};

const imageData = regions.flatMap((region) =>
  categories.flatMap((category) =>
    Array.from({ length: 5 }, (_, i) => ({
      id: `${region}-${category}-${i + 1}`,
      src: `image_${region}_${category}_${i + 1}.jpg`,
      region,
      category,
    }))
  )
);

const ImageGallery = () => {
  const location = useLocation(); // ✅ 장소에서 state를 받기 위해 추가
  const scrollRef = useRef(null);

  // ✅ PlaceList에서 전달받은 초기값 (없으면 기본값 '')
  const [selectedRegion, setSelectedRegion] = useState(location.state?.selectedRegion || '');
  const [selectedCategory, setSelectedCategory] = useState(location.state?.selectedCategory || '');

  const [expanded, setExpanded] = useState(false);
  const [likedImages, setLikedImages] = useState({});
  const IMAGES_PER_PAGE = 4;

  const filteredImages = imageData.filter(
    (img) =>
      (!selectedRegion || img.region === selectedRegion) &&
      (!selectedCategory || img.category === selectedCategory)
  );

  const visibleImages = expanded ? filteredImages : filteredImages.slice(0, IMAGES_PER_PAGE);
  const hasMore = filteredImages.length > IMAGES_PER_PAGE;

  const toggleExpanded = () => setExpanded(prev => !prev);

  const toggleLike = (id) => {
    const alreadyLiked = likedImages[id];
    if (alreadyLiked) {
      if (window.confirm("좋아요가 취소되었습니다.")) {
        setLikedImages(prev => ({ ...prev, [id]: false }));
      }
    } else {
      if (window.confirm("좋아요를 누르셨습니다.")) {
        setLikedImages(prev => ({ ...prev, [id]: true }));
      }
    }
  };

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">이미지로 보기</h2>

      <div className="categorybox">
        <div className="region-wrapper">
          <div className="region-container">
            {regions.map(region => (
              <button
                key={region}
                className={`region-btn ${selectedRegion === region ? 'active' : ''}`}
                onClick={() => setSelectedRegion(region === selectedRegion ? '' : region)}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        <div className="category-container">
          <div className="category-buttons">
            {categories.map(cat => (
              <button
                key={cat}
                className={`menu-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat === selectedCategory ? '' : cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="listBox">
        {filteredImages.length === 0 ? (
          <p style={{ textAlign: 'center', marginTop: 40, fontSize: 18, color: '#666' }}>
            해당 이미지가 없습니다.
          </p>
        ) : (
          <>
            <div className="image-grid">
              {visibleImages.map((img) => (
                <div key={img.id} className="image-card">
                  <img src={img.src} alt={`${img.region} ${img.category}`} />
                  <div className="image-footer">
                    <p>{img.region} - {img.category}</p>
                    <span
                      className={`heart-icon ${likedImages[img.id] ? 'liked' : ''}`}
                      onClick={() => toggleLike(img.id)}
                      role="button"
                      aria-label="좋아요 버튼"
                    >
                      ♥
                    </span>
                  </div>
                </div>
              ))}
            </div>
            {hasMore && (
              <div style={{ textAlign: 'center', marginTop: 20 }}>
                <button onClick={toggleExpanded} className="load-more-btn">
                  {expanded ? '접기' : '더보기'}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ImageGallery;
