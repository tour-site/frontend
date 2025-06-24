import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import places from '../../assets/js/places.js';
import styles from'./Detail.module.css';

const Detailpage = () => {
  const { id } = useParams();
  const place = places.find(p => p.id === parseInt(id));

  const [activeTab, setActiveTab] = useState("photo");
  /* 좋아요 */
  const [likes,setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  /* 공유 */
  const [shares, setShares] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  if (!place) return <div>해당 여행지를 찾을 수 없습니다.</div>;

  /* 좋아요 핸들러 */
  const handleLike = () => {
    setLikes(prev => prev + 1);
    setShowFeedback(true);
    setTimeout(() => setShowFeedback(false), 2000);
  };

  const handleBookmark = () => alert("즐겨찾기에 추가되었습니다.");
  const handlePrint = () => window.print();
  const handleAddToCourse = () => alert("코스에 담았습니다.");
  const handleShare = () => setShares(prev => prev + 1);

  return (
    <div id="content" className={styles.content}>
      <h2 id="topTitle" className={styles.toptitle}>{place.name}</h2>

      <div className={styles.areaaddress} id="topAddr">
        <span>{place.location}</span>
      </div>
      <div className={styles.subtitlemarker}>
        <span>{place.subtitle}</span>
      </div>

      {/* <div className="dbDetail titBg" id="topCp">
        <div className="titTypeWrap">
          <h3>
            <em>{place.subtitle}</em>
          </h3>
        </div>
      </div> */}

      <div className={styles.dbcontdetail}>
        <div className={styles.detailtab}>
          <ul>
            <li className={activeTab === "photo" ? "select_tab" : ""}>
                <a href={place.image} className={styles.imgopen} target="_blank" rel="noreferrer">사진보기</a>
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
            <div className={styles.swipercontainer}>
                {place.image.map((img, i) => (
                    <div className={styles.swiperslide} key={i}>
                    <img className={styles.swiperlazy} src={img} alt={`gallery-${i}`} />
                    </div>
                ))}
            </div>
        </div>

        <div id="DetailGo">
            {/* <div className="blind">{place.description}</div> */}
            <div className={styles.wrapconView}>
            <button 
                className={styles.btnmodify}
                 onClick={() => alert('수정이 필요한 정보를 관리자에게 알려주세요')}><span>관광정보 수정요청</span>
            </button>
            <br/>
            </div>
            <h2>상세정보</h2>
           <div className={styles.descriptionbox}>
            {isExpanded ? place.description : place.description.slice(0, 50) + '...'}
            {!isExpanded && (
                <button onClick={() => setIsExpanded(true)} className={styles.btnmore}>
                더보기 ▼
                </button>
            )}
</div>

        </div>

      <div className={styles.wrapcontview} id="detailinfoview">
        <div className={styles.inr_wrap}>
          <div className={styles.inr}>
            
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
            <div className={styles.pamphletWide} id="pamphlet0">
            <h3>위치</h3>
            <div className={styles.swipercontainer}>
                <ul className={styles.swiperwrapper}>
                <li className={styles.swiperslide}>
                    <span>
                    <img src={place.map_image} alt="위치" />
                    <a href={place.map_image} className={styles.imgopen} target="_blank" rel="noreferrer">위치 펼쳐보기</a>
                    </span>
                </li>
                </ul>
            </div>
            </div>
        </div> 
      </div>

      <div className={styles.postarea}>
            <button type="button" className={styles.btn_good} onClick={handleLike}>
            <span className={styles.ico}>좋아요</span>
            <span className={styles.num} id="conLike">{likes}</span>
            </button>
            {showFeedback && (
              <div className={styles.likefeedback}>좋아요가 반영됐어요 💗</div>
            )}
            <span className={styles.rline}>
            <button type="button" className={styles.btn_bookmark} onClick={handleBookmark}>
                <span className={styles.ico}>즐겨찾기</span>
            </button>
            <button type="button" className={styles.btn_print} onClick={handlePrint}>
                <span className={styles.ico}>인쇄하기</span>
            </button>
            <button type="button" className={styles.btncos} onClick={handleAddToCourse}>
                <span className={styles.ico}>코스 담기</span>
            </button>
            <button type="button" className={styles.btnsharing} onClick={handleShare}>
                <span className={styles.ico}>공유하기</span>
                <span className={styles.num} id="conShare">{shares}</span>
            </button>
            </span>
        </div>

    </div>
  );
};

export default Detailpage;
