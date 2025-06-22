import React, { useState } from 'react';
import FestivalFilter from './FestivalFilter';
import FestivalList from './FestivalList';
import FestivalBlind from './FestivalBlind';

const allFestivals = [
  {
    title: "무릉별유천지 라벤더축제",
    date: "2025.06.14 ~ 2025.06.22",
    location: "강원특별자치도 동해시",
    image: "https://kfescdn.visitkorea.or.kr/kfes/upload/contents/db/300_848e50c9-b824-4683-a028-2809a5ec23bb_1.JPG",
    season: "06",
    region: "강원특별자치도",
    category: "자연",
    link: '/festival/labenda'
  },
  {
    title: "보름왓 메밀축제",
    date: "2025.06.18 ~ 2025.07.05",
    location: "제주특별자치도 서귀포시",
    image: "https://imgssl.ezday.co.kr/cache/board/2016/06/08/32a600ce518522b2f2d45a37d6ef2a6c.jpg",
    season: "06",
    region: "제주특별자치도",
    category: "힐링",
    link: '/festival/memil'
  },
];

const FestivalPage = () => {
  const [filters, setFilters] = useState({
    season: '',
    region: '',
    category: '',
  });

  const [filteredFestivals, setFilteredFestivals] = useState(allFestivals);
  const [tab, setTab] = useState('축제일순');

  const handleSearch = () => {
    const filtered = allFestivals.filter((f) =>
      (!filters.season || f.season === filters.season) &&
      (!filters.region || f.region === filters.region) &&
      (!filters.category || f.category === filters.category)
    );
    setFilteredFestivals(filtered);
    setTab('축제일순');
  };

  const handleReset = () => {
    setFilters({ season: '', region: '', category: '' });
    setFilteredFestivals(allFestivals);
    setTab('축제일순');
  };

  const handleTabClick = (newTab) => {
    setTab(newTab);

    if (newTab === '축제일순') {
      setFilteredFestivals(allFestivals);
    } else if (newTab === '거리순') {
      setFilteredFestivals([]);
    } else if (newTab === '인기순') {
      const sorted = [...allFestivals].sort((a, b) => a.title.localeCompare(b.title));
      setFilteredFestivals(sorted);
    }
  };

  return (
    <div>
      <FestivalFilter
        filters={filters}
        setFilters={setFilters}
        onSearch={handleSearch}
        onReset={handleReset}
      />
      <FestivalBlind count={filteredFestivals.length} />
      <FestivalList
        data={filteredFestivals}
        onTabClick={handleTabClick}
        activeTab={tab}
      />
    </div>
  );
};

export default FestivalPage;
