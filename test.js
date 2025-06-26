const { getJson } = require("serpapi");
const stayimgs = []
const htlist = {
STAY_INFO: [
	{
		"STAY_NAME" : "별장민박"
	},
	{
		"STAY_NAME" : "알로하펜션"
	},
	{
		"STAY_NAME" : "발리모텔"
	},
	{
		"STAY_NAME" : "아셀펜션"
	},
	{
		"STAY_NAME" : "1872팡시온펜션"
	},
	{
		"STAY_NAME" : "부산해운대1872팡시온"
	},
	{
		"STAY_NAME" : "메르쏭하우스"
	},
	{
		"STAY_NAME" : "하루펜션"
	},
	{
		"STAY_NAME" : "고운학리펜션"
	},
	{
		"STAY_NAME" : "라고마르펜션"
	},
	{
		"STAY_NAME" : "일광횡계민박"
	},
	{
		"STAY_NAME" : "엔젤앤가든"
	},
	{
		"STAY_NAME" : "길천여인숙"
	},
	{
		"STAY_NAME" : "산수유"
	},
	{
		"STAY_NAME" : "늘봄펜션"
	},
	{
		"STAY_NAME" : "만석꾼캠핑장"
	},
	{
		"STAY_NAME" : "월내태양민박"
	},
	{
		"STAY_NAME" : "달빛펜션"
	},
	{
		"STAY_NAME" : "아름민박집"
	},
	{
		"STAY_NAME" : "해변민박"
	},
	{
		"STAY_NAME" : "임랑별장민박"
	},
	{
		"STAY_NAME" : "선민박"
	},
	{
		"STAY_NAME" : "한바다민박"
	},
	{
		"STAY_NAME" : "임랑펜션형브이민박"
	},
	{
		"STAY_NAME" : "임랑태양민박"
	},
	{
		"STAY_NAME" : "동부산온천호텔"
	},
	{
		"STAY_NAME" : "산장가든"
	},
	{
		"STAY_NAME" : "장안사민박형펜션"
	},
	{
		"STAY_NAME" : "한옥펜션금수동"
	},
	{
		"STAY_NAME" : "동부산온천호텔"
	},
	{
		"STAY_NAME" : "루나펜션"
	},
	{
		"STAY_NAME" : "엔젤앤가든"
	},
	{
		"STAY_NAME" : "해파랑민박"
	},
	{
		"STAY_NAME" : "보리수펜션"
	},
	{
		"STAY_NAME" : "더무빙카라반캠핑"
	},
	{
		"STAY_NAME" : "오투펜션"
	},
	{
		"STAY_NAME" : "얀카라반펜션"
	},
	{
		"STAY_NAME" : "기장문화예절학교"
	},
	{
		"STAY_NAME" : "휴펜션"
	},
	{
		"STAY_NAME" : "다란향 한옥"
	},
	{
		"STAY_NAME" : "호텔다온"
	},
	{
		"STAY_NAME" : "큐브모텔"
	},
	{
		"STAY_NAME" : "파크모텔"
	},
	{
		"STAY_NAME" : "기장군청소년수련관"
	},
	{
		"STAY_NAME" : "병산골목장캠핑"
	},
	{
		"STAY_NAME" : "초원숲속글램핑"
	},
	{
		"STAY_NAME" : "초원숲속야영장"
	},
	{
		"STAY_NAME" : "호수글램핑"
	},
	{
		"STAY_NAME" : "k2모텔"
	},
	{
		"STAY_NAME" : "브라운도트호텔"
	},
	{
		"STAY_NAME" : "호텔라움"
	},
	{
		"STAY_NAME" : "호텔썸"
	},
	{
		"STAY_NAME" : "더원호텔"
	},
	{
		"STAY_NAME" : "호텔여기어때"
	},
	{
		"STAY_NAME" : "낙원농원"
	},
	{
		"STAY_NAME" : "베스티호텔"
	},
	{
		"STAY_NAME" : "대저캠핑장"
	},
	{
		"STAY_NAME" : "공항하숙"
	},
	{
		"STAY_NAME" : "에어포트호텔"
	},
	{
		"STAY_NAME" : "초롱블루펜션"
	},
	{
		"STAY_NAME" : "하늘과바다"
	},
	{
		"STAY_NAME" : "대항체험마을민박"
	},
	{
		"STAY_NAME" : "섬마을장어구이펜션"
	},
	{
		"STAY_NAME" : "대항펜션"
	},
	{
		"STAY_NAME" : "대항민박"
	},
	{
		"STAY_NAME" : "W모텔"
	},
	{
		"STAY_NAME" : "비엠텔모텔"
	},
	{
		"STAY_NAME" : "마틴호텔"
	},
	{
		"STAY_NAME" : "JK호텔"
	},
	{
		"STAY_NAME" : "모텔 제타"
	},
	{
		"STAY_NAME" : "모텔 마르"
	},
	{
		"STAY_NAME" : "헤리티지디자인호텔"
	},
	{
		"STAY_NAME" : "디자인팝 모텔"
	},
	{
		"STAY_NAME" : "씨사이드모텔"
	},
	{
		"STAY_NAME" : "비엠텔모텔"
	},
	{
		"STAY_NAME" : "브라운도트호텔 명지점"
	},
	{
		"STAY_NAME" : "넘버25호텔"
	},
	{
		"STAY_NAME" : "더포인트호텔"
	},
	{
		"STAY_NAME" : "호텔오유"
	},
	{
		"STAY_NAME" : "오이아호텔명지"
	},
	{
		"STAY_NAME" : "씨엘오션호텔"
	},
	{
		"STAY_NAME" : "신라스테이"
	},
	{
		"STAY_NAME" : "넘버25호텔 명지오션시티점 비즈니스"
	},
	{
		"STAY_NAME" : "오션시티호텔"
	},
	{
		"STAY_NAME" : "사이버모텔"
	},
	{
		"STAY_NAME" : "호텔프렌치코드"
	},
	{
		"STAY_NAME" : "레전드호텔"
	},
	{
		"STAY_NAME" : "베스트루이스해밀턴호텔 서부산점"
	},
	{
		"STAY_NAME" : "성고개산장"
	},
	{
		"STAY_NAME" : "벨라지오모텔"
	},
	{
		"STAY_NAME" : "IW모텔"
	},
	{
		"STAY_NAME" : "호텔더메이"
	},
	{
		"STAY_NAME" : "2월호텔"
	},
	{
		"STAY_NAME" : "S모텔"
	},
	{
		"STAY_NAME" : "블랑비즈니스호텔"
	},
	{
		"STAY_NAME" : "까르페호텔"
	},
	{
		"STAY_NAME" : "호텔에그"
	},
	{
		"STAY_NAME" : "2월호텔 강서신관"
	},
	{
		"STAY_NAME" : "브라운도트호텔"
	},
	{
		"STAY_NAME" : "더브레인호텔"
	},
	{
		"STAY_NAME" : "호텔더원"
	},
	{
		"STAY_NAME" : "V호텔"
	},
	{
		"STAY_NAME" : "비지니스호텔"
	},
	{
		"STAY_NAME" : "펀모텔"
	},
	{
		"STAY_NAME" : "이그니스호텔"
	},
	{
		"STAY_NAME" : "굿프라임호텔"
	},
	{
		"STAY_NAME" : "헤르몬호텔"
	},
	{
		"STAY_NAME" : "카리브의일몰"
	},
	{
		"STAY_NAME" : "우진펜션"
	},
	{
		"STAY_NAME" : "가덕부들펜션"
	},
	{
		"STAY_NAME" : "로뎀펜션"
	},
	{
		"STAY_NAME" : "꿈에그린펜션"
	},
	{
		"STAY_NAME" : "가덕도펜션민박"
	},
	{
		"STAY_NAME" : "초록펜션"
	},
	{
		"STAY_NAME" : "노을빛펜션"
	},
	{
		"STAY_NAME" : "은행나무펜션"
	},
	{
		"STAY_NAME" : "가덕도힐링민박펜션"
	},
	{
		"STAY_NAME" : "펜션GALLERY가덕"
	},
	{
		"STAY_NAME" : "백수장"
	},
	{
		"STAY_NAME" : "호텔G&G"
	},
	{
		"STAY_NAME" : "카카오호텔"
	},
	{
		"STAY_NAME" : "호텔캔들"
	},
	{
		"STAY_NAME" : "제니스호텔"
	},
	{
		"STAY_NAME" : "제니스호텔"
	},
	{
		"STAY_NAME" : "쇼모텔"
	},
	{
		"STAY_NAME" : "호텔야자"
	},
	{
		"STAY_NAME" : "브라운도트 호텔 구서역점"
	},
	{
		"STAY_NAME" : "티에스호텔"
	},
	{
		"STAY_NAME" : "호텔프렌치코드"
	},
	{
		"STAY_NAME" : "호텔시카고"
	},
	{
		"STAY_NAME" : "목화장여관"
	},
	{
		"STAY_NAME" : "드림모텔"
	},
	{
		"STAY_NAME" : "천우장"
	},
	{
		"STAY_NAME" : "V1모텔"
	},
	{
		"STAY_NAME" : "V1모텔"
	},
	{
		"STAY_NAME" : "새동진장여관"
	},
	{
		"STAY_NAME" : "새동진장여관"
	},
	{
		"STAY_NAME" : "스포원파크재난안전체험관"
	},
	{
		"STAY_NAME" : "이데아호텔"
	},
	{
		"STAY_NAME" : "라찌모텔"
	},
	{
		"STAY_NAME" : "이화모텔"
	},
	{
		"STAY_NAME" : "젠모텔"
	},
	{
		"STAY_NAME" : "파래스"
	},
	{
		"STAY_NAME" : "부림모텔"
	},
	{
		"STAY_NAME" : "헤이브호텔"
	},
	{
		"STAY_NAME" : "호텔 블랑"
	},
	{
		"STAY_NAME" : "넘버25호텔"
	},
	{
		"STAY_NAME" : "베니스모텔"
	},
	{
		"STAY_NAME" : "쉐르빌모텔"
	},
	{
		"STAY_NAME" : "진영모텔"
	},
	{
		"STAY_NAME" : "아마존모텔"
	},
	{
		"STAY_NAME" : "그랜드모텔"
	},
	{
		"STAY_NAME" : "몽블랑모텔"
	},
	{
		"STAY_NAME" : "마모텔"
	},
	{
		"STAY_NAME" : "아젤리아"
	},
	{
		"STAY_NAME" : "빙고모텔"
	},
	{
		"STAY_NAME" : "목화모텔"
	},
	{
		"STAY_NAME" : "동평장여관"
	},
	{
		"STAY_NAME" : "새온천모텔찜질방"
	},
	{
		"STAY_NAME" : "송원장"
	},
	{
		"STAY_NAME" : "우보"
	},
	{
		"STAY_NAME" : "웁스모텔"
	},
	{
		"STAY_NAME" : "올레모텔"
	},
	{
		"STAY_NAME" : "로망스모텔"
	},
	{
		"STAY_NAME" : "맥스모텔"
	},
	{
		"STAY_NAME" : "모텔델루나"
	},
	{
		"STAY_NAME" : "HOTELYOUAIN"
	},
	{
		"STAY_NAME" : "대도여관"
	},
	{
		"STAY_NAME" : "아라모텔"
	},
	{
		"STAY_NAME" : "만리장여관"
	},
	{
		"STAY_NAME" : "태광 달방"
	},
	{
		"STAY_NAME" : "청룡여관"
	},
	{
		"STAY_NAME" : "유성장모텔"
	},
	{
		"STAY_NAME" : "범어장"
	},
	{
		"STAY_NAME" : "범어장모텔"
	},
	{
		"STAY_NAME" : "에스모텔"
	},
	{
		"STAY_NAME" : "니즈호텔"
	},
	{
		"STAY_NAME" : "모닝블루펜션"
	},
	{
		"STAY_NAME" : "바다애펜션"
	},
	{
		"STAY_NAME" : "오시리아펜션"
	},
	{
		"STAY_NAME" : "가온펜션"
	},
	{
		"STAY_NAME" : "타샤모텔"
	},
	{
		"STAY_NAME" : "골든베이펜션"
	},
	{
		"STAY_NAME" : "고마펜션"
	},
	{
		"STAY_NAME" : "본레브연화리330풀빌라앤호텔"
	},
	{
		"STAY_NAME" : "MVG모텔"
	},
	{
		"STAY_NAME" : "연화리관광호텔"
	},
	{
		"STAY_NAME" : "호텔오즈"
	},
	{
		"STAY_NAME" : "타이드어웨이풀빌라"
	},
	{
		"STAY_NAME" : "연화리330 POOL VILLA Bon reve"
	},
	{
		"STAY_NAME" : "로드엠게스트하우스펜션"
	},
	{
		"STAY_NAME" : "연화펜션"
	},
	{
		"STAY_NAME" : "지앤지모텔"
	},
	{
		"STAY_NAME" : "MVG무인텔"
	},
	{
		"STAY_NAME" : "아난티 힐튼 부산"
	},
	{
		"STAY_NAME" : "꿈의궁전모텔"
	},
	{
		"STAY_NAME" : "오즈모텔"
	},
	{
		"STAY_NAME" : "별이그린바다펜션"
	},
	{
		"STAY_NAME" : "아난티코브"
	},
	{
		"STAY_NAME" : "숲속농원"
	},
	{
		"STAY_NAME" : "기장숲속농원캠프"
	},
	{
		"STAY_NAME" : "사랑애펜션"
	},
	{
		"STAY_NAME" : "휴인펜션"
	},
	{
		"STAY_NAME" : "더하루펜션"
	},
	{
		"STAY_NAME" : "마루하우스펜션"
	},
	{
		"STAY_NAME" : "아라하우스펜션"
	},
	{
		"STAY_NAME" : "더베이펜션"
	},
	{
		"STAY_NAME" : "솔레이펜션"
	},
	{
		"STAY_NAME" : "브라이트펜션"
	},
	{
		"STAY_NAME" : "부산라메르펜션"
	},
	{
		"STAY_NAME" : "백용펜션"
	},
	{
		"STAY_NAME" : "더펜션502"
	},
	{
		"STAY_NAME" : "해오름펜션"
	},
	{
		"STAY_NAME" : "J&J하우스"
	},
	{
		"STAY_NAME" : "바우하우스펜션"
	},
	{
		"STAY_NAME" : "송정로뎀나무펜션"
	},
	{
		"STAY_NAME" : "메종펜션"
	},
	{
		"STAY_NAME" : "그루브펜션"
	},
	{
		"STAY_NAME" : "GB코티지"
	},
	{
		"STAY_NAME" : "오시리아인펜션"
	},
	{
		"STAY_NAME" : "엘티움"
	},
	{
		"STAY_NAME" : "송정 메이플하우스"
	},
	{
		"STAY_NAME" : "송정드림펜션"
	},
	{
		"STAY_NAME" : "팰리스모텔"
	},
	{
		"STAY_NAME" : "더원모텔"
	},
	{
		"STAY_NAME" : "하얀둥지펜션"
	},
	{
		"STAY_NAME" : "더캐슬해운대비치"
	},
	{
		"STAY_NAME" : "부산 기장 휴"
	},
	{
		"STAY_NAME" : "시랑리129펜션"
	},
	{
		"STAY_NAME" : "돌담집그곳"
	},
	{
		"STAY_NAME" : "드림하우스펜션"
	},
	{
		"STAY_NAME" : "죽성여관"
	},
	{
		"STAY_NAME" : "TOC모텔"
	},
	{
		"STAY_NAME" : "모텔헤이데이"
	},
	{
		"STAY_NAME" : "베스트루이스해밀턴호텔 기장점"
	},
	{
		"STAY_NAME" : "모텔헤이데이"
	},
	{
		"STAY_NAME" : "베스트루이스해밀턴호텔"
	},
	{
		"STAY_NAME" : "서랑펜션"
	},
	{
		"STAY_NAME" : "펜션드리머"
	},
	{
		"STAY_NAME" : "엔줄리오펜션"
	},
	{
		"STAY_NAME" : "기장브라운도트펜션"
	},
	{
		"STAY_NAME" : "IW모텔"
	},
	{
		"STAY_NAME" : "브라운도트호텔"
	},
	{
		"STAY_NAME" : "넘버이십오"
	},
	{
		"STAY_NAME" : "엔쥴리오"
	},
	{
		"STAY_NAME" : "초콜릿"
	},
	{
		"STAY_NAME" : "초콜릿모텔"
	},
	{
		"STAY_NAME" : "테마"
	},
	{
		"STAY_NAME" : "루이스호텔"
	},
	{
		"STAY_NAME" : "기장루이스호텔"
	},
	{
		"STAY_NAME" : "드림모텔"
	},
	{
		"STAY_NAME" : "부띠끄호텔 오월로"
	},
	{
		"STAY_NAME" : "브룩스호텔"
	},
	{
		"STAY_NAME" : "부띠끄호텔 오월로"
	},
	{
		"STAY_NAME" : "이데아호텔"
	},
	{
		"STAY_NAME" : "2PM호텔"
	},
	{
		"STAY_NAME" : "큐모텔"
	},
	{
		"STAY_NAME" : "HOTEL페오"
	},
	{
		"STAY_NAME" : "짱모텔"
	},
	{
		"STAY_NAME" : "넘버25호텔"
	},
	{
		"STAY_NAME" : "힐모텔"
	},
	{
		"STAY_NAME" : "이지고글램핑"
	},
	{
		"STAY_NAME" : "지오클럽캠핑장"
	},
	{
		"STAY_NAME" : "민캠프힐링오토캠핑장"
	},
	{
		"STAY_NAME" : "일광추억이머무르는곳"
	},
	{
		"STAY_NAME" : "테라스"
	},
	{
		"STAY_NAME" : "일출민박"
	},
	{
		"STAY_NAME" : "속시원한대구탕"
	},
	{
		"STAY_NAME" : "채움펜션"
	},
	{
		"STAY_NAME" : "일광온정바다"
	},
	{
		"STAY_NAME" : "메모리펜션"
	},
	{
		"STAY_NAME" : "비치하임펜션"
	},
	{
		"STAY_NAME" : "몽블랑모텔"
	},
	{
		"STAY_NAME" : "캐슬모텔"
	},
	{
		"STAY_NAME" : "쉼표모텔"
	},
	{
		"STAY_NAME" : "해변24편의점"
	},
	{
		"STAY_NAME" : "해나무민박"
	},
	{
		"STAY_NAME" : "늘봄모텔"
	},
	{
		"STAY_NAME" : "삼성장펜션"
	},
	{
		"STAY_NAME" : "제이스펜션&글램핑"
	},
	{
		"STAY_NAME" : "일광하우스"
	},
	{
		"STAY_NAME" : "일광펜션"
	},
	{
		"STAY_NAME" : "까페카라반"
	},
	{
		"STAY_NAME" : "모아펜션"
	},
	{
		"STAY_NAME" : "리버사이드펜션"
	},
	{
		"STAY_NAME" : "일광메모리펜션"
	},
	{
		"STAY_NAME" : "드메르펜션"
	},
	{
		"STAY_NAME" : "중앙온천"
	},
	{
		"STAY_NAME" : "호텔프랑스"
	},
	{
		"STAY_NAME" : "6번가모텔"
	},
	{
		"STAY_NAME" : "형제그린빌"
	},
	{
		"STAY_NAME" : "한솔모텔"
	},
	{
		"STAY_NAME" : "한송원룸"
	},
	{
		"STAY_NAME" : "문화장여관"
	},
	{
		"STAY_NAME" : "대양오션"
	},
	{
		"STAY_NAME" : "수원장여관"
	},
	{
		"STAY_NAME" : "동남장여관"
	},
	{
		"STAY_NAME" : "목원장여관"
	},
	{
		"STAY_NAME" : "세금장모텔"
	},
	{
		"STAY_NAME" : "식물장여관"
	},
	{
		"STAY_NAME" : "동궁장여관"
	},
	{
		"STAY_NAME" : "청송장여관"
	},
	{
		"STAY_NAME" : "도브호텔"
	},
	{
		"STAY_NAME" : "W모텔"
	},
	{
		"STAY_NAME" : "무아모텔"
	},
	{
		"STAY_NAME" : "대성관호텔"
	},
	{
		"STAY_NAME" : "갤럭시모텔"
	},
	{
		"STAY_NAME" : "카리노호텔"
	},
	{
		"STAY_NAME" : "호텔킹"
	},
	{
		"STAY_NAME" : "한빛장"
	},
	{
		"STAY_NAME" : "은성장여관"
	},
	{
		"STAY_NAME" : "더고침펠리스"
	},
	{
		"STAY_NAME" : "호텔MVG"
	},
	{
		"STAY_NAME" : "평강여관"
	},
	{
		"STAY_NAME" : "금강국민호텔"
	},
	{
		"STAY_NAME" : "고성장"
	},
	{
		"STAY_NAME" : "The M Hotel"
	},
	{
		"STAY_NAME" : "동래온천호텔"
	},
	{
		"STAY_NAME" : "인터파크모텔"
	},
	{
		"STAY_NAME" : "뉴부산모텔"
	},
	{
		"STAY_NAME" : "젬모텔"
	},
	{
		"STAY_NAME" : "동래온천호텔"
	},
	{
		"STAY_NAME" : "예천장여관"
	},
	{
		"STAY_NAME" : "뉴부산모텔"
	},
	{
		"STAY_NAME" : "로얄모텔"
	},
	{
		"STAY_NAME" : "에이스"
	},
	{
		"STAY_NAME" : "더스톤브릿지호텔"
	},
	{
		"STAY_NAME" : "선우장여관"
	},
	{
		"STAY_NAME" : "이화장"
	},
	{
		"STAY_NAME" : "민정텔"
	},
	{
		"STAY_NAME" : "하나빌"
	},
	{
		"STAY_NAME" : "해피맘하우스"
	},
	{
		"STAY_NAME" : "거북장모텔"
	},
	{
		"STAY_NAME" : "오렌지별장"
	},
	{
		"STAY_NAME" : "사직 덴바스타 시그니처호텔"
	},
	{
		"STAY_NAME" : "사직 덴바스타 시그니처호텔"
	},
	{
		"STAY_NAME" : "페이지호텔"
	},
	{
		"STAY_NAME" : "올리브 모텔"
	},
	{
		"STAY_NAME" : "에스에스모텔"
	},
	{
		"STAY_NAME" : "코리아나모텔"
	},
	{
		"STAY_NAME" : "온천장오호텔"
	},
	{
		"STAY_NAME" : "동래모텔"
	},
	{
		"STAY_NAME" : "보노호텔"
	},
	{
		"STAY_NAME" : "지앤지모텔"
	},
	{
		"STAY_NAME" : "썬모텔"
	},
	{
		"STAY_NAME" : "송원별장"
	},
	{
		"STAY_NAME" : "369모텔"
	},
	{
		"STAY_NAME" : "S모텔"
	},
	{
		"STAY_NAME" : "드림모텔"
	},
	{
		"STAY_NAME" : "현대온천"
	},
	{
		"STAY_NAME" : "허심모텔"
	},
	{
		"STAY_NAME" : "황토방모텔"
	},
	{
		"STAY_NAME" : "천우장"
	},
	{
		"STAY_NAME" : "도윤빌"
	},
	{
		"STAY_NAME" : "라메르"
	},
	{
		"STAY_NAME" : "푸른장여관"
	},
	{
		"STAY_NAME" : "우림여관"
	},
	{
		"STAY_NAME" : "청원장여관"
	},
	{
		"STAY_NAME" : "호텔야자"
	},
	{
		"STAY_NAME" : "호텔오즈"
	},
	{
		"STAY_NAME" : "호텔 이그니스"
	},
	{
		"STAY_NAME" : "JS모텔"
	},
	{
		"STAY_NAME" : "미투나호텔"
	},
	{
		"STAY_NAME" : "이브레지던스"
	},
	{
		"STAY_NAME" : "아담빌라"
	},
	{
		"STAY_NAME" : "큐브모텔"
	},
	{
		"STAY_NAME" : "샤인모텔"
	},
	{
		"STAY_NAME" : "타히티모텔"
	},
	{
		"STAY_NAME" : "CG모텔"
	},
	{
		"STAY_NAME" : "리&빌"
	},
	{
		"STAY_NAME" : "솔롱고스백패커스"
	},
	{
		"STAY_NAME" : "모심빌"
	},
	{
		"STAY_NAME" : "올레지던스"
	},
	{
		"STAY_NAME" : "대림장여관"
	},
	{
		"STAY_NAME" : "그린모텔"
	},
	{
		"STAY_NAME" : "빅토리아모텔"
	},
	{
		"STAY_NAME" : "동산모텔"
	},
	{
		"STAY_NAME" : "태백모텔"
	},
	{
		"STAY_NAME" : "투유모텔"
	},
	{
		"STAY_NAME" : "하운드호텔 미남역점"
	},
	{
		"STAY_NAME" : "하루호텔"
	},
	{
		"STAY_NAME" : "볼리아 사직점"
	},
	{
		"STAY_NAME" : "유토피아모텔"
	},
	{
		"STAY_NAME" : "태백모텔"
	},
	{
		"STAY_NAME" : "투헤븐호텔"
	},
	{
		"STAY_NAME" : "버튼호텔"
	},
	{
		"STAY_NAME" : "고궁장여관"
	},
	{
		"STAY_NAME" : "파라죠모텔"
	},
	{
		"STAY_NAME" : "미스터브릭호텔"
	},
	{
		"STAY_NAME" : "온천특실"
	},
	{
		"STAY_NAME" : "호텔꿀비"
	},
	{
		"STAY_NAME" : "태화여관"
	},
	{
		"STAY_NAME" : "태화여관"
	},
	{
		"STAY_NAME" : "더블유모텔"
	},
	{
		"STAY_NAME" : "'부산 개금e패션'"
	},
	{
		"STAY_NAME" : "버킹검모텔"
	},
	{
		"STAY_NAME" : "레인보우모텔"
	},
	{
		"STAY_NAME" : "레인보우호텔"
	},
	{
		"STAY_NAME" : "허브모텔"
	},
	{
		"STAY_NAME" : "은하탕"
	},
	{
		"STAY_NAME" : "다온하우스"
	},
	{
		"STAY_NAME" : "센트모텔"
	},
	{
		"STAY_NAME" : "피노키오"
	},
	{
		"STAY_NAME" : "고궁모텔"
	},
	{
		"STAY_NAME" : "리버모텔"
	},
	{
		"STAY_NAME" : "서림장여관"
	},
	{
		"STAY_NAME" : "서림장여관"
	},
	{
		"STAY_NAME" : "봉선모텔"
	},
	{
		"STAY_NAME" : "평해여인숙"
	},
	{
		"STAY_NAME" : "부일장여관"
	},
	{
		"STAY_NAME" : "부일장여관"
	},
	{
		"STAY_NAME" : "9번가트래블텔"
	},
	{
		"STAY_NAME" : "주안하우스"
	},
	{
		"STAY_NAME" : "'9번가 트래블텔'"
	},
	{
		"STAY_NAME" : "부산장"
	},
	{
		"STAY_NAME" : "그랜드빌"
	},
	{
		"STAY_NAME" : "화동장"
	},
	{
		"STAY_NAME" : "화동장"
	},
	{
		"STAY_NAME" : "다이나믹게스트하우스"
	},
	{
		"STAY_NAME" : "대호모텔"
	},
	{
		"STAY_NAME" : "덴바스타호텔"
	},
	{
		"STAY_NAME" : "예스모텔"
	},
	{
		"STAY_NAME" : "K모텔"
	},
	{
		"STAY_NAME" : "호텔큐파이브"
	},
	{
		"STAY_NAME" : "7TH호텔"
	},
	{
		"STAY_NAME" : "대성여인숙"
	},
	{
		"STAY_NAME" : "더호텔7TH"
	},
	{
		"STAY_NAME" : "부산여인숙"
	},
	{
		"STAY_NAME" : "POI명 - 부산, 부산여인숙"
	},
	{
		"STAY_NAME" : "네이버지도명-이그이스모텔"
	},
	{
		"STAY_NAME" : "G7호텔"
	},
	{
		"STAY_NAME" : "오즈모텔"
	},
	{
		"STAY_NAME" : "하루호텔"
	},
	{
		"STAY_NAME" : "김치게스트하우스"
	},
	{
		"STAY_NAME" : "투헤븐모텔"
	},
	{
		"STAY_NAME" : "리순덕호텔"
	},
	{
		"STAY_NAME" : "브라운도트호텔"
	},
	{
		"STAY_NAME" : "하운드호텔"
	},
	{
		"STAY_NAME" : "투헤븐호텔"
	},
	{
		"STAY_NAME" : "호텔25시"
	},
	{
		"STAY_NAME" : "호텔콤마"
	},
	{
		"STAY_NAME" : "네이버지도명 -'리순덕호텔'"
	},
	{
		"STAY_NAME" : "SS모텔"
	},
	{
		"STAY_NAME" : "서림모텔"
	},
	{
		"STAY_NAME" : "프렌치코드호텔"
	},
	{
		"STAY_NAME" : "잉카모텔"
	},
	{
		"STAY_NAME" : "로얄모텔"
	},
	{
		"STAY_NAME" : "잉카모텔"
	},
	{
		"STAY_NAME" : "월성모텔"
	},
	{
		"STAY_NAME" : "경일장여관"
	},
	{
		"STAY_NAME" : "경일장여관"
	},
	{
		"STAY_NAME" : "목원장여관"
	},
	{
		"STAY_NAME" : "롯데호텔"
	},
	{
		"STAY_NAME" : "부산롯데호텔"
	},
	{
		"STAY_NAME" : "테마모텔"
	},
	{
		"STAY_NAME" : "수연장여관"
	},
	{
		"STAY_NAME" : "브라운도트 호텔 서면역점 비즈니스"
	},
	{
		"STAY_NAME" : "올인모텔"
	},
	{
		"STAY_NAME" : "프로포즈 모텔"
	},
	{
		"STAY_NAME" : "K9모텔"
	},
	{
		"STAY_NAME" : "더블린호텔"
	},
	{
		"STAY_NAME" : "휴모텔"
	},
	{
		"STAY_NAME" : "실베네집"
	},
	{
		"STAY_NAME" : "부산유아놀이꿈터"
	},
	{
		"STAY_NAME" : "영남장여관"
	},
	{
		"STAY_NAME" : "리베모텔"
	},
	{
		"STAY_NAME" : "브이모텔"
	},
	{
		"STAY_NAME" : "호텔스미스"
	},
	{
		"STAY_NAME" : "보스코호텔"
	},
	{
		"STAY_NAME" : "스테이 로드12"
	},
	{
		"STAY_NAME" : "빈센트게스트하우스"
	},
	{
		"STAY_NAME" : "풍조장여관"
	},
	{
		"STAY_NAME" : "호텔브라운도트 대연점"
	},
	{
		"STAY_NAME" : "호텔뮤리"
	},
	{
		"STAY_NAME" : "낙원모텔"
	},
	{
		"STAY_NAME" : "황금모텔"
	},
	{
		"STAY_NAME" : "뮤트호텔"
	},
	{
		"STAY_NAME" : "초이스게스트하우스"
	},
	{
		"STAY_NAME" : "용궁모텔"
	},
	{
		"STAY_NAME" : "코리아호텔"
	},
	{
		"STAY_NAME" : "이데아호텔"
	},
	{
		"STAY_NAME" : "호텔더그랑"
	},
	{
		"STAY_NAME" : "꿈모텔"
	},
	{
		"STAY_NAME" : "유니콘모텔"
	},
	{
		"STAY_NAME" : "대연동 한스빌"
	},
	{
		"STAY_NAME" : "지앤지호텔"
	},
	{
		"STAY_NAME" : "제트호텔"
	},
	{
		"STAY_NAME" : "K모텔"
	},
	{
		"STAY_NAME" : "루이모텔"
	},
	{
		"STAY_NAME" : "웰킨호텔"
	},
	{
		"STAY_NAME" : "호텔온나"
	},
	{
		"STAY_NAME" : "T호텔"
	},
	{
		"STAY_NAME" : "부산국제금융연수원"
	},
	{
		"STAY_NAME" : "낙원모텔"
	},
	{
		"STAY_NAME" : "산해모텔"
	},
	{
		"STAY_NAME" : "부산 문현동 그랜드"
	},
	{
		"STAY_NAME" : "블루모텔"
	},
	{
		"STAY_NAME" : "클라우드나인"
	},
	{
		"STAY_NAME" : "브이모텔"
	},
	{
		"STAY_NAME" : "보브호텔"
	},
	{
		"STAY_NAME" : "아바니센트럴부산"
	},
	{
		"STAY_NAME" : "엔터모텔"
	},
	{
		"STAY_NAME" : "대화장여관"
	},
	{
		"STAY_NAME" : "오륙도여관"
	},
	{
		"STAY_NAME" : "용당별장여관"
	},
	{
		"STAY_NAME" : "용호서울모텔"
	},
	{
		"STAY_NAME" : "부산해군회관"
	},
	{
		"STAY_NAME" : "호텔시카고"
	},
	{
		"STAY_NAME" : "성운장여관"
	},
	{
		"STAY_NAME" : "노블레스모텔"
	},
	{
		"STAY_NAME" : "베니스모텔"
	},
	{
		"STAY_NAME" : "가든장모텔"
	},
	{
		"STAY_NAME" : "넘버25호텔"
	},
	{
		"STAY_NAME" : "서울모텔"
	},
	{
		"STAY_NAME" : "젠하우스"
	},
	{
		"STAY_NAME" : "게스트하우스"
	},
	{
		"STAY_NAME" : "우암여관"
	},
	{
		"STAY_NAME" : "힐티장"
	},
	{
		"STAY_NAME" : "영광숙박"
	},
	{
		"STAY_NAME" : "안드레연수원"
	},
	{
		"STAY_NAME" : "황토방모텔"
	},
	{
		"STAY_NAME" : "수채화모텔"
	},
	{
		"STAY_NAME" : "틴토호텔"
	},
	{
		"STAY_NAME" : "허브모텔"
	},
	{
		"STAY_NAME" : "프린스호텔"
	},
	{
		"STAY_NAME" : "클라우디아"
	},
	{
		"STAY_NAME" : "천지장여관"
	},
	{
		"STAY_NAME" : "낙원여인숙"
	},
	{
		"STAY_NAME" : "CC호텔"
	},
	{
		"STAY_NAME" : "U모텔"
	},
	{
		"STAY_NAME" : "산수모텔"
	},
	{
		"STAY_NAME" : "U모텔"
	},
	{
		"STAY_NAME" : "산수모텔"
	},
	{
		"STAY_NAME" : "화신장여관"
	},
	{
		"STAY_NAME" : "일루리삿"
	},
	{
		"STAY_NAME" : "명성황토빌"
	},
	{
		"STAY_NAME" : "황규성"
	},
	{
		"STAY_NAME" : "모텔369"
	},
	{
		"STAY_NAME" : "코리아시티관광호텔"
	},
	{
		"STAY_NAME" : "미진모텔"
	},
	{
		"STAY_NAME" : "청운모텔"
	},
	{
		"STAY_NAME" : "미진모텔"
	},
	{
		"STAY_NAME" : "지앤지모텔"
	},
	{
		"STAY_NAME" : "호텔라메르"
	},
	{
		"STAY_NAME" : "범일동 W"
	},
	{
		"STAY_NAME" : "하운드호텔"
	},
	{
		"STAY_NAME" : "라메르관광호텔"
	},
	{
		"STAY_NAME" : "라온호텔"
	},
	{
		"STAY_NAME" : "루이스호텔"
	},
	{
		"STAY_NAME" : "나포리모텔"
	},
	{
		"STAY_NAME" : "리젠시모텔"
	},
	{
		"STAY_NAME" : "나포리"
	},
	{
		"STAY_NAME" : "스토리하우스"
	},
	{
		"STAY_NAME" : "K7모텔"
	},
	{
		"STAY_NAME" : "허브모텔"
	},
	{
		"STAY_NAME" : "해동모텔"
	},
	{
		"STAY_NAME" : "리젠시모텔"
	},
	{
		"STAY_NAME" : "리치모텔"
	},
	{
		"STAY_NAME" : "삼성장여관"
	},
	{
		"STAY_NAME" : "더디자인"
	},
	{
		"STAY_NAME" : "영모텔"
	},
	{
		"STAY_NAME" : "더디자인"
	},
	{
		"STAY_NAME" : "브라운도트 호텔 범일점"
	},
	{
		"STAY_NAME" : "브라운도트호텔"
	},
	{
		"STAY_NAME" : "프린스모텔"
	},
	{
		"STAY_NAME" : "송림장"
	},
	{
		"STAY_NAME" : "힐모텔"
	},
	{
		"STAY_NAME" : "힐모텔"
	},
	{
		"STAY_NAME" : "꿈모텔"
	},
	{
		"STAY_NAME" : "초량리빙텔"
	},
	{
		"STAY_NAME" : "보건탕"
	},
	{
		"STAY_NAME" : "경남여인숙"
	},
	{
		"STAY_NAME" : "동구진로교육지원센터"
	},
	{
		"STAY_NAME" : "월성여인숙"
	},
	{
		"STAY_NAME" : "프라임관광호텔"
	},
	{
		"STAY_NAME" : "동명여인숙"
	},
	{
		"STAY_NAME" : "브라운도트 호텔 부산진역점"
	},
	{
		"STAY_NAME" : "영빈관모텔"
	},
	{
		"STAY_NAME" : "청명여인숙"
	},
	{
		"STAY_NAME" : "수정장여관"
	},
	{
		"STAY_NAME" : "동원장여관"
	},
	{
		"STAY_NAME" : "수정장여관"
	},
	{
		"STAY_NAME" : "본모텔"
	},
	{
		"STAY_NAME" : "부산항힐링야영장"
	},
	{
		"STAY_NAME" : "베스트인시티호텔"
	},
	{
		"STAY_NAME" : "나우빌"
	},
	{
		"STAY_NAME" : "노떼라미아호텔"
	},
	{
		"STAY_NAME" : "씨앤씨모텔"
	},
	{
		"STAY_NAME" : "INN부산"
	},
	{
		"STAY_NAME" : "씨엔씨여관"
	},
	{
		"STAY_NAME" : "멕시멈호텔"
	},
	{
		"STAY_NAME" : "마리나레지던스호텔"
	},
	{
		"STAY_NAME" : "구봉여인숙"
	},
	{
		"STAY_NAME" : "본역여인숙"
	},
	{
		"STAY_NAME" : "물레"
	},
	{
		"STAY_NAME" : "복성여관"
	},
	{
		"STAY_NAME" : "남양장"
	},
	{
		"STAY_NAME" : "장춘모텔"
	},
	{
		"STAY_NAME" : "알프스모텔"
	},
	{
		"STAY_NAME" : "크리스탈낮잠"
	},
	{
		"STAY_NAME" : "대림장"
	},
	{
		"STAY_NAME" : "거창여인숙"
	},
	{
		"STAY_NAME" : "더월드"
	},
	{
		"STAY_NAME" : "황금빌라"
	},
	{
		"STAY_NAME" : "이바구캠프"
	},
	{
		"STAY_NAME" : "이바구캠프"
	},
	{
		"STAY_NAME" : "까꼬막체험센터"
	},
	{
		"STAY_NAME" : "이바구충전소"
	},
	{
		"STAY_NAME" : "오름"
	},
	{
		"STAY_NAME" : "세느모텔"
	},
	{
		"STAY_NAME" : "동원여관"
	},
	{
		"STAY_NAME" : "게스트하우스코리아 부산역점"
	},
	{
		"STAY_NAME" : "새여관"
	},
	{
		"STAY_NAME" : "테마모텔"
	},
	{
		"STAY_NAME" : "웰컴부산"
	},
	{
		"STAY_NAME" : "미라벨모텔"
	},
	{
		"STAY_NAME" : "마리나레지던스"
	},
	{
		"STAY_NAME" : "이데아호텔"
	},
	{
		"STAY_NAME" : "모나코모텔"
	},
	{
		"STAY_NAME" : "부산역비즈니스호텔"
	},
	{
		"STAY_NAME" : "팝콘호텔"
	},
	{
		"STAY_NAME" : "오름 레지던스 호텔"
	},
	{
		"STAY_NAME" : "이데아호텔"
	},
	{
		"STAY_NAME" : "대원모텔"
	},
	{
		"STAY_NAME" : "테레목호스텔"
	},
	{
		"STAY_NAME" : "테레목호스텔"
	},
	{
		"STAY_NAME" : "동일장모텔"
	},
	{
		"STAY_NAME" : "동일장모텔"
	},
	{
		"STAY_NAME" : "미래장"
	},
	{
		"STAY_NAME" : "미래장"
	},
	{
		"STAY_NAME" : "온팍스레지던스"
	},
	{
		"STAY_NAME" : "탑모텔"
	},
	{
		"STAY_NAME" : "라마다앙코르부산역호텔"
	},
	{
		"STAY_NAME" : "원웨이게스트하우스 부산점"
	},
	{
		"STAY_NAME" : "코인모텔"
	},
	{
		"STAY_NAME" : "호텔코코"
	},
	{
		"STAY_NAME" : "힐모텔"
	},
	{
		"STAY_NAME" : "오렌지게스트하우스 부산역점"
	},
	{
		"STAY_NAME" : "모찌호스텔"
	},
	{
		"STAY_NAME" : "아몬드호텔"
	},
	{
		"STAY_NAME" : "탑모텔"
	},
	{
		"STAY_NAME" : "토요코인 부산역1"
	},
	{
		"STAY_NAME" : "부산뷰호텔"
	},
	{
		"STAY_NAME" : "퀸모텔"
	},
	{
		"STAY_NAME" : "까무스모텔"
	},
	{
		"STAY_NAME" : "부영장여관"
	},
	{
		"STAY_NAME" : "청우여인숙"
	},
	{
		"STAY_NAME" : "더웨이호텔"
	},
	{
		"STAY_NAME" : "서울모텔"
	},
	{
		"STAY_NAME" : "호텔26"
	},
	{
		"STAY_NAME" : "서울여관"
	},
	{
		"STAY_NAME" : "아리아모텔"
	},
	{
		"STAY_NAME" : "브라운도트호텔"
	},
	{
		"STAY_NAME" : "3.6.9 모텔"
	},
	{
		"STAY_NAME" : "369모텔"
	},
	{
		"STAY_NAME" : "부산인모텔"
	},
	{
		"STAY_NAME" : "아스티호텔"
	},
	{
		"STAY_NAME" : "파밀리에게스트하우스"
	},
	{
		"STAY_NAME" : "광장관광호텔"
	},
	{
		"STAY_NAME" : "코리아나모텔"
	},
	{
		"STAY_NAME" : "대구여관"
	},
	{
		"STAY_NAME" : "은하모텔"
	},
	{
		"STAY_NAME" : "소호스텔"
	},
	{
		"STAY_NAME" : "첵앤아웃게스트하우스"
	},
	{
		"STAY_NAME" : "숨게스트하우스"
	},
	{
		"STAY_NAME" : "코리안모텔"
	},
	{
		"STAY_NAME" : "태아장모텔"
	},
	{
		"STAY_NAME" : "프린스모텔"
	},
	{
		"STAY_NAME" : "진주여인숙"
	},
	{
		"STAY_NAME" : "프린스모텔"
	},
	{
		"STAY_NAME" : "보라장"
	},
	{
		"STAY_NAME" : "목화모텔"
	},
	{
		"STAY_NAME" : "더비에스호텔"
	},
	{
		"STAY_NAME" : "센텀모텔"
	},
	{
		"STAY_NAME" : "케이게스트"
	},
	{
		"STAY_NAME" : "하운드호텔 부산역"
	},
	{
		"STAY_NAME" : "플러스모텔"
	},
	{
		"STAY_NAME" : "세종장여관"
	},
	{
		"STAY_NAME" : "장안여관"
	},
	{
		"STAY_NAME" : "호텔그레이초량"
	},
	{
		"STAY_NAME" : "호텔포레"
	},
	{
		"STAY_NAME" : "호텔포레 부산역점"
	},
	{
		"STAY_NAME" : "OJ모텔"
	},
	{
		"STAY_NAME" : "동해장여관"
	},
	{
		"STAY_NAME" : "무진장여관"
	},
	{
		"STAY_NAME" : "황금여인숙"
	},
	{
		"STAY_NAME" : "스마일모텔"
	},
	{
		"STAY_NAME" : "단테하우스B"
	},
	{
		"STAY_NAME" : "샤이어호텔"
	},
	{
		"STAY_NAME" : "귀빈모텔"
	},
	{
		"STAY_NAME" : "스마일모텔"
	},
	{
		"STAY_NAME" : "디노호텔"
	},
	{
		"STAY_NAME" : "마이호스텔 부산역점"
	},
	{
		"STAY_NAME" : "콜모텔"
	},
	{
		"STAY_NAME" : "궁중손칼국수"
	},
	{
		"STAY_NAME" : "오션모텔"
	},
	{
		"STAY_NAME" : "썬모텔"
	},
	{
		"STAY_NAME" : "단테라운지"
	},
	{
		"STAY_NAME" : "단비"
	},
	{
		"STAY_NAME" : "한림양식당"
	},
	{
		"STAY_NAME" : "힐코모텔"
	},
	{
		"STAY_NAME" : "만복장여관"
	},
	{
		"STAY_NAME" : "황진이"
	},
	{
		"STAY_NAME" : "만복장여관"
	},
	{
		"STAY_NAME" : "만수장"
	},
	{
		"STAY_NAME" : "갑진여인숙"
	},
	{
		"STAY_NAME" : "유진장모텔"
	},
	{
		"STAY_NAME" : "갑진여인숙"
	},
	{
		"STAY_NAME" : "CHORYANG38"
	},
	{
		"STAY_NAME" : "이스튼모텔"
	},
	{
		"STAY_NAME" : "힐모텔"
	},
	{
		"STAY_NAME" : "신부여인숙"
	},
	{
		"STAY_NAME" : "로얄장여관"
	},
	{
		"STAY_NAME" : "산동여관"
	},
	{
		"STAY_NAME" : "부산숙박닷컴"
	},
	{
		"STAY_NAME" : "필모텔"
	},
	{
		"STAY_NAME" : "게스트하우스 싱글싱글"
	},
	{
		"STAY_NAME" : "Inside Busan Hostel"
	},
	{
		"STAY_NAME" : "워라밸게스트하우스"
	},
	{
		"STAY_NAME" : "태림하우스"
	},
	{
		"STAY_NAME" : "Elephant House"
	},
	{
		"STAY_NAME" : "부산숙박닷컴"
	},
	{
		"STAY_NAME" : "대원장여관"
	},
	{
		"STAY_NAME" : "주식회사 모닝듀"
	},
	{
		"STAY_NAME" : "도원장여관"
	},
	{
		"STAY_NAME" : "동신장여관"
	},
	{
		"STAY_NAME" : "한길여인숙"
	},
	{
		"STAY_NAME" : "르컬렉티브G7바이어반스테이"
	},
	{
		"STAY_NAME" : "스위트모텔"
	},
	{
		"STAY_NAME" : "프린스모텔"
	},
	{
		"STAY_NAME" : "리베모텔"
	},
	{
		"STAY_NAME" : "희망타운빌"
	},
	{
		"STAY_NAME" : "수림모텔"
	},
	{
		"STAY_NAME" : "향수장여관"
	},
	{
		"STAY_NAME" : "락모텔"
	},
	{
		"STAY_NAME" : "COCO모텔"
	},
	{
		"STAY_NAME" : "가자"
	},
	{
		"STAY_NAME" : "MEGAMOTEL"
	},
	{
		"STAY_NAME" : "헬로"
	},
	{
		"STAY_NAME" : "남도여인숙"
	},
	{
		"STAY_NAME" : "꿈모텔"
	},
	{
		"STAY_NAME" : "지엔지모텔"
	},
	{
		"STAY_NAME" : "보브모텔"
	},
	{
		"STAY_NAME" : "호텔아마레"
	},
	{
		"STAY_NAME" : "에덴모텔"
	},
	{
		"STAY_NAME" : "브이모텔"
	},
	{
		"STAY_NAME" : "계림장여관"
	},
	{
		"STAY_NAME" : "삼육구모텔"
	},
	{
		"STAY_NAME" : "토토모텔"
	},
	{
		"STAY_NAME" : "명조여관"
	},
	{
		"STAY_NAME" : "보림모텔"
	},
	{
		"STAY_NAME" : "서호모텔"
	},
	{
		"STAY_NAME" : "롯데모텔"
	},
	{
		"STAY_NAME" : "청록장"
	},
	{
		"STAY_NAME" : "동래구평생학습관"
	},
	{
		"STAY_NAME" : "크리스탈모텔"
	},
	{
		"STAY_NAME" : "한일장"
	},
	{
		"STAY_NAME" : "귀빈장"
	},
	{
		"STAY_NAME" : "세븐브릿지"
	},
	{
		"STAY_NAME" : "로망스모텔"
	},
	{
		"STAY_NAME" : "블루힐모텔"
	},
	{
		"STAY_NAME" : "마모텔"
	},
	{
		"STAY_NAME" : "라찌모텔"
	},
	{
		"STAY_NAME" : "리셰"
	},
	{
		"STAY_NAME" : "세인트나인호텔"
	},
	{
		"STAY_NAME" : "영빈장여관"
	},
	{
		"STAY_NAME" : "이브모텔"
	},
	{
		"STAY_NAME" : "VOS모텔"
	},
	{
		"STAY_NAME" : "호텔농심"
	},
	{
		"STAY_NAME" : "천일온천호텔"
	},
	{
		"STAY_NAME" : "녹천온천호텔"
	},
	{
		"STAY_NAME" : "계림장여관"
	},
	{
		"STAY_NAME" : "더홈레이디"
	},
	{
		"STAY_NAME" : "S모텔"
	},
	{
		"STAY_NAME" : "소호호텔"
	},
	{
		"STAY_NAME" : "삼호장여관"
	},
	{
		"STAY_NAME" : "레지던스머뭄"
	},
	{
		"STAY_NAME" : "동경장여관"
	},
	{
		"STAY_NAME" : "하루모텔"
	},
	{
		"STAY_NAME" : "홈호텔"
	},
	{
		"STAY_NAME" : "아주여관"
	},
	{
		"STAY_NAME" : "거북장여관"
	},
	{
		"STAY_NAME" : "거북장여관"
	},
	{
		"STAY_NAME" : "도원장"
	},
	{
		"STAY_NAME" : "지지배"
	},
	{
		"STAY_NAME" : "TRTHOTEL"
	},
	{
		"STAY_NAME" : "샤이어호텔"
	},
	{
		"STAY_NAME" : "퀸스호텔"
	},
	{
		"STAY_NAME" : "크로바여관"
	},
	{
		"STAY_NAME" : "원진"
	},
	{
		"STAY_NAME" : "SF모텔"
	},
	{
		"STAY_NAME" : "유니크스테이"
	},
	{
		"STAY_NAME" : "부산 비즈니스 호텔"
	},
	{
		"STAY_NAME" : "짝럭셔리호텔"
	},
	{
		"STAY_NAME" : "국제장여관"
	},
	{
		"STAY_NAME" : "국제여관"
	},
	{
		"STAY_NAME" : "국제여관"
	},
	{
		"STAY_NAME" : "부호장여관"
	},
	{
		"STAY_NAME" : "부호장"
	},
	{
		"STAY_NAME" : "부산장"
	},
	{
		"STAY_NAME" : "부산모텔"
	},
	{
		"STAY_NAME" : "로망스모텔"
	},
	{
		"STAY_NAME" : "우리모텔"
	},
	{
		"STAY_NAME" : "넘버25 호텔 서면1번가점"
	},
	{
		"STAY_NAME" : "호텔치즈"
	},
	{
		"STAY_NAME" : "V.V모텔"
	},
	{
		"STAY_NAME" : "호텔J7"
	},
	{
		"STAY_NAME" : "모텔오투"
	},
	{
		"STAY_NAME" : "시티호텔지앤지"
	},
	{
		"STAY_NAME" : "ON모텔"
	},
	{
		"STAY_NAME" : "필 모텔"
	},
	{
		"STAY_NAME" : "Y모텔"
	},
	{
		"STAY_NAME" : "아바모텔"
	},
	{
		"STAY_NAME" : "하림장모텔"
	},
	{
		"STAY_NAME" : "뉴부산장여관"
	},
	{
		"STAY_NAME" : "라라비안코 비즈니스 호텔"
	},
	{
		"STAY_NAME" : "수빈장여관"
	},
	{
		"STAY_NAME" : "더블유모텔부산"
	},
	{
		"STAY_NAME" : "호텔티티"
	},
	{
		"STAY_NAME" : "W모텔"
	},
	{
		"STAY_NAME" : "부산여인숙"
	},
	{
		"STAY_NAME" : "캘리호스텔 서면본점"
	},
	{
		"STAY_NAME" : "J모텔"
	},
	{
		"STAY_NAME" : "놈모텔"
	},
	{
		"STAY_NAME" : "이화장모텔"
	},
	{
		"STAY_NAME" : "369모텔"
	},
	{
		"STAY_NAME" : "호텔밴드"
	},
	{
		"STAY_NAME" : "동광여인숙"
	},
	{
		"STAY_NAME" : "동광여인숙"
	},
	{
		"STAY_NAME" : "초원장"
	},
	{
		"STAY_NAME" : "쉬리모텔"
	},
	{
		"STAY_NAME" : "조아모텔"
	},
	{
		"STAY_NAME" : "삼화여관"
	},
	{
		"STAY_NAME" : "OK모텔"
	},
	{
		"STAY_NAME" : "넘버25호텔"
	},
	{
		"STAY_NAME" : "부산 서면 블루밍호텔"
	},
	{
		"STAY_NAME" : "IB호텔"
	},
	{
		"STAY_NAME" : "유나호텔 비지니스"
	},
	{
		"STAY_NAME" : "블루모텔"
	},
	{
		"STAY_NAME" : "사우스반데코호텔"
	},
	{
		"STAY_NAME" : "솔라리아니시테츠호텔"
	},
	{
		"STAY_NAME" : "K7모텔"
	},
	{
		"STAY_NAME" : "몰디브모텔"
	},
	{
		"STAY_NAME" : "트래블라이트"
	},
	{
		"STAY_NAME" : "일번가모텔"
	},
	{
		"STAY_NAME" : "스테이원"
	},
	{
		"STAY_NAME" : "숨모텔"
	},
	{
		"STAY_NAME" : "홍도장여관"
	},
	{
		"STAY_NAME" : "숨모텔"
	},
	{
		"STAY_NAME" : "부산게스트하우스세리인"
	},
	{
		"STAY_NAME" : "ZAVA모텔"
	},
	{
		"STAY_NAME" : "브이모텔"
	},
	{
		"STAY_NAME" : "모텔지에스"
	},
	{
		"STAY_NAME" : "월렉스모텔"
	},
	{
		"STAY_NAME" : "올리브모텔"
	},
	{
		"STAY_NAME" : "핑크장"
	},
	{
		"STAY_NAME" : "하이모텔"
	},
	{
		"STAY_NAME" : "핑크모텔"
	},
	{
		"STAY_NAME" : "쌍마모텔"
	},
	{
		"STAY_NAME" : "QT모텔"
	},
	{
		"STAY_NAME" : "제니하우스"
	},
	{
		"STAY_NAME" : "미호재스테이"
	},
	{
		"STAY_NAME" : "금하장여관"
	},
	{
		"STAY_NAME" : "금하장여관"
	},
	{
		"STAY_NAME" : "브라운도트 호텔 서면1호점"
	},
	{
		"STAY_NAME" : "젠백팩커스호스텔"
	},
	{
		"STAY_NAME" : "블루백팩커스호스텔"
	},
	{
		"STAY_NAME" : "'미니 바이 유니크스테이'"
	},
	{
		"STAY_NAME" : "1박2일모텔"
	},
	{
		"STAY_NAME" : "X모텔"
	},
	{
		"STAY_NAME" : "K게스트하우스"
	},
	{
		"STAY_NAME" : "24게스트하우스"
	},
	{
		"STAY_NAME" : "호텔야자"
	},
	{
		"STAY_NAME" : "삼천장"
	},
	{
		"STAY_NAME" : "이비스앰배서더"
	},
	{
		"STAY_NAME" : "어반스테이더센트럴"
	},
	{
		"STAY_NAME" : "어스틴게스트하우스"
	},
	{
		"STAY_NAME" : "삼호장여관"
	},
	{
		"STAY_NAME" : "호텔유케이"
	},
	{
		"STAY_NAME" : "지오모텔"
	},
	{
		"STAY_NAME" : "그랑호텔"
	},
	{
		"STAY_NAME" : "호텔 아리아 서면"
	},
	{
		"STAY_NAME" : "브이호텔"
	},
	{
		"STAY_NAME" : "호텔엘레펀트"
	},
	{
		"STAY_NAME" : "호텔 25시"
	},
	{
		"STAY_NAME" : "호텔 더 스위트"
	},
	{
		"STAY_NAME" : "렛츠고모텔"
	},
	{
		"STAY_NAME" : "호텔더스위트"
	},
	{
		"STAY_NAME" : "호텔와이티티"
	},
	{
		"STAY_NAME" : "하운드호텔"
	},
	{
		"STAY_NAME" : "호텔25시"
	},
	{
		"STAY_NAME" : "쉼모텔"
	},
	{
		"STAY_NAME" : "와우모텔"
	},
	{
		"STAY_NAME" : "꿈의궁전모텔"
	},
	{
		"STAY_NAME" : "라이온호텔"
	},
	{
		"STAY_NAME" : "YTT모텔"
	},
	{
		"STAY_NAME" : "호텔야자"
	},
	{
		"STAY_NAME" : "더클럽호텔"
	},
	{
		"STAY_NAME" : "더클럽호텔"
	},
	{
		"STAY_NAME" : "아르반호텔"
	},
	{
		"STAY_NAME" : "엔젤호텔"
	},
	{
		"STAY_NAME" : "호텔 엔젤"
	},
	{
		"STAY_NAME" : "화성장여관"
	},
	{
		"STAY_NAME" : "동명장여관"
	},
	{
		"STAY_NAME" : "R모텔"
	},
	{
		"STAY_NAME" : "신신호텔"
	},
	{
		"STAY_NAME" : "간판 - 태화모텔"
	},
	{
		"STAY_NAME" : "순우정모텔"
	},
	{
		"STAY_NAME" : "화지청소년문화회관"
	},
	{
		"STAY_NAME" : "양정청소년수련관"
	},
	{
		"STAY_NAME" : "낙원모텔"
	},
	{
		"STAY_NAME" : "스테이에비뉴호텔 양정점"
	},
	{
		"STAY_NAME" : "브라운도트 호텔 양정점"
	},
	{
		"STAY_NAME" : "낙원모텔"
	},
	{
		"STAY_NAME" : "스테이에비뉴호텔 양정점"
	},
	{
		"STAY_NAME" : "선풍장여관"
	},
	{
		"STAY_NAME" : "큐브모텔"
	},
	{
		"STAY_NAME" : "호텔369"
	},
	{
		"STAY_NAME" : "호텔369"
	},
	{
		"STAY_NAME" : "호림모텔"
	},
	{
		"STAY_NAME" : "V1모텔"
	},
	{
		"STAY_NAME" : "윙크장"
	},
	{
		"STAY_NAME" : "미광장여관"
	},
	{
		"STAY_NAME" : "골드모텔"
	},
	{
		"STAY_NAME" : "영진목욕탕"
	},
	{
		"STAY_NAME" : "토요코인호텔"
	},
	{
		"STAY_NAME" : "토요코인호텔 부산서면"
	},
	{
		"STAY_NAME" : "신라장여관"
	},
	{
		"STAY_NAME" : "엘라하우스"
	},
	{
		"STAY_NAME" : "하루모텔"
	},
	{
		"STAY_NAME" : "전포여관"
	},
	{
		"STAY_NAME" : "모텔리베라"
	},
	{
		"STAY_NAME" : "젬모텔"
	},
	{
		"STAY_NAME" : "브라운도트호텔"
	},
	{
		"STAY_NAME" : "쏠호텔"
	},
	{
		"STAY_NAME" : "짱9모텔"
	},
	{
		"STAY_NAME" : "모텔리베라"
	},
	{
		"STAY_NAME" : "설탕모텔"
	},
	{
		"STAY_NAME" : "설탕모텔"
	},
	{
		"STAY_NAME" : "리베라여관"
	},
	{
		"STAY_NAME" : "리베라모텔"
	},
	{
		"STAY_NAME" : "이화모텔"
	},
	{
		"STAY_NAME" : "이화장"
	},
	{
		"STAY_NAME" : "초읍 유나호텔"
	},
	{
		"STAY_NAME" : "넘버25 호텔 초읍점"
	},
	{
		"STAY_NAME" : "발렌타인모텔"
	},
	{
		"STAY_NAME" : "온모텔"
	},
	{
		"STAY_NAME" : "아이리스모텔"
	},
	{
		"STAY_NAME" : "루모텔"
	},
	{
		"STAY_NAME" : "비타민호텔"
	},
	{
		"STAY_NAME" : "비타민호텔"
	},
	{
		"STAY_NAME" : "라라호텔"
	},
	{
		"STAY_NAME" : "로얄모텔"
	},
	{
		"STAY_NAME" : "코리아나 모텔"
	},
	{
		"STAY_NAME" : "모텔 알리바바"
	},
	{
		"STAY_NAME" : "아리바바여관"
	},
	{
		"STAY_NAME" : "아리바바여관"
	},
	{
		"STAY_NAME" : "경남장여관"
	},
	{
		"STAY_NAME" : "엠유"
	},
	{
		"STAY_NAME" : "엠유모텔"
	},
	{
		"STAY_NAME" : "테크노모텔"
	},
	{
		"STAY_NAME" : "청포장여관"
	},
	{
		"STAY_NAME" : "뉴몽블랑모텔"
	},
	{
		"STAY_NAME" : "녹천장"
	},
	{
		"STAY_NAME" : "샤롯데모텔"
	},
	{
		"STAY_NAME" : "향원장모텔"
	},
	{
		"STAY_NAME" : "보라장여관"
	},
	{
		"STAY_NAME" : "아몬드호텔"
	},
	{
		"STAY_NAME" : "울산장"
	},
	{
		"STAY_NAME" : "명성장여관"
	},
	{
		"STAY_NAME" : "애플모텔"
	},
	{
		"STAY_NAME" : "썸모텔"
	},
	{
		"STAY_NAME" : "이데아호텔"
	},
	{
		"STAY_NAME" : "스미스호텔"
	},
	{
		"STAY_NAME" : "한일여관"
	},
	{
		"STAY_NAME" : "한일여관"
	},
	{
		"STAY_NAME" : "서울"
	},
	{
		"STAY_NAME" : "국보장여관"
	},
	{
		"STAY_NAME" : "화목장여관"
	},
	{
		"STAY_NAME" : "A모텔"
	},
	{
		"STAY_NAME" : "바르도호텔"
	},
	{
		"STAY_NAME" : "국보장여관"
	},
	{
		"STAY_NAME" : "삼오장여관"
	},
	{
		"STAY_NAME" : "V7모텔"
	},
	{
		"STAY_NAME" : "엘리스모텔"
	},
	{
		"STAY_NAME" : "글로리모텔"
	},
	{
		"STAY_NAME" : "베니스모텔"
	},
	{
		"STAY_NAME" : "세븐모텔"
	},
	{
		"STAY_NAME" : "유선게스트하우스"
	},
	{
		"STAY_NAME" : "창성장여관"
	},
	{
		"STAY_NAME" : "서전별장"
	},
	{
		"STAY_NAME" : "동원장여관"
	},
	{
		"STAY_NAME" : "용궁장여관"
	},
	{
		"STAY_NAME" : "초록장여관"
	},
	{
		"STAY_NAME" : "대업장"
	},
	{
		"STAY_NAME" : "모텔캣츠"
	},
	{
		"STAY_NAME" : "역전여인숙"
	},
	{
		"STAY_NAME" : "프린스모텔"
	},
	{
		"STAY_NAME" : "모란장여관"
	},
	{
		"STAY_NAME" : "M모텔"
	},
	{
		"STAY_NAME" : "뉴캐럿모텔"
	},
	{
		"STAY_NAME" : "와우모텔"
	},
	{
		"STAY_NAME" : "I모텔"
	},
	{
		"STAY_NAME" : "브띠크모텔"
	},
	{
		"STAY_NAME" : "청우장여관"
	},
	{
		"STAY_NAME" : "그린모텔"
	},
	{
		"STAY_NAME" : "V모텔"
	},
	{
		"STAY_NAME" : "쇼모텔"
	},
	{
		"STAY_NAME" : "브라운도트호텔"
	},
	{
		"STAY_NAME" : "동영여인숙"
	},
	{
		"STAY_NAME" : "경수장여관"
	},
	{
		"STAY_NAME" : "영빈장여관"
	},
	{
		"STAY_NAME" : "태흥장여관"
	},
	{
		"STAY_NAME" : "은성장여관"
	},
	{
		"STAY_NAME" : "상록장여관"
	},
	{
		"STAY_NAME" : "아림장"
	},
	{
		"STAY_NAME" : "부산광역시인재개발원"
	},
	{
		"STAY_NAME" : "금곡청소년수련원"
	},
	{
		"STAY_NAME" : "화명오토캠핑장"
	},
	{
		"STAY_NAME" : "1박2일모텔"
	},
	{
		"STAY_NAME" : "스카이모텔"
	},
	{
		"STAY_NAME" : "에이유호텔"
	},
	{
		"STAY_NAME" : "리베라모텔"
	},
	{
		"STAY_NAME" : "매직모텔"
	},
	{
		"STAY_NAME" : "덕천모텔"
	},
	{
		"STAY_NAME" : "만수장모텔"
	},
	{
		"STAY_NAME" : "덕천코코호텔"
	},
	{
		"STAY_NAME" : "온누리원룸텔"
	},
	{
		"STAY_NAME" : "그림모텔"
	},
	{
		"STAY_NAME" : "힐링모텔"
	},
	{
		"STAY_NAME" : "브라운도트호텔"
	},
	{
		"STAY_NAME" : "투헤븐호텔"
	},
	{
		"STAY_NAME" : "티파니모텔"
	},
	{
		"STAY_NAME" : "에스모텔"
	},
	{
		"STAY_NAME" : "모텔썸"
	},
	{
		"STAY_NAME" : "호림장여관"
	},
	{
		"STAY_NAME" : "25시모텔"
	},
	{
		"STAY_NAME" : "북구평생학습관"
	},
	{
		"STAY_NAME" : "육회산장"
	},
	{
		"STAY_NAME" : "계곡산장"
	},
	{
		"STAY_NAME" : "파라디아모텔"
	},
	{
		"STAY_NAME" : "백양장여관"
	},
	{
		"STAY_NAME" : "투헤븐 모텔"
	},
	{
		"STAY_NAME" : "브라운도트 호텔 만덕점"
	},
	{
		"STAY_NAME" : "메아리산장"
	},
	{
		"STAY_NAME" : "겨울연가모텔"
	},
	{
		"STAY_NAME" : "MVG모텔"
	},
	{
		"STAY_NAME" : "유진모텔"
	},
	{
		"STAY_NAME" : "나인투나인모텔"
	},
	{
		"STAY_NAME" : "투헤븐모텔"
	},
	{
		"STAY_NAME" : "더젠틀호텔"
	},
	{
		"STAY_NAME" : "넘버25호텔"
	},
	{
		"STAY_NAME" : "아브레 모텔"
	},
	{
		"STAY_NAME" : "투헤븐 모텔"
	},
	{
		"STAY_NAME" : "아브레모텔"
	},
	{
		"STAY_NAME" : "브라운도트호텔"
	},
	{
		"STAY_NAME" : "겨울연가모텔"
	},
	{
		"STAY_NAME" : "금정산가나안수양관"
	},
	{
		"STAY_NAME" : "호텔야자"
	},
	{
		"STAY_NAME" : "스파호텔"
	},
	{
		"STAY_NAME" : "B&B모텔"
	},
	{
		"STAY_NAME" : "그레이"
	},
	{
		"STAY_NAME" : "메르시호텔"
	},
	{
		"STAY_NAME" : "호텔브리즈"
	},
	{
		"STAY_NAME" : "스카이모텔"
	},
	{
		"STAY_NAME" : "MU모텔"
	},
	{
		"STAY_NAME" : "런더너모텔"
	},
	{
		"STAY_NAME" : "덴바스타호텔 화명점"
	},
	{
		"STAY_NAME" : "브라운도트호텔"
	},
	{
		"STAY_NAME" : "런더너호텔"
	},
	{
		"STAY_NAME" : "덴바스타호텔"
	},
	{
		"STAY_NAME" : "아바모텔"
	},
	{
		"STAY_NAME" : "루이스J호텔"
	},
	{
		"STAY_NAME" : "에어텔부산"
	},
	{
		"STAY_NAME" : "1954호텔"
	},
	{
		"STAY_NAME" : "호텔프리마"
	},
	{
		"STAY_NAME" : "덴바스타호텔"
	},
	{
		"STAY_NAME" : "제이 모텔"
	},
	{
		"STAY_NAME" : "더스톤브릿지호텔"
	},
	{
		"STAY_NAME" : "제일장여관"
	},
	{
		"STAY_NAME" : "동경장여관"
	},
	{
		"STAY_NAME" : "엠유모텔"
	},
	{
		"STAY_NAME" : "명천비즈니스텔"
	},
	{
		"STAY_NAME" : "경남장여관"
	},
	{
		"STAY_NAME" : "경남장여관"
	},
	{
		"STAY_NAME" : "청수장여관"
	},
	{
		"STAY_NAME" : "호텔 자"
	},
	{
		"STAY_NAME" : "NO25호텔"
	},
	{
		"STAY_NAME" : "비즈니스호텔 르네상스"
	},
	{
		"STAY_NAME" : "호텔파라곤"
	},
	{
		"STAY_NAME" : "한도호텔파라곤"
	},
	{
		"STAY_NAME" : "동남장여관"
	},
	{
		"STAY_NAME" : "송림장여관"
	},
	{
		"STAY_NAME" : "YAJA 사상터미널점"
	},
	{
		"STAY_NAME" : "강남여인숙"
	},
	{
		"STAY_NAME" : "화성장"
	},
	{
		"STAY_NAME" : "강남여인숙"
	},
	{
		"STAY_NAME" : "소르젠떼비지니스호텔"
	},
	{
		"STAY_NAME" : "나이스장"
	},
	{
		"STAY_NAME" : "그린텔"
	},
	{
		"STAY_NAME" : "황금장"
	},
	{
		"STAY_NAME" : "브이원모텔"
	},
	{
		"STAY_NAME" : "스타빌"
	},
	{
		"STAY_NAME" : "센스모텔"
	},
	{
		"STAY_NAME" : "기린장모텔"
	},
	{
		"STAY_NAME" : "하트장여관"
	},
	{
		"STAY_NAME" : "연암장여관"
	},
	{
		"STAY_NAME" : "에스 호텔"
	},
	{
		"STAY_NAME" : "호수장"
	},
	{
		"STAY_NAME" : "하트장여관"
	},
	{
		"STAY_NAME" : "천우장여관"
	},
	{
		"STAY_NAME" : "기린장모텔"
	},
	{
		"STAY_NAME" : "압구정모텔"
	},
	{
		"STAY_NAME" : "아이모텔"
	},
	{
		"STAY_NAME" : "올레모텔"
	},
	{
		"STAY_NAME" : "SHOW모텔"
	},
	{
		"STAY_NAME" : "파트너모텔"
	},
	{
		"STAY_NAME" : "W모텔"
	},
	{
		"STAY_NAME" : "핑크장여관"
	},
	{
		"STAY_NAME" : "뉴코리아모텔"
	},
	{
		"STAY_NAME" : "SHOW모텔"
	},
	{
		"STAY_NAME" : "뉴코리아모텔"
	},
	{
		"STAY_NAME" : "핑크장여관"
	},
	{
		"STAY_NAME" : "금하모텔"
	},
	{
		"STAY_NAME" : "아비송모텔"
	},
	{
		"STAY_NAME" : "호림장여관"
	},
	{
		"STAY_NAME" : "호림장여관"
	},
	{
		"STAY_NAME" : "ND1226HOTEL"
	},
	{
		"STAY_NAME" : "ND.1226호텔"
	},
	{
		"STAY_NAME" : "성일장여관"
	},
	{
		"STAY_NAME" : "옥돌별장"
	},
	{
		"STAY_NAME" : "동원장"
	},
	{
		"STAY_NAME" : "비치모텔"
	},
	{
		"STAY_NAME" : "아리스모텔"
	},
	{
		"STAY_NAME" : "느티나무오리불고기"
	},
	{
		"STAY_NAME" : "일루아"
	},
	{
		"STAY_NAME" : "엔젤장여관"
	},
	{
		"STAY_NAME" : "미림장여관"
	},
	{
		"STAY_NAME" : "1RUA"
	},
	{
		"STAY_NAME" : "서울여관"
	},
	{
		"STAY_NAME" : "발렌타인모텔"
	},
	{
		"STAY_NAME" : "비너스모텔"
	},
	{
		"STAY_NAME" : "산장모텔"
	},
	{
		"STAY_NAME" : "평화장여관"
	},
	{
		"STAY_NAME" : "삼성빌"
	},
	{
		"STAY_NAME" : "힐링장"
	},
	{
		"STAY_NAME" : "썸 호텔"
	},
	{
		"STAY_NAME" : "빈스70호텔"
	},
	{
		"STAY_NAME" : "MU모텔"
	},
	{
		"STAY_NAME" : "루이스호텔"
	},
	{
		"STAY_NAME" : "연풍모텔"
	},
	{
		"STAY_NAME" : "콤마호텔"
	},
	{
		"STAY_NAME" : "나무늘보호텔"
	},
	{
		"STAY_NAME" : "투헤븐모텔"
	},
	{
		"STAY_NAME" : "세느모텔"
	},
	{
		"STAY_NAME" : "비너스모텔"
	},
	{
		"STAY_NAME" : "SS모텔"
	},
	{
		"STAY_NAME" : "삼신장여관"
	},
	{
		"STAY_NAME" : "영남장여관"
	},
	{
		"STAY_NAME" : "온정장"
	},
	{
		"STAY_NAME" : "블랙모텔"
	},
	{
		"STAY_NAME" : "현대장"
	},
	{
		"STAY_NAME" : "스토리아지트"
	},
	{
		"STAY_NAME" : "연화장"
	},
	{
		"STAY_NAME" : "천일장여관"
	},
	{
		"STAY_NAME" : "호텔더반"
	},
	{
		"STAY_NAME" : "연화장"
	},
	{
		"STAY_NAME" : "오아시스장 여관"
	},
	{
		"STAY_NAME" : "천일장여관"
	},
	{
		"STAY_NAME" : "신라장여관"
	},
	{
		"STAY_NAME" : "달빛궁전모텔"
	},
	{
		"STAY_NAME" : "동양장여관"
	},
	{
		"STAY_NAME" : "네츄럴모텔"
	},
	{
		"STAY_NAME" : "타임캐슬"
	},
	{
		"STAY_NAME" : "러브빌원룸"
	},
	{
		"STAY_NAME" : "태화장여관"
	},
	{
		"STAY_NAME" : "풍유장여관"
	},
	{
		"STAY_NAME" : "제일장여관"
	},
	{
		"STAY_NAME" : "수복장여관"
	},
	{
		"STAY_NAME" : "수복장여관"
	},
	{
		"STAY_NAME" : "산유장여관"
	},
	{
		"STAY_NAME" : "금강"
	},
	{
		"STAY_NAME" : "하운드호텔"
	},
	{
		"STAY_NAME" : "브라운도트사상르네시떼점"
	},
	{
		"STAY_NAME" : "프리미엄아바호텔"
	},
	{
		"STAY_NAME" : "하이디자인호텔"
	},
	{
		"STAY_NAME" : "헤라모텔"
	},
	{
		"STAY_NAME" : "금천모텔"
	},
	{
		"STAY_NAME" : "휴모텔"
	},
	{
		"STAY_NAME" : "반게스트하우스"
	},
	{
		"STAY_NAME" : "허니슬립"
	},
	{
		"STAY_NAME" : "레이게스트하우스"
	},
	{
		"STAY_NAME" : "에이치라운지"
	},
	{
		"STAY_NAME" : "광안273"
	},
	{
		"STAY_NAME" : "에이모텔"
	},
	{
		"STAY_NAME" : "피코블루"
	},
	{
		"STAY_NAME" : "이화맨션"
	},
	{
		"STAY_NAME" : "뷰티풀뷰부산-광안대교"
	},
	{
		"STAY_NAME" : "베스트루이스해밀턴호텔"
	},
	{
		"STAY_NAME" : "꿈모텔"
	},
	{
		"STAY_NAME" : "마린뷰호텔"
	},
	{
		"STAY_NAME" : "오션뷰호텔"
	},
	{
		"STAY_NAME" : "브라운도트호텔"
	},
	{
		"STAY_NAME" : "에이치에비뉴호텔"
	},
	{
		"STAY_NAME" : "오션스테이호텔"
	},
	{
		"STAY_NAME" : "오션투헤븐"
	},
	{
		"STAY_NAME" : "오션 더 포인트 호텔"
	},
	{
		"STAY_NAME" : "더베이클럽호텔"
	},
	{
		"STAY_NAME" : "오션더포인트호텔"
	},
	{
		"STAY_NAME" : "호텔디옴므"
	},
	{
		"STAY_NAME" : "와바모텔"
	},
	{
		"STAY_NAME" : "넘버25호텔 광안점"
	},
	{
		"STAY_NAME" : "스타호텔"
	},
	{
		"STAY_NAME" : "NO25호스텔"
	},
	{
		"STAY_NAME" : "넘버25호텔"
	},
	{
		"STAY_NAME" : "벡스코호스텔"
	},
	{
		"STAY_NAME" : "수변모텔"
	},
	{
		"STAY_NAME" : "호텔더그랑"
	},
	{
		"STAY_NAME" : "와이모텔"
	},
	{
		"STAY_NAME" : "페트라하우스"
	},
	{
		"STAY_NAME" : "게스트하우스어반"
	},
	{
		"STAY_NAME" : "레지던스호텔 다온채"
	},
	{
		"STAY_NAME" : "광안스테이"
	},
	{
		"STAY_NAME" : "옐로우라이트하우스"
	},
	{
		"STAY_NAME" : "가든장여관"
	},
	{
		"STAY_NAME" : "비엔나모텔"
	},
	{
		"STAY_NAME" : "호텔런더너"
	},
	{
		"STAY_NAME" : "거북모텔"
	},
	{
		"STAY_NAME" : "더폼호스텔"
	},
	{
		"STAY_NAME" : "호텔야자"
	},
	{
		"STAY_NAME" : "더폼하우스"
	},
	{
		"STAY_NAME" : "호텔메종"
	},
	{
		"STAY_NAME" : "레하"
	},
	{
		"STAY_NAME" : "궁모텔"
	},
	{
		"STAY_NAME" : "정수장여관"
	},
	{
		"STAY_NAME" : "라움103"
	},
	{
		"STAY_NAME" : "언플랜드88"
	},
	{
		"STAY_NAME" : "스마일하우스"
	},
	{
		"STAY_NAME" : "어반하우스펜트"
	},
	{
		"STAY_NAME" : "더웨이브"
	},
	{
		"STAY_NAME" : "휴일"
	},
	{
		"STAY_NAME" : "호텔AG405"
	},
	{
		"STAY_NAME" : "헤븐리펜트하우스"
	},
	{
		"STAY_NAME" : "호텔헤이"
	},
	{
		"STAY_NAME" : "Q모텔"
	},
	{
		"STAY_NAME" : "게드게스트하우스"
	},
	{
		"STAY_NAME" : "H에비뉴"
	},
	{
		"STAY_NAME" : "바다산책펜트하우스"
	},
	{
		"STAY_NAME" : "아정모텔"
	},
	{
		"STAY_NAME" : "더엠모텔"
	},
	{
		"STAY_NAME" : "어반하우스"
	},
	{
		"STAY_NAME" : "브라운도트호텔"
	},
	{
		"STAY_NAME" : "귀빈모텔"
	},
	{
		"STAY_NAME" : "블루밍모텔"
	},
	{
		"STAY_NAME" : "대호모텔"
	},
	{
		"STAY_NAME" : "알프스모텔"
	},
	{
		"STAY_NAME" : "미진장여관"
	},
	{
		"STAY_NAME" : "무진장여인숙"
	},
	{
		"STAY_NAME" : "제일여관"
	},
	{
		"STAY_NAME" : "브이호텔"
	},
	{
		"STAY_NAME" : "MU모텔"
	},
	{
		"STAY_NAME" : "더 제니스 호텔"
	},
	{
		"STAY_NAME" : "우노레지던스"
	},
	{
		"STAY_NAME" : "아바모텔"
	},
	{
		"STAY_NAME" : "R모텔"
	},
	{
		"STAY_NAME" : "아마레호텔연산점"
	},
	{
		"STAY_NAME" : "시애틀비 호텔"
	},
	{
		"STAY_NAME" : "호텔야자 연산1호점"
	},
	{
		"STAY_NAME" : "호텔 스미스"
	},
	{
		"STAY_NAME" : "호텔야자 연산1호점"
	},
	{
		"STAY_NAME" : "위드모텔"
	},
	{
		"STAY_NAME" : "엘루이모텔"
	},
	{
		"STAY_NAME" : "조이모텔"
	},
	{
		"STAY_NAME" : "WABA모텔"
	},
	{
		"STAY_NAME" : "아르빌"
	},
	{
		"STAY_NAME" : "WABA모텔"
	},
	{
		"STAY_NAME" : "노블모텔"
	},
	{
		"STAY_NAME" : "로즈모텔"
	},
	{
		"STAY_NAME" : "궁전모텔"
	},
	{
		"STAY_NAME" : "OH모텔"
	},
	{
		"STAY_NAME" : "더킹호텔"
	},
	{
		"STAY_NAME" : "산호장여관"
	},
	{
		"STAY_NAME" : "한양장여관"
	},
	{
		"STAY_NAME" : "토곡장여관"
	},
	{
		"STAY_NAME" : "브라운도트 호텔 연산토곡점"
	},
	{
		"STAY_NAME" : "호텔로이"
	},
	{
		"STAY_NAME" : "투헤븐호텔"
	},
	{
		"STAY_NAME" : "연산 토곡 그레이191 호텔"
	},
	{
		"STAY_NAME" : "호텔 로이"
	},
	{
		"STAY_NAME" : "새림장여관"
	},
	{
		"STAY_NAME" : "호텔오마이"
	},
	{
		"STAY_NAME" : "황토방모텔"
	},
	{
		"STAY_NAME" : "발리호텔"
	},
	{
		"STAY_NAME" : "샤이어호텔"
	},
	{
		"STAY_NAME" : "일루아"
	},
	{
		"STAY_NAME" : "프린스모텔"
	},
	{
		"STAY_NAME" : "휴모텔"
	},
	{
		"STAY_NAME" : "아르반 시티 호텔"
	},
	{
		"STAY_NAME" : "발리모텔"
	},
	{
		"STAY_NAME" : "초원장여관"
	},
	{
		"STAY_NAME" : "퀸스모텔"
	},
	{
		"STAY_NAME" : "샤이어모텔"
	},
	{
		"STAY_NAME" : "드림텔"
	},
	{
		"STAY_NAME" : "토마토모텔"
	},
	{
		"STAY_NAME" : "파라다이스모텔"
	},
	{
		"STAY_NAME" : "태화장여관"
	},
	{
		"STAY_NAME" : "호텔더루아"
	},
	{
		"STAY_NAME" : "BNB호텔"
	},
	{
		"STAY_NAME" : "웁스모텔"
	},
	{
		"STAY_NAME" : "잠자리모텔"
	},
	{
		"STAY_NAME" : "유아인호텔"
	},
	{
		"STAY_NAME" : "17th 호텔"
	},
	{
		"STAY_NAME" : "하운드호텔 연산"
	},
	{
		"STAY_NAME" : "문화장여관"
	},
	{
		"STAY_NAME" : "다이아몬드호텔"
	},
	{
		"STAY_NAME" : "와이유모텔"
	},
	{
		"STAY_NAME" : "부원장"
	},
	{
		"STAY_NAME" : "아이유모텔"
	},
	{
		"STAY_NAME" : "아이유모텔"
	},
	{
		"STAY_NAME" : "엠버스호텔"
	},
	{
		"STAY_NAME" : "굿스테이 센트럴 호텔"
	},
	{
		"STAY_NAME" : "목화호텔"
	},
	{
		"STAY_NAME" : "굿타임모텔"
	},
	{
		"STAY_NAME" : "엔젤모텔"
	},
	{
		"STAY_NAME" : "다우장모텔"
	},
	{
		"STAY_NAME" : "브이모텔"
	},
	{
		"STAY_NAME" : "MU플러스모텔"
	},
	{
		"STAY_NAME" : "궁락모텔"
	},
	{
		"STAY_NAME" : "유신모텔"
	},
	{
		"STAY_NAME" : "필모텔"
	},
	{
		"STAY_NAME" : "파크모텔"
	},
	{
		"STAY_NAME" : "럭스모텔"
	},
	{
		"STAY_NAME" : "앙소르홈텔"
	},
	{
		"STAY_NAME" : "JAGUESTHOUSE"
	},
	{
		"STAY_NAME" : "피아노"
	},
	{
		"STAY_NAME" : "호텔얌"
	},
	{
		"STAY_NAME" : "하운드호텔 연산"
	},
	{
		"STAY_NAME" : "동명장모텔"
	},
	{
		"STAY_NAME" : "썸모텔"
	},
	{
		"STAY_NAME" : "원모텔"
	},
	{
		"STAY_NAME" : "이화모텔"
	},
	{
		"STAY_NAME" : "이패션모텔"
	},
	{
		"STAY_NAME" : "행운모텔"
	},
	{
		"STAY_NAME" : "씨사이드모텔"
	},
	{
		"STAY_NAME" : "큐브모텔"
	},
	{
		"STAY_NAME" : "아이존모텔"
	},
	{
		"STAY_NAME" : "나인모텔"
	},
	{
		"STAY_NAME" : "이브모텔"
	},
	{
		"STAY_NAME" : "블루모텔"
	},
	{
		"STAY_NAME" : "항구모텔"
	},
	{
		"STAY_NAME" : "청호여관"
	},
	{
		"STAY_NAME" : "청호여관"
	},
	{
		"STAY_NAME" : "동아장여관"
	},
	{
		"STAY_NAME" : "원모텔"
	},
	{
		"STAY_NAME" : "향남모텔"
	},
	{
		"STAY_NAME" : "아마존모텔"
	},
	{
		"STAY_NAME" : "송원모텔"
	},
	{
		"STAY_NAME" : "덕수모텔"
	},
	{
		"STAY_NAME" : "우리모텔"
	},
	{
		"STAY_NAME" : "태성파크모텔"
	},
	{
		"STAY_NAME" : "첼로모텔"
	},
	{
		"STAY_NAME" : "태성파크모텔"
	},
	{
		"STAY_NAME" : "노스하버호텔부산"
	},
	{
		"STAY_NAME" : "비지비미디호텔"
	},
	{
		"STAY_NAME" : "미디호텔부산"
	},
	{
		"STAY_NAME" : "한국모텔"
	},
	{
		"STAY_NAME" : "ZAM101HOTEL"
	},
	{
		"STAY_NAME" : "하운드호텔 사상점"
	},
	{
		"STAY_NAME" : "록수장여관"
	},
	{
		"STAY_NAME" : "태화장여관"
	},
	{
		"STAY_NAME" : "덕성여인숙"
	},
	{
		"STAY_NAME" : "동심여관"
	},
	{
		"STAY_NAME" : "성림장여관"
	},
	{
		"STAY_NAME" : "젬모텔"
	},
	{
		"STAY_NAME" : "호텔 979"
	},
	{
		"STAY_NAME" : "화성장"
	},
	{
		"STAY_NAME" : "호텔이레"
	},
	{
		"STAY_NAME" : "넘버25호텔"
	},
	{
		"STAY_NAME" : "운수장여관"
	},
	{
		"STAY_NAME" : "미도여관"
	},
	{
		"STAY_NAME" : "삼락생태공원오토캠핑장"
	},
	{
		"STAY_NAME" : "태양장여관"
	},
	{
		"STAY_NAME" : "큐모텔"
	},
	{
		"STAY_NAME" : "보브모텔"
	},
	{
		"STAY_NAME" : "웁스모텔"
	},
	{
		"STAY_NAME" : "호텔더메이"
	},
	{
		"STAY_NAME" : "옥림모텔"
	},
	{
		"STAY_NAME" : "성주여관"
	},
	{
		"STAY_NAME" : "송학장여관"
	},
	{
		"STAY_NAME" : "짝모텔"
	},
	{
		"STAY_NAME" : "브라운도트호텔"
	},
	{
		"STAY_NAME" : "호텔프랜치코드"
	},
	{
		"STAY_NAME" : "W모텔"
	},
	{
		"STAY_NAME" : "빅토리아모텔"
	},
	{
		"STAY_NAME" : "대구여관"
	},
	{
		"STAY_NAME" : "플라워모텔"
	},
	{
		"STAY_NAME" : "송민장여관"
	},
	{
		"STAY_NAME" : "미니호텔"
	},
	{
		"STAY_NAME" : "은성장여관"
	},
	{
		"STAY_NAME" : "초원장여관"
	},
	{
		"STAY_NAME" : "신신장여관"
	},
	{
		"STAY_NAME" : "369모텔"
	},
	{
		"STAY_NAME" : "엔젤모텔"
	},
	{
		"STAY_NAME" : "코코모텔"
	},
	{
		"STAY_NAME" : "방가방가게스트하우스"
	},
	{
		"STAY_NAME" : "방가방가게스트하우스"
	},
	{
		"STAY_NAME" : "연희모텔"
	},
	{
		"STAY_NAME" : "경동장여관"
	},
	{
		"STAY_NAME" : "삼풍장여관"
	},
	{
		"STAY_NAME" : "파라다이스"
	},
	{
		"STAY_NAME" : "파라다이스모텔"
	},
	{
		"STAY_NAME" : "대창여관"
	},
	{
		"STAY_NAME" : "청운장"
	},
	{
		"STAY_NAME" : "비엘모텔"
	},
	{
		"STAY_NAME" : "은하모텔"
	},
	{
		"STAY_NAME" : "유진여인숙"
	},
	{
		"STAY_NAME" : "미모텔"
	},
	{
		"STAY_NAME" : "오렌지모텔"
	},
	{
		"STAY_NAME" : "에덴장여관"
	},
	{
		"STAY_NAME" : "동경장여관"
	},
	{
		"STAY_NAME" : "9월모텔"
	},
	{
		"STAY_NAME" : "로쏘호텔"
	},
	{
		"STAY_NAME" : "늘봄모텔"
	},
	{
		"STAY_NAME" : "위브모텔"
	},
	{
		"STAY_NAME" : "프린스모텔"
	},
	{
		"STAY_NAME" : "위브모텔"
	},
	{
		"STAY_NAME" : "EG모텔"
	},
	{
		"STAY_NAME" : "크로바 호텔"
	},
	{
		"STAY_NAME" : "삼오모텔"
	},
	{
		"STAY_NAME" : "로망스모텔"
	},
	{
		"STAY_NAME" : "로망스모텔"
	},
	{
		"STAY_NAME" : "지티모텔"
	},
	{
		"STAY_NAME" : "라라모텔"
	},
	{
		"STAY_NAME" : "락모텔"
	},
	{
		"STAY_NAME" : "그리스"
	},
	{
		"STAY_NAME" : "한미장여관"
	},
	{
		"STAY_NAME" : "오이아호텔"
	},
	{
		"STAY_NAME" : "모텔그리스"
	},
	{
		"STAY_NAME" : "로망스"
	},
	{
		"STAY_NAME" : "비치모텔"
	},
	{
		"STAY_NAME" : "서울모텔"
	},
	{
		"STAY_NAME" : "코자837모텔"
	},
	{
		"STAY_NAME" : "6월모텔"
	},
	{
		"STAY_NAME" : "원모텔"
	},
	{
		"STAY_NAME" : "유성여관"
	},
	{
		"STAY_NAME" : "부산 당리 오투"
	},
	{
		"STAY_NAME" : "맥스모텔"
	},
	{
		"STAY_NAME" : "귀빈모텔"
	},
	{
		"STAY_NAME" : "갈매기하우스"
	},
	{
		"STAY_NAME" : "신평여관"
	},
	{
		"STAY_NAME" : "신평모텔"
	},
	{
		"STAY_NAME" : "블루문모텔"
	},
	{
		"STAY_NAME" : "여명모텔"
	},
	{
		"STAY_NAME" : "투하트"
	},
	{
		"STAY_NAME" : "성풍여관"
	},
	{
		"STAY_NAME" : "레이어스호텔"
	},
	{
		"STAY_NAME" : "프로포즈모텔"
	},
	{
		"STAY_NAME" : "하단해원모텔"
	},
	{
		"STAY_NAME" : "호텔야오"
	},
	{
		"STAY_NAME" : "해원모텔"
	},
	{
		"STAY_NAME" : "경희모텔"
	},
	{
		"STAY_NAME" : "휴모텔"
	},
	{
		"STAY_NAME" : "K모텔"
	},
	{
		"STAY_NAME" : "E팰리스호텔"
	},
	{
		"STAY_NAME" : "모텔 파라다이스"
	},
	{
		"STAY_NAME" : "발리모텔"
	},
	{
		"STAY_NAME" : "E 팰리스 호텔"
	},
	{
		"STAY_NAME" : "모텔츄츄"
	},
	{
		"STAY_NAME" : "브라운도트호텔"
	},
	{
		"STAY_NAME" : "발렌타인 모텔"
	},
	{
		"STAY_NAME" : "호텔메르시엘"
	},
	{
		"STAY_NAME" : "공원장여관"
	},
	{
		"STAY_NAME" : "세방장여관"
	},
	{
		"STAY_NAME" : "대하장모텔"
	},
	{
		"STAY_NAME" : "돔보여관"
	},
	{
		"STAY_NAME" : "라스베가스관광호텔"
	},
	{
		"STAY_NAME" : "그린힐호텔"
	},
	{
		"STAY_NAME" : "로얄모텔"
	},
	{
		"STAY_NAME" : "동진장여관"
	},
	{
		"STAY_NAME" : "굿타임"
	},
	{
		"STAY_NAME" : "모텔와이티티"
	},
	{
		"STAY_NAME" : "머물다호텔"
	},
	{
		"STAY_NAME" : "퍼블릭"
	},
	{
		"STAY_NAME" : "넘버25호텔"
	},
	{
		"STAY_NAME" : "YTT모텔"
	},
	{
		"STAY_NAME" : "와우호텔"
	},
	{
		"STAY_NAME" : "퀸모텔"
	},
	{
		"STAY_NAME" : "퍼블릭모텔"
	},
	{
		"STAY_NAME" : "칠백장모텔"
	},
	{
		"STAY_NAME" : "동성여인숙"
	},
	{
		"STAY_NAME" : "칠성여인숙"
	},
	{
		"STAY_NAME" : "부산비치관광호텔"
	},
	{
		"STAY_NAME" : "대흥장"
	},
	{
		"STAY_NAME" : "대명장여관"
	},
	{
		"STAY_NAME" : "대흥장"
	},
	{
		"STAY_NAME" : "삼화여인숙"
	},
	{
		"STAY_NAME" : "대명장여관"
	},
	{
		"STAY_NAME" : "제일장"
	},
	{
		"STAY_NAME" : "부산탕"
	},
	{
		"STAY_NAME" : "충무여관"
	},
	{
		"STAY_NAME" : "동미여인숙"
	},
	{
		"STAY_NAME" : "금호장"
	},
	{
		"STAY_NAME" : "라까사델솔 게스트하우스"
	},
	{
		"STAY_NAME" : "부산 코인 독채하우스"
	},
	{
		"STAY_NAME" : "구덕장모텔"
	},
	{
		"STAY_NAME" : "구덕야영장"
	},
	{
		"STAY_NAME" : "구덕야영장구덕수련원"
	},
	{
		"STAY_NAME" : "듀코"
	},
	{
		"STAY_NAME" : "템플스테이생활관"
	},
	{
		"STAY_NAME" : "남경여관"
	},
	{
		"STAY_NAME" : "투헤븐호텔"
	},
	{
		"STAY_NAME" : "99.9호텔"
	},
	{
		"STAY_NAME" : "마리나호텔"
	},
	{
		"STAY_NAME" : "모아모텔"
	},
	{
		"STAY_NAME" : "페어필드바이메리어트"
	},
	{
		"STAY_NAME" : "베스트웨스턴플러스 부산송도호텔"
	},
	{
		"STAY_NAME" : "호텔아비숑"
	},
	{
		"STAY_NAME" : "송도아바모텔 암남점"
	},
	{
		"STAY_NAME" : "큐파이브호텔"
	},
	{
		"STAY_NAME" : "송도오토캠핑장"
	},
	{
		"STAY_NAME" : "코자자호텔"
	},
	{
		"STAY_NAME" : "AVA모텔"
	},
	{
		"STAY_NAME" : "큐파이브호텔"
	},
	{
		"STAY_NAME" : "브이모텔"
	},
	{
		"STAY_NAME" : "아비숑"
	},
	{
		"STAY_NAME" : "송도모텔"
	},
	{
		"STAY_NAME" : "에이스모텔"
	},
	{
		"STAY_NAME" : "금화장모텔"
	},
	{
		"STAY_NAME" : "옐로하우스"
	},
	{
		"STAY_NAME" : "M모텔"
	},
	{
		"STAY_NAME" : "피닉스모텔"
	},
	{
		"STAY_NAME" : "로얄장"
	},
	{
		"STAY_NAME" : "호성장여관"
	},
	{
		"STAY_NAME" : "남산장여관"
	},
	{
		"STAY_NAME" : "로얄장"
	},
	{
		"STAY_NAME" : "씨송도게스트하우스"
	},
	{
		"STAY_NAME" : "2월호텔 송도점"
	},
	{
		"STAY_NAME" : "파인힐모텔"
	},
	{
		"STAY_NAME" : "아리아호텔"
	},
	{
		"STAY_NAME" : "송도비치호텔"
	},
	{
		"STAY_NAME" : "SKY모텔"
	},
	{
		"STAY_NAME" : "호텔쿼츠"
	},
	{
		"STAY_NAME" : "맥스모텔"
	},
	{
		"STAY_NAME" : "아이비하우스"
	},
	{
		"STAY_NAME" : "귀빈장"
	},
	{
		"STAY_NAME" : "와우모텔"
	},
	{
		"STAY_NAME" : "더메이"
	},
	{
		"STAY_NAME" : "부산게스트하우스 숨 송도점"
	},
	{
		"STAY_NAME" : "유엔송도호텔"
	},
	{
		"STAY_NAME" : "더메이"
	},
	{
		"STAY_NAME" : "브라운도트호텔 송도해수욕장점"
	},
	{
		"STAY_NAME" : "EL호텔"
	},
	{
		"STAY_NAME" : "호텔얌"
	},
	{
		"STAY_NAME" : "부산 송도 휴"
	},
	{
		"STAY_NAME" : "봄모텔"
	},
	{
		"STAY_NAME" : "베네치아모텔"
	},
	{
		"STAY_NAME" : "다모아모텔"
	},
	{
		"STAY_NAME" : "여행공장"
	},
	{
		"STAY_NAME" : "퀸모텔"
	},
	{
		"STAY_NAME" : "수모텔"
	},
	{
		"STAY_NAME" : "송해장"
	},
	{
		"STAY_NAME" : "퀸모텔"
	},
	{
		"STAY_NAME" : "천마에코하우스"
	},
	{
		"STAY_NAME" : "더샵호텔"
	},
	{
		"STAY_NAME" : "더샵호텔"
	},
	{
		"STAY_NAME" : "깐느모텔"
	},
	{
		"STAY_NAME" : "씨네모텔"
	},
	{
		"STAY_NAME" : "버튼호텔"
	},
	{
		"STAY_NAME" : "시티모텔"
	},
	{
		"STAY_NAME" : "부산여인숙"
	},
	{
		"STAY_NAME" : "신광여인숙"
	},
	{
		"STAY_NAME" : "동원여인숙"
	},
	{
		"STAY_NAME" : "성화여인숙"
	},
	{
		"STAY_NAME" : "초원여인숙"
	},
	{
		"STAY_NAME" : "미진여인숙"
	},
	{
		"STAY_NAME" : "남선여인숙"
	},
	{
		"STAY_NAME" : "재건여인숙"
	},
	{
		"STAY_NAME" : "동림여인숙"
	},
	{
		"STAY_NAME" : "우정여인숙"
	},
	{
		"STAY_NAME" : "M모텔"
	},
	{
		"STAY_NAME" : "동림여인숙"
	},
	{
		"STAY_NAME" : "우정여인숙"
	},
	{
		"STAY_NAME" : "재건여인숙"
	},
	{
		"STAY_NAME" : "대흥장"
	},
	{
		"STAY_NAME" : "칠성여인숙"
	},
	{
		"STAY_NAME" : "동국여인숙"
	},
	{
		"STAY_NAME" : "해성장여관"
	},
	{
		"STAY_NAME" : "해성장여관"
	},
	{
		"STAY_NAME" : "바다모텔"
	},
	{
		"STAY_NAME" : "자갈치9월모텔"
	},
	{
		"STAY_NAME" : "수정장여인숙"
	},
	{
		"STAY_NAME" : "삼성장여관"
	},
	{
		"STAY_NAME" : "동성여인숙"
	},
	{
		"STAY_NAME" : "원모텔"
	},
	{
		"STAY_NAME" : "금강모텔"
	},
	{
		"STAY_NAME" : "온모텔"
	},
	{
		"STAY_NAME" : "우리모텔"
	},
	{
		"STAY_NAME" : "동성여인숙"
	},
	{
		"STAY_NAME" : "천수장"
	},
	{
		"STAY_NAME" : "천수장"
	},
	{
		"STAY_NAME" : "브라운도트 호텔 남포충무점"
	},
	{
		"STAY_NAME" : "녹원장"
	},
	{
		"STAY_NAME" : "부산장모텔"
	},
	{
		"STAY_NAME" : "주영레지던스"
	},
	{
		"STAY_NAME" : "초원파크 모텔"
	},
	{
		"STAY_NAME" : "스테이모텔"
	},
	{
		"STAY_NAME" : "더파크 게스트하우스"
	},
	{
		"STAY_NAME" : "뷰띠끄호텔"
	},
	{
		"STAY_NAME" : "광안비치모텔"
	},
	{
		"STAY_NAME" : "광안숲"
	},
	{
		"STAY_NAME" : "WOODHOUSE HOTEL"
	},
	{
		"STAY_NAME" : "호텔 쏘타 컬렉션 더 테라스"
	},
	{
		"STAY_NAME" : "위더스오션"
	},
	{
		"STAY_NAME" : "광안지웰에스테이트오피스텔"
	},
	{
		"STAY_NAME" : "솔게스트하우스 부산파티점"
	},
	{
		"STAY_NAME" : "블루문모텔"
	},
	{
		"STAY_NAME" : "브릿지모텔"
	},
	{
		"STAY_NAME" : "호메르스호텔"
	},
	{
		"STAY_NAME" : "아쿠아펠리스호텔"
	},
	{
		"STAY_NAME" : "켄트 호텔"
	},
	{
		"STAY_NAME" : "SEASEE게스트하우스"
	},
	{
		"STAY_NAME" : "호텔1"
	},
	{
		"STAY_NAME" : "W모텔"
	},
	{
		"STAY_NAME" : "호텔센트럴베이"
	},
	{
		"STAY_NAME" : "H7L호스텔"
	},
	{
		"STAY_NAME" : "뷰먼드 풀빌라"
	},
	{
		"STAY_NAME" : "호메르스 호텔"
	},
	{
		"STAY_NAME" : "제이스테이펜트하우스"
	},
	{
		"STAY_NAME" : "제이스테이 게스트하우스"
	},
	{
		"STAY_NAME" : "루크하우스"
	},
	{
		"STAY_NAME" : "브라운도트 호텔 광안리해수욕장점"
	},
	{
		"STAY_NAME" : "호텔미라주"
	},
	{
		"STAY_NAME" : "누리호스텔"
	},
	{
		"STAY_NAME" : "프리미엄브이관광호텔"
	},
	{
		"STAY_NAME" : "하운드호텔"
	},
	{
		"STAY_NAME" : "투헤븐호텔"
	},
	{
		"STAY_NAME" : "망고호텔"
	},
	{
		"STAY_NAME" : "더뷰게스트하우스"
	},
	{
		"STAY_NAME" : "씨유호텔"
	},
	{
		"STAY_NAME" : "누리호텔"
	},
	{
		"STAY_NAME" : "selfhouse"
	},
	{
		"STAY_NAME" : "에스모텔"
	},
	{
		"STAY_NAME" : "리버호텔"
	},
	{
		"STAY_NAME" : "대웅모텔"
	},
	{
		"STAY_NAME" : "와바모텔"
	},
	{
		"STAY_NAME" : "투유모텔"
	},
	{
		"STAY_NAME" : "봄날 모텔"
	},
	{
		"STAY_NAME" : "수영맥스모텔"
	},
	{
		"STAY_NAME" : "유토피아관광호텔"
	},
	{
		"STAY_NAME" : "에메랄드모텔"
	},
	{
		"STAY_NAME" : "호텔웁스"
	},
	{
		"STAY_NAME" : "제이모텔"
	},
	{
		"STAY_NAME" : "웁스호텔"
	},
	{
		"STAY_NAME" : "타임모텔"
	},
	{
		"STAY_NAME" : "정수장여관"
	},
	{
		"STAY_NAME" : "호텔더라찌"
	},
	{
		"STAY_NAME" : "부산아시아영화학교"
	},
	{
		"STAY_NAME" : "유성모텔"
	},
	{
		"STAY_NAME" : "씨티모텔"
	},
	{
		"STAY_NAME" : "지게스트하우스"
	},
	{
		"STAY_NAME" : "몽뜨뢰모텔"
	},
	{
		"STAY_NAME" : "디스커버리부산게스트하우스"
	},
	{
		"STAY_NAME" : "JENNYHOUSE"
	},
	{
		"STAY_NAME" : "금련산청소년수련원"
	},
	{
		"STAY_NAME" : "몰디브모텔"
	},
	{
		"STAY_NAME" : "초하루게스트하우스"
	},
	{
		"STAY_NAME" : "호텔마레"
	},
	{
		"STAY_NAME" : "델라디"
	},
	{
		"STAY_NAME" : "썬샤인모텔"
	},
	{
		"STAY_NAME" : "부산세관수련원"
	},
	{
		"STAY_NAME" : "갤러리호텔"
	},
	{
		"STAY_NAME" : "비취모텔"
	},
	{
		"STAY_NAME" : "베이하운드호텔"
	},
	{
		"STAY_NAME" : "지오모텔"
	},
	{
		"STAY_NAME" : "신데렐라모텔"
	},
	{
		"STAY_NAME" : "씨네모텔"
	},
	{
		"STAY_NAME" : "오투모텔"
	},
	{
		"STAY_NAME" : "우창모텔"
	},
	{
		"STAY_NAME" : "낙원장"
	},
	{
		"STAY_NAME" : "O.K모텔"
	},
	{
		"STAY_NAME" : "낙원장여관"
	},
	{
		"STAY_NAME" : "리베모텔"
	},
	{
		"STAY_NAME" : "희빈모텔"
	},
	{
		"STAY_NAME" : "E모텔"
	},
	{
		"STAY_NAME" : "녹원모텔"
	},
	{
		"STAY_NAME" : "문화모텔"
	},
	{
		"STAY_NAME" : "핑크모텔"
	},
	{
		"STAY_NAME" : "문화장"
	},
	{
		"STAY_NAME" : "강남모텔"
	},
	{
		"STAY_NAME" : "신원모텔"
	},
	{
		"STAY_NAME" : "드림모텔"
	},
	{
		"STAY_NAME" : "테마모텔"
	},
	{
		"STAY_NAME" : "파티파티룸룸"
	},
	{
		"STAY_NAME" : "산해모텔"
	},
	{
		"STAY_NAME" : "모텔G2"
	},
	{
		"STAY_NAME" : "함지골청소년수련관"
	},
	{
		"STAY_NAME" : "아란치모텔"
	},
	{
		"STAY_NAME" : "태종파크텔"
	},
	{
		"STAY_NAME" : "M모텔"
	},
	{
		"STAY_NAME" : "하얀성모텔"
	},
	{
		"STAY_NAME" : "비치모텔"
	},
	{
		"STAY_NAME" : "스쿠버하우스"
	},
	{
		"STAY_NAME" : "호텔브릿지"
	},
	{
		"STAY_NAME" : "라발스호텔"
	},
	{
		"STAY_NAME" : "글랜스호텔"
	},
	{
		"STAY_NAME" : "제이모텔"
	},
	{
		"STAY_NAME" : "J"
	},
	{
		"STAY_NAME" : "유성장여관"
	},
	{
		"STAY_NAME" : "럭셔리모텔"
	},
	{
		"STAY_NAME" : "럭셔리모텔"
	},
	{
		"STAY_NAME" : "미미장여관"
	},
	{
		"STAY_NAME" : "프리하우스"
	},
	{
		"STAY_NAME" : "동남모텔"
	},
	{
		"STAY_NAME" : "해성장여관"
	},
	{
		"STAY_NAME" : "시모하우스"
	},
	{
		"STAY_NAME" : "윤슬가"
	},
	{
		"STAY_NAME" : "청학소담"
	},
	{
		"STAY_NAME" : "아레"
	},
	{
		"STAY_NAME" : "조양장여관"
	},
	{
		"STAY_NAME" : "조양장여관"
	},
	{
		"STAY_NAME" : "대영"
	},
	{
		"STAY_NAME" : "대영여관"
	},
	{
		"STAY_NAME" : "큐모텔"
	},
	{
		"STAY_NAME" : "큐모텔"
	},
	{
		"STAY_NAME" : "콤마모텔"
	},
	{
		"STAY_NAME" : "하버펜트하우스"
	},
	{
		"STAY_NAME" : "이코노미24게이스하우스"
	},
	{
		"STAY_NAME" : "더라스트호텔"
	},
	{
		"STAY_NAME" : "힐게스트하우스&카페"
	},
	{
		"STAY_NAME" : "이코노미24게스트"
	},
	{
		"STAY_NAME" : "그랜드모텔"
	},
	{
		"STAY_NAME" : "WA호텔"
	},
	{
		"STAY_NAME" : "바르도호텔"
	},
	{
		"STAY_NAME" : "동산장모텔"
	},
	{
		"STAY_NAME" : "이지스테이"
	},
	{
		"STAY_NAME" : "24게스트하우스"
	},
	{
		"STAY_NAME" : "24게스트하우스"
	},
	{
		"STAY_NAME" : "시나몬트리게스트하우스"
	},
	{
		"STAY_NAME" : "호텔모모"
	},
	{
		"STAY_NAME" : "베이202호텔"
	},
	{
		"STAY_NAME" : "스테이웰호텔"
	},
	{
		"STAY_NAME" : "펀스테이게스트하우스"
	},
	{
		"STAY_NAME" : "미니호텔메이"
	},
	{
		"STAY_NAME" : "호텔린"
	},
	{
		"STAY_NAME" : "K게스트하우스"
	},
	{
		"STAY_NAME" : "K게스트하우스"
	},
	{
		"STAY_NAME" : "오렌지게스트하우스"
	},
	{
		"STAY_NAME" : "브로시스호텔"
	},
	{
		"STAY_NAME" : "대성여인숙"
	},
	{
		"STAY_NAME" : "평화여인숙"
	},
	{
		"STAY_NAME" : "대원장모텔"
	},
	{
		"STAY_NAME" : "동명장여관"
	},
	{
		"STAY_NAME" : "스탠포드인부산"
	},
	{
		"STAY_NAME" : "호텔포레프리미어"
	},
	{
		"STAY_NAME" : "J모텔"
	},
	{
		"STAY_NAME" : "동성장여관"
	},
	{
		"STAY_NAME" : "해변의모텔"
	},
	{
		"STAY_NAME" : "라운지26"
	},
	{
		"STAY_NAME" : "부국모텔"
	},
	{
		"STAY_NAME" : "팝콘호스텔"
	},
	{
		"STAY_NAME" : "갤러리G모텔"
	},
	{
		"STAY_NAME" : "부영장여관"
	},
	{
		"STAY_NAME" : "호텔노아"
	},
	{
		"STAY_NAME" : "테라게스트하우스2"
	},
	{
		"STAY_NAME" : "동궁장여관"
	},
	{
		"STAY_NAME" : "명성장모텔"
	},
	{
		"STAY_NAME" : "남성장여관"
	},
	{
		"STAY_NAME" : "삼원장"
	},
	{
		"STAY_NAME" : "TERRA게스트하우스"
	},
	{
		"STAY_NAME" : "24게스트하우스"
	},
	{
		"STAY_NAME" : "MGM호텔"
	},
	{
		"STAY_NAME" : "브이호텔"
	},
	{
		"STAY_NAME" : "세븐모텔"
	},
	{
		"STAY_NAME" : "V3모텔"
	},
	{
		"STAY_NAME" : "게스트하우스디어문"
	},
	{
		"STAY_NAME" : "대광모텔"
	},
	{
		"STAY_NAME" : "태양장"
	},
	{
		"STAY_NAME" : "오션투헤븐호텔앤스파"
	},
	{
		"STAY_NAME" : "모텔트리"
	},
	{
		"STAY_NAME" : "대성모텔"
	},
	{
		"STAY_NAME" : "BIFF게스트하우스"
	},
	{
		"STAY_NAME" : "로망스모텔"
	},
	{
		"STAY_NAME" : "로즈모텔"
	},
	{
		"STAY_NAME" : "신흥"
	},
	{
		"STAY_NAME" : "평안여인숙"
	},
	{
		"STAY_NAME" : "토요코인호텔"
	},
	{
		"STAY_NAME" : "K79게스트하우스"
	},
	{
		"STAY_NAME" : "넘버25호텔"
	},
	{
		"STAY_NAME" : "호텔콘트"
	},
	{
		"STAY_NAME" : "테라게스트하우스2호점"
	},
	{
		"STAY_NAME" : "하늘섬게스트하우스"
	},
	{
		"STAY_NAME" : "부산관광호텔"
	},
	{
		"STAY_NAME" : "부산장모텔"
	},
	{
		"STAY_NAME" : "MU호텔"
	},
	{
		"STAY_NAME" : "비엔비펜션"
	},
	{
		"STAY_NAME" : "소유호텔"
	},
	{
		"STAY_NAME" : "호텔야자"
	},
	{
		"STAY_NAME" : "부산게스트하우스타워"
	},
	{
		"STAY_NAME" : "아리아호텔"
	},
	{
		"STAY_NAME" : "엘리제호텔"
	},
	{
		"STAY_NAME" : "더하운드호텔"
	},
	{
		"STAY_NAME" : "엘리제호텔"
	},
	{
		"STAY_NAME" : "태양모텔"
	},
	{
		"STAY_NAME" : "에이스모텔"
	},
	{
		"STAY_NAME" : "와이티티호텔남포"
	},
	{
		"STAY_NAME" : "타워힐 호텔"
	},
	{
		"STAY_NAME" : "에이스모텔"
	},
	{
		"STAY_NAME" : "타워힐호텔"
	},
	{
		"STAY_NAME" : "몽베르모텔"
	},
	{
		"STAY_NAME" : "폭시모텔"
	},
	{
		"STAY_NAME" : "호텔40계단"
	},
	{
		"STAY_NAME" : "화춘장여관"
	},
	{
		"STAY_NAME" : "호텔40계단"
	},
	{
		"STAY_NAME" : "방공호게스트하우스"
	},
	{
		"STAY_NAME" : "보수장모텔"
	},
	{
		"STAY_NAME" : "보수장모텔"
	},
	{
		"STAY_NAME" : "호텔그레이"
	},
	{
		"STAY_NAME" : "보하모텔"
	},
	{
		"STAY_NAME" : "호텔빌리"
	},
	{
		"STAY_NAME" : "빌리호텔"
	},
	{
		"STAY_NAME" : "로즈텔"
	},
	{
		"STAY_NAME" : "게스트하우스나우"
	},
	{
		"STAY_NAME" : "놀게스트하우스"
	},
	{
		"STAY_NAME" : "오아시스"
	},
	{
		"STAY_NAME" : "마이호스텔"
	},
	{
		"STAY_NAME" : "파크모텔"
	},
	{
		"STAY_NAME" : "오아시스모텔"
	},
	{
		"STAY_NAME" : "유일모텔"
	},
	{
		"STAY_NAME" : "모텔리베"
	},
	{
		"STAY_NAME" : "새피아모텔"
	},
	{
		"STAY_NAME" : "그랜드모텔"
	},
	{
		"STAY_NAME" : "프린스모텔"
	},
	{
		"STAY_NAME" : "하루애"
	},
	{
		"STAY_NAME" : "우리게스트하우스"
	},
	{
		"STAY_NAME" : "호텔미니"
	},
	{
		"STAY_NAME" : "원모텔"
	},
	{
		"STAY_NAME" : "헤르메스호텔"
	},
	{
		"STAY_NAME" : "미도장"
	},
	{
		"STAY_NAME" : "굿스테이 대영 호텔"
	},
	{
		"STAY_NAME" : "동성장여관"
	},
	{
		"STAY_NAME" : "동성장"
	},
	{
		"STAY_NAME" : "호텔마르쉐"
	},
	{
		"STAY_NAME" : "호텔보브"
	},
	{
		"STAY_NAME" : "지앤비호텔"
	},
	{
		"STAY_NAME" : "오륙도모텔"
	},
	{
		"STAY_NAME" : "해림사우나&휘트니스"
	},
	{
		"STAY_NAME" : "투헤븐호텔"
	},
	{
		"STAY_NAME" : "금강장"
	},
	{
		"STAY_NAME" : "MK게스트하우스"
	},
	{
		"STAY_NAME" : "황토방"
	},
	{
		"STAY_NAME" : "더로컬"
	},
	{
		"STAY_NAME" : "로케트하우스"
	},
	{
		"STAY_NAME" : "큐브모텔"
	},
	{
		"STAY_NAME" : "큐브모텔"
	},
	{
		"STAY_NAME" : "월드굿즈"
	},
	{
		"STAY_NAME" : "힐사이드관광호텔"
	},
	{
		"STAY_NAME" : "코모도호텔"
	},
	{
		"STAY_NAME" : "G호텔"
	},
	{
		"STAY_NAME" : "책앤아웃호스텔"
	},
	{
		"STAY_NAME" : "호텔더루아"
	},
	{
		"STAY_NAME" : "수이호스텔"
	},
	{
		"STAY_NAME" : "배러댄와플센트럴파크호텔"
	},
	{
		"STAY_NAME" : "센트럴파크호텔"
	},
	{
		"STAY_NAME" : "단디게스트하우스"
	},
	{
		"STAY_NAME" : "단디게스트하우스"
	},
	{
		"STAY_NAME" : "크라운하버호텔"
	},
	{
		"STAY_NAME" : "뉴브이모텔"
	},
	{
		"STAY_NAME" : "그레이194호텔"
	},
	{
		"STAY_NAME" : "비센트호텔"
	},
	{
		"STAY_NAME" : "서울모텔"
	},
	{
		"STAY_NAME" : "반달호텔"
	},
	{
		"STAY_NAME" : "커넥트부산호텔"
	},
	{
		"STAY_NAME" : "휴플러스게스트하우스"
	},
	{
		"STAY_NAME" : "플래티넘호텔"
	},
	{
		"STAY_NAME" : "플래티늄호텔"
	},
	{
		"STAY_NAME" : "호텔아벤트리부산"
	},
	{
		"STAY_NAME" : "금빛장여관"
	},
	{
		"STAY_NAME" : "동원모텔"
	},
	{
		"STAY_NAME" : "초원장 여관"
	},
	{
		"STAY_NAME" : "수복장여관"
	},
	{
		"STAY_NAME" : "수복장모텔"
	},
	{
		"STAY_NAME" : "인호텔"
	},
	{
		"STAY_NAME" : "은재모텔"
	},
	{
		"STAY_NAME" : "대구장여관"
	},
	{
		"STAY_NAME" : "목화장여관"
	},
	{
		"STAY_NAME" : "가든장여관"
	},
	{
		"STAY_NAME" : "금수장여관"
	},
	{
		"STAY_NAME" : "센텀게스트하우스"
	},
	{
		"STAY_NAME" : "송정마루민박"
	},
	{
		"STAY_NAME" : "GO모텔"
	},
	{
		"STAY_NAME" : "송정여인숙"
	},
	{
		"STAY_NAME" : "풀하우스펜션"
	},
	{
		"STAY_NAME" : "풀하우스민박"
	},
	{
		"STAY_NAME" : "송정아토펜션"
	},
	{
		"STAY_NAME" : "여우비호텔"
	},
	{
		"STAY_NAME" : "넛지567펜션"
	},
	{
		"STAY_NAME" : "올라호텔"
	},
	{
		"STAY_NAME" : "마린케이풀빌라펜션"
	},
	{
		"STAY_NAME" : "펜톤나인"
	},
	{
		"STAY_NAME" : "스테이모어빌리지펜션"
	},
	{
		"STAY_NAME" : "스테이모어호스텔"
	},
	{
		"STAY_NAME" : "카이브"
	},
	{
		"STAY_NAME" : "송정오셔너스"
	},
	{
		"STAY_NAME" : "플레르 호텔"
	},
	{
		"STAY_NAME" : "카이브 2호점"
	},
	{
		"STAY_NAME" : "브라운도트호텔"
	},
	{
		"STAY_NAME" : "라온호텔"
	},
	{
		"STAY_NAME" : "송정마루민박"
	},
	{
		"STAY_NAME" : "모닝캄펜션"
	},
	{
		"STAY_NAME" : "송정 스테이모어펜션"
	},
	{
		"STAY_NAME" : "플레르 호텔"
	},
	{
		"STAY_NAME" : "샤인우드펜션"
	},
	{
		"STAY_NAME" : "송정미연"
	},
	{
		"STAY_NAME" : "스위트펜션"
	},
	{
		"STAY_NAME" : "이너피스 펜션"
	},
	{
		"STAY_NAME" : "ALOHA게스트하우스"
	},
	{
		"STAY_NAME" : "일로이리조트"
	},
	{
		"STAY_NAME" : "송정토마토민박"
	},
	{
		"STAY_NAME" : "현대민박"
	},
	{
		"STAY_NAME" : "다다민박"
	},
	{
		"STAY_NAME" : "마루민박"
	},
	{
		"STAY_NAME" : "펜션민박 레드문"
	},
	{
		"STAY_NAME" : "그린민박"
	},
	{
		"STAY_NAME" : "호텔홍단"
	},
	{
		"STAY_NAME" : "동원비치민박"
	},
	{
		"STAY_NAME" : "고하우스"
	},
	{
		"STAY_NAME" : "CC민박펜션"
	},
	{
		"STAY_NAME" : "뉴송정민박"
	},
	{
		"STAY_NAME" : "게스트하우스송정"
	},
	{
		"STAY_NAME" : "송정등대민박"
	},
	{
		"STAY_NAME" : "호텔가인"
	},
	{
		"STAY_NAME" : "애플모텔"
	},
	{
		"STAY_NAME" : "호텔하루"
	},
	{
		"STAY_NAME" : "올리브하우스펜션"
	},
	{
		"STAY_NAME" : "마리나모텔"
	},
	{
		"STAY_NAME" : "호텔데이즈A"
	},
	{
		"STAY_NAME" : "호텔데이즈B"
	},
	{
		"STAY_NAME" : "비치웨이 게스트하우스"
	},
	{
		"STAY_NAME" : "송정호텔블루캐슬"
	},
	{
		"STAY_NAME" : "송정초원민박"
	},
	{
		"STAY_NAME" : "무무스하우스"
	},
	{
		"STAY_NAME" : "라이온비치하우스"
	},
	{
		"STAY_NAME" : "우리민박"
	},
	{
		"STAY_NAME" : "옛날민박"
	},
	{
		"STAY_NAME" : "송해여인숙"
	},
	{
		"STAY_NAME" : "미래민박"
	},
	{
		"STAY_NAME" : "도가집민박"
	},
	{
		"STAY_NAME" : "신세계민박"
	},
	{
		"STAY_NAME" : "송원펜션민박"
	},
	{
		"STAY_NAME" : "히딩크펜션"
	},
	{
		"STAY_NAME" : "푸른민박"
	},
	{
		"STAY_NAME" : "알리바바펜션"
	},
	{
		"STAY_NAME" : "에스스테이펜션"
	},
	{
		"STAY_NAME" : "앙스모멍"
	},
	{
		"STAY_NAME" : "브이호텔"
	},
	{
		"STAY_NAME" : "송정호텔젬"
	},
	{
		"STAY_NAME" : "보라카이모텔"
	},
	{
		"STAY_NAME" : "감동호텔"
	},
	{
		"STAY_NAME" : "V모텔"
	},
	{
		"STAY_NAME" : "부산송정민박"
	},
	{
		"STAY_NAME" : "2월호텔"
	},
	{
		"STAY_NAME" : "아이엠호텔"
	},
	{
		"STAY_NAME" : "코코호텔"
	},
	{
		"STAY_NAME" : "세븐모텔"
	},
	{
		"STAY_NAME" : "감동호텔"
	},
	{
		"STAY_NAME" : "송정호텔젬"
	},
	{
		"STAY_NAME" : "보라카이모텔"
	},
	{
		"STAY_NAME" : "아이엠호텔"
	},
	{
		"STAY_NAME" : "GO모텔"
	},
	{
		"STAY_NAME" : "송정 GB그리다펜션"
	},
	{
		"STAY_NAME" : "송정스카이풀빌라펜션"
	},
	{
		"STAY_NAME" : "빌라코트야드"
	},
	{
		"STAY_NAME" : "송정스카이부티크"
	},
	{
		"STAY_NAME" : "해운대카라반펜션"
	},
	{
		"STAY_NAME" : "윙민박"
	},
	{
		"STAY_NAME" : "금하민박"
	},
	{
		"STAY_NAME" : "금강민박"
	},
	{
		"STAY_NAME" : "사계민박"
	},
	{
		"STAY_NAME" : "굿모닝 게스트하우스"
	},
	{
		"STAY_NAME" : "송정바다뷰펜션 커플 가족 단체"
	},
	{
		"STAY_NAME" : "동우장"
	},
	{
		"STAY_NAME" : "부영민박"
	},
	{
		"STAY_NAME" : "소라민박"
	},
	{
		"STAY_NAME" : "큰이모민박"
	},
	{
		"STAY_NAME" : "부산 그레이샌즈풀빌라펜션"
	},
	{
		"STAY_NAME" : "바다봄펜션"
	},
	{
		"STAY_NAME" : "명진게스트하우스"
	},
	{
		"STAY_NAME" : "나무늘보호텔 송정점"
	},
	{
		"STAY_NAME" : "더설레임펜션"
	},
	{
		"STAY_NAME" : "브룩스호텔"
	},
	{
		"STAY_NAME" : "송정바다뷰펜션커플가족단체"
	},
	{
		"STAY_NAME" : "달로달리펜션"
	},
	{
		"STAY_NAME" : "돌담하우스"
	},
	{
		"STAY_NAME" : "뉴비치팬션"
	},
	{
		"STAY_NAME" : "송정호텔"
	},
	{
		"STAY_NAME" : "달로달리펜션"
	},
	{
		"STAY_NAME" : "인연민박"
	},
	{
		"STAY_NAME" : "쿨펜션"
	},
	{
		"STAY_NAME" : "라임펜션"
	},
	{
		"STAY_NAME" : "동원비치민박"
	},
	{
		"STAY_NAME" : "1812게스트하우스"
	},
	{
		"STAY_NAME" : "아리랑펜션"
	},
	{
		"STAY_NAME" : "호텔S"
	},
	{
		"STAY_NAME" : "송정해수락"
	},
	{
		"STAY_NAME" : "송정해변펜션"
	},
	{
		"STAY_NAME" : "송정 빈티지하우스 펜션"
	},
	{
		"STAY_NAME" : "명진게스트하우스"
	},
	{
		"STAY_NAME" : "베이 호텔"
	},
	{
		"STAY_NAME" : "쇼호텔"
	},
	{
		"STAY_NAME" : "라마다앙코르 바이윈덤 부산 해운대"
	},
	{
		"STAY_NAME" : "해운대게스트하우스"
	},
	{
		"STAY_NAME" : "런더너호텔"
	},
	{
		"STAY_NAME" : "오즈미니호텔"
	},
	{
		"STAY_NAME" : "하운드호텔 해운대"
	},
	{
		"STAY_NAME" : "하운드 가든&테라스 호텔"
	},
	{
		"STAY_NAME" : "에스원호텔"
	},
	{
		"STAY_NAME" : "WA호텔"
	},
	{
		"STAY_NAME" : "솔게스트하우스"
	},
	{
		"STAY_NAME" : "소사이어티호텔"
	},
	{
		"STAY_NAME" : "2F게스트하우스"
	},
	{
		"STAY_NAME" : "더비치호텔"
	},
	{
		"STAY_NAME" : "루이스호텔"
	},
	{
		"STAY_NAME" : "SC헬싱키호텔"
	},
	{
		"STAY_NAME" : "이코노미 해운대"
	},
	{
		"STAY_NAME" : "키다리하우스"
	},
	{
		"STAY_NAME" : "JB디자인호텔"
	},
	{
		"STAY_NAME" : "준호텔"
	},
	{
		"STAY_NAME" : "잉카모텔"
	},
	{
		"STAY_NAME" : "판다게스트하우스"
	},
	{
		"STAY_NAME" : "티스테이모텔"
	},
	{
		"STAY_NAME" : "더베이호텔"
	},
	{
		"STAY_NAME" : "스카이게스트하우스해운대"
	},
	{
		"STAY_NAME" : "호텔여기어때"
	},
	{
		"STAY_NAME" : "싼타페모텔"
	},
	{
		"STAY_NAME" : "폭시호텔"
	},
	{
		"STAY_NAME" : "미호텔"
	},
	{
		"STAY_NAME" : "더홈게스트하우스"
	},
	{
		"STAY_NAME" : "게리쿠퍼호텔"
	},
	{
		"STAY_NAME" : "GNG"
	},
	{
		"STAY_NAME" : "산타페모텔"
	},
	{
		"STAY_NAME" : "온모텔"
	},
	{
		"STAY_NAME" : "브이모텔"
	},
	{
		"STAY_NAME" : "폭시호텔"
	},
	{
		"STAY_NAME" : "노블레스모텔"
	},
	{
		"STAY_NAME" : "넘버25호텔"
	},
	{
		"STAY_NAME" : "굿데이메이트 게스트하우스"
	},
	{
		"STAY_NAME" : "그레이그라운드호텔"
	},
	{
		"STAY_NAME" : "세이죤빌"
	},
	{
		"STAY_NAME" : "인디호텔게스트하우스"
	},
	{
		"STAY_NAME" : "인더스트리호텔"
	},
	{
		"STAY_NAME" : "포유호텔"
	},
	{
		"STAY_NAME" : "팍스게스트하우스"
	},
	{
		"STAY_NAME" : "로드비치호텔"
	},
	{
		"STAY_NAME" : "투헤븐호텔"
	},
	{
		"STAY_NAME" : "바다펜션"
	},
	{
		"STAY_NAME" : "해운대 소라펜션"
	},
	{
		"STAY_NAME" : "해변펜션"
	},
	{
		"STAY_NAME" : "호텔여우비"
	},
	{
		"STAY_NAME" : "발렌타인호텔"
	},
	{
		"STAY_NAME" : "해운대블루호텔"
	},
	{
		"STAY_NAME" : "호텔브릭스"
	},
	{
		"STAY_NAME" : "K게스트하우스"
	},
	{
		"STAY_NAME" : "해운대비지니스호텔S"
	},
	{
		"STAY_NAME" : "아이엠레지던스"
	},
	{
		"STAY_NAME" : "쇼호텔"
	},
	{
		"STAY_NAME" : "오게스트"
	},
	{
		"STAY_NAME" : "웨스틴 조선 부산"
	},
	{
		"STAY_NAME" : "하이코리아 호스텔"
	},
	{
		"STAY_NAME" : "파크하얏트부산호텔"
	},
	{
		"STAY_NAME" : "더스위트하우스"
	},
	{
		"STAY_NAME" : "한화리조트"
	},
	{
		"STAY_NAME" : "센텀프리미어호텔"
	},
	{
		"STAY_NAME" : "스테이세븐 센텀 비즈니스"
	},
	{
		"STAY_NAME" : "해운대센텀호텔"
	},
	{
		"STAY_NAME" : "호텔메리케이센텀"
	},
	{
		"STAY_NAME" : "중문더웰테라스"
	},
	{
		"STAY_NAME" : "제이썬 하우스"
	},
	{
		"STAY_NAME" : "궁모텔"
	},
	{
		"STAY_NAME" : "블루보트게스트하우스"
	},
	{
		"STAY_NAME" : "Y 게스트하우스"
	},
	{
		"STAY_NAME" : "팰릭스바이에스티엑스"
	},
	{
		"STAY_NAME" : "에이치스테이호텔"
	},
	{
		"STAY_NAME" : "신라스테이"
	},
	{
		"STAY_NAME" : "ONDA모텔"
	},
	{
		"STAY_NAME" : "잠자리모텔"
	},
	{
		"STAY_NAME" : "피카소 모텔"
	},
	{
		"STAY_NAME" : "티에스에이"
	},
	{
		"STAY_NAME" : "GP Hotel"
	},
	{
		"STAY_NAME" : "달빛테라스"
	},
	{
		"STAY_NAME" : "노엘비지니스호텔"
	},
	{
		"STAY_NAME" : "호텔얌"
	},
	{
		"STAY_NAME" : "엘리게스트하우스"
	},
	{
		"STAY_NAME" : "위게스트하우스"
	},
	{
		"STAY_NAME" : "클럽호텔"
	},
	{
		"STAY_NAME" : "JJINN호텔"
	},
	{
		"STAY_NAME" : "더블유모텔, 부산 해운대구 해운대로59번가길 4"
	},
	{
		"STAY_NAME" : "피카소모텔"
	},
	{
		"STAY_NAME" : "MU모텔"
	},
	{
		"STAY_NAME" : "HOTEL WOW"
	},
	{
		"STAY_NAME" : "에이스모텔"
	},
	{
		"STAY_NAME" : "플로스호텔"
	},
	{
		"STAY_NAME" : "HOTEL WOW"
	},
	{
		"STAY_NAME" : "호텔오"
	},
	{
		"STAY_NAME" : "부산관광공사"
	},
	{
		"STAY_NAME" : "씨앤요트"
	},
	{
		"STAY_NAME" : "오션뷰스테이"
	},
	{
		"STAY_NAME" : "요트스테이"
	},
	{
		"STAY_NAME" : "그린나래호텔"
	},
	{
		"STAY_NAME" : "글로리콘도"
	},
	{
		"STAY_NAME" : "부산요트투어 요트아일랜드"
	},
	{
		"STAY_NAME" : "호텔야자"
	},
	{
		"STAY_NAME" : "더반호텔"
	},
	{
		"STAY_NAME" : "호텔인트로"
	},
	{
		"STAY_NAME" : "해운대캔버스게스트하우스"
	},
	{
		"STAY_NAME" : "캔버스호스텔블랙"
	},
	{
		"STAY_NAME" : "더펫텔프리미엄스위트"
	},
	{
		"STAY_NAME" : "호텔109"
	},
	{
		"STAY_NAME" : "아크블루호텔"
	},
	{
		"STAY_NAME" : "라빈모텔"
	},
	{
		"STAY_NAME" : "오뜨호텔"
	},
	{
		"STAY_NAME" : "베스트루이스해밀턴"
	},
	{
		"STAY_NAME" : "베이몬드호텔"
	},
	{
		"STAY_NAME" : "아크블루호텔"
	},
	{
		"STAY_NAME" : "오뜨바다전망호텔"
	},
	{
		"STAY_NAME" : "베스트루이스해밀턴호텔"
	},
	{
		"STAY_NAME" : "나인모텔"
	},
	{
		"STAY_NAME" : "오렌지호텔"
	},
	{
		"STAY_NAME" : "파스텔여관"
	},
	{
		"STAY_NAME" : "바게트호텔"
	},
	{
		"STAY_NAME" : "해운대호텔 모모쥬스"
	},
	{
		"STAY_NAME" : "동백섬게스트하우스"
	},
	{
		"STAY_NAME" : "아이리스모텔"
	},
	{
		"STAY_NAME" : "이비스버젯앰배서더"
	},
	{
		"STAY_NAME" : "호텔아라"
	},
	{
		"STAY_NAME" : "이스턴베이호텔"
	},
	{
		"STAY_NAME" : "씨모텔"
	},
	{
		"STAY_NAME" : "김치게스트하우스해운대"
	},
	{
		"STAY_NAME" : "호텔블루스토리해운대"
	},
	{
		"STAY_NAME" : "이비스앰배서더해운대"
	},
	{
		"STAY_NAME" : "토요코인호텔"
	},
	{
		"STAY_NAME" : "호텔포레프리미어"
	},
	{
		"STAY_NAME" : "클라우드나인호텔"
	},
	{
		"STAY_NAME" : "2NE1호텔"
	},
	{
		"STAY_NAME" : "호텔포레 프리미어 해운대점"
	},
	{
		"STAY_NAME" : "호텔투애니원"
	},
	{
		"STAY_NAME" : "해운대청소년수련관"
	},
	{
		"STAY_NAME" : "뉴프린스모텔"
	},
	{
		"STAY_NAME" : "일월모텔"
	},
	{
		"STAY_NAME" : "그랜드모텔"
	},
	{
		"STAY_NAME" : "제우스모텔"
	},
	{
		"STAY_NAME" : "센텀J모텔"
	},
	{
		"STAY_NAME" : "세븐모텔"
	},
	{
		"STAY_NAME" : "넘버25 호텔 센텀점 시그니처"
	},
	{
		"STAY_NAME" : "라찌모텔"
	},
	{
		"STAY_NAME" : "스테이안 게스트하우스"
	},
	{
		"STAY_NAME" : "와우모텔"
	},
	{
		"STAY_NAME" : "센텀빌"
	},
	{
		"STAY_NAME" : "이데아호텔"
	},
	{
		"STAY_NAME" : "발렌타인모텔"
	},
	{
		"STAY_NAME" : "재송동 더히트호텔"
	},
	{
		"STAY_NAME" : "베이직하우스"
	},
	{
		"STAY_NAME" : "호텔야자"
	},
	{
		"STAY_NAME" : "프랜치코드"
	},
	{
		"STAY_NAME" : "로망스모텔"
	},
	{
		"STAY_NAME" : "프린스모텔"
	},
	{
		"STAY_NAME" : "몽블랑 여관"
	},
	{
		"STAY_NAME" : "로즈모텔"
	},
	{
		"STAY_NAME" : "엘루이모텔"
	},
	{
		"STAY_NAME" : "호텔S"
	},
	{
		"STAY_NAME" : "센텀모텔"
	},
	{
		"STAY_NAME" : "에스모텔"
	},
	{
		"STAY_NAME" : "M6모텔"
	},
	{
		"STAY_NAME" : "No1모텔"
	},
	{
		"STAY_NAME" : "유모텔"
	},
	{
		"STAY_NAME" : "맥스모텔"
	},
	{
		"STAY_NAME" : "자라모텔"
	},
	{
		"STAY_NAME" : "마리포사모텔"
	},
	{
		"STAY_NAME" : "M6모텔"
	},
	{
		"STAY_NAME" : "더제니스모텔"
	},
	{
		"STAY_NAME" : "W모텔"
	},
	{
		"STAY_NAME" : "해운대 sunny's house"
	},
	{
		"STAY_NAME" : "호텔안"
	},
	{
		"STAY_NAME" : "바다풍경펜션"
	},
	{
		"STAY_NAME" : "바다풍경펜션"
	},
	{
		"STAY_NAME" : "라비드아틀란호텔"
	},
	{
		"STAY_NAME" : "엘리시아부티크호텔"
	},
	{
		"STAY_NAME" : "베스트웨스턴 해운대호텔"
	},
	{
		"STAY_NAME" : "선셋비즈니스호텔"
	},
	{
		"STAY_NAME" : "라메르펜션"
	},
	{
		"STAY_NAME" : "리베로호텔"
	},
	{
		"STAY_NAME" : "파라디아모텔"
	},
	{
		"STAY_NAME" : "팍스게스트하우스"
	},
	{
		"STAY_NAME" : "예그린민박"
	},
	{
		"STAY_NAME" : "Uncle's guesthouse"
	},
	{
		"STAY_NAME" : "해운대바다민박"
	},
	{
		"STAY_NAME" : "도담게스트하우스"
	},
	{
		"STAY_NAME" : "킹콩게스트하우스"
	},
	{
		"STAY_NAME" : "엘시티레지던스"
	},
	{
		"STAY_NAME" : "그랜드엘시티레지던스"
	},
	{
		"STAY_NAME" : "시그니엘 부산"
	},
	{
		"STAY_NAME" : "송도각모텔"
	},
	{
		"STAY_NAME" : "폴에이리조트해운대"
	},
	{
		"STAY_NAME" : "Y게스트하우스"
	},
	{
		"STAY_NAME" : "해운온천대중탕모텔"
	},
	{
		"STAY_NAME" : "선트리호텔"
	},
	{
		"STAY_NAME" : "일루아호텔"
	},
	{
		"STAY_NAME" : "마리나빌라"
	},
	{
		"STAY_NAME" : "해운대오피스텔민박"
	},
	{
		"STAY_NAME" : "화미주연수원"
	},
	{
		"STAY_NAME" : "삼삼오오펜션"
	},
	{
		"STAY_NAME" : "삼삼오오펜션"
	},
	{
		"STAY_NAME" : "휘겔리 호텔"
	},
	{
		"STAY_NAME" : "삼삼오오펜션"
	},
	{
		"STAY_NAME" : "대구장여관"
	},
	{
		"STAY_NAME" : "전망좋은모텔"
	},
	{
		"STAY_NAME" : "미포오션사이드호텔"
	},
	{
		"STAY_NAME" : "더위"
	},
	{
		"STAY_NAME" : "해운대썬블루비치펜션"
	},
	{
		"STAY_NAME" : "포도펜션"
	},
	{
		"STAY_NAME" : "해운대비치모텔"
	},
	{
		"STAY_NAME" : "시원게스트하우스"
	},
	{
		"STAY_NAME" : "챔프호스텔"
	},
	{
		"STAY_NAME" : "마마게스트하우스"
	},
	{
		"STAY_NAME" : "골든베이풀빌라펜션"
	},
	{
		"STAY_NAME" : "해운대펜트하우스"
	},
	{
		"STAY_NAME" : "문탠모텔"
	},
	{
		"STAY_NAME" : "24게스트하우스"
	},
	{
		"STAY_NAME" : "해운대소라텔하우스"
	},
	{
		"STAY_NAME" : "가든모텔"
	},
	{
		"STAY_NAME" : "해운대민박"
	},
	{
		"STAY_NAME" : "백팩커스하우스"
	},
	{
		"STAY_NAME" : "오륙도여관"
	},
	{
		"STAY_NAME" : "파도소리모텔"
	},
	{
		"STAY_NAME" : "매직모텔"
	},
	{
		"STAY_NAME" : "맘게스트하우스"
	},
	{
		"STAY_NAME" : "할매탕"
	},
	{
		"STAY_NAME" : "청사포펜션"
	},
	{
		"STAY_NAME" : "호텔카멜리아"
	},
	{
		"STAY_NAME" : "그랜드조선"
	},
	{
		"STAY_NAME" : "피앤에스호텔"
	},
	{
		"STAY_NAME" : "UH Suite Landscape 4F"
	},
	{
		"STAY_NAME" : "썬클라우드호텔"
	},
	{
		"STAY_NAME" : "페어필드바이메리어트부산호텔"
	},
	{
		"STAY_NAME" : "MS호텔"
	},
	{
		"STAY_NAME" : "UH Suite The Haeundae"
	},
	{
		"STAY_NAME" : "위드게스트하우스"
	},
	{
		"STAY_NAME" : "팝콘호스텔 해운대점"
	},
	{
		"STAY_NAME" : "베니키아호텔해운대"
	},
	{
		"STAY_NAME" : "마리안느호텔"
	},
	{
		"STAY_NAME" : "레지던스 더 문"
	},
	{
		"STAY_NAME" : "석원장"
	},
	{
		"STAY_NAME" : "금호장"
	},
	{
		"STAY_NAME" : "파라다이스호텔"
	},
	{
		"STAY_NAME" : "코오롱 씨클라우드 호텔"
	},
	{
		"STAY_NAME" : "청풍장온천여관"
	},
	{
		"STAY_NAME" : "골든튤립해운대호텔&스위트"
	},
	{
		"STAY_NAME" : "토요코인호텔 해운대2"
	},
	{
		"STAY_NAME" : "팔레드시즈"
	},
	{
		"STAY_NAME" : "칠공하우스"
	},
	{
		"STAY_NAME" : "호텔 더 마크 해운대"
	},
	{
		"STAY_NAME" : "해운대센트럴호텔"
	},
	{
		"STAY_NAME" : "해운대 영무파라드호텔"
	},
	{
		"STAY_NAME" : "해운대네이티브게스트하우스"
	}
]}
const arr =[]
htlist.STAY_INFO.forEach(v=>{
    arr.push(v["STAY_NAME"])
})


while (htlist.length) {
    console.log(htlist.length)
  arr.push(htlist.splice(0, 100));
}
console.log(arr)


arr.forEach(item=>{



item.forEach( v => {
    getJson({
    q: v,
    engine: "google_images",
    ijn: "0",
    api_key: "863b962a3dc1ead80703ec6d1400ff8b7f569e18ffc454c5d8547a9531d1280b"
    }, (json) => {
    console.log(json["images_results"][0].original);
    stayimgs.push(json["images_results"][0].original)
    });
}) 



}) 
console.log(stayimgs)
