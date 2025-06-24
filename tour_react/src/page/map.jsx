// 📁 src/pages/map.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Map.css';
import '../assets/css/Category.css';
import BusanMapSvg from '../components/BusanMapSvg.jsx';
import BarLineChar from './BarLineChart.jsx';
import DistrictCategoryChart from './InfraPieChart.jsx';

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

const Map = () => {
  const [selectedRegions, setSelectedRegions] = useState(['해운대구']);
  const [selectedCategory, setSelectedCategory] = useState('여행지');
  const [placeList, setPlaceList] = useState([]);
  const navigate = useNavigate();

  const [year, setYear] = useState(2024);
  const [month, setMonth] = useState(12);

  const [districtList, setDistrictList] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState('부산진구');

  useEffect(() => {
    fetch('/api/infra/districts')
      .then(res => res.json())
      .then(setDistrictList)
      .catch(err => console.error("구 목록 불러오기 실패:", err));
  }, []);

  useEffect(() => {
    const fetchAll = async () => {
      let all = [];
      for (const region of selectedRegions) {
        const endpoint = categoryApiMap[selectedCategory];
        const res = await fetch(`/api/${endpoint}?city=${region}`);
        const data = await res.json();
        const result = data.data || data;
        if (Array.isArray(result)) all = [...all, ...result];
      }
      setPlaceList(all);
    };

    if (selectedRegions.length > 0 && selectedCategory) fetchAll();
    else setPlaceList([]);
  }, [selectedRegions, selectedCategory]);

  const years = Array.from({ length: 20 }, (_, i) => 2005 + i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);

  const handleRegionClick = (region) => {
    setSelectedRegions(prev =>
      prev.includes(region)
        ? prev.filter(r => r !== region)
        : [...prev, region]
    );
  };

  const clearSelectedRegions = () => {
    setSelectedRegions([]);
  };

  const handleClick = (id) => {
    const category = categoryApiMap[selectedCategory]; // '맛집' → 'foods'
    if (!category) return; // 선택 안 된 경우 방어 코드
    navigate(`/detail/${category}/${id}`);
  };

  const handleMoreClick = () => {
    navigate('/image-gallery', {
      state: { selectedRegions, selectedCategory }  // 선택된 값 전달
    });
  };

  return (
    <div className="place-list">
      <h2 className="title">지도로 보기</h2>

      {/* 카테고리 버튼 */}
      <div className="categorybox">
        <div className="region-wrapper">
          <div className="region-container">
            {regions.map((region) => (
              <button
                key={region}
                className={`region-btn ${selectedRegions.includes(region) ? 'active' : ''}`}
                onClick={() => handleRegionClick(region)}
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
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 지도 + 카드 */}
      <div className="middle-box">
        <div className="map-card">
          <BusanMapSvg
            selectedGuList={selectedRegions}
            setSelectedGuList={setSelectedRegions}
          />
          <div>
            <button className="allclean-btn" onClick={clearSelectedRegions}>전체 해제</button>
          </div>
        </div>

        <div className="tour-card">
          <ul className="tour-grid">
            {placeList.length === 0 ? (
              <p>선택한 조건에 맞는 장소가 없습니다.</p>
            ) : (
              placeList.slice(0, 4).map((place) => (
                <li
                  key={place.id}
                  className="tour-list"
                  onClick={() => handleClick(place.id)}
                >
                  <img src={place.tour_img || place.food_img || '/img/noimg.png'} alt={place.name} className="card_img" />
                  <p className='tour_title'>{place.name}</p>
                  {/* <p className='tour_add'>{place.tour_add}</p> */}
                </li>
              ))
            )}
          </ul>
          {placeList.length > 4 && (
            <button className="btn-more" onClick={handleMoreClick}>
              더보기
            </button>
          )}
        </div>
      </div>

      {/* 시각화 영역 */}
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