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

  // ✅ 구 다중 선택
  const handleRegionClick = (region) => {
    setSelectedRegions(prev =>
      prev.includes(region)
        ? prev.filter(r => r !== region)
        : [...prev, region]
    );
  };

  // ✅ 카테고리 단일 선택
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // ✅ 상세페이지 이동
  const handleClick = (item) => {
    const category = categoryApiMap[selectedCategory];
    navigate(`/detail/${category}/${item.id}`);
  };

  // ✅ 데이터 불러오기
  useEffect(() => {
    const fetchData = async () => {
      // 카테고리에 맞는 API endpoint key 얻기
      const categoryKey = categoryApiMap[selectedCategory];
      if (!categoryKey) return; // 카테고리 없으면 API 호출 안 함

      // 선택된 지역이 없으면 전체 지역 목록 사용 (전체 조회)
      const targetRegions = selectedRegions.length > 0 ? selectedRegions : regions;

      try {
        let all = [];
        // 각 지역마다 API 호출하여 데이터를 모음
        for (const region of targetRegions) {
          const res = await fetch(`/api/${categoryKey}?city=${region}`);
          const data = await res.json();
          // API 응답 구조에 따라 data.data 또는 data 자체 사용
          const result = data.data || data;
          if (Array.isArray(result)) all = [...all, ...result];
        }
        setPlaceList(all); // 모든 지역 데이터를 합쳐서 상태에 저장
      } catch (error) {
        console.error("데이터 불러오기 실패:", error);
        setPlaceList([]); // 오류 발생 시 빈 배열로 초기화
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
