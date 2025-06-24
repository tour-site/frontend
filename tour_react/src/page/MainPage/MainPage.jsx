import React from 'react';
import { useNavigate } from 'react-router-dom';
import ImageSlider from '../../components/ImageSlider/ImageSlider'; // 경로 맞게 조정
import styles from './MainPage.module.css';


const festivals = [
  {
    id: 1,
    name: "진주 유등축제",
    location: "경상남도 진주시",
    imageUrl: "https://www.jeonmae.co.kr/news/photo/202210/917936_608653_5327.jpg",
  },
  {
    id: 2,
    name: "강릉 단오제",
    location: "강원도 강릉시",
    imageUrl: "https://flexible.img.hani.co.kr/flexible/normal/970/647/imgdb/original/2024/0604/20240604502490.jpg",
  },
  {
    id: 3,
    name: "부산 불꽃축제",
    location: "부산광역시",
    imageUrl: "https://i.namu.wiki/i/GWkA8XibIU1diA9DhHh3boGKvqxIVeLxDX-JEYD-TDExaLq1EnWL3ZPpMQL9PmuV8c-4OCQ2RKoLNwE3nlWizQ.webp",
  },
];

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.mainpage}>
      <section className={styles.imageslider}>
        <h2>추천 여행지</h2>
        <ImageSlider />
      </section>

      <section className={styles.previewsection}>
        <h2>현재 진행 중인 축제</h2>
        <ul className={styles.cardlist}>
          <li className={styles.card}>부산 불꽃축제</li>
          <li className={styles.card}>진주 유등축제</li>
          <li className={styles.card}>강릉 단오제</li>
        </ul>
        <div className={styles.buttoncontainer}>
          <button onClick={() => navigate('/festival')} className={styles.morebtn}>더보기</button>
        </div>
      </section>

      <section className={styles.previewsection}>
        <h2>여행 코스 추천</h2>
        <ul className={styles.cardlist}>
          <li className={styles.card}>서울 1일 관광코스</li>
          <li className={styles.card}>전주 한옥마을 코스</li>
          <li className={styles.card}>부산 바다길 코스</li>
        </ul>
        <div className={styles.buttoncontainer}>
          <button onClick={() => navigate('/recommend')} className={styles.morebtn}>더보기</button>
        </div>
      </section>
    </div>
  );
};

export default MainPage;
