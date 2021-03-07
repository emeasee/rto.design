import styled, { createGlobalStyle } from "styled-components"
import { themes } from "./ColourStyles"

export const GlobalStyle = createGlobalStyle`

    @keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
    }

    @-moz-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
    }

    @-webkit-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
    }

    @-o-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
    }

    @-ms-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
    }

    a {
        text-decoration: none;
    }
    a:hover {
        color: white;
    }
    span {
        display: inline-block;
        position: relative;
    }
    .blackLink a:hover {
        color: ${themes.light.primary};
    }
    .lineLink a:hover {
        color: black;
        text-decoration: underline;
    }
    .inlineLink a {
        text-decoration: underline;
    }

    @media (max-width: 400px) {
        body {
            padding-top: 0px;
        }

    }
`
