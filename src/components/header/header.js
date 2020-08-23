import React, { useState } from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import MenuIcon from "./menu-icon";
import Menu from "../menu";

const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding-top: 16px;
  @media screen and (min-width: 768px) {
    padding-top: 72px;
  }
`;

const Heading = styled.h1`
  color: #ffffff;
  font-size: 20px;
  letter-spacing: 0.34px;
  margin: 0;
  @media screen and (min-width: 768px) {
    font-size: 43px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0;
  margin: 0 20px;
  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;

const Title = styled.h3`
  margin: 0;
  font-size: 21px;
  max-width: 460px;
  @media screen and (min-width: 768px) {
    margin: 72px 0 0 0;
  }
`;

const Subtitle = styled.h2`
  margin: 10px 0 20px 0;
  font-size: 24px;
  max-width: 460px;
  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Header = ({ title, subtitle }) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <HeadingContainer>
        <MenuIcon onClick={() => setVisible(!visible)} closed={visible} />
        <StyledLink to="/">
          <Heading>Cogumelos de Argoncilhe</Heading>
        </StyledLink>
      </HeadingContainer>
      {visible && <Menu />}

      {(title || subtitle) && (
        <Content>
          {title && <Title>{title}</Title>}
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </Content>
      )}
    </>
  );
};

export default Header;
