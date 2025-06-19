// 📁 src/pages/Home.jsx
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>홈페이지</h2>
      <Link to="/login">로그인</Link> | <Link to="/mypage">마이페이지</Link>
    </div>
  );
}

export default Home;
