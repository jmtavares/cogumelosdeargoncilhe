import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import Img from "gatsby-image";

const PreviewRecipeContainer = styled(Link)`
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: column;
  text-decoration: none;
`;

const PreviewRecipeImg = styled(Img)`
  width: 100%;
  object-position: 50% 50%;
  object-fit: cover;
  padding: 5px;
  background-color: var(--color3);
  box-sizing: border-box;
  height: 220px;
  border: 3px solid #fff;

  @media screen and (min-width: 1024px) {
    width: 270px;
    height: 235px;
  }
`;

const PreviewRecipeTitle = styled.div`
  font-size: 30px;
  letter-spacing: 0.71px;
  font-weight: bold;
  color: var(--color3);
  margin-top: 20px;
`;

const PreviewRecipe = ({ recipe }) => {
  return (
    <PreviewRecipeContainer to={recipe.node.fields.slug}>
      <PreviewRecipeImg
        fluid={recipe.node.frontmatter.thumbnail.childImageSharp.fixed}
      />
      <PreviewRecipeTitle>{recipe.node.frontmatter.title}</PreviewRecipeTitle>
    </PreviewRecipeContainer>
  );
};

export default PreviewRecipe;
