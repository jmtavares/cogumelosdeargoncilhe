import styled from "@emotion/styled";

const MainLayout = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  height: ${(props) => props.size || "auto"};
`;

export default MainLayout;
