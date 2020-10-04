import React from "react";
import styled from "@emotion/styled";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import { Header, HeaderImage } from "../components/layout/header";
import MainLayout from "../components/layout/main-layout";
import OurHistory from "../components/history/our-history";
import OurProducts from "../components/products/our-products";
import image from "../images/fundo-home.jpg";
import { StyledLink } from "../styles/typography";

const KnowMore = styled(StyledLink)`
  width: 120px;
  text-align: center;
`;

const Title = styled.h3`
  margin: 10px 0;
  font-size: 24px;
  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
`;

const Subtitle = styled.h3`
  font-size: 20px;
`;

const Novidades = styled.h2`
  margin: 75px 0;
  font-size: 21px;
  text-transform: uppercase;
`;

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Cogumelos de Argoncilhe" keywords={[]} />

      <HeaderImage image={image}>
        <MainLayout size="100vh">
          <Header>
            <Novidades>Novidades</Novidades>
            <Title>Cogumelos Desidratados</Title>
            <Subtitle>Desidratados ao sol, com vitamina D.</Subtitle>
            <KnowMore type="secondary" to="/produtos#Desidratados">
              Saber Mais
            </KnowMore>
          </Header>
        </MainLayout>
      </HeaderImage>

      <MainLayout>
        <OurHistory />
      </MainLayout>

      <OurProducts />
    </Layout>
  );
};

export default IndexPage;
