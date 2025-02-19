import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import styled from "styled-components";

import logo from "../user/logo_b.png";

const LoginContainer = styled.div`
  height: 100%;
`;

// ----------------------------------------------------------------------------------

const LoginSectionA = styled.div`
  position: relative;
  width: 700px;
  margin: 0 auto;
  text-align: center;
  box-sizing: border-box;
  padding-bottom: 50px;

  img {
    display: inline-block;
    margin-top: 108px;
    vertical-align: top;
    background-position: 0 -51px;
    background-repeat: no-repeat;
    width: 260px;
    height: 65px;
  }
`;

const LoginSectionB = styled.div`
  justify-content: center;
  text-align: center;
  display: block;
  unicode-bidi: isolate;
`;
const LoginInput = styled.div`
  width: 500px;
  margin: auto;
  box-sizing: border-box;
  input {
    color: #111111;
    background: transparent;
    width: 200px;
    padding: 20px;

    border: none;
    border-bottom: 1px solid #111111;
    border-radius: 3px;
    position: relative;
    left: 50px;
    display: block;
    width: 350px;
    height: 22px;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: -0.2px;
    z-index: 5;
  }
`;
const FindBox = styled.div`
  width: 500px;
  margin: auto;
  box-sizing: border-box;
`;

const IdFind = styled.div`
  float: left;
  width: 100px;
  margin-left: 100px;
  box-sizing: border-box;

  a {
    text-decoration: none;
  }
  h6 {
    font-size: 16px;
    padding: 0px;
    color: #111111;
  }
`;
const PwFind = styled.div`
  float: right;
  width: 100px;
  margin-right: 100px;
  box-sizing: border-box;
  a {
    text-decoration: none;
  }
  h6 {
    padding: 0px;
    font-size: 16px;
    color: #111111;
  }
`;
const LoginButton = styled.div`
  width: 460px;
  margin: auto;
  box-sizing: border-box;
  button {
    cursor: pointer;
    background: transparent;
    border: none;

    font-size: 26px;
    width: 400px;
    height: 65px;

    color: #111111;
  }
`;
const SignupButton = styled.div`
  width: 460px;
  margin: auto;
  box-sizing: border-box;
  width: 400px;
  height: 65px;
  button {
    cursor: pointer;
    background: transparent;
    border: none;

    font-size: 18px;
    width: 400px;
    height: 65px;

    color: #111111;
  }
`;

const LoginSectionC = styled.div`
  width: 460px;
  margin: 0 auto;
  box-sizing: border-box;
`;
function Login() {
  return (
    <LoginContainer>
      <LoginSectionA>
        <img src={logo} />
      </LoginSectionA>
      <LoginSectionB>
        <LoginInput>
          <input type="text" placeholder="아이디"></input>
          <input type="password" placeholder="비밀번호"></input>
        </LoginInput>
        <FindBox>
          <IdFind>
            <Link to="/findId">
              <h6>아이디찾기</h6>
            </Link>
          </IdFind>
          <PwFind>
            <Link to="/findWd">
              <h6>비밀번호찾기 </h6>
            </Link>
          </PwFind>
        </FindBox>
        <LoginButton>
          <Link>
            <button> - 로그인 -</button>
          </Link>
        </LoginButton>
        <SignupButton>
          <Link to="/signup">
            <button> - 회원가입 -</button>
          </Link>
        </SignupButton>
      </LoginSectionB>
      <LoginSectionC></LoginSectionC>
    </LoginContainer>
  );
}

export default Login;
