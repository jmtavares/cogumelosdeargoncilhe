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
  background: rgb(249, 250, 252);
  background: linear-gradient(
    212deg,
    rgba(249, 250, 252, 1) 0%,
    rgba(195, 201, 205, 1) 35%,
    rgba(160, 170, 172, 1) 100%
  );
  z-index: 1;

  @media screen and (min-width: 768px) {
    padding: 200px 0 200px 100px;
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
  color: #6c4244;
  font-size: 30px;
  text-transform: none;
  margin-bottom: 30px;
  transition: color 0.5s ease-in-out;

  &:hover {
    color: #731c20;
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

const activeStyle = { color: "#731c20" };

const StyledFollowUsContainer = styled.div`
  margin-right: 80px;
`;

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
      <StyledFollowUsContainer>
        <FollowUs />
      </StyledFollowUsContainer>
    </MenuContainer>
  );
};

export default Menu;
