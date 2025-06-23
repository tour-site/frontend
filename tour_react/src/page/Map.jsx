import React, { useState, useEffect } from 'react'; // useEffect 추가
import { useNavigate } from 'react-router-dom';
import '../assets/css/Map.css';
// import '../assets/css/Modal.css';
import places from '../assets/js/places.js';
import BarLineChar from './BarLineChart.jsx'; 
import DistrictCategoryChart from './InfraPieChart.jsx';

const regions = [
  '강서구', '금정구', '기장군', '남구', '동구',
  '동래구', '부산진구', '북구', '사상구', '사하구',
  '서구', '수영구', '연제구', '영도구', '중구', '해운대구'
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

const Map = () => {
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const navigate = useNavigate();
  /* 년, 월 선택 */
  const [year, setYear] = useState(2024);
  const [month, setMonth] = useState(12);
  /* 구 선택 */
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

      <div className="category-box">
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
      </div>
      
      {/* 리스트 카드 */}
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

          {/* {{filteredPlaces.length > 4 && (
            <button className="btn-more" onClick={handleMoreClick}>
              더보기
            </button>
          )}} */}
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
