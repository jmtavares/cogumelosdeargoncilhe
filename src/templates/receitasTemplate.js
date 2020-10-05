import React from "react";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import { Header, HeaderImage } from "../components/layout/header";
import MainLayout from "../components/layout/main-layout";

const Post = styled.div`
  color: #616161;
  min-height: 400px;
  padding: 20px;

  @media screen and (min-width: 1400px) {
    padding: 20px 0;
  }
`;

const ReceitasTemplate = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html, timeToRead } = markdownRemark;
  const { date, title, thumbnail } = frontmatter;
  const seoTitle = `Cogumelos de Argoncilhe - ${title}`;
  const headerTitle = `${date} - ${timeToRead} min leitura`;

  return (
    <Layout>
      <SEO title={seoTitle} keywords={[]} />
      <HeaderImage image={thumbnail.childImageSharp.fluid}>
        <MainLayout>
          <Header title={headerTitle} subtitle={title} />
        </MainLayout>
      </HeaderImage>

      <MainLayout>
        <Post
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
      timeToRead
      wordCount {
        paragraphs
        sentences
        words
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
