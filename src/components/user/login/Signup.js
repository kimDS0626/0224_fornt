import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SignupContainer = styled.div`
  display: block;
  width: 100%;
  height: 1000px;
`;

const SignupSectionA = styled.div`
  margin: auto;
  justify-content: center;
  align-items: center;

  width: 400px;
  height: 100px;
  background-color: #f4f4f4;
`;

const SignupTitle = styled.div`
  margin: auto;
  justify-content: center;
  align-items: center;

  width: 400px;
  height: 100px;
  background-color: #f4f4f4;
`;
const SignupSectionB = styled.div`
  margin: auto;
  justify-content: center;
  align-items: center;

  width: 400px;
  height: 300px;
  background-color: #f4f4f4;
`;
const SignupSectionC = styled.div`
  margin: auto;
  justify-content: center;
  align-items: center;

  width: 400px;
  height: 300px;
  background-color: #f4f4f4;
`;
const SignupSectionD = styled.div`
  margin: auto;
  justify-content: center;
  align-items: center;

  width: 400px;
  height: 100px;
  background-color: #f4f4f4;
`;
function Signup() {
  return (
    <SignupContainer>
      <SignupSectionA>
        <SignupTitle>
          <h1>회원가입</h1>
        </SignupTitle>
      </SignupSectionA>
      <SignupSectionB>
        <table className="signuptable1">
          <tr>
            <td>이름</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>이메일</td>
            <td>
              <input type="text" />
            </td>
            &nbsp;<button>버튼</button>
          </tr>
          <tr>
            <td></td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>이메일 인증코드</td>
            <td>
              <input type="password" />
            </td>
            &nbsp;<button>버튼</button>
          </tr>
          <tr>
            <td>비밀번호</td>
            <td>
              <input type="password" />
            </td>
          </tr>
          <tr>
            <td>비밀번호 확인</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>닉네임</td>
            <td>
              <input type="text" />
            </td>
            &nbsp;<button>버튼</button>
          </tr>
          <tr>
            <td>주소</td>
            <td>
              <input type="text" />
            </td>
            &nbsp;<button>버튼</button>
          </tr>
          <tr>
            <td>생년월일</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>휴대폰 번호</td>
            <td>
              <input type="text" />
            </td>
          </tr>
        </table>
      </SignupSectionB>
      <SignupSectionC>
        <table className="signuptable2">
          <tr>
            <td>동물이름</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>동물종류</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>동물나이</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>동물무게</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <button>버튼</button>&nbsp;&nbsp;<button>버튼</button>
        </table>
      </SignupSectionC>
      <SignupSectionD>
        <button className="signupButton">회원 가입</button>
      </SignupSectionD>
    </SignupContainer>
  );
}

export default Signup;
