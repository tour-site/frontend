// 📁 src/page/FindIdPage.jsx
import { useState } from "react";
import axios from "../api/axiosInstance";

export default function FindIdPage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [result, setResult] = useState("");

  const formatPhone = (value) => {
    const onlyNums = value.replace(/\D/g, "");
    if (onlyNums.length <= 3) return onlyNums;
    if (onlyNums.length <= 7) return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3)}`;
    return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3, 7)}-${onlyNums.slice(7, 11)}`;
  };

  const handleChange = (e) => {
    setPhoneNumber(formatPhone(e.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/member/find-id", { phoneNumber });
      setResult(res.data.result); // ✅ 여기를 result로 정확히!
    } catch {
      setResult("일치하는 정보가 없습니다.");
    }
  };

  return (
    <div>
      <h2>아이디(이메일) 찾기</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="전화번호 (예: 010-1234-5678)"
          value={phoneNumber}
          onChange={handleChange}
        />
        <button type="submit">아이디 찾기</button>
      </form>
      <p>email: {result}</p>
    </div>
  );
}
