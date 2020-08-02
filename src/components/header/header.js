import React, { useState } from "react";
import styled from "@emotion/styled";
import MenuIcon from "./menu-icon";
import Menu from "../menu";

const HeaderContainer = styled.div`
  padding-top: 72px;
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  color: #ffffff;
  font-size: 43px;
  letter-spacing: 0.34px;
  margin: 0;
`;

const Header = () => {
  const [visible, setVisible] = useState(false);

  return (
    <HeaderContainer>
      <MenuIcon onClick={() => setVisible(!visible)} closed={visible} />
      <Title>Cogumelos de Argoncilhe</Title>
      {visible && <Menu />}
    </HeaderContainer>
  );
};

export default Header;
