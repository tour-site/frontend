import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Component/ImageSlider.css';

const images = [
  {
    src: 'https://mediahub.seoul.go.kr/uploads/mediahub/2024/07/AxsiJwjuNtecjRGqkGzHYCTGlwRIcwyG.jpg',
    subtitle: '청량감 가득 넘치는 여행지 가볼래?',
    detailPath: '/detail/1',
  },
  {
    src: 'https://cdn.myportfolio.com/35d5cde5-c5ca-4160-896e-45dcc7d7c744/7bf1e6e4-e749-4941-a1f9-1223e90e696f_rw_1920.jpg?h=dc77d6133c1de6598971e02f3c24d76c',
    subtitle: '푸른 숲에서의 힐링 타임',
    detailPath: '/detail/2',
  },
  {
    src: 'https://img3.yna.co.kr/photo/yna/YH/2022/11/29/PYH2022112907350000500_P4.jpg',
    subtitle: '역사와 만나는 순간',
    detailPath: '/detail/3',
  },
];

const ImageSlider = () => {
  const slideCount = images.length;
  const [currentIndex, setCurrentIndex] = useState(1); // 1부터 시작 (0은 마지막 클론)
  const [isTransitioning, setIsTransitioning] = useState(true);
  const navigate = useNavigate();
  const sliderTrackRef = useRef(null);

  // 수정: 첫 클론은 images[0] 이어야 함
  const cloneSlides = [images[slideCount - 1], ...images, images[0]];

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = () => {
    if (currentIndex >= slideCount + 1) return;
    setCurrentIndex((prev) => prev + 1);
    setIsTransitioning(true);
  };

  const prevSlide = () => {
    if (currentIndex <= 0) return;
    setCurrentIndex((prev) => prev - 1);
    setIsTransitioning(true);
  };

  const handleTransitionEnd = () => {
    if (currentIndex === slideCount + 1) {
      setIsTransitioning(false);
      setCurrentIndex(1);
    }
    if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(slideCount);
    }
  };

  return (
    <div className="slider-container">
      <div className="slider-text">
        <span className="badge">대한민국구석구석 x TMAP</span>
        <h2>{cloneSlides[currentIndex].subtitle}</h2>
        <button
          className="detail-btn"
          onClick={() => navigate(cloneSlides[currentIndex].detailPath)}
        >
          자세히 보기
        </button>
      </div>
      <div className="slider-visual">
        <div
          className="slider-track"
          ref={sliderTrackRef}
          style={{
            width: `${cloneSlides.length * 100}%`,
            transform: `translateX(-${(100 / cloneSlides.length) * currentIndex}%)`,
            transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {cloneSlides.map((img, idx) => (
            <div
              className="slide"
              key={idx}
              style={{ width: `${100 / cloneSlides.length}%` }}
            >
              <img src={img.src} alt={`slide-${idx}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;