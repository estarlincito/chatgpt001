import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
}

:root {
  --color1: #424874;
  --color2: #dcd6f7;
  --color3: #a6b1e1;
  --color4: #cacfd6;
  --color5: #d6e5e3;
  --color6: #ffff;
}

html{
  font-size: 16px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}

body {
  background-color: var(--color5);
  touch-action: none;
}

`;

const Wrapper = styled.main`
  min-height: 95vh; 
  display: grid;
  justify-content: center;
  align-content: center;
`;

export { GlobalStyle, Wrapper };
