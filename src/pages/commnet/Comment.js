import React from "react";
import styled from "styled-components";

function Comment({ obj }) {
  return (
    <Container>
      <CommentBox>
        <Table>
          <tbody>
            <tr>
              <Td><strong>작성자:</strong> {obj.nickName}</Td>
            </tr>
            <tr>
              <Td><strong>내용:</strong> {obj.content}</Td>
            </tr>
            <tr>
              <Td><strong>작성일:</strong> {obj.createdDate}</Td>
            </tr>
          </tbody>
        </Table>

        <BtnBox>
          <Btn>수정</Btn>
          <Btn>삭제</Btn>
        </BtnBox>
      </CommentBox>
    </Container>
  );
}

// 스타일 정의
const Container = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CommentBox = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 10px;
`;

const Table = styled.table`
  width: 100%;
`;

const Td = styled.td`
  padding: 5px;
  font-size: 14px;
`;

const BtnBox = styled.div`
  display: flex;
  gap: 10px;
`;

const Btn = styled.button`
  width: 50px;
  height: 30px;
  border: 1px solid #111111;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
`;

export default Comment;
