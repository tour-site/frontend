// 📁 src/pages/Map.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Place.css';
import BusanMapSvg from '../components/BusanMapSvg';
import places from '../assets/js/places';

const idMap = {
  "Haeundae-gu": "Haeundae",
  "Gijang-gun": "Gijang",
  // 필요한 지역 더 추가 가능
};

const Map = () => {
  const [selectedGuList, setSelectedGuList] = useState([]);
  const navigate = useNavigate();

  const renderCards = () => {
    const mappedSelectedList = selectedGuList.map(guId => idMap[guId]);

    return places
      .filter((place) => mappedSelectedList.includes(place.gu))
      .map((place) => (
        <div
          key={place.id}
          className="tour-list"
          onClick={() => navigate(`/detail/${place.id}`)}
          style={{ cursor: 'pointer' }}
        >
          <img src={place.image[0]} alt={place.name} width="100%" />
          <h4>{place.name}</h4>
          <p>{place.subtitle}</p>
        </div>
      ));
  };

  return (
    <div className="place-list">
      <h2 className="title">지도로 보기</h2>

      <div className="middle-box">
        <div className="map-card">
          <BusanMapSvg
            selectedGuList={selectedGuList}
            setSelectedGuList={setSelectedGuList}
          />
        </div>

        <div className="tour-card">
          <p>관광지 리스트</p>
          <div className="tour-grid">
            {renderCards()}
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
