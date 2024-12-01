import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase-config";
import { loginWithKakao } from "./kakaoAuth"; // 카카오 로그인 함수 추가

import googleImg from "../../assets/google-button.png"; // Google 로그인 이미지
import kakaoImg from "../../assets/kakao-button.png"; // Kakao 로그인 이미지
import logo from "../../assets/icon.png"; // 로고 이미지 import

const Login = () => {
  // Google 로그인 함수
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result.user); // 사용자 정보 출력
    } catch (error) {
      console.error("Google 로그인 오류:", error);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#EDF1FD", // 메인 페이지와 동일한 배경색
        height: "100vh", // 화면 전체 높이
        display: "flex", // 중앙 정렬
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      {/* 상단 로고 */}
      <div
        style={{
          position: "absolute",
          top: "25px",
          left: "40px",
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={() => (window.location.href = "/")} // 클릭 시 메인 페이지로 이동
      >
        <img
          src={logo}
          alt="로고"
          style={{
            width: "50px",
            height: "50px",
            marginRight: "10px",
          }}
        />
        <span style={{ fontSize: "20px", fontWeight: "bold" }}>유반사전</span>
      </div>

      {/* "로그인" 텍스트 */}
      <h2
        style={{
          fontSize: "35px",
          fontWeight: "700", // 굵은 고딕체 느낌
          fontFamily: "Arial, sans-serif",
        }}
      >
        로그인
      </h2>

      {/* Google 로그인 버튼 */}
      <button
        onClick={handleGoogleLogin}
        style={{
          border: "none",
          background: "none",
          marginBottom: "40px", // 아래 여백
          borderRadius: "15px", // 모서리를 둥글게
          overflow: "hidden", // 둥근 모서리에 맞춰 이미지가 잘리도록 설정
          cursor: "pointer", // 포인터 모양 추가
        }}
      >
        <img src={googleImg} alt="Google로 시작하기" style={{ width: "300px", borderRadius: "15px" }} />
      </button>

      {/* Kakao 로그인 버튼 */}
      <button
        onClick={loginWithKakao}
        style={{
          border: "none",
          background: "none",
          borderRadius: "15px", // 모서리를 둥글게
          overflow: "hidden", // 둥근 모서리에 맞춰 이미지가 잘리도록 설정
          cursor: "pointer", // 포인터 모양 추가
        }}
      >
        <img src={kakaoImg} alt="Kakao로 시작하기" style={{ width: "300px", borderRadius: "15px" }} />
      </button>
    </div>
  );
};

export default Login;