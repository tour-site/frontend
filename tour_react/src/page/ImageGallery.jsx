import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../assets/css/ImageGallery.css";
import "../assets/css/Category.css";

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

const ImageGallery = () => {
  const location = useLocation();
  
  const [selectedRegions, setSelectedRegions] = useState(location.state?.selectedRegions || []);
  const [selectedCategory, setSelectedCategory] = useState(location.state?.selectedCategory || '여행지');
  const [placeList, setPlaceList] = useState([]);
  
  const navigate = useNavigate();

  const handleRegionClick = (region) => {
    setSelectedRegions(prev =>
      prev.includes(region)
        ? prev.filter(r => r !== region)
        : [...prev, region]
    );
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleClick = (item) => {
    const category = categoryApiMap[selectedCategory];
    navigate(`/detail/${category}/${item.id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      const categoryKey = categoryApiMap[selectedCategory];
      if (!categoryKey) return;

      const targetRegions = selectedRegions.length > 0 ? selectedRegions : regions;

      try {
        let all = [];

        for (const region of targetRegions) {
          const res = await fetch(`/api/${categoryKey}?city=${region}`);
          const data = await res.json();
          const result = data.data || data;
          if (Array.isArray(result)) all = [...all, ...result];
        }
        setPlaceList(all);
      } catch (error) {
        console.error("데이터 불러오기 실패:", error);
        setPlaceList([]);
      }
    };

    fetchData();
  }, [selectedRegions, selectedCategory]);


  return (
    <div className="gallery-container">
      <h2 className="gallery-title">이미지로 보기</h2>

      <div className="categorybox">
        <div className="region-wrapper">
          <div className="region-container">
            {regions.map(region => (
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
                onClick={() => handleCategoryClick(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="listBox">
        {placeList.length === 0 ? (
          <p style={{ textAlign: 'center', marginTop: 40, fontSize: 18, color: '#666' }}>
            페이지 로딩중...
          </p>
        ) : (
          <div className="image-grid">
            {placeList.map(item => (
              <div key={item.id} className="image-card" onClick={() => handleClick(item)}>
                <img src={item.tour_img || item.food_img || '/img/noimg.png'} alt={item.name} />
                <p className="image-title">{item.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageGallery;
