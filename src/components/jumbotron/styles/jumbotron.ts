//styled component here
//jumbotron
import styled from "styled-components/macro";

export const Inner = styled.div<{ direction: string }>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
`;
