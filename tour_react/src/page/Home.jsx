import { useNavigate } from "react-router-dom";
import "../assets/css/Home.css"; // Assuming you have a CSS file for styling

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="home-title">국내 여행 추천 사이트 🧳</h1>
      <div className="home-buttons">
        <button onClick={() => navigate("/member")}>회원 관리</button>
        <button onClick={() => navigate("/hello")}>Hello 테스트</button>
        <button onClick={() => navigate("/bye")}>Bye 테스트</button>
        <button onClick={() => navigate("/mainpage")}>메인</button>
      </div>
    </div>
  );
};

export default Home;
