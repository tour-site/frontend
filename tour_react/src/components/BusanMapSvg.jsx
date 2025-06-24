// 📁 src/components/BusanMapSvg.jsx
import React, { useEffect, useRef } from 'react';
import Logo from '../assets/BusanMap.svg?react';

const idMap = {
  "Haeundae-gu": "해운대구",
  "Gijang-gun": "기장군",
  "Busanjin-gu": "부산진구",
  "Suyeong-gu": "수영구",
  "Dongnae-gu": "동래구",
  "Geumjeong-gu": "금정구",
  "Buk-gu": "북구",
  "Sasang-gu": "사상구",
  "Saha-gu": "사하구",
  "Gangseo-gu": "강서구",
  "Yeonje-gu": "연제구",
  "Nam-gu": "남구",
  "Seo-gu": "서구",
  "Jung-gu": "중구",
  "Dong-gu": "동구",
  "Yeongdo-gu": "영도구",
};

export default function BusanMapSvg({ selectedGuList, setSelectedGuList, onRegionSelect }) {
  const svgRef = useRef(null);

  const handleGuClick = (e) => {
    let id = e.target.id || e.target.dataset.id;
    if (id && idMap[id]) {
      const regionName = idMap[id];
      setSelectedGuList(prev =>
        prev.includes(regionName)
          ? prev.filter(item => item !== regionName)
          : [...prev, regionName]
      );
      onRegionSelect(regionName);
    }
  };

  useEffect(() => {
    if (!svgRef.current) return;
    const paths = svgRef.current.querySelectorAll('path');

    paths.forEach((el) => {
      const regionName = idMap[el.id || el.dataset.id];
      if (!regionName) return;

      el.style.fill = selectedGuList.includes(regionName) ? '#CCCCCC' : '#FFFFFF';
      el.style.cursor = 'pointer';
      el.style.pointerEvents = 'all';
      el.style.transition = 'fill 0.2s ease';

      el.addEventListener('mouseenter', () => {
        if (!selectedGuList.includes(regionName)) {
          el.style.fill = '#EEEEEE';
        }
      });
      el.addEventListener('mouseleave', () => {
        if (!selectedGuList.includes(regionName)) {
          el.style.fill = '#FFFFFF';
        }
      });
    });

    return () => {
      paths.forEach((el) => el.replaceWith(el.cloneNode(true)));
    };
  }, [selectedGuList]);

  return (
    <div ref={svgRef} onClick={handleGuClick}>
      <Logo style={{ width: '100%' }} />
    </div>
  );
}
