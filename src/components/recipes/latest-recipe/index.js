import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import Img from "gatsby-image";

const LatestRecipeContainer = styled(Link)`
  display: grid;
  grid-template-columns: 100%;
  justify-items: center;
  align-items: center;
  background-color: var(--color3);
  color: var(--color2);
  text-decoration: none;
  padding: 5px;
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 50% 50%;
    margin-bottom: 72px;
  }
`;

const LatestRecipeImg = styled(Img)`
  width: 100%;
  object-position: 50% 50%;
  object-fit: cover;
  height: 220px;

  @media screen and (min-width: 1024px) {
    height: 280px;
  }
`;

const LatestRecipeTitle = styled.div`
  font-size: 30px;
  letter-spacing: 0.71px;
  font-weight: bold;
`;

const LatestRecipe = ({ recipe }) => {
  return (
    <LatestRecipeContainer to={recipe.node.fields.slug}>
      <LatestRecipeTitle>{recipe.node.frontmatter.title}</LatestRecipeTitle>
      <LatestRecipeImg
        fluid={recipe.node.frontmatter.thumbnail.childImageSharp.fixed}
      />
    </LatestRecipeContainer>
  );
};

export default LatestRecipe;
