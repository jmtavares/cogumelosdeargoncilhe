import React, { useState } from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import MenuIcon from "./menu-icon";
import Menu from "../menu";

const HeadingContainer = styled.div`
  padding-top: 72px;
  display: flex;
  align-items: center;
`;

const Heading = styled.h1`
  color: #ffffff;
  font-size: 43px;
  letter-spacing: 0.34px;
  margin: 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 84px;
`;

const Title = styled.h3`
  margin: 112px 0 0 0;
  font-size: 21px;
  max-width: 460px;
`;
const Subtitle = styled.h2`
  margin: 10px 0 20px 0;
  font-size: 40px;
  max-width: 460px;
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

      <Content>
        {title && <Title>{title}</Title>}
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </Content>
    </>
  );
};

export default Header;
