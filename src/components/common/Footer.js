import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import footer_logo from "./imgs/footer_logo.png";
import media_icon_instagram from "./imgs/media_icon_instagram.png";
import media_icon_youtube from "./imgs/media_icon_youtube.png";
import media_icon_appstore from "./imgs/media_icon_appstore.png";
import media_icon_googleplay from "./imgs/media_icon_googleplay.png";

const FooterContainer = styled.div` 
  display: flex;
  width: 100%
  height: 265px;
  background-color: #0E0E0E;
  @font-face {
  font-family: "NotoSansKR";
  src: url("./NotoSansKR-Black.ttf");
  }
  @font-face {
  font-family: "Montserrat_Bold";
  src: url("./Montserrat-Bold.otf");
  }
  @font-face {
  font-family: "Montserrat-Regular";
  src: url("./Montserrat-Regular.otf");
  }
 `;

const FooterSection = styled.div`
  margin: auto;
  width: 1280px;
  height: 265px;
  position: relative;
   display: flex;
`;
const FooterBoxA = styled.div`
  float: left;
  width: 239px;
  height: 265px;
  position: relative;

  display: block;
`;

const FooterLogo = styled.div`
  padding-top: 67px;
  padding-left: 18px;
  width: 221px;
  height: 62px;
  position: relative;
  top: 0px;
`;
const Footertel = styled.div`
  position: relative;
  width: 206px;
  height: 58px;
  color: #f4f4f4;
  padding-top: 29px;
  padding-left: 18px;
  p:first-child {
    font-family: "Montserrat_Bold";
    font-size: 15px;
  }
  p {
    font-family: "NotoSansKR_Black";
    font-weight: 700;
    margin: 0px;
    font-size: 32px;
  }
`;
// -------------------------------------------------------------------------
const FooterBoxB = styled.div`
  float: left;
  width: 1000px;
  height: 265px;
  display: block;
`;
const FooterText = styled.div`
display: block;
  font-family: "NotoSansKR";
  padding-top: 67px;
  padding-bottom: 18px;
  padding-left: 214px;
  position: relative;
  font-size: 14px;
  color: #f4f4f4;
  width: 610px;
  height: 48px;
  line-height: 24px;
  td:first-child {
    font-weight: 800;
  }
`;
const FooterIcon = styled.div`
display: block;
  padding-bottom: 31px;
  padding-left: 214px;
  position: relative;
  width: 180px;
  height: 30px;
  a {
    padding: 0px 15px 0px 0px;
  }
  img {
  }
`;

const Copy = styled.div`
display: block;
  font-family: "Montserrat-Regular";
  padding-bottom: 47px;
  padding-left: 214px;
  position: relative;
  font-size: 12px;
  color: #f4f4f4;
  width: 300px;
  height: 100px;
  p {
  }
`;

function Footer() {
  const location = useLocation();
  const [isHidden, setIsHidden] = useState(false);

  const excludedPaths = ["/login", "/findId", "/findPw"];

  useEffect(() => {
    setIsHidden(excludedPaths.includes(location.pathname));
  }, [location.pathname, excludedPaths]);

  if (isHidden) {
    return null;
  }
  return (
    <FooterContainer>
      <FooterSection>
        <FooterBoxA>
          <FooterLogo>
            <img src={footer_logo} width="221px" height="62px" />
          </FooterLogo>
          <Footertel>
            <p>하이펫 동물의료센터 긴급전화</p>
            <p>02-837-9922</p>
          </Footertel>
        </FooterBoxA>

        <FooterBoxB>
          <FooterText>
            <table>
              <tr>
                <td>문의</td>
                <td>
                  {" "}
                  대표번호 : 02-837-9922 팩스 : 02-3482-8835 이메일:
                  saff@saff.kr
                </td>
              </tr>
              <tr>
                <td>주소</td>
                <td>
                  {" "}
                  서울특별시 구로구 시흥대로 163길 33 2층, 3층 (주호타워)
                  사업자등록번호 : 203-87-00672
                </td>
              </tr>
            </table>
          </FooterText>
          <FooterIcon>
            <a href="#">
              <img src={media_icon_instagram} width="30px" />
            </a>
            <a href="#">
              <img src={media_icon_youtube} width="30px" />
            </a>
            <a href="#">
              <img src={media_icon_appstore} width="30px" />
            </a>
            <a href="#">
              <img src={media_icon_googleplay} width="30px" />
            </a>
          </FooterIcon>
          <Copy>
            <p>©Copyright 2025 HIPAT. All Rights Reserved</p>
          </Copy>{" "}
        </FooterBoxB>
      </FooterSection>
    </FooterContainer>
  );
}

export default Footer;
