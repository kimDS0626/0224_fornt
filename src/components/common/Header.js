import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import header_logo from "./imgs/header_logo.png";
import header_menu_stroke from "./imgs/header_menu_stroke.png";
import myIcon from "./imgs/header_mypage.png";
import userIcon from "./imgs/header_user.png";
import searchIcon from "./imgs/header_search.png";

// import AdminHome from "../admin/adminHome";

const HeaderContainer = styled.div`
  display: block;
  width: 100%;
  height: 122px;
  border-bottom: 1px solid #111111;
  @font-face {
  font-family: "NanumGothic";
  src: url("./NanumGothic-Regular.ttf");
  }
}

`;
const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 1280px;
  height: 122px;
`;

const Logo = styled.h1`
  display: flex;
  align-items: center;
  width: 150px;
  height: 122px;
  img {
    margin-left: 5px;
    margin-top: 5px;
  }
`;

// ------------------------------------------------------------------------------------------

const MenuButtonBox = styled.div`
  height: 122px;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuButton = styled.div`

  border: none;
  background-color: transparent;
  cursor: pointer;
  b
`;

const MenuContainar = styled.button`
  top: 65px;
  position: absolute;
  background-color: #f4f4f4;
  display: none;
  min-width: 550px;
  &.open {
    display: flex;
    height: 150px;
    z-index: 6;
  }
  li {
    border-right: 1px solid #111111;
    width: 110px;
    height: 30px;
    list-style: none;
  }
  ul:nth-child(5) {
    border: none;
  }
  ul a {
    float: left;
    font-size: 16px;
    color: #003cd2;
  }
`;

// ---------------------------------------------------------------------------------------------
const Navigation = styled.nav`
  font-family: "NanumGothic";
  width: 820px;
  height: 122px;

  & ul li:first-child {
    width: 100px;
  }
  ul {
    font-weight: 500;
    width: 820px;
    margin: 0px;
    padding: 0px;
    text-align: center;
    display: flex;
    flex-direction: row;
    list-style: none;
  }
  article {
    display: flex;
    align-items: center;
    justify-content: center;
    float: left;
    height: 122px;
    width: 110px;
  }
  li {
    width: 160px;
    &:hover ul {
      display: flex;
      flex-direction: row;
      background-color: #003cd2;
    }
    div {
      display: none;
      position: fixed;
      height: 25px;
      top: 120px;
      left: 0;
      width: 100vw;
      background-color: #003cd2;
      z-index: -1;
      flex-direction: row;
      padding: 10px;
      box-sizing: border-box;
    }
    &:hover div {
      display: block;
    }
  }

  ul ul {
    display: none;
    position: absolute;
    padding: 0;
    list-style: none;
    z-index: 3;
    top: 120px;

    li {
      width: 100px;
    }
  }
`;

const MenuLink = styled(Link)`
  text-decoration: none;
  color: #111111;
  font-size: 18px;
  lineheight: 16;

  &:hover {
  }
`;

const SubLink = styled(Link)`
  text-decoration: none;
  color: #f4f4f4;

  &:hover {
    color: #fc9664;
  }
`;

const HederSectionB = styled.div`
  width: 230px;
  height: 122px;
`;

const LoginBox = styled.div`
  padding-top: 22px;
  font-size: 12ppx;
  float: right;
  position: relative;
  a:first-child {
    padding: 10px;
  }
  a:nth-child(2) img {
    top: 3px;
    position: relative;
  }
`;

const LoginButton = styled.button`
  font-family: "NanumGothic";
  background-color: transparent;
  border: none;
  font-size: 12px;

  cursor: pointer;
`;

const SearchBox = styled.button`
  right: 5px;
  top: 22px;
  float: right;
  width: 190px;
  height: 25px;
  background-color: transparent;
  border: none;
  font-size: 12px;
  cursor: pointer;
  position: relative;
  input {
    font-family: "NanumGothic";

    height: 25px;
    font-size: 12px;
    width: 190px;

    border: none;
    border-bottom: 1px solid #666;
    padding-bottom: 5px;
  }
  img {
    bottom: 3px;
    right: 0px;
    position: absolute;
  }
`;
// --------------------------------------------------------------------------------------------------------------------

function Header() {
  const navItems = [
    {
      name: "홈",
      path: "/",
    },
    {
      name: "병원 소개",
      submenu: [
        { path: "/introduce", name: "개요" },
        { path: "/directions", name: "오시는 길" },
        { path: "/department", name: "진료과 소개" },
      ],
    },
    { name: "공지사항", submenu: [{ path: "/notice", name: "공지사항" }] },
    {
      name: "온라인예약",
      submenu: [
        { path: "#", name: "회원예약" },
        { path: "#", name: "비회원예약" },
      ],
    },
    {
      name: "온라인상담",
      submenu: [{ path: "/onlineCounsel", name: "온라인상담" }],
    },
    { name: "고객 리뷰", submenu: [{ path: "/review", name: "리뷰" }] },
  ];

  const menuItems = [
    {
      name: "병원소개",
      submenu: [
        { path: "/introduce", name: "개요" },
        { path: "/directions", name: "오시는 길" },
        { path: "/department", name: "진료과 소개" },
      ],
    },
    {
      name: "공지사항",
      submenu: [
        { path: "/notice", name: "공지사항" },
        { path: "#", name: "" },
        { path: "#", name: "" },
      ],
    },
    {
      name: "온라인예약",
      submenu: [
        { path: "#", name: "회원예약" },
        { path: "#", name: "비회원예약" },
        { path: "#", name: "" },
      ],
    },
    {
      name: "하이!펫후기",
      submenu: [
        { path: "/review", name: "후기" },
        { path: "#", name: "" },
        { path: "#", name: "" },
      ],
    },
    {
      name: "온라인상담",
      submenu: [
        { path: "/onlineCounsel", name: "온라인상담" },
        { path: "#", name: "" },
        { path: "#", name: "" },
      ],
    },
  ];
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const [isHidden, setIsHidden] = useState(false);

  const excludedPaths = ["/login", "/findId", "/indPw"];

  useEffect(() => {
    setIsHidden(excludedPaths.includes(location.pathname));
  }, [location.pathname, excludedPaths]);

  if (isHidden) {
    return null;
  }
  return (
    <HeaderContainer>
      <HeaderSection>
        <Logo>
          <Link to="/">
            <img src={header_logo} width="128px" height="36px" alt="logo" />
          </Link>
        </Logo>
        <MenuButtonBox>
          <MenuButton onClick={() => setIsOpen(!isOpen)}>
            <img
              src={header_menu_stroke}
              width="36px"
              height="36px"
              alt="menu"
            />
          </MenuButton>
        </MenuButtonBox>
        <MenuContainar className={isOpen ? "open" : ""}>
          {menuItems.map((item) => (
            <ul>
              {item.submenu.map((subItem) => (
                <li key={subItem.name}>
                  <SubLink to={subItem.path}>{subItem.name}</SubLink>
                </li>
              ))}
            </ul>
          ))}
        </MenuContainar>
        <Navigation>
          <ul>
            {navItems.map((item) => (
              <li key={item.name}>
                <article>
                  {" "}
                  <MenuLink to={item.path || "#"}>{item.name}</MenuLink>
                </article>
                {item.submenu && (
                  <ul>
                    {item.submenu.map((subItem) => (
                      <li key={subItem.name}>
                        <SubLink to={subItem.path}>{subItem.name}</SubLink>
                        <div className="element"></div>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </Navigation>
        <HederSectionB>
          <LoginBox>
            <Link to="/">
              <img src={myIcon} />
              <LoginButton>마이페이지</LoginButton>
            </Link>
            <Link to="/login">
              <img src={userIcon} />
              <LoginButton>로그인</LoginButton>
            </Link>
          </LoginBox>
          <SearchBox>
            <Link to="/">
              <input type="search" placeholder="검색어를 입력해주세요."></input>
              <img src={searchIcon} />
              <LoginButton></LoginButton>
            </Link>
          </SearchBox>
        </HederSectionB>
      </HeaderSection>

      {/* ------------------------------------------------------------------------------------------------ */}
    </HeaderContainer>
  );
}

export default Header;
