import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";

const LatestRecipeContainer = styled(Link)`
  display: grid;
  grid-template-columns: 50% 50%;
  justify-items: center;
  align-items: center;
  background-color: #fff;
  color: #616161;
  text-decoration: none;
  padding: 5px;
  margin-bottom: 72px;
`;

const LatestRecipeImg = styled.img`
  width: 100%;
  height: 280px;
  object-position: 50% 50%;
  object-fit: cover;
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
      <LatestRecipeImg src={recipe.node.frontmatter.thumbnail} />
    </LatestRecipeContainer>
  );
};

export default LatestRecipe;
