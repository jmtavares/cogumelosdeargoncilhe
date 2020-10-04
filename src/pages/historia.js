import React from "react";
import styled from "@emotion/styled";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import MainLayout from "../components/layout/main-layout";
import { Header, HeaderImage } from "../components/layout/header";
import Certificates from "../components/history/certificates";
import OurProducts from "../components/products/our-products";

const HistoryBlock = styled.div`
  background-color: #616161;
  padding: 20px;
  font-size: 16px;
  line-height: 24px;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
    padding: 40px 80px;
  }

  @media screen and (min-width: 1400px) {
    padding: 40px 0;
  }
`;

const CertificatesBlock = styled.div`
  background-color: #fff;
  padding: 40px 0;
  font-size: 24px;
  text-align: center;
  line-height: 32px;
`;

const HistoryDescription = styled.div`
  margin: 0 auto;
  max-width: 967px;
`;

const HistoriaPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "fundo-receitas.jpg" }) {
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
      <SEO title="História" />

      <HeaderImage image={data.file.childImageSharp.fluid}>
        <MainLayout>
          <Header
            title="A nossa história.."
            subtitle="Desde outubro de 2016, a produzir os melhores e mais saborosos cogumelos."
          />
        </MainLayout>
        <HistoryBlock>
          <MainLayout>
            <HistoryDescription>
              Nos tempos que se vivem há necessidade de nos reinventar e ir ao
              encontro do que falta no mercado. Associando o gosto por cogumelos
              de que todos partilhamos, verificamos que existia um nicho de
              mercado por explorar. Começamos a criar as nossas infraestruturas
              necessárias para produzir cogumelos e em 1 de outubro de 2016 e
              foi fundada a nossa empresa Cogumelos de ARGONCILHE.
            </HistoryDescription>
          </MainLayout>
        </HistoryBlock>
        <CertificatesBlock>
          <MainLayout>
            <Certificates />
          </MainLayout>
        </CertificatesBlock>
        <OurProducts />
      </HeaderImage>
    </Layout>
  );
};

export default HistoriaPage;
