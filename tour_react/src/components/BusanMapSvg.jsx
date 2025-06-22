// 📁 src/components/BusanMapSvg.jsx
import React, { useEffect, useRef } from 'react';
import Logo from '../assets/BusanMap.svg?react';

const idMap = {
  "Haeundae-gu": "Haeundae",
  "Gijang-gun": "Gijang",
};

export default function BusanMapSvg({ selectedGuList, setSelectedGuList }) {
  const svgRef = useRef(null);

  const handleGuClick = (e) => {
    let id = null;
    if (e.target.tagName === 'path') id = e.target.id;
    if (!id && e.target.dataset.id) id = e.target.dataset.id;

    if (id) {
      setSelectedGuList(prev =>
        prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
      );
    }
  };

  useEffect(() => {
    if (!svgRef.current) return;
    const paths = svgRef.current.querySelectorAll('path');

    paths.forEach((path) => {
      path.style.color = selectedGuList.includes(path.id) ? '#CCCCCC' : '#FFFFFF';
    });
  }, [selectedGuList]);

  return (
    <div ref={svgRef} onClick={handleGuClick}>
      <Logo style={{ width: '100%' }} />
    </div>
  );
}
