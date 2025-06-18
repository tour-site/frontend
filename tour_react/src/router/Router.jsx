import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hello from "../page/Hello";
import Bye from "../page/Bye";
import Home from "../page/Home";
import Member from "../page/Member";
import Map from "../page/map";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/member" element={<Member />} />
        <Route path="/hello" element={<Hello />} />
        <Route path="/bye" element={<Bye />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
