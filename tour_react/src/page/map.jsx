import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./css/map.css";

function Map() {
  const [message, setMessage] = useState('');
  const [map, setMap] = useState(null);
  const [category, setCategory] = useState('food');
  const [places, setPlaces] = useState([]);

  // 백엔드 연결 테스트
  useEffect(() => {
    axios.get('http://localhost:8100/api/map/ping')
      .then(res => setMessage(res.data))
      .catch(err => setMessage('에러 발생: ' + err.message));
  }, []);

  // 카카오 지도 스크립트 로드 후 지도 초기화
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://dapi.kakao.com/v2/maps/sdk.js?appkey=d56765b0330e2028d876ea067e7cc079&autoload=false&libraries=services";
    script.async = true;
    script.onload = () => {
      if (window.kakao && window.kakao.maps) {
        window.kakao.maps.load(() => {
          const container = document.getElementById("map");
          const options = {
            center: new window.kakao.maps.LatLng(35.1796, 129.0756),
            level: 5,
          };
          const map = new window.kakao.maps.Map(container, options);
          setMap(map);
        });
      } else {
        console.error("kakao.maps 로드 실패 - window.kakao가 없습니다");
      }
    };
    script.onerror = () => {
      console.error("카카오 지도 SDK 로드 실패");
    };
    document.head.appendChild(script);
  }, []);

  // 페이징
  const [page, setPage] = useState(1); 
  const [isEnd, setIsEnd] = useState(false);
  const [markers, setMarkers] = useState([]);

  // 카테고리에 따라 장소 데이터 불러오기
  useEffect(() => {
  if (!map) return;
    axios
      .get(`http://localhost:8100/api/map?category=${category}&page=${page}`)
      .then(res => {
        setPlaces(res.data.places || res.data); // 백엔드가 리스트만 주면 그냥 res.data
        setIsEnd(res.data.isEnd || false);      // 백엔드가 isEnd 보내주는 경우
      })
      .catch(err => console.error(err));
  }, [category, map, page]);

  useEffect(() => {
    setPage(1); // 카테고리 바뀌면 1페이지로 초기화
  }, [category]);

  // 마커 표시
  useEffect(() => {
    if (!map || places.length === 0) return;
    
    // 기존 마커 제거
    markers.forEach(marker => marker.setMap(null));

    const bounds = new window.kakao.maps.LatLngBounds();
    const newMarkers = [];

    places.forEach(place => {
      const position = new window.kakao.maps.LatLng(place.lat, place.lng);
      const marker = new window.kakao.maps.Marker({
        position,
        map,
        title: place.name,
      });
      bounds.extend(position);
      newMarkers.push(marker);
    });

    setMarkers(newMarkers);
    map.setBounds(bounds);
  }, [places]);

  return (
    <div className="map-body">
      <div className="map-title">지도로 보기</div>
      <div className="map-main">
        <div className="main-top">
          <select
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            <option value="food">음식점</option>
            <option value="stay">숙소</option>
          </select>
        </div>
        <div className="main-map">
          <div id="map" className="map"></div>
          <div className="list">
            <ul>
              {places.map((p, i) => (
                <li key={i}>{p.name}</li>
              ))}
            </ul>
            <div className="pagination">
              <button onClick={() => setPage(prev => Math.max(1, prev - 1))} disabled={page === 1}>
                이전
              </button>
              <span style={{ margin: '0 10px' }}>{page} 페이지</span>
              <button onClick={() => setPage(prev => prev + 1)} disabled={isEnd}>
                다음
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;