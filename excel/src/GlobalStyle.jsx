import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0 auto;
    padding: 0;
    text-align: center;
    font-family: 'GmarketSansMedium';
  }

  body {
    font-family: 'GmarketSansMedium', "Arial", sans-serif;
    line-height: 1.5;
    background-color: #99A98F;
  }

    @font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    }
    @font-face {
      font-family: 'Nunito';
      font-style: normal;
      font-weight: 900;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/nunito/v25/XRXV3I6Li01BKofIOOaBXso.woff2) format('woff2');
      unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
    }

        .a11y-hidden {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    }

    button {
        font-family: "Spoqa Han Sans Neo", "sans-serif";
        border: none;
        padding: 0;
        cursor: pointer;
        :disabled {
            cursor: default;
        }
    }

    a{
        text-decoration: none;
        color: inherit;
    }
`;

export default GlobalStyle;