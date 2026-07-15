import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}


body{
    font-family: 'Poppins', sans-serif;
    background:#0F172A;
    color:#F8FAFC;
}


html{
    scroll-behavior:smooth;
}


a{
    text-decoration:none;
    color:inherit;
}


`;

export default GlobalStyles;