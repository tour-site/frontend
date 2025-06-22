import React from 'react';
import FestivalCard from './FestivalCard';

const festivalData = [
  {
    title: '휴애리 여름 수국축제',
    date: '2025.06.13 ~ 2025.07.27',
    location: '제주특별자치도 서귀포시',
    image: 'https://api.cdn.visitjeju.net/photomng/imgpath/202204/28/bb6047a6-80b8-4c28-b0aa-5c16a168841f.jpg',
    link: '/festival/hyuari',
  },
  {
    title: '서귀포 유채꽃축제',
    date: '2025.07.04 ~ 2025.10.22',
    location: '제주특별자치도 제주시',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZxjRr-BxbL1QVS_dF69u_spQs9t1YAjP5rw&s',
    link: '/festival/seogwipo',
  },
  {
    title: '부여 서동연꽃축제',
    date: '2025.07.04 ~ 2025.07.06',
    location: '충청남도 부여군',
    image: 'https://www.ktsketch.co.kr/news/photo/202206/7088_35465_519.jpg',
    link: '/festival/buyeo',
  }
];

const FestivalBlind = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', padding: '16px', overflowX: 'auto'  }}>
      {festivalData.map((festival, index) => (
        <FestivalCard key={index} festival={festival} />
      ))}
    </div>
  );
};

export default FestivalBlind;
