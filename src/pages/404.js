import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import MainLayout from "../components/layout/main-layout";
import { Header, HeaderImage } from "../components/layout/header";

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "fundo-contactos.jpg" }) {
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
      <SEO title="404: Página não encontrada" />

      <HeaderImage image={data.file.childImageSharp.fluid}>
        <MainLayout>
          <Header title="404" subtitle="Página não encontrada" />
        </MainLayout>
      </HeaderImage>
    </Layout>
  );
};

export default NotFoundPage;
