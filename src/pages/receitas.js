import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import MainLayout from "../components/main-layout";
import { Header, HeaderImage } from "../components/header";

const ReceitasPage = () => (
  <Layout>
    <SEO title="Receitas" />

    <HeaderImage image="https://images.pexels.com/photos/850/wood-forest-autumn-mushrooms.jpg">
      <MainLayout>
        <Header
          title="Prontos a ajudar…"
          subtitle="Á procura de novas receitas?"
        />
      </MainLayout>
    </HeaderImage>
  </Layout>
);

export default ReceitasPage;
