import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import MainLayout from "../components/layout/main-layout";
import { Header, HeaderImage } from "../components/layout/header";
import MushroomList from "../components/products/mushroom-list";
import MushroomsDescription from "../components/products/mushrooms-description";

const productDescription = {
  shitake:
    "O shitake é um cogumelo comestível nativo do leste da Ásia. A espécie é hoje em dia o segundo cogumelo comestível mais consumido no mundo, incorporado desde há muito nos hábitos alimentares dos povos asiáticos. Recentemente, foi introduzido para produção e consumo nos paises ocidentais.",
  pleurotus:
    "Pleurotus é um género de fungos da divisão Basidiomycota, pertencentes à ordem Agaricales e à família Pleurotaceae. Suas espécies e linhagens oferecem uma variedade de cores como azul-escuro, cinza-escuro, branco, marrom, amarelo, salmão e rosa. O píleo possui a forma de concha.",
  desidratados:
    "Nos cogumelos desidratados, conseguimos preservar todos os seus componentes intactos até ao momento da sua elaboração.",
};

const ProdutosPage = () => {
  const { file, shitake, pleurotus, desidratados } = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "fundo-produtos.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      shitake: file(relativePath: { eq: "shitake.png" }) {
        childImageSharp {
          fixed(width: 270, height: 270, quality: 100) {
            originalName
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }

      pleurotus: file(relativePath: { eq: "pleurotus.png" }) {
        childImageSharp {
          fixed(width: 270, height: 270, quality: 100) {
            originalName
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }

      desidratados: file(relativePath: { eq: "desidratados.png" }) {
        childImageSharp {
          fixed(width: 270, height: 270, quality: 100) {
            originalName
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
    }
  `);

  const products = [shitake, pleurotus, desidratados].map((product) => {
    const name = product.childImageSharp.fixed.originalName.replace(".png", "");
    return {
      ...product.childImageSharp.fixed,
      description: productDescription[name],
      name,
    };
  });

  return (
    <Layout>
      <SEO title="Produtos" />

      <HeaderImage image={file.childImageSharp.fluid}>
        <MainLayout>
          <Header
            title="Os nossos produtos…"
            subtitle="Os melhores e mais saborosos Cogumelos de Argoncilhe."
          />
        </MainLayout>
      </HeaderImage>
      <MushroomList products={products} />
      <MushroomsDescription products={products} />
    </Layout>
  );
};

export default ProdutosPage;
