import React from 'react';
import { useNavigate } from 'react-router-dom';
import ImageSlider from './ImageSlider'; // 경로 맞게 조정
import '../assets/css/MainPage.css';

/* ---------------- 광고 데이터 ---------------- */
const ads = [
  { src: "https://www.visitbusan.net/uploadImgs/files/cntnts/20231027110749009_oen", alt: "여름 특가 항공권", link: "https://air.example.com" },
  { src: "/ads/ad2.jpg", alt: "렌터카 30% 할인", link: "https://car.example.com" },
  { src: "/ads/ad3.jpg", alt: "호텔 얼리버드", link: "https://hotel.example.com" },
];

//height = 160
/* ---------------- AdSlider 컴포넌트 ---------------- */
function AdSlider({ items, interval = 5000, height = 300}) {
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

  return (
    <div className="ad-slider" style={{ height: 800}}>
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
            {ad.link ? (
              <a href={ad.link} target="_blank" rel="noreferrer">
                <img src={ad.src} alt={ad.alt} />
              </a>
            ) : (
              <img src={ad.src} alt={ad.alt} />
            )}
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
        <AdSlider items={ads} />  
      </section>
    </div>
  );
}

export default MainPage;
