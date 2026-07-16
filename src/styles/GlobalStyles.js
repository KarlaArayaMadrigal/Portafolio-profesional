import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root{
  --background:#0D1117;
  --surface:#161B22;
  --surface2:#21262D;

  --white:#F5F5F5;
  --gray:#A1A1AA;

  --purple:#8B5CF6;
  --pink:#EC4899;
  --pinkHover:#F472B6;
}

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

body{
  background:var(--background);
  color:var(--white);
  font-family:'Poppins',sans-serif;
}

`;

export default GlobalStyle;