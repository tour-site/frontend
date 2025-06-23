import React, { useState, useEffect } from 'react'; // useEffect 추가
import { useNavigate } from 'react-router-dom';
import '../assets/css/Place.css';
// import '../assets/css/Modal.css';
import places from '../assets/js/places.js';
import BarLineChar from './BarLineChart.jsx'; 
import DistrictCategoryChart from './InfraPieChart.jsx';

const Map = () => {
  const navigate = useNavigate();
  const [year, setYear] = useState(2024);
  const [month, setMonth] = useState(12);
  const [districtList, setDistrictList] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState('부산진구'); // 변수명 수정

  const years = [];
  for (let y = 2005; y <= 2024; y++) {
    years.push(y);
  }

  const months = Array.from({ length: 12 }, (_, i) => i + 1);

  useEffect(() => {
    fetch('/api/infra/districts')
      .then(res => res.json())
      .then(setDistrictList)
      .catch(err => console.error("구 목록 불러오기 실패:", err));
  }, []);

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
          <ul className="tour-grid">
            {places.slice(0, 2).map((place, index) => (
              <li
                key={place.id || index}
                className="tour-list"
                onClick={() => navigate(`/detail/${place.id}`)}
                style={{ cursor: 'pointer', listStyle: 'none' }}
              >
                <img src={place.image} alt={place.name} className='card_img' />
                <h4>{place.name}</h4>
                <p>{place.location}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="DataBox">
        <div className="DataArea">
          <div className="Data_select">
            <label>
              <select value={year} onChange={(e) => setYear(Number(e.target.value))}>
                {years.map((y) => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select> 년&ensp;
            </label>
            <label>
              <select value={month} onChange={(e) => setMonth(Number(e.target.value))}>
                {months.map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </label> 월
          </div>
          <div className="DataChart">
            <BarLineChar year={year} month={month} />
          </div>
        </div>
        <div className="DataArea">
          <div className="Data_select">
            <label>
              <select value={selectedDistrict} onChange={(e) => setSelectedDistrict(e.target.value)}>
                {districtList.map((d, i) => (
                  <option key={i} value={d}>{d}</option>
                ))}
              </select>
            </label>
          </div>
          <div className="DataChart">
            <DistrictCategoryChart city={selectedDistrict} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
