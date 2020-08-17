import React from "react";
import styled from "@emotion/styled";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import { Header, HeaderImage } from "../components/header";
import MainLayout from "../components/main-layout";
import OurHistory from "../components/our-history";
import OurProducts from "../components/our-products";
import { H1, H2, StyledLink } from "../styles/typography";
import image from '../images/fundo-home.jpg'

const Title = styled(H1)`
  margin: ${(props) => props.margin} 0 0 0;
`;

const Subtitle = styled(H2)`
  margin: ${(props) => props.margin} 0 0 0;
`;

const Content = styled.div`
  font-size: 21px;
  letter-spacing: 0.5px;
`;

const KnowMoreButton = styled(StyledLink)`
  margin-top: 25px;
`;

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Cogumelos de Argoncilhe" keywords={[]} />

      <HeaderImage image={image}>
        <MainLayout size="100vh">
          <Header />
          <Content>
            <Subtitle margin="112px">Novidades</Subtitle>
            <Title margin="75px">Cogumelos Desidratados</Title>
            <div>Desidratados ao sol, com vitamina D.</div>

            <KnowMoreButton to="/produtos" type="primary">
              Saber Mais
            </KnowMoreButton>
          </Content>
        </MainLayout>
      </HeaderImage>

      <MainLayout>
        <Content>
          <OurHistory />
        </Content>
      </MainLayout>

      <OurProducts />
    </Layout>
  );
};

export default IndexPage;
