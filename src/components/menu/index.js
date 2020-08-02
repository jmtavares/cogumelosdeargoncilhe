import React from "react";
import styled from "@emotion/styled";
import { StyledLink } from "../../styles/typography";
import MainLayout from "../main-layout";

const MenuContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #616161;
  padding: 200px 100px;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 120px;
`;

const PageLink = styled(StyledLink)`
  color: #fff;
  font-size: 40px;
  text-transform: none;
  margin-bottom: 20px;
`;

const Menu = () => (
  <MenuContainer>
    <MainLayout>
      <Links>
        <div>
          <PageLink to="/">Home</PageLink>
        </div>
        <div>
          <PageLink to="/historia">História</PageLink>
        </div>
        <div>
          <PageLink to="/produtos">Produtos</PageLink>
        </div>
        <div>
          <PageLink to="/receitas">Receitas</PageLink>
        </div>
        <div>
          <PageLink to="/contactos">Contactos</PageLink>
        </div>
      </Links>
    </MainLayout>
  </MenuContainer>
);

export default Menu;
