import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from '../components/Layout';
// import Hello from "../page/Hello";
// import Bye from "../page/Bye";
// import Home from "../page/Home";
// import Member from "../page/Member";
import Main from "../page/MainPage";
// import Footer from "../page/Footer";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route path="/" element={<Home />} />
          <Route path="/member" element={<Member />} />
          <Route path="/hello" element={<Hello />} />
          <Route path="/bye" element={<Bye />} /> */}
          <Route path="/mainpage" element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
