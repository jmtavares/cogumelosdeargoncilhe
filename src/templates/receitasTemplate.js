import React from "react";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import { Header, HeaderImage } from "../components/header";
import MainLayout from "../components/main-layout";

const Post = styled.div`
  color: #616161;
  min-height: 400px;
`;

const ReceitasTemplate = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout>
      <SEO title="Cogumelos de Argoncilhe" keywords={[]} />

      <HeaderImage image={frontmatter.thumbnail}>
        <MainLayout>
          <Header title={frontmatter.date} subtitle={frontmatter.title} />
        </MainLayout>
      </HeaderImage>

      <MainLayout>
        <Post
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </MainLayout>
    </Layout>
  );
};

export default ReceitasTemplate;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        thumbnail
      }
    }
  }
`;
