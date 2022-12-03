import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body, input, textarea, button {
    font: 400 1rem 'Inter', sans-serif;
  }
  
  :focus {
    outline: 0;
    box-shadow: 0 0 0 1px white;
  }
  
  body {
    background-color: ${props => props.theme['brown-900']};
    
    color: ${props => props.theme['gray-100']};
    -webkit-font-smoothing: antialiased;
    
  }
  

  ;`