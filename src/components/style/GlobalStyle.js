import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding:0;
        list-style: none;
        box-sizing: border-box;  /* 박스 크기 설정 */
        
        //ER
        font-family: "Montserrat", serif;
        
        //KR
        font-family: "Noto Sans KR", serif;

        //KR
        font-family: "Nanum Gothic", serif;

        
    }

     .pagination {
        display: flex;
        justify-content: center;
     }

    .pagination li {
        display: inline-block; /* 인라인 요소로 정렬 */
        margin: 0 5px;
    }
        
    a{
       text-decoration-line:none;
    }
    //KR
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap');

    //KR
    @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap');
    
    //ER
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
`;

export default GlobalStyle;


