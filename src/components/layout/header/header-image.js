import React from "react";
import styled from "@emotion/styled";
import GatsbyBackgroundImage from "gatsby-background-image";

const BackgroundImage = styled.div`
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background: linear-gradient(#000, transparent, #000),
    url(${(props) => props.image}) 50% / cover;
  background-attachment: fixed;
  background-blend-mode: multiply;
`;

const StyledGatsbyBackgroundImage = styled(GatsbyBackgroundImage)`
  background-attachment: fixed;
  background-blend-mode: multiply;
`;

const HeaderImage = ({ children, image }) => {
  const useGatsby = typeof image !== "string";
  const backgroundFluidImageStack = [
    image,
    `linear-gradient(#000, transparent, #000)`,
  ].reverse();

  return useGatsby ? (
    <StyledGatsbyBackgroundImage fluid={backgroundFluidImageStack}>
      {children}
    </StyledGatsbyBackgroundImage>
  ) : (
    <BackgroundImage image={image}>{children}</BackgroundImage>
  );
};

export default HeaderImage;
