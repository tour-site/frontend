import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../assets/css/Detail.css';

const DetailPage = () => {
  const { category, id } = useParams();
  const [place, setPlace] = useState(null);
  const [error, setError] = useState(null);

  const [activeTab, setActiveTab] = useState("photo");
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [shares, setShares] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    fetch(`/api/${category}/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("데이터를 불러올 수 없습니다.");
        return res.json();
      })
      .then((data) => setPlace(data))
      .catch((err) => setError(err.message));
  }, [category, id]);

  if (error) return <div>❌ 오류: {error}</div>;
  if (!place) return <div>로딩 중...</div>;

  const handleLike = () => {
    setLikes((prev) => prev + 1);
    setShowFeedback(true);
    setTimeout(() => setShowFeedback(false), 2000);
  };

  const handleBookmark = () => alert("즐겨찾기에 추가되었습니다.");
  const handlePrint = () => window.print();
  const handleAddToCourse = () => alert("코스에 담았습니다.");
  const handleShare = () => setShares((prev) => prev + 1);

  return (
    <div id="content">
      <h2 id="topTitle">{place.name}</h2>

      <div className="area_address" id="topAddr">
        <span>{place.tour_add || place.food_add || place.stay_add}</span>
      </div>
      <div className="subtitle_marker">
        <span>{place.tour_title || place.food_title || '상세 정보 없음'}</span>
      </div>

      {/* 상단바 */}
      <div className="db_cont_detail">
        <div className="detail_tab">
          <ul>
            <li className={activeTab === "photo" ? "select_tab" : ""}>
              <a href={place.tour_img || place.food_img || place.stay_img} className="img_open" target="_blank" rel="noreferrer">사진보기</a>
            </li>
            <li className={activeTab === "detail" ? "select_tab" : ""}>
              <a href="#DetailGo" onClick={() => setActiveTab("detail")}>상세정보</a>
            </li>
            <li className={activeTab === "map" ? "select_tab" : ""}>
              <a href="#addContView" onClick={() => setActiveTab("map")}>위치</a>
            </li>
          </ul>
        </div>
      </div>

      {/* 이미지 */}
      <div id="galleryGo">
        <div className="swiper-container">
          <div className="swiper-slide">
            <img className="swiper-lazy" src={place.tour_img || place.food_img || place.stay_img || '/img/noimg.png'} alt={place.name} />
          </div>
        </div>
      </div>

      <div id="DetailGo">
        <h2>상세정보</h2>
        <div className="description_box">
          {isExpanded ? place.tour_info : (place.tour_title || place.food_detail || '정보 없음')}
        </div>
      </div>

      <div className="wrap_contview" id="detailinfoview">
        <div className="inr_wrap">
          <div className="inr">
            <ul>
              <li><strong>문의</strong><span>{place.tour_tell || place.food_tell || place.stay_tell || '정보 없음'}</span></li>
              <li><strong>영업시간</strong><span>{place.tour_time || place.food_time || '정보 없음'}</span></li>
              <li><strong>홈페이지</strong><span><a href={place.tour_site || place.stay_site} target="_blank" rel="noreferrer">{place.tour_site || place.stay_site || '정보 없음'}</a></span></li>
              <li><strong>안내</strong><span>{place.tour_cost || place.food_menu || '정보 없음'}</span></li>
              {/* 나머지 정보 필요하면 여기에 추가 */}
            </ul>
          </div>
        </div>

        {/* <div id="addContView">
          <div className="pamphletWide" id="pamphlet0">
            <h3>위치</h3>
            <div className="swiper-container">
              <ul className="swiper-wrapper">
                <li className="swiper-slide">
                  <span>
                    <img src={place.map_img || '/noimg.png'} alt="위치" />
                    <a href={place.map_img || '#'} className="img_open" target="_blank" rel="noreferrer">위치 펼쳐보기</a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>

      <div className="post_area">
        {/* <button type="button" className="btn_good" onClick={handleLike}>
          <span className="ico">좋아요</span>
          <span className="num">{likes}</span>
        </button>
        {showFeedback && <div className="like-feedback">좋아요가 반영됐어요 💗</div>} */}
        <span className="rline">
          {/* <button type="button" className="btn_bookmark" onClick={handleBookmark}><span className="ico">즐겨찾기</span></button> */}
          {/* <button type="button" className="btn_print" onClick={handlePrint}><span className="ico">인쇄하기</span></button> */}
          {/* <button type="button" className="btn_cos" onClick={handleAddToCourse}><span className="ico">코스 담기</span></button> */}
          {/* <button type="button" className="btn_sharing" onClick={handleShare}>
            <span className="ico">공유하기</span>
            <span className="num">{shares}</span>
          </button> */}
        </span>
      </div>
    </div>
  );
};

export default DetailPage;
