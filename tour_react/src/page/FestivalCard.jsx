import React from 'react';
import './Component/FestivalCard.css';


const FestivalCard = ({ festival }) => {
  return (
    <a href={festival.link} className="festival-card" style={{ backgroundImage: `url(${festival.image})` }}>
      <div className="festival-overlay">
        {festival.status && <span className="festival-status">{festival.status}</span>}
        <h3 className="festival-title">{festival.title}</h3>
        <p className="festival-date">{festival.date}</p>
        <p className="festival-location">{festival.location}</p>
      </div>
    </a>
  );
};

export default FestivalCard;