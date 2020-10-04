import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "@emotion/styled";
import { StyledLink } from "../../../styles/typography";
import FollowUs from "./follow-us";

const MenuContainer = styled.div`
  position: fixed;
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

const LogoImage = styled(Img)`
  display: none;
  width: 100%;
  filter: opacity(0.8);

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

const activeStyle = { color: "black" };

const Menu = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logotipo.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `);

  return (
    <MenuContainer>
      <Container>
        <Links>
          <div>
            <PageLink to="/" activeStyle={activeStyle}>
              Home
            </PageLink>
          </div>
          <div>
            <PageLink to="/historia/" activeStyle={activeStyle}>
              História
            </PageLink>
          </div>
          <div>
            <PageLink to="/produtos/" activeStyle={activeStyle}>
              Produtos
            </PageLink>
          </div>
          <div>
            <PageLink to="/receitas/" activeStyle={activeStyle}>
              Receitas
            </PageLink>
          </div>
          <div>
            <PageLink to="/contactos/" activeStyle={activeStyle}>
              Contactos
            </PageLink>
          </div>
        </Links>
        <LogoImage fluid={data.file.childImageSharp.fluid} alt="Logótipo" />
      </Container>
      <FollowUs />
    </MenuContainer>
  );
};

export default Menu;
