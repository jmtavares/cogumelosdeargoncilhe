import styled from "@emotion/styled";

const MainLayout = styled.div`
  height: ${(props) => props.size || "auto"};

  @media screen and (min-width: 1400px) {
    margin: 0 200px;
    ${(props) => (props.minHeight ? `min-height: ${props.minHeight}px;` : "")}
  }
`;

export default MainLayout;
