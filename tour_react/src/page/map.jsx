import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Place.css';
import '../assets/css/Modal.css';
import places from '../assets/js/places.js';
import BarLineChar from './BarLineChar.jsx'; 

const Map = () => {
  const navigate = useNavigate();

  // 디폴트값 (24년 12월)
  const [year, setYear] = useState(2024);
  const [month, setMonth] = useState(12);

  // 년도 선택
  const years = [];
  for (let y = 2005; y <= 2024; y++) {
    years.push(y);
  }

  // 월 선택
  const months = Array.from({ length: 12 }, (_, i) => i + 1);

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
              <div
                key={place.id || index}
                className="tour-list"
                onClick={() => navigate(`/detail/${place.id}`)}
                style={{ cursor: 'pointer' }}
              >
                <h4>{place.name}</h4>
                <p>{place.location}</p>
                <img src={place.image} alt={place.name} width="100%" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="data-box">
        <div style={{ marginBottom: '1rem' }}>
          <label>
            년도:&nbsp;
            <select value={year} onChange={(e) => setYear(Number(e.target.value))}>
              {years.map((y) => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
          </label>

          <label style={{ marginLeft: '1rem' }}>
            월:&nbsp;
            <select value={month} onChange={(e) => setMonth(Number(e.target.value))}>
              {months.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </label>
        </div>

        <BarLineChar year={year} month={month} />
      </div>
    </div>
  );
};

export default Map;
