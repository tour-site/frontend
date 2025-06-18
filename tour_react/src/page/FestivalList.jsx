import React from 'react';
import { Link } from 'react-router-dom';
import './Component/FestivalList.css';

const FestivalList = ({ data, onTabClick, activeTab }) => {
  return (
    <section className="other_list type2" role="region">
      <div className="inner">
        <div className="other_festival" role="application">
          <div className="festival_ul_top" id="festival_ul_top">
            <ul className="tab_area">
              {['축제일순', '거리순', '인기순'].map((label) => (
                <li key={label}>
                  <button
                    onClick={() => onTabClick(label)}
                    title={activeTab === label ? '선택됨' : ''}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {data.length === 0 ? (
            <div className="no_list">
              <div className="no_img"></div>
              <strong>검색결과가 없습니다</strong>
              <p>찾으시는 축제를 다시 검색해 주세요</p>
            </div>
          ) : (
            <div className="tab_cont_area">
              <div className="tab_cont">
                <ul className="other_festival_ul">
                  {data.map((festival, idx) => (
                    <li key={idx}>
                      <Link to={festival.link}>
                        <img src={festival.image} alt={festival.title} />
                        <span className="open">개최중</span>
                        <div className="other_festival_content">
                          <strong>{festival.title}</strong>
                          <div className="date">{festival.date}</div>
                          <div className="loc">{festival.location}</div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FestivalList;
