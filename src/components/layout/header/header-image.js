import styled from "@emotion/styled";

const HeaderImage = styled.div`
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background: linear-gradient(#000, transparent, #000),
    url(${(props) => props.image}) 50% / cover;
  background-attachment: fixed;
  background-blend-mode: multiply;
`;

export default HeaderImage;
