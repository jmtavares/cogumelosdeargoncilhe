import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import MainLayout from "../components/layout/main-layout";
import { Header, HeaderImage } from "../components/layout/header";
import WhereWeAre from "../components/contacts/where-we-are";
import ContactUs from "../components/contacts/contact-us";

const ContactosPage = () => {
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
      <SEO title="Contactos" />

      <HeaderImage image={data.file.childImageSharp.fluid}>
        <MainLayout>
          <Header title="Prontos a ajudar…" subtitle="Contactos" />
        </MainLayout>
      </HeaderImage>
      <WhereWeAre />
      <ContactUs />
    </Layout>
  );
};

export default ContactosPage;
