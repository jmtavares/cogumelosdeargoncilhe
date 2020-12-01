import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import MainLayout from "../components/layout/main-layout";
import { Header, HeaderImage } from "../components/layout/header";
import MushroomList from "../components/products/mushroom-list";
import MushroomsDescription from "../components/products/mushrooms-description";

const ProdutosPage = () => {
  const { file } = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "fundo-produtos.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Produtos" />

      <HeaderImage image={file.childImageSharp.fluid}>
        <MainLayout size="100vh">
          <Header
            title="Os nossos produtos…"
            subtitle="Os melhores e mais saborosos Cogumelos de Argoncilhe."
          />
          <MushroomList />
        </MainLayout>
      </HeaderImage>

      <MushroomsDescription />
    </Layout>
  );
};

export default ProdutosPage;
