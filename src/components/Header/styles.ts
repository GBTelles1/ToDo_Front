import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme["gray-700"]};
  width: 100%;
  height: 12.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 3rem;
    width: 8rem;
  }
`