import React from "react";
import styled from "@emotion/styled";
import GatsbyBackgroundImage from "gatsby-background-image";

const StyledGatsbyBackgroundImage = styled(GatsbyBackgroundImage)`
  background-attachment: fixed;
  background-blend-mode: multiply;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const RelativeContainer = styled.div`
  position: relative;
`;

const HeaderImage = ({ children, image }) => {
  const backgroundFluidImageStack = [
    image,
    `linear-gradient(0deg, rgba(58,70,72,1) 0%, transparent 90%)`,
  ].reverse();

  return (
    <RelativeContainer>
      <StyledGatsbyBackgroundImage
        fluid={backgroundFluidImageStack}
        style={{ position: "absolute" }}
      />
      {children}
    </RelativeContainer>
  );
};

export default HeaderImage;
