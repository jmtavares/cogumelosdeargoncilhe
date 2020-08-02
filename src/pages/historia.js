import React from "react";
import styled from "@emotion/styled";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import MainLayout from "../components/main-layout";
import { Header, HeaderImage } from "../components/header";

const HistoryBlock = styled.div`
  background-color: #616161;
  padding: 40px 0;
  font-size: 24px;
  text-align: center;
  line-height: 32px;
`;

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
      <HistoryBlock>
        <MainLayout>
          Nos tempos que se vivem há necessidade de nos reinventar e ir ao
          encontro do que falta no mercado. Associando o gosto por cogumelos de
          que todos partilhamos, verificamos que existia um nicho de mercado por
          explorar. Começamos a criar as nossas infraestruturas necessárias para
          produzir cogumelos e em 1 de outubro de 2016 e foi fundada a nossa
          empresa Cogumelos de ARGONCILHE.
        </MainLayout>
      </HistoryBlock>
    </HeaderImage>
  </Layout>
);

export default HistoriaPage;
