// 📁 src/components/BusanMapSvg.jsx
import React from 'react';
import BusanPaths from '../assets/BusanPaths.jsx';

export default function BusanMapSvg() {
  return (
    <svg
      viewBox="0 0 1000 820"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto', maxWidth: '1000px' }}
    >
      {BusanPaths}
    </svg>
  );
}
