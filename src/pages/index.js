import React from "react";
import styled from "@emotion/styled";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import { Header, HeaderImage } from "../components/header";
import MainLayout from "../components/main-layout";
import OurHistory from "../components/our-history";
import OurProducts from "../components/our-products";
import image from "../images/fundo-home.jpg";

const Content = styled.div`
  font-size: 21px;
  letter-spacing: 0.5px;
  margin: 0 20px;

  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Cogumelos de Argoncilhe" keywords={[]} />

      <HeaderImage image={image}>
        <MainLayout size="100vh">
          <Header
            title="Cogumelos Desidratados"
            subtitle="Desidratados ao sol, com vitamina D."
          />
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
