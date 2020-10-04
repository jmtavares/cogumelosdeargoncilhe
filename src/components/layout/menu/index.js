import React from "react";
import styled from "@emotion/styled";
import { StyledLink } from "../../../styles/typography";
import logo from "../../../images/logotipo.png";
import FollowUs from "./follow-us";

const MenuContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #616161;
  z-index: 1;

  @media screen and (min-width: 768px) {
    padding: 200px 100px;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 100%;
  margin-top: 120px;

  @media screen and (min-width: 768px) {
    margin-top: 0;
    grid-template-columns: 50% 50%;
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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

const LogoImage = styled.img`
  display: none;
  width: 100%;
  filter: opacity(0.8);

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

const activeStyle = { color: "black" };

const Menu = () => (
  <MenuContainer>
    <Container>
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
      <LogoImage src={logo} alt="Logótipo" />
    </Container>
    <FollowUs />
  </MenuContainer>
);

export default Menu;
