import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import MainLayout from "../components/main-layout";
import { Header, HeaderImage } from "../components/header";
import WhereWeAre from "../components/where-we-are";
import ContactUs from "../components/contact-us";
import image from "../images/fundo-contactos.jpg";

const ContactosPage = () => (
  <Layout>
    <SEO title="Contactos" />

    <HeaderImage image={image}>
      <MainLayout>
        <Header title="Prontos a ajudar…" subtitle="Contactos" />
      </MainLayout>
    </HeaderImage>
    <WhereWeAre />
    <ContactUs />
  </Layout>
);

export default ContactosPage;
