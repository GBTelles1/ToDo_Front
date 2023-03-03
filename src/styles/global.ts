import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

  :focus {
    outline: transparent;
    box-shadow: 0 0 0 1px ${(props) => props.theme['purple-500']};
    color: var(--gray-100);
  }


  body {
    background: ${(props) => props.theme['gray-600']};
    color: ${(props) => props.theme['gray-300']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`
