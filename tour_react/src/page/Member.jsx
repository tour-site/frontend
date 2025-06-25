import { useEffect, useState } from "react";
import axios from "axios";

const Member = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [members, setMembers] = useState([]);

  // 입력값 변경 핸들러
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  // 회원 등록 요청
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8100/api/members", form);
      alert("회원 등록 성공!");
      setForm({ name: "", email: "", password: "" });
      fetchMembers(); // 등록 후 목록 갱신
    } catch (err) {
      console.error("등록 실패:", err);
      alert("회원 등록 실패");
    }
  };

  // 회원 목록 조회 요청
  const fetchMembers = async () => {
    try {
      const res = await axios.get("http://localhost:8100/api/members");
      setMembers(res.data);
    } catch (err) {
      console.error("목록 불러오기 실패:", err);
    }
  };

  // 컴포넌트가 처음 마운트될 때 호출
  useEffect(() => {
    fetchMembers();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>회원 등록</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="이름"
          value={form.name}
          onChange={handleChange}
          required
        /><br />
        <input
          type="email"
          name="email"
          placeholder="이메일"
          value={form.email}
          onChange={handleChange}
          required
        /><br />
        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          value={form.password}
          onChange={handleChange}
          required
        /><br />
        <button type="submit">등록</button>
      </form>

      <h2 style={{ marginTop: 40 }}>회원 목록</h2>
      <ul>
        {members.map((m) => (
          <li key={m.memberId}>
            {m.name} ({m.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Member;
