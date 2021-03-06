import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import { normalize } from "styled-normalize";
import { SPRIMARY } from "components/shared/common/fontSize";
import { CPRIMARY } from "components/shared/common/colors";

const GlobalStyle = createGlobalStyle`
    ${reset};
    ${normalize}
    
    body{
        display: flex;
        justify-content:center;
        flex-direction: column;
        padding: 0;
        margin: 0;
        font-size: ${SPRIMARY};
        font-weight: 400;
        color: ${CPRIMARY};
        font-family: 'Noto Sans KR', 'Roboto', sans-serif;
        letter-spacing: -0.4px;
        line-height: 1.5;
        letter-spacing: 0px;
    }

    #root{
        overflow: hidden;
        flex-grow: 1;
        position: relative;
        width: 100%;
        max-width: 720px;
        min-width: 320px;
        height: auto;
        margin: 0 auto;
        padding: 0 16px;
    }

    *{
        font-style: normal;
        box-sizing: border-box;
    }

    a{
        text-decoration: none;
        color: inherit;
    }

    pre {
        font-family: 'Noto Sans KR', 'Roboto', sans-serif;
        white-space: pre-line;
        word-break: break-all;
    }

    img,
    object,
    embed {
        max-width: 100%;
    }

    img {
        vertical-align: top;
    }

    table {
        width: 100%;
    }

    table caption {
        display: none;
    }

    button{
        display: flex;
        cursor: pointer;
        outline: none;
        border-radius: 3px;
    }

    input{
        display: flex;
        outline: none;
        padding-left: 10px;
    }
    
    input[type='button'],
    input[type='image'],
    button {
        border: 0;
        padding: 0;
        background-color: transparent;
        cursor: pointer;
    }

    input[type='text']::-ms-clear {
        display: none;
    }

    pre {
        font-family: 'Noto Sans KR', 'Roboto', sans-serif;
        white-space: pre-line;
        word-break: break-all;
    }

    h1{
        margin: 0;
        font-size: inherit;
    }

    p{
        word-break: keep-all;
    }
`;

export default GlobalStyle;
