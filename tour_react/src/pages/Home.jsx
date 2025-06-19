// 📁 src/pages/Home.jsx
import React, { useState } from 'react';
import BusanMapSvg from '../components/BusanMapSvg.jsx';

const guImageData = {
  busanArea16: [
    { src: '/img/img1.jpg', title: '해운대 해수욕장' },
    { src: '/img/img2.jpg', title: '동백섬' },
  ],
  busanArea17: [
    { src: '/img/img3.jpg', title: '광안리 해변' },
  ],
};

function Home() {
  const [selectedGu, setSelectedGu] = useState(null);

  const handleGuClick = (e) => {
    const path = e.target.closest('path');
    if (path && path.id) {
      setSelectedGu(path.id);
    }
  };

  const renderCards = () => {
    if (!selectedGu || !guImageData[selectedGu]) return null;

    return (
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px' }}>
        {guImageData[selectedGu].map((item, index) => (
          <div key={index} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '10px', width: '200px', background: '#fff' }}>
            <img src={item.src} alt={item.title} style={{ width: '100%', borderRadius: '4px' }} />
            <h4 style={{ marginTop: '10px' }}>{item.title}</h4>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>🗺 부산 지역 선택</h1>
      <div onClick={handleGuClick}>
        <BusanMapSvg />
      </div>
      {renderCards()}
    </div>
  );
}

export default Home;
