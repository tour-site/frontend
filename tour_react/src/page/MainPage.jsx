import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageSlider from './ImageSlider'; // 경로 맞게 조정
import '../assets/css/MainPage.css';

/* ---------------- 광고 데이터 ---------------- */
const ads = [
  { color: "purple", 
    alt: "장유",
    title: "자격증 정보와 날짜까지 확인할 수 있는 사이트",
    desc: "자격증을 알아본다면 이 사이트를 추천합니다.",
    imgSrc: "https://cdn-icons-png.flaticon.com/512/5987/5987614.png", 
    link: "http://bjava.iptime.org:8894" },
  { color: "blue", 
    alt: "안밤",
    title: "안전한 밤을 위한 정보, 밤길안전서비스",
    desc: "밤에 안전하게 귀가할 수 있는 정보를 제공합니다.",
    imgSrc: "https://img.hankyung.com/photo/202007/AKR20200727111900004_01_i.jpg", 
    link: "http://bjava.iptime.org:8893" },
  { color: "green", 
    alt: "부산 지역구별로 최저 물가",
    title: "부산 지역구별 최저 물가 정보",
    desc: "부산 지역구별로 최저 물가를 확인할 수 있는 사이트입니다.",
    imgSrc: "https://img.freepik.com/premium-vector/organic-stuff-shape-illustration-pattern-daily-stuff-cute-hand-drawn-illustration_680479-132.jpg",
    link: "http://bjava.iptime.org:8897" },
  { color: "orange", 
    alt: "야~! 모여",
    title: "야~! 모여, 야구를 좋아하는 사람들을 위한 커뮤니티",
    desc: "야구를 좋아하는 사람들을 위한 커뮤니티이자, 야구 정보를 제공하는 사이트입니다.", 
    imgSrc: "https://img.kbs.co.kr/kbs/620/news.kbs.co.kr/data/fckeditor/new/image/2021/03/31/292681617158540124.png",
    link: "http://bjava.iptime.org:8895"}
];

/* ---------------- AdSlider 컴포넌트 ---------------- */
function AdSlider({ items, interval = 5000, height = 200 }) {
  const slideCount = items.length;
  const cloneSlides = [items[slideCount - 1], ...items, items[0]];
  const [idx, setIdx] = useState(1);
  const [on, setOn] = useState(true);
  const trackRef = useRef(null);

  useEffect(() => {
    const t = setInterval(() => {
      setIdx((prev) => (prev >= slideCount + 1 ? prev : prev + 1));
      setOn(true);
    }, interval);
    return () => clearInterval(t);
  }, [interval, slideCount]);

  const handleEnd = () => {
    if (idx === slideCount + 1) {
      setOn(false);
      setIdx(1);
    }
  };

  // 컬러 배너 또는 이미지 렌더링 분기
  const renderSlideContent = (ad) => {
  const content = (
    <div
      className="ad-content"
      style={{
        backgroundColor: ad.color || "#888",
        height: "100%",
        borderRadius: "12px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        color: "#fff",
      }}
    >
      {/* 이미지 영역 */}
      {ad.imgSrc && (
        <div
          className="ad-img"
          style={{
            flex: "0 0 40%",
            height: "100%",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={ad.imgSrc}
            alt={ad.alt}
            style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
          />
        </div>
      )}

      {/* 텍스트 영역 */}
      <div
        className="ad-text"
        style={{
          padding: "1rem",
          flex: "1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "0.5rem",
          fontWeight: "bold",
          textShadow: "0 1px 3px rgba(0,0,0,0.6)",
          textAlign: "center",
        }}
      >
        <h3 style={{ margin: 0, fontSize: "1.5rem" }}>{ad.title || ad.alt}</h3>
        <p style={{ margin: 0, fontWeight: "normal", fontSize: "1rem" }}>
          {ad.desc}
        </p>
      </div>
    </div>
  );

  if (!ad.link) return content;
  return (
    <a href={ad.link} target="_blank" rel="noreferrer" style={{ height: "100%", display: "block" }}>
      {content}
    </a>
  );
};

  return (
    <div className="ad-slider" style={{ height: 200 }}>
      <div
        className="ad-track"
        ref={trackRef}
        style={{
          width: `${cloneSlides.length * 100}%`,
          transform: `translateX(-${(100 / cloneSlides.length) * idx}%)`,
          transition: on ? "transform .6s ease" : "none",
        }}
        onTransitionEnd={handleEnd}
      >
        {cloneSlides.map((ad, i) => (
          <div
            key={i}
            className="ad-slide"
            style={{ width: `${100 / cloneSlides.length}%` }}
          >
            {renderSlideContent(ad)}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- MainPage 컴포넌트 ---------------- */
function MainPage() {
  const navigate = useNavigate();

  return (
    <div className="main-page">
      {/* 여행지 추천 슬라이더 */}
      <section className="image-slider">
        <ImageSlider />
      </section>

      {/* 광고 슬라이더 */}
      <section className="ad-section">
        <h2>💡 광고 & 프로모션</h2>
        <AdSlider items={ads} />  {/* 160 -> 300으로 높이 증가 */}
      </section>
    </div>
  );
}

export default MainPage;
