import React from "react";
import styled from "@emotion/styled";
import Menu from "./menu";

const HeaderContainer = styled.div`
  padding-top: 72px;
  display: flex;
  align-items: center;
`;

const MenuIcon = styled(Menu)`
  margin-right: 44px;
`;

const Title = styled.h1`
  color: #ffffff;
  font-size: 43px;
  letter-spacing: 0.34px;
  margin: 0;
`;

const Header = () => (
  <HeaderContainer>
    <MenuIcon onClick={() => {}} />
    <Title>Cogumelos de Argoncilhe</Title>
  </HeaderContainer>
);

export default Header;
