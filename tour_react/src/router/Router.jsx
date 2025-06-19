import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../page/Home";
import Member from "../page/Member";
import Hello from "../page/Hello";
import Bye from "../page/Bye";
import MainPage from "../page/MainPage"; // ✅ 반드시 import

const AppRouter = () => {
  return (
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="member" element={<Member />} />
        <Route path="hello" element={<Hello />} />
        <Route path="bye" element={<Bye />} />
      </Routes>
  );
};

export default AppRouter;
