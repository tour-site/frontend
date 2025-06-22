// FestivalFilter.jsx
import React from 'react';
import '../assets/css/Filter.css';

const FestivalFilter = ({ filters, setFilters, onSearch, onReset }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="filter-bar">
      <select name="season" value={filters.season} onChange={handleChange}>
        <option value="">시기</option>
        <option value="A">개최중</option>
        <option value="B">개최예정</option>
        <option value="01">01월</option>
        <option value="02">02월</option>
        <option value="03">03월</option>
        <option value="04">04월</option>
        <option value="05">05월</option>
        <option value="06">06월</option>
        <option value="07">07월</option>
        <option value="08">08월</option>
        <option value="09">09월</option>
        <option value="10">10월</option>
        <option value="11">11월</option>
        <option value="12">12월</option>
      </select>

      <select name="region" value={filters.region} onChange={handleChange}>
        <option value="">지역</option>
        <option value="서울">서울</option>
        <option value="인천">인천</option>
        <option value="강원특별자치도">강원특별자치도</option>
        <option value="제주특별자치도">제주특별자치도</option>
        {/* 필요 시 추가 */}
      </select>

      <select name="category" value={filters.category} onChange={handleChange}>
        <option value="">카테고리</option>
        <option value="여름">여름</option>
        <option value="야행">야행</option>
        <option value="전통문화">전통문화</option>
        <option value="문화예술">문화예술</option>
        <option value="야경">야경</option>
        <option value="힐링">힐링</option>
      </select>

      <button className="reset-btn" onClick={onReset}><span>초기화</span></button>
      <button className="search-btn" onClick={onSearch}><span>검색</span></button>
    </div>
  );
};

export default FestivalFilter;
