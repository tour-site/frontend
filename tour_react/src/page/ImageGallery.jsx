import { useState , useRef } from "react";

import '../assets/css/ImageGallery.css';

const categories = [
  '전체',
  '부산진구', '해운대구', '수영구', '동래구',
  '영도구', '중구', '서구', '남구', '북구',
  '사하구', '금정구', '강서구', '기장군'
];

const regionsOnly = categories.filter(cat => cat !== '전체');

const imageData = regionsOnly.flatMap((region) =>
  Array.from({ length: 10 }, (_, i) => ({
    id: region + '-' + (i + 1),
    src: `image_${region}_${i + 1}.jpg`,
    region: region,
  }))
);

const ImageGallery = () => {
  const [selectedRegion, setSelectedRegion] = useState('전체');
  const [expandedRegions, setExpandedRegions] = useState({}); // { '부산진구': true/false, ... }
  const scrollRef = useRef(null);

  const IMAGES_PER_PAGE = 4;

  const handleScroll = (direction) => {
    const { current } = scrollRef;
    if (!current) return;
    current.scrollBy({ left: direction === 'left' ? -200 : 200, behavior: 'smooth' });
  };

  const handleRegionChange = (region) => {
    setSelectedRegion(region);
  };

  const filteredImages = selectedRegion === '전체'
    ? imageData
    : imageData.filter(img => img.region === selectedRegion);

  const isExpanded = expandedRegions[selectedRegion] || false;
  const visibleCount = isExpanded ? filteredImages.length : IMAGES_PER_PAGE;
  const visibleImages = filteredImages.slice(0, visibleCount);

  const hasMore = filteredImages.length > IMAGES_PER_PAGE;

  const toggleExpanded = () => {
    setExpandedRegions(prev => ({
      ...prev,
      [selectedRegion]: !prev[selectedRegion]
    }));
  };

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">이미지로 보기</h2>

      <div className="category-slider-wrapper">
        <button className="arrow-btn left" onClick={() => handleScroll('left')} aria-label="왼쪽 스크롤">&lt;</button>

        <div className="menu-box" ref={scrollRef}>
          {categories.map((region) => (
            <button
              key={region}
              className={`menu-btn ${selectedRegion === region ? 'active' : ''}`}
              onClick={() => handleRegionChange(region)}
              aria-pressed={selectedRegion === region}
            >
              {region}
            </button>
          ))}
        </div>

        <button className="arrow-btn right" onClick={() => handleScroll('right')} aria-label="오른쪽 스크롤">&gt;</button>
      </div>

      {selectedRegion && (
        <>
          {visibleImages.length === 0 ? (
            <p style={{ textAlign: 'center', marginTop: 40, fontSize: 18, color: '#666' }}>
              해당 이미지가 없습니다.
            </p>
          ) : (
            <>
              <div className="image-grid">
                {visibleImages.map((img) => (
                  <div key={img.id} className="image-card">
                    <img src={img.src} alt={`부산 ${img.region} 지역 이미지 ${img.id}`} />
                    <p>{img.region}</p>
                  </div>
                ))}
              </div>

              {hasMore && (
                <div style={{ textAlign: 'center', marginTop: 20 }}>
                  <button onClick={toggleExpanded} className="load-more-btn">
                    {isExpanded ? '접기' : '더보기'}
                  </button>
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ImageGallery;