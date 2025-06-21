/* 상세페이지 */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import places from '../assets/js/places.js';
import '../assets/css/Detail.css';


const Detailpage = () => {
  const { id } = useParams();
  const place = places.find(p => p.id === parseInt(id));
  const [activeTab, setActiveTab] = useState("photo");
  const [likes, setLikes] = useState(0);
  const [shares, setShares] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);


  if (!place) return <div>해당 여행지를 찾을 수 없습니다.</div>;

  const handleLike = () => setLikes(prev => prev + 1);
  const handleBookmark = () => alert("즐겨찾기에 추가되었습니다.");
  const handlePrint = () => window.print();
  const handleAddToCourse = () => alert("코스에 담았습니다.");
  const handleShare = () => setShares(prev => prev + 1);

  return (
    <div id="content">
      <h2 id="topTitle">{place.name}</h2>

      <div className="area_address" id="topAddr">
        <span>{place.location}</span>
      </div>
      <div className="subtitle_marker">
        <span>{place.subtitle}</span>
      </div>

      {/* <div className="dbDetail titBg" id="topCp">
        <div className="titTypeWrap">
          <h3>
            <em>{place.subtitle}</em>
          </h3>
        </div>
      </div> */}

      <div className="db_cont_detail">
        <div className="detail_tab">
          <ul>
            <li className={activeTab === "photo" ? "select_tab" : ""}>
                <a href={place.image} className="img_open" target="_blank" rel="noreferrer">사진보기</a>
              {/* <a href="#galleryGo" onClick={() => setActiveTab("photo")}>사진보기</a> */}
            </li>
            <li className={activeTab === "detail" ? "select_tab" : ""}>
              <a href="#DetailGo" onClick={() => setActiveTab("detail")}>상세정보</a>
            </li>
            <li className={activeTab === "map" ? "select_tab" : ""}>
              <a href="#addContView" onClick={() => setActiveTab("map")}>위치</a>
            </li>
            {/* <li className={activeTab === "talk" ? "select_tab" : ""}>
              <a href="#!" onClick={() => setActiveTab("talk")}>댓글</a>
            </li> */}
          </ul>
        </div>
      </div>

       <div id="galleryGo">
            <div className="swiper-container">
                {place.image.map((img, i) => (
                    <div className="swiper-slide" key={i}>
                    <img className="swiper-lazy" src={img} alt={`gallery-${i}`} />
                    </div>
                ))}
            </div>
        </div>

        <div id="DetailGo">
            {/* <div className="blind">{place.description}</div> */}
            <div className="wrap_conView">
            <button 
                className="btn_modify"
                 onClick={() => alert('수정이 필요한 정보를 관리자에게 알려주세요')}><span>관광정보 수정요청</span>
            </button>
            <br/>
            </div>
            <h2>상세정보</h2>
           <div className="description_box">
            {isExpanded ? place.description : place.description.slice(0, 50) + '...'}
            {!isExpanded && (
                <button onClick={() => setIsExpanded(true)} className="btn_more">
                더보기 ▼
                </button>
            )}
</div>

        </div>

      <div className="wrap_contview" id="detailinfoview">
        <div className="inr_wrap">
          <div className="inr">
            
            <ul>
              <li><strong>문의 및 안내</strong><span>{place.contact}</span></li>
              <li><strong>홈페이지</strong><span><a href={place.homepage} target="_blank" rel="noreferrer">{place.homepage}</a></span></li>
              <li><strong>주소</strong><span>{place.location}</span></li>
              <li><strong>이용시간</strong><span>{place.hours}</span></li>
              <li><strong>휴일</strong><span>{place.closed_days}</span></li>
              <li><strong>주차</strong><span>{place.park || "정보 없음"}</span></li>
              <li><strong>교통정보</strong><span>{place.transportation}</span></li>
              <li><strong>이용요금</strong><span>{place.fee}</span></li>
              <li><strong>편의시설</strong><span>{place.facility}</span></li>
            </ul>
          </div>
        </div>

        <div id="addContView">
            <div className="pamphletWide" id="pamphlet0">
            <h3>위치</h3>
            <div className="swiper-container">
                <ul className="swiper-wrapper">
                <li className="swiper-slide">
                    <span>
                    <img src={place.map_image} alt="위치" />
                    <a href={place.map_image} className="img_open" target="_blank" rel="noreferrer">위치 펼쳐보기</a>
                    </span>
                </li>
                </ul>
            </div>
            </div>
        </div> 
      </div>

      <div className="post_area">
            <button type="button" className="btn_good" onClick={handleLike}>
            <span className="ico">좋아요</span>
            <span className="num" id="conLike">{likes}</span>
            </button>
            <span className="rline">
            <button type="button" className="btn_bookmark" onClick={handleBookmark}>
                <span className="ico">즐겨찾기</span>
            </button>
            <button type="button" className="btn_print" onClick={handlePrint}>
                <span className="ico">인쇄하기</span>
            </button>
            <button type="button" className="btn_cos" onClick={handleAddToCourse}>
                <span className="ico">코스 담기</span>
            </button>
            <button type="button" className="btn_sharing" onClick={handleShare}>
                <span className="ico">공유하기</span>
                <span className="num" id="conShare">{shares}</span>
            </button>
            </span>
        </div>

    </div>
  );
};

export default Detailpage;
