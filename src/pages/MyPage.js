/*import React, { useEffect, useState } from "react";

const MyPage = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      setUserInfo(JSON.parse(userInfo));
    } else {
      console.error("사용자 정보가 없습니다.");
    }
  }, []);

  // 로딩 중일 경우 처리
  if (!userInfo) {
    return <div>로딩 중...</div>;
  }

  // userInfo가 있으면 닉네임을 출력
  return (
    <div>
      <h1>마이 페이지</h1>
      <p>닉네임: {userInfo.nickname || "닉네임 정보 없음"}</p> {// nickname이 없을 경우 처리 //}
    </div>
  );
};

export default MyPage;*/




// 첫 번째
import React, { useEffect, useState } from "react";

const MyPage = () => {
  const [userInfo, setUserInfo] = useState(null);

  // 사용자 정보 가져오기
  useEffect(() => {
    // 구글 사용자 정보 확인
    const googleUser = localStorage.getItem("googleUser");
    if (googleUser) {
      setUserInfo(JSON.parse(googleUser)); // JSON 문자열 -> 객체 변환
      return;
    }

    // 카카오 로그인 확인 (카카오 사용자 정보는 추가 구현 필요)
    const kakaoAccessToken = localStorage.getItem("accessToken");
    if (kakaoAccessToken) {
      // 카카오 사용자 정보 (API 호출을 통한 상세 정보 가져오기 가능)
      setUserInfo({ displayName: "카카오 사용자", email: "정보 없음" }); // 임시 정보
    }
  }, []);

  if (!userInfo) {
    // 사용자 정보가 없을 경우
    return (
      <div
        style={{
          textAlign: "center",
          marginTop: "50px",
          fontSize: "18px",
          color: "#333",
        }}
      >
        로그인이 필요합니다. 로그인 후 다시 시도해주세요.
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "50px auto",
        padding: "20px",
        backgroundColor: "#EDF1FD",
        borderRadius: "10px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>마이페이지</h2>
      <div style={{ marginBottom: "20px" }}>
        <strong>이름:</strong> {userInfo.displayName}
      </div>
      <div style={{ marginBottom: "20px" }}>
        <strong>이메일:</strong> {userInfo.email}
      </div>
      {userInfo.photoURL && (
        <div>
          <img
            src={userInfo.photoURL}
            alt="프로필 사진"
            style={{ width: "100px", height: "100px", borderRadius: "50%" }}
          />
        </div>
      )}
      <button
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#f44336",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => {
          // 로그아웃 처리
          localStorage.removeItem("googleUser");
          localStorage.removeItem("accessToken");
          alert("로그아웃되었습니다!");
          window.location.href = "/";
        }}
      >
        로그아웃
      </button>
    </div>
  );
};

export default MyPage;

// 두번째

/*import React, { useEffect, useState } from "react";

const MyPage = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    // localStorage에서 사용자 정보 가져오기
    const storedUserInfo = localStorage.getItem("googleUser");
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    } else {
      alert("로그인이 필요합니다.");
      window.location.href = "/login";
    }
  }, []);

  if (!userInfo) {
    return <div>사용자 정보를 불러오는 중...</div>;
  }

  return (
    <div>
      <h1>마이페이지</h1>
      <p>이름: {userInfo.displayName || "알 수 없음"}</p>
      <p>이메일: {userInfo.email || "알 수 없음"}</p>
      <img src={userInfo.photoURL} alt="프로필 사진" style={{ borderRadius: "50%" }} />
    </div>
  );
};

export default MyPage;*/