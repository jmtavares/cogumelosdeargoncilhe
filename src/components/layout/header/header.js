import React, { useState } from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import MenuIcon from "./menu-icon";
import Menu from "../menu";
import LogoText from "../../logos/logo-text";
import Title from './title'
import Subtitle from './subtitle'

const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  @media screen and (min-width: 768px) {
    padding-top: 60px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0;
  margin: 0 20px;
  transform: translateZ(0);

  @media screen and (min-width: 768px) {
    margin: 0 80px;
  }

  @media screen and (min-width: 1400px) {
    margin: 0;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
`;

const Header = ({ title, subtitle, children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <HeadingContainer>
        <MenuIcon onClick={() => setVisible(!visible)} closed={visible} />
        <StyledLink to="/">
          <LogoText fill="#FFFFFF" />
        </StyledLink>
      </HeadingContainer>
      {visible && <Menu />}

      {(title || subtitle || children) && (
        <Content>
          {title && <Title>{title}</Title>}
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
          {children}
        </Content>
      )}
    </>
  );
};

export default Header;
