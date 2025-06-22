// FestivalDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const allFestivals = [
  {
    title: "무릉별유천지 라벤더축제",
    date: "2025.06.14 ~ 2025.06.22",
    location: "강원특별자치도 동해시",
    image: "https://kfescdn.visitkorea.or.kr/kfes/upload/contents/db/300_848e50c9-b824-4683-a028-2809a5ec23bb_1.JPG",
    season: "06",
    region: "강원특별자치도",
    category: "자연",
  },
  {
    title: "보름왓 메밀축제",
    date: "2025.06.18 ~ 2025.07.05",
    location: "제주특별자치도 서귀포시",
    image: "https://imgssl.ezday.co.kr/cache/board/2016/06/08/32a600ce518522b2f2d45a37d6ef2a6c.jpg",
    season: "06",
    region: "제주특별자치도",
    category: "힐링",
  },
];

const FestivalDetail = () => {
  const { id } = useParams();
  const festival = allFestivals[parseInt(id)];

  if (!festival) return <p>해당 축제를 찾을 수 없습니다.</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>{festival.title}</h2>
      <img src={festival.image} alt={festival.title} style={{ maxWidth: '600px' }} />
      <p><strong>일정:</strong> {festival.date}</p>
      <p><strong>장소:</strong> {festival.location}</p>
      <p><strong>카테고리:</strong> {festival.category}</p>
      <p><strong>지역:</strong> {festival.region}</p>
      <p><strong>계절:</strong> {festival.season}</p>
    </div>
  );
};

export default FestivalDetail;
