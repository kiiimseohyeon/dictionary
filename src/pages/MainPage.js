import React from "react";
import logo from "../assets/icon.png"; // 로고 이미지 경로

const MainPage = () => {
  return (
    <div style={{ backgroundColor: "#EDF1FD", minHeight: "100vh", fontFamily: "Arial, sans-serif", padding: "20px" }}>
      {/* 상단 헤더 */}
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px" }}>
        {/* 로그인 및 마이페이지 버튼 */}
        <div>
          <button
            style={{
              marginLeft: "1300px",
              padding: "10px 20px",
              backgroundColor: "#2196F3",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={() => (window.location.href = "/login")}
          >
            로그인
          </button>
          <button
            style={{
              marginLeft: "10px",
              padding: "10px 20px",
              backgroundColor: "#2196F3",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={() => (window.location.href = "/mypage")}
          >
            마이페이지
          </button>
        </div>
      </header>

      {/* 로고 */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "20px",
          cursor: "pointer",
        }}
        onClick={() => (window.location.href = "/")}
      >
        <img src={logo} alt="로고" style={{ width: "50px", height: "50px", marginBottom: "10px" }} />
        <span style={{ fontSize: "24px", fontWeight: "bold" }}>유반사전</span>
      </div>

      {/* 검색바와 초성 버튼 */}
      <main style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "20px" }}>
        {/* 검색바 */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#fff",
            borderRadius: "15px",
            padding: "5px",
            maxWidth: "600px",
            width: "100%",
            marginBottom: "20px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <form
            style={{ display: "flex", flex: 1, alignItems: "center" }}
            onSubmit={(e) => {
              e.preventDefault();
              console.log("검색 실행");
            }}
          >
            <input
              type="text"
              placeholder="검색어를 입력하세요..."
              style={{
                flex: 1,
                padding: "10px",
                fontSize: "16px",
                border: "none",
                backgroundColor: "transparent",
                outline: "none",
              }}
            />
            <button
              type="submit"
              style={{
                padding: "10px 15px",
                backgroundColor: "#2196F3",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
            >
              검색
            </button>
          </form>
        </div>

        {/* 초성 버튼 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)", // 7개씩 2줄 배열
            gap: "10px",
            justifyContent: "center",
            width: "100%",
            maxWidth: "600px",
          }}
        >
          {["ㄱ", "ㄴ", "ㄷ", "ㄹ", "ㅁ", "ㅂ", "ㅅ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"].map((consonant) => (
            <button
              key={consonant}
              style={{
                padding: "10px",
                backgroundColor: "#fff",
                border: "1px solid #ddd",
                borderRadius: "5px",
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
              onClick={() => console.log(`${consonant} 버튼 클릭됨`)}
            >
              {consonant}
            </button>
          ))}
        </div>
      </main>

      {/* 검색 결과 영역 */}
      <div
        id="searchArea"
        style={{
          padding: "20px",
          backgroundColor: "#fff",
          textAlign: "center",
          borderRadius: "10px",
          margin: "20px auto",
          maxWidth: "600px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        선택하신 초성이 없습니다.
      </div>
    </div>
  );
};

export default MainPage;
