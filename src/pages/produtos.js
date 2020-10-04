import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import MainLayout from "../components/layout/main-layout";
import { Header, HeaderImage } from "../components/layout/header";
import MushroomList from "../components/products/mushroom-list";
import MushroomsDescription from "../components/products/mushrooms-description";
import image from "../images/fundo-produtos.jpg";

const ProdutosPage = () => (
  <Layout>
    <SEO title="Produtos" />

    <HeaderImage image={image}>
      <MainLayout>
        <Header
          title="Os nossos produtos…"
          subtitle="Os melhores e mais saborosos Cogumelos de Argoncilhe."
        />
      </MainLayout>
    </HeaderImage>
    <MushroomList />
    <MushroomsDescription />
  </Layout>
);

export default ProdutosPage;
