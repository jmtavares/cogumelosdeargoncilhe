import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";

const PreviewRecipeContainer = styled(Link)`
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: column;
  text-decoration: none;
`;

const PreviewRecipeImg = styled.img`
  width: 100%;
  object-position: 50% 50%;
  object-fit: cover;
  padding: 5px;
  background-color: #ffffff;
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    width: 270px;
    height: 235px;
  }
`;

const PreviewRecipeTitle = styled.div`
  font-size: 30px;
  letter-spacing: 0.71px;
  font-weight: bold;
  color: #ffffff;
`;

const PreviewRecipe = ({ recipe }) => {
  return (
    <PreviewRecipeContainer to={recipe.node.fields.slug}>
      <PreviewRecipeImg src={recipe.node.frontmatter.thumbnail} />
      <PreviewRecipeTitle>{recipe.node.frontmatter.title}</PreviewRecipeTitle>
    </PreviewRecipeContainer>
  );
};

export default PreviewRecipe;
