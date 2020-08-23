import React from "react";
import styled from "@emotion/styled";
import { StyledLink } from "../../styles/typography";
import Footer from "./footer";

const MenuContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #616161;

  @media screen and (min-width: 768px) {
    padding: 200px 100px;
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 120px;
  align-items: center;

  @media screen and (min-width: 768px) {
    align-items: flex-start;
  }
`;

const PageLink = styled(StyledLink)`
  color: #fff;
  font-size: 30px;
  text-transform: none;
  margin-bottom: 30px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #000;
  }

  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
`;

const activeStyle = { color: "black" };

const Menu = () => (
  <MenuContainer>
    <Links>
      <div>
        <PageLink to="/" activeStyle={activeStyle}>
          Home
        </PageLink>
      </div>
      <div>
        <PageLink to="/historia" activeStyle={activeStyle}>
          História
        </PageLink>
      </div>
      <div>
        <PageLink to="/produtos" activeStyle={activeStyle}>
          Produtos
        </PageLink>
      </div>
      <div>
        <PageLink to="/receitas" activeStyle={activeStyle}>
          Receitas
        </PageLink>
      </div>
      <div>
        <PageLink to="/contactos" activeStyle={activeStyle}>
          Contactos
        </PageLink>
      </div>
    </Links>
    <Footer />
  </MenuContainer>
);

export default Menu;
