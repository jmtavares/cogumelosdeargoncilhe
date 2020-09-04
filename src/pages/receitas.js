import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import MainLayout from "../components/main-layout";
import { Header, HeaderImage } from "../components/header";
import OurProducts from "../components/our-products";

const ReceitasPage = ({ data }) => {
  const posts = data.allMarkdownRemark;
  console.log(posts);

  return (
    <Layout>
      <SEO title="Receitas" />

      <HeaderImage image="https://images.pexels.com/photos/850/wood-forest-autumn-mushrooms.jpg">
        <MainLayout>
          <Header
            title="Prontos a ajudar…"
            subtitle="Á procura de novas receitas?"
          />
        </MainLayout>
        {posts.edges.map(({ node }) => (
          <div>
            <Link to={node.fields.slug} className="link">
              {node.frontmatter.title}
            </Link>
          </div>
        ))}
        <OurProducts />
      </HeaderImage>
    </Layout>
  );
};

export default ReceitasPage;

export const IndexQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            thumbnail
          }
        }
      }
    }
  }
`;
