import React, { useState, useEffect } from 'react'; // useEffect 추가
import { useNavigate } from 'react-router-dom';
import '../assets/css/Map.css';
import '../assets/css/Category.css'
// import '../assets/css/Modal.css';
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
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [placeList, setPlaceList] = useState([]);
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

  useEffect(() => {
    if (selectedRegion && selectedCategory) {
      const endpoint = categoryApiMap[selectedCategory];
      fetch(`/api/${endpoint}?city=${selectedRegion}`)
        .then((res) => res.json())
        .then((data) => {
          const result = data.data || data; // 배열 바로 또는 객체.data 형태 대응
          if (Array.isArray(result)) {
            setPlaceList(result);
          } else {
            console.error("placeList 응답이 배열이 아님:", result);
            setPlaceList([]);
          }
        })
        .catch((err) => {
          console.error("데이터 로드 실패:", err);
          setPlaceList([]);
        });
    } else {
      setPlaceList([]);
    }
  }, [selectedRegion, selectedCategory]);

  const getRandomItems = (arr, n) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
  };

  const handleClick = (id) => {
    const category = categoryApiMap[selectedCategory]; // '맛집' → 'foods'
    if (!category) return; // 선택 안 된 경우 방어 코드
    navigate(`/detail/${category}/${id}`);
  };

  return (
    <div className="place-list">
      <h2 className="title">지도로 보기</h2>

      {/* 카테고리 */}
      <div className="categorybox">
        <div className="region-wrapper">
          <div className="region-container">
            {regions.map((region) => (
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
      
      {/* 리스트 카드 */}
      <div className="middle-box">
        <div className="map-card">
          <p>지도</p>
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
                  style={{ cursor: 'pointer', listStyle: 'none' }}
                >
                  <img src={place.tour_img || '/img/noimg.png'} alt={place.name} className="card_img" />
                  <p className='tour_title'>{place.name}</p>
                  {/* <p className='tour_add'>{place.tour_add}</p> */}
                </li>
              ))
            )}
          </ul>
          {placeList.length > 4 && (
              <button className="btn-more" onClick={() => navigate('/image-gallery', {
                state: { selectedRegion, selectedCategory }
              })}>
                더보기
              </button>
          )}
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
