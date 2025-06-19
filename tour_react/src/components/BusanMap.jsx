import React from "react";
import "./css/BusanMap.css"; // 스타일 파일을 여기에 연결

const guList = [
  {
    id: "junggu",
    name: "중구",
    d: "M260,190 L275,180 L285,195 L275,210 Z",
  },
  {
    id: "seogu",
    name: "서구",
    d: "M240,210 L260,190 L275,210 L260,230 Z",
  },
  {
    id: "donggu",
    name: "동구",
    d: "M285,195 L300,190 L310,205 L295,215 Z",
  },
  {
    id: "yeongdogu",
    name: "영도구",
    d: "M280,230 L295,215 L310,240 L295,255 Z",
  },
  {
    id: "busanjingu",
    name: "부산진구",
    d: "M240,230 L260,230 L270,250 L250,255 Z",
  },
  {
    id: "dongnaegu",
    name: "동래구",
    d: "M270,250 L290,240 L305,260 L285,275 Z",
  },
  {
    id: "namgu",
    name: "남구",
    d: "M250,255 L270,250 L285,275 L260,285 Z",
  },
  {
    id: "bukgu",
    name: "북구",
    d: "M220,180 L240,170 L250,190 L230,200 Z",
  },
  {
    id: "sasanggu",
    name: "사상구",
    d: "M230,200 L250,190 L260,210 L240,210 Z",
  },
  {
    id: "sahagu",
    name: "사하구",
    d: "M200,220 L230,200 L240,230 L210,240 Z",
  },
  {
    id: "geumjeonggu",
    name: "금정구",
    d: "M290,240 L310,230 L320,250 L305,260 Z",
  },
  {
    id: "yeonje-gu",
    name: "연제구",
    d: "M270,250 L285,245 L295,260 L285,275 Z",
  },
  {
    id: "suyeonggu",
    name: "수영구",
    d: "M285,275 L295,260 L310,275 L295,290 Z",
  },
  {
    id: "haeundaegu",
    name: "해운대구",
    d: "M295,260 L320,250 L330,270 L310,275 Z",
  },
  {
    id: "gijanggun",
    name: "기장군",
    d: "M330,270 L350,260 L360,280 L340,290 Z",
  },
  {
    id: "gangseogu",
    name: "강서구",
    d: "M190,170 L220,160 L240,170 L220,180 Z",
  },
];

export default function BusanMap({ onGuClick, highlightedGu }) {
  return (
    <svg viewBox="0 0 400 400" className="busan-map">
      {guList.map((gu) => (
        <path
          key={gu.id}
          d={gu.d}
          onClick={() => onGuClick(gu.name)}
          fill={highlightedGu === gu.name ? "#ff7043" : "#90caf9"}
          stroke="#333"
          strokeWidth="2"
          style={{ cursor: "pointer" }}
        >
          <title>{gu.name}</title>
        </path>
      ))}
    </svg>
  );
}
