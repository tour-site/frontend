import React from 'react';
import './Component/Login.css'; // CSS 분리 추천

const Login = () => {
  return (
    <div className="login-container">
      <h2>로그인</h2>
      <form className="login-form">
        <div className="form-group">
          <label>아이디</label>
          <input type="text" placeholder="아이디 입력" />
        </div>
        <div className="form-group">
          <label>비밀번호</label>
          <input type="password" placeholder="비밀번호 입력" />
        </div>
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}

export default Login;