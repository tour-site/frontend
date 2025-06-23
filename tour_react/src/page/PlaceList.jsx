import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../aesets/css/PlaceList.css';

const regions = [
  '부산진구', '해운대구', '수영구', '동래구',
  '영도구', '중구', '서구', '남구', '북구',
  '사하구', '금정구', '강서구', '기장군'
];

const categories = ['여행지', '맛집', '숙소'];

const imageData = regions.flatMap((region) =>
  categories.flatMap((category) =>
    Array.from({ length: 5 }, (_, i) => ({
      id: `${region}-${category}-${i + 1}`,
      src: `image_${region}_${category}_${i + 1}.jpg`,
      region,
      category,
      name: `${region}의 ${category} ${i + 1}번`,
      location: `${region} / ${category}`
    }))
  )
);

const PlaceList = () => {
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const navigate = useNavigate();

  const filteredPlaces = imageData.filter(place => {
    return (
      (selectedRegion ? place.region === selectedRegion : true) &&
      (selectedCategory ? place.category === selectedCategory : true)
    );
  });

  const handleMoreClick = () => {
    navigate('/image-gallery', {
      state: { selectedRegion, selectedCategory }  // 선택된 값 전달
    });
  };

  return (
    <div className="place-list">
      <h2 className="title">지도로 보기</h2>

      {/* 지역구 버튼 */}
      <div className="region-wrapper">
        <div className="region-container">
          {regions.map((region) => (
            <button
              key={region}
              className={`filter-btn ${selectedRegion === region ? 'active' : ''}`}
              onClick={() => setSelectedRegion(region === selectedRegion ? '' : region)}
            >
              {region}
            </button>
          ))}
        </div>
      </div>

      {/* 카테고리 버튼 */}
      <div className="category-container">
        <div className="category-buttons">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat === selectedCategory ? '' : cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 리스트 카드 */}
      <div className="middle-box">
        <div className="map-card">
          <p>지도</p>
        </div>

        <div className="tour-card">
          <div className="tour-grid">
            {filteredPlaces.length === 0 ? (
              <p>선택한 조건에 맞는 관광지가 없습니다.</p>
            ) : (
              filteredPlaces.slice(0, 4).map((place) => (
                <div key={place.id} className="tour-list">
                  <h4>{place.name}</h4>
                  <p>{place.location}</p>
                  <img src={place.src} alt={place.name} width="100%" />
                </div>
              ))
            )}
          </div>

          {/* 더보기 버튼 */}
          {filteredPlaces.length > 4 && (
            <button className="btn-more" onClick={handleMoreClick}>
              더보기
            </button>
          )}
        </div>
      </div>

      <div className="data-box">
        <p>통계 시각화</p>
      </div>
    </div>
  );
};

export default PlaceList;
