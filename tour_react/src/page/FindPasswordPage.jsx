// 📁 src/page/FindPasswordPage.jsx
import { useState } from "react";
import axios from "../api/axiosInstance";
import "../assets/css/FindPasswordPage.css";

export default function FindPasswordPage() {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [result, setResult] = useState("");

  const formatPhone = (value) => {
    const onlyNums = value.replace(/\D/g, "");
    if (onlyNums.length <= 3) return onlyNums;
    if (onlyNums.length <= 7) return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3)}`;
    return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3, 7)}-${onlyNums.slice(7, 11)}`;
  };

  const handlePhoneChange = (e) => {
    setPhoneNumber(formatPhone(e.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/member/find/password", { email, phoneNumber });
      setResult(res.data.result);
    } catch {
      setResult("이메일 또는 전화번호가 일치하지 않습니다.");
    }
  };

  return (
    <div className="find-pw-container">
      <div className="find-pw-box">
        <h2 className="find-pw-title">비밀번호 찾기</h2>
        <form onSubmit={handleSubmit} className="find-pw-form">
          <input
            type="email"
            placeholder="이메일 입력"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="find-pw-input"
            required
          />
          <input
            type="text"
            placeholder="전화번호 입력 (예: 010-1234-5678)"
            value={phoneNumber}
            onChange={handlePhoneChange}
            className="find-pw-input"
            required
          />
          <button type="submit" className="find-pw-button">비밀번호 찾기</button>
        </form>

        {result && (
          <div className="find-pw-result">
            <p><strong>{result}</strong></p>
          </div>
        )}
      </div>
    </div>
  );
}
