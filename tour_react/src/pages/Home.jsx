// 📁 src/pages/Home.jsx
import React, { useState, useEffect, useRef } from 'react';
import Logo from "../assets/BusanMap.svg?react";

// ✅ path.id 또는 text.data-id 를 guImageData 키로 매핑할 수 있도록 정의
const idMap = {
  "Haeundae-gu": "Haeundae",
  "Gijang-gun": "Gijang",
  // 필요 시 더 추가
};

const guImageData = {
  Haeundae: [{ src: "/img/img2.jpg", title: '광안리 해변' }],
  Gijang: [{ src: "/img/img1.jpg", title: '해운대 해수욕장' }],
};

function Home() {
  const [selectedGuList, setSelectedGuList] = useState([]);
  const svgRef = useRef(null);

  // ✅ 클릭 핸들러 (path or text → id or data-id 획득)
  const handleGuClick = (e) => {
    let id = null;

    // path 요소 클릭 시
    if (e.target.tagName === 'path') {
      id = e.target.id;
    }

    // text or tspan 요소 클릭 시 (data-id를 사용)
    if (!id && e.target.dataset.id) {
      id = e.target.dataset.id;
    }

    if (id) {
      // 토글 방식으로 상태 업데이트
      setSelectedGuList(prev =>
        prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
      );
    }
  };

  // ✅ 선택된 path ID를 기준으로 fill 색상 적용
  useEffect(() => {
    if (!svgRef.current) return;
    const paths = svgRef.current.querySelectorAll('path');

    paths.forEach((path) => {
      if (selectedGuList.includes(path.id)) {
        path.style.color = "#CCCCCC"; // 회색
      } else {
        path.style.color = "#FFFFFF"; // 흰색
      }
    });
  }, [selectedGuList]);

  // ✅ 선택된 구에 해당하는 카드 렌더링
  const renderCards = () => {
    return selectedGuList.flatMap((guId) => {
      const mappedId = idMap[guId];
      return guImageData[mappedId]?.map((item, index) => (
        <div key={`${guId}-${index}`} style={{
          border: '1px solid #ccc',
          borderRadius: '8px',
          padding: '10px',
          width: '200px',
          background: '#fff'
        }}>
          <img src={item.src} alt={item.title} style={{ width: '100%', borderRadius: '4px' }} />
          <h4 style={{ marginTop: '10px' }}>{item.title}</h4>
        </div>
      )) || [];
    });
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>🗺 부산 지역 선택</h1>
      <div ref={svgRef} onClick={handleGuClick}>
        <Logo style={{ width: '1000px', marginTop: '20px' }} />
      </div>
      <div style={{
        display: 'flex',
        gap: '20px',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: '20px'
      }}>
        {renderCards()}
      </div>
    </div>
  );
}

export default Home;
