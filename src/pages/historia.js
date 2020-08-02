import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import MainLayout from "../components/main-layout";
import { Header, HeaderImage } from "../components/header";

const HistoriaPage = () => (
  <Layout>
    <SEO title="História" />

    <HeaderImage image="https://images.pexels.com/photos/850/wood-forest-autumn-mushrooms.jpg">
      <MainLayout>
        <Header
          title="A nossa história.."
          subtitle="Desde outubro de 2016, a produzir os melhores e mais saborosos cogumelos."
        />
      </MainLayout>
    </HeaderImage>
  </Layout>
);

export default HistoriaPage;
