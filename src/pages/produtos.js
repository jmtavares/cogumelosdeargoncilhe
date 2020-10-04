import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import MainLayout from "../components/layout/main-layout";
import { Header, HeaderImage } from "../components/layout/header";
import MushroomList from "../components/products/mushroom-list";
import MushroomsDescription from "../components/products/mushrooms-description";

const ProdutosPage = () => {
  const data = useStaticQuery(graphql`
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

      <HeaderImage image={data.file.childImageSharp.fluid}>
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
};

export default ProdutosPage;
