import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Place.css';

const Map = () => {
  return (
    <div className="place-list">
      <h2 className="title">지도로 보기</h2>

      <div className="category-box">
        <label htmlFor="category-select" className="category-title">카테고리</label>
      </div>

      <div className="middle-box">
        <div className="map-card">
          <p>지도</p>
        </div>
        <div className="tour-card">
        <p>관광지 리스트</p>
        <div className="tour-grid">
          {places.slice(0, 2).map((place, index) => (
            <div key={place.id || index} className="tour-list">
              <h4>{place.name}</h4>
              <p>{place.location}</p>
              <img src={place.image} alt={place.name} width="100%" />
            </div>
          ))}
        </div>
      </div>
    </div>

      <div className="data-box">
        <p>통계 시각화</p>
      </div>
    </div>
  );
};

export default Map;
