import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import MainLayout from "../components/layout/main-layout";
import { Header, HeaderImage } from "../components/layout/header";
import OurProducts from "../components/products/our-products";
import TopRecipes from "../components/recipes/top-recipes";

const ReceitasPage = ({ data }) => {
  const { allMarkdownRemark, file } = data;

  return (
    <Layout>
      <SEO title="Receitas" />

      <HeaderImage image={file.childImageSharp.fluid}>
        <MainLayout>
          <Header
            title="Prontos a ajudar…"
            subtitle="Á procura de novas receitas?"
          />
        </MainLayout>
      </HeaderImage>
      <TopRecipes recipes={allMarkdownRemark.edges} />
      <OurProducts />
    </Layout>
  );
};

export default ReceitasPage;

export const IndexQuery = graphql`
  query IndexQuery {
    file(relativePath: { eq: "fundo-receitas.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM YYYY", locale: "pt")
            title
            thumbnail {
              childImageSharp {
                fixed(width: 600, quality: 75) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;
