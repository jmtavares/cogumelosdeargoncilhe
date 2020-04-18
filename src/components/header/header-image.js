import styled from "@emotion/styled";

const HeaderImage = styled.div`
  background-size: 100% 100%;
  background-repeat: no-repeat;
  ${(props) => `
    background-image: url("${props.image}");
  `}
`;

export default HeaderImage;
