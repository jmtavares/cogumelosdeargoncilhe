import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";

const TopRecipesContainer = styled.div`
  min-height: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #616161;
  color: #fff;
  transition: background-color 0.5s ease-in-out;
  text-decoration: none;
  cursor: pointer;
  padding: 20px;
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;

const LatestRecipe = styled(Link)`
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
`;

const LatestRecipeImg = styled.img`
  height: 200px;
`;

const TopRecipes = ({ recipes = [] }) => {
  const latestRecipe = recipes.pop();

  return (
    <TopRecipesContainer>
      {latestRecipe && (
        <LatestRecipe to={latestRecipe.node.fields.slug}>
          <div>{latestRecipe.node.frontmatter.title}</div>
          <div>
            <LatestRecipeImg src={latestRecipe.node.frontmatter.thumbnail} />
          </div>
        </LatestRecipe>
      )}
      {recipes.map((recipe, index) => (
        <div key={index}>
          <Link to={recipe.node.fields.slug}>
            {recipe.node.frontmatter.title}
          </Link>
        </div>
      ))}
    </TopRecipesContainer>
  );
};

export default TopRecipes;
