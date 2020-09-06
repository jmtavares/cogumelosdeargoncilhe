import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import { Header, HeaderImage } from "../components/header";
import MainLayout from "../components/main-layout";
import OurHistory from "../components/our-history";
import OurProducts from "../components/our-products";
import image from "../images/fundo-home.jpg";
import CMS from 'netlify-cms-app';
import { pt } from 'netlify-cms-locales';

const IndexPage = () => {
  CMS.registerLocale('pt', pt);
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
        <OurHistory />
      </MainLayout>

      <OurProducts />
    </Layout>
  );
};

export default IndexPage;
