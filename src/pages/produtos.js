import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import MainLayout from "../components/main-layout";
import { Header, HeaderImage } from "../components/header";

const ProdutosPage = () => (
  <Layout>
    <SEO title="Produtos" />

    <HeaderImage image="https://www.incredibleforest.net/sites/default/files/istock_000004455406medium-1_1.jpg">
      <MainLayout>
        <Header
          title="Os nossos produtos…"
          subtitle="Os melhores e mais saborosos Cogumelos de Argoncilhe."
        />
      </MainLayout>
    </HeaderImage>
  </Layout>
);

export default ProdutosPage;
