const places = [
  {
    id: 1,
    name: "해운대 해수욕장",
    gu: "Haeundae", // ✅ 추가
    subtitle: "사시사철 젊은 열기로 뜨거운 해수욕장",
    location: "부산 해운대구 우동",
    contact: "051-123-4567",
    homepage: "https://www.haeundae.go.kr",
    hours: "09:00 ~ 18:00",
    closed_days: "연중무휴",
    park: "공영주차장 이용 가능",
    transportation: "지하철 2호선 해운대역 도보 10분",
    fee: "무료",
    facility: "샤워장, 화장실, 파라솔 대여",
    image: [
      "https://image.fnnews.com/resource/media/image/2024/04/27/202404271230342872_l.jpg",
    ],
    map_image: [
      "https://simg.pstatic.net/static.map/v2/map/staticmap.bin?caller=smarteditor&markers=size%3Amid|color%3A0x11cc73|type%3Ad|viewSizeRatio%3A0.7|pos%3A129.1664972%2035.1619703&w=700&h=315&scale=2&dataversion=174.22",
    ],
    description:
      "맑은 바다와 부드러운 백사장이 인상적인 해운대는 국내외 관광객들에게 사랑받는 명소입니다.",
  },
  {
    id: 2,
    name: "아홉산숲",
    gu: "Gijang", // ✅ 추가
    subtitle: "부산 속 대나무 힐링 명소",
    location: "부산광역시 기장군 철마면 웅천리 산20-1",
    contact: "051-721-9183",
    homepage: "https://ahopsan.com",
    hours: "09:00 ~ 18:00 (입장마감 17:00)",
    closed_days: "연중무휴 (우천 시 일부 제한)",
    park: "전용 주차장 완비",
    transportation: "부산역 → 기장역 하차 후 택시 이용 (약 15분)",
    fee: "성인 5,000원 / 어린이 3,000원",
    facility: "산책로, 전망대, 휴게소, 촬영장소",
    image: [
      "https://th.bing.com/th/id/OIP.2Hq6uIoQbqAwAwLLVQVmQwHaE8?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3",
    ],
    map_image: [
      "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FqGTJ4%2FbtsFD5mU6tk%2F9k2DJx8W5zxwvVc8ukD67K%2Fimg.png",
    ],
    description:
      "400년 역사의 대숲이 우거진 아홉산숲은 수많은 영화와 드라마의 촬영지로 유명하며, 자연 속에서 힐링을 즐길 수 있는 명소입니다.",
  },
];

export default places;
