import styled from "@emotion/styled";
import { Link } from "gatsby";

export const H1 = styled.h1`
  font-family: "DM Sans", sans-serif;
  font-size: 40px;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.95px;
  color: var(--color3);
`;

export const H2 = styled.h2`
  font-family: "DM Sans", sans-serif;
  font-size: 21px;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.5px;
  color: var(--color3);
`;

export const GlobalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  font-family: "Nunito Sans", sans-serif;
  background-color: var(--color3);
  color: var(--color3);
  font-size: 20px;
  font-weight: normal;
  overflow-x: hidden;
`;

export const StyledLink = styled(Link)`
  transition: all 0.5s ease-in-out;
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.29px;
  border-radius: 6px;
  text-transform: uppercase;
  height: 40px;
  line-height: 40px;
  padding: 0 17px;
  cursor: pointer;
  text-decoration: none;

  ${(props) =>
    props.type === "primary" &&
    `
  background-color: #3a4648;
  color: var(--color3);
  `}

  ${(props) =>
    props.type === "secondary" &&
    `
  background-color: var(--color3);
  color: var(--color2);

  &:hover {
    background-color: #3a4648;
    color: var(--color3);
  }
  `}
`;

export const SVG = styled.svg`
  transition: fill 0.5s ease-in-out;
  :hover {
    fill: ${(props) => props.hover};
  }
`;
