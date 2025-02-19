// import React, { useState, useEffect } from "react";
// import { Link } from "react-router";
// import styled from "styled-components";

// const LoginContainer = styled.div`
//   background-color: #111111;
//   height: 100%;
//   width: 100%;
//   z-index: 8;
//   position: fixed;
//   top: -100%;
//   transition: top 1s ease-in-out;

//   &.show {
//     top: 0;
//   }
// `;

// const SlideContainer = styled.div`
//   position: fixed;
//   top: -100%;
//   height: 70%;
//   margin-top: 100px;
//   width: 25%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 10;
//   transition: top 1s ease-in-out, transform 1s ease-in-out;

//   &.show {
//     top: 0;
//   }

//   &.left {
//     opacity: 0.9;
//     background-image: linear-gradient(
//       120deg,
//       #a9ddf9,
//       #cfeefb,
//       #cfeefb,
//       #cfeefb
//     );
//     background-color: #cfeefb;
//     left: 25%;
//     h1 {
//       font-size: 250px;
//     }
//   }

//   &.right {
//     opacity: 0.9;
//     background-image: linear-gradient(
//       120deg,
//       #cfeefb,
//       #cfeefb,
//       #cfeefb,
//       #e3f4fc
//     );

//     right: 25%;
//     h1 {
//       font-size: 250px;
//     }
//   }

//   &.slide-out.left {
//     transform: translateX(-250%);
//   }

//   &.slide-out.right {
//     transform: translateX(250%);
//   }
// `;
// // ----------------------------------------------------------------------------------
// const LoginContainerB = styled.div`
//   background-color: #f4f4f4;
//   height: 100%;
//   width: 100%;
//   display: block;
//   position: fixed;
//   z-index: 7;
// `;
// const LoginSection = styled.div`
//   justify-content: center;
//   align-items: center;
//   display: block;
//   width: 400px;
//   height: 400px;
//   position: fixed;
//   top: -100%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   background-image: linear-gradient(120deg, #f1c9ab, #ebb083, #ebb083, #f1c9ab);
//   border-radius: 100%;
//   border: 20px solid #f1c9ab;
//   transition: top 1s ease-in-out, transform 1s ease-in-out;
//   z-index: 9;
//   &.show {
//     top: 50%;
//   }
// `;

// const LoginBoxA = styled.div`
//   text-align: center;
//   width: 400px;
//   height: 190px;
//   border-bottom: 15px solid #f1c9ab;
//   position: relative;
//   bottom: 30px;
// `;

// const Title = styled.div`
//   font-size: 24px;
//   display: block;
//   width: 400px;
//   height: 90px;
//   -webkit-text-stroke: 2px #f1c9ab;
//   text-stroke: 2px #f1c9ab;
//   color: #ebb083;
//   text-align: center;
//   h1 {
//     padding-top: 30px;
//   }
// `;

// const LoginInput = styled.div`
//   display: block;
//   width: 400px;
//   height: 100px;
//   color: #f1c9ab;
//   input {
//     color: #f1c9ab;
//     background: transparent;
//     width: 250px;
//     padding: 10px;
//     margin-bottom: 10px;
//     border: none;
//     border-bottom: 1px solid #f1c9ab;
//     border-radius: 3px;
//   }
// `;
// const LoginBoxB = styled.div`
//   text-align: center;
//   display: block;
//   width: 400px;
//   height: 180px;
//   position: relative;
//   bottom: 35px;
// `;

// const IdFind = styled.div`
// float: left;
//   width: 200px;
//    height: 25px;

//    a{  position: relative;
//    bottom:20px;
//    text-decoration: none;
//    }
//    h6{
//    font-size:16px;
//    padding-left:40px;s
//    margin-bottom:140px;
//    color:#f1c9ab;

//    }
// `;
// const PwFind = styled.div`
//   float: left;
//   width: 200px;
//   height: 25px;
//   a {
//     position: relative;
//     bottom: 20px;
//     text-decoration: none;
//   }
//   h6 {
//     font-size: 16px;
//     padding-right: 40px;
//     color: #f1c9ab;
//   }
// `;
// const LoginButton = styled.div`
//   position: relative;
//   top: 20px;
//   float: left;
//   width: 400px;
//   height: 65px;

//   button {
//     background: transparent;
//     border: none;
//     -webkit-text-stroke: 1px #f1c9ab;
//     text-stroke: 1px #f1c9ab;
//     font-size: 26px;
//     width: 400px;
//     height: 65px;

//     color: #ebb083;
//   }
// `;
// const SignupButton = styled.div`
//   position: relative;
//   top: 10px;
//   float: left;

//   width: 400px;
//   height: 65px;
//   button {
//     background: transparent;
//     border: none;
//     -webkit-text-stroke: 1px #f1c9ab;
//     text-stroke: 1px #f1c9ab;
//     font-size: 18px;
//     width: 400px;
//     height: 65px;

//     color: #ebb083;
//   }
// `;

// function Login() {
//   const [showLoginContainer, setShowLoginContainer] = useState(false);
//   const [showSlide, setShowSlide] = useState(false);
//   const [splitScreen, setSplitScreen] = useState(false);
//   const [hideSlides, setHideSlides] = useState(false);

//   useEffect(() => {
//     setTimeout(() => setShowLoginContainer(true), 300);
//     setTimeout(() => setShowSlide(true), 800);
//     setTimeout(() => setSplitScreen(true), 1800);
//     setTimeout(() => setHideSlides(true), 2800);
//   }, []);

//   return (
//     <div>
//       <LoginContainer className={showLoginContainer ? "show" : ""} />
//       {!hideSlides && (
//         <>
//           <SlideContainer
//             className={`left ${showSlide ? "show" : ""} ${
//               splitScreen ? "slide-out" : ""
//             }`}
//           >
//             <h1>HI!</h1>
//           </SlideContainer>
//           <SlideContainer
//             className={`right ${showSlide ? "show" : ""} ${
//               splitScreen ? "slide-out" : ""
//             }`}
//           >
//             <h1>PAT</h1>
//           </SlideContainer>
//         </>
//       )}

//       <LoginSection className={showSlide ? "show" : ""}>
//         <LoginBoxA>
//           <Title>
//             <h1> - 로그인 -</h1>
//           </Title>
//           <LoginInput>
//             <input type="text" placeholder="아이디"></input>
//             <input type="password" placeholder="비밀번호"></input>
//           </LoginInput>
//         </LoginBoxA>
//         <LoginBoxB>
//           <IdFind>
//             <Link>
//               <h6>-- 아이디찾기</h6>
//             </Link>
//           </IdFind>
//           <PwFind>
//             <Link>
//               <h6>비밀번호찾기 --</h6>
//             </Link>
//           </PwFind>
//           <LoginButton>
//             <button> - 로그인 -</button>
//           </LoginButton>
//           <SignupButton>
//             <button> - 회원가입 -</button>
//           </SignupButton>
//         </LoginBoxB>
//       </LoginSection>
//       <LoginContainerB></LoginContainerB>
//     </div>
//   );
// }

// export default Login;
