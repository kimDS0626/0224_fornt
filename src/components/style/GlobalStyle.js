import { createGlobalStyle } from "styled-components";
import NotoSansKRBold from './fonts/NotoSansKRBold.ttf';

import NotoSansKRMedium from './fonts/NotoSansKRMedium.ttf';

import NotoSansKRRegular from './fonts/NotoSansKRRegular.ttf';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding:0;
        list-style: none;
        box-sizing: border-box;  /* 박스 크기 설정 */
        font-family: "NotoSansKR";

    }
    a{
       text-decoration-line:none;
    }
    @font-face {
        font-family: "NotoSansKR";
        src: local("NotoSansKR"), url(${NotoSansKRBold}) format('ttf'); 
        font-weight: Bold;
    }
    @font-face {
        font-family: "NotoSansKR";

        src: local("NotoSansKR"), url(${NotoSansKRRegular}) format('ttf'); 
        font-weight: Normal;
    }
    @font-face {
        font-family: "NotoSansKR";
        src: local("NotoSansKR"), url(${NotoSansKRMedium}) format('ttf'); 
        font-weight: Medium;
    }

`;

export default GlobalStyle;
