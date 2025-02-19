import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding:0;
        list-style: none;
        box-sizing: border-box;  /* 박스 크기 설정 */
    }
    a{
       text-decoration-line:none;
    }


`;

export default GlobalStyle;
