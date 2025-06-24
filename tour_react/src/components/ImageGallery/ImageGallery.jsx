import React, { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import styles from './ImageGallery.module.css';

const regions = [
  '강서구', '금정구', '기장군', '남구', '동구',
  '동래구', '부산진구', '북구', '사상구', '사하구',
  '서구', '수영구', '연제구', '영도구', '중구', '해운대구'
];

const categories = ['여행지', '맛집', '숙소'];

const imageData = regions.flatMap(region =>
  categories.flatMap(category =>
    Array.from({ length: 5 }, (_, i) => ({
      id: `${region}-${category}-${i + 1}`,        
      src: `image_${region}_${category}_${i + 1}.jpg`,
      region,
      category,
    }))
  )
);


const ImageGallery = () => {
  const location = useLocation();
  const scrollRef = useRef(null);

  const [selectedRegion, setSelectedRegion] = useState(location.state?.selectedRegion || '');
  const [selectedCategory, setSelectedCategory] = useState(location.state?.selectedCategory || '');
  const [expanded, setExpanded] = useState(false);
  const [likedImages, setLikedImages] = useState({});
  const IMAGES_PER_PAGE = 4;

  const filteredImages = imageData.filter(img =>
    (!selectedRegion || img.region === selectedRegion) &&
    (!selectedCategory || img.category === selectedCategory)
  );

  const visibleImages = expanded ? filteredImages : filteredImages.slice(0, IMAGES_PER_PAGE);
  const hasMore = filteredImages.length > IMAGES_PER_PAGE;

  const toggleExpanded = () => setExpanded(prev => !prev);
  const toggleLike = (id) => {
    const already = likedImages[id];
    if (already) {
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
    <div className={styles.gallerycontainer}>
      <h2 className={styles.gallerytitle}>이미지로 보기</h2>

      <div className={styles.regionwrapper}>
        <div className={styles.regioncontainer}>
          {regions.map(region => (
            <button
              key={region}
              className={`${styles.regionbtn} ${selectedRegion === region ? styles.regionbtnactive : ''}`}
              onClick={() => setSelectedRegion(region)}
            >
              {region}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.categorycontainer}>
        <div className={styles.categorybuttons}>
          {categories.map(cat => (
            <button
              key={cat}
              className={`${styles.menubtn} ${selectedCategory === cat ? styles.menubtnactive : ''}`}
              onClick={() => setSelectedCategory(cat === selectedCategory ? '' : cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filteredImages.length === 0 ? (
        <p style={{ textAlign: 'center', marginTop: 40, fontSize: 18, color: '#666' }}>
          해당 이미지가 없습니다.
        </p>
      ) : (
        <>
          <div className={styles.imagegrid}>
            {visibleImages.map(img => (
              <div key={img.id} className={styles.imagecard}>
                <img src={img.src} alt={`${img.region} ${img.category}`} className={styles.imagecardimg} />
                <div className={styles.imagefooter}>
                  <p>{img.region} - {img.category}</p>
                  <span
                    className={`${styles.hearticon} ${likedImages[img.id] ? styles.hearticonliked : ''}`}
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
              <button onClick={toggleExpanded} className={styles.loadmorebtn}>
                {expanded ? '접기' : '더보기'}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ImageGallery;
