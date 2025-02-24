import React, { useState } from "react";
import styled from "styled-components";

import ReservationCheck from "./ReservationCheck";
import UserProfile from "./UserProfile";
import UserUpdate from "./UserUpdate";

function MyPage() {
  const [page, setPage] = useState('1');

  return (
    <MyPageContainer>
      <MyPageTitle>
        <TitleH1>마이페이지</TitleH1>
      </MyPageTitle>

      <ButtonContainer>
        <MyPageButton onClick={() => setPage('1')}>프로필</MyPageButton>
        <MyPageButton onClick={() => setPage('2')}>회원정보수정</MyPageButton>
        <MyPageButton onClick={() => setPage('3')}>예약확인</MyPageButton>
      </ButtonContainer>

      <MyPageContentBox>
        {page === '1' && <UserProfile />}
        {page === '2' && <UserUpdate />}
        {page === '3' && <ReservationCheck />}
      </MyPageContentBox>
    </MyPageContainer>
  );
}

const MyPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

const MyPageTitle = styled.div`
  margin-top: 100px;
  text-align: left;
`;

const TitleH1 = styled.h1`
  margin-left: 0;
`;

// 버튼들을 가운데 수평정렬하기 위해 flex 컨테이너로 변경
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  
`;

const MyPageButton = styled.button`
  width: 80px;
  height: 40px;
  background-color: white;
  border: 1px solid #ccc;
  cursor: pointer;
`;

const MyPageContentBox = styled.div`
  width: 100%;
  max-width: 1280px;
  margin-bottom: 30px;
`;

export default MyPage;
