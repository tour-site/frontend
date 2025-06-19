// 📁 src/pages/Sag.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

function Sag() {
  const { gu } = useParams();

  return (
    <div style={{ padding: "2rem" }}>
      <h2>{gu}에 대한 추천 여행 정보</h2>
      <p>📍 여기에 {gu} 지역에 대한 데이터 분석 결과와 추천 장소가 들어갑니다.</p>
    </div>
  );
}

export default Sag;
