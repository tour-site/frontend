import React from 'react';
import './Component/Signup.css'

const Signup = () => {
  return (
    <div className="signup-container">
      <h2>회원가입</h2>
      <form className="signup-form">
        <div className="form-group">
            <label htmlFor="username">아이디</label>
            <input id="username" type="text" placeholder="아이디를 입력하세요" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">이메일</label>
            <input id="email" type="email" placeholder="이메일을 입력하세요" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">비밀번호</label>
            <input id="password" type="password" placeholder="비밀번호를 입력하세요" required />
          </div>
          <div className="form-group">
            <label htmlFor="passwordConfirm">비밀번호 확인</label>
            <input id="passwordConfirm" type="password" placeholder="비밀번호를 다시 입력하세요" required />
          </div>
          <button type="submit">회원가입</button>
      </form>
    </div>
  );
};

export default Signup;