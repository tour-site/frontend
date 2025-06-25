// 📁 src/page/BoardEditPage.jsx
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";

export default function BoardEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: "", content: "" });

  useEffect(() => {
    axiosInstance.get(`/api/board/${id}`)
      .then((res) => {
        setForm({ title: res.data.title, content: res.data.content });
      })
      .catch(() => alert("게시글을 불러오지 못했습니다."));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.put(`/api/board/${id}`, form);
      alert("게시글이 수정되었습니다.");
      navigate(`/board/${id}`);
    } catch (err) {
      console.error(err);
      alert("수정 실패");
    }
  };

  return (
    <div>
      <h2>게시글 수정</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="제목"
        />
        <textarea
          name="content"
          value={form.content}
          onChange={handleChange}
          placeholder="내용"
        />
        <button type="submit">수정하기</button>
      </form>
    </div>
  );
}
