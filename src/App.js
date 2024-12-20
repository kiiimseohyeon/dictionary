import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import MyPage from "./pages/MyPage";
import Login from "./components/Login/Login";
import KakaoCallback from "./components/KakaoCallback";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} /> {/* Login 경로 추가 */}
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/kakao-callback" element={<KakaoCallback />} />
      </Routes>
    </Router>
  );
};

export default App;