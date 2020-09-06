import React from "react";
import styled from "@emotion/styled";
import MainLayout from "../main-layout";
import LatestRecipe from "../latest-recipe";
import PreviewRecipe from "../preview-recipe";

const TopRecipesContainer = styled.div`
  min-height: 300px;
  width: 100%;
  background-color: #616161;
  padding: 72px 0;
  border-bottom: 10px solid #ffffff;
`;

const RecipesContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 10px;
  justify-content: space-between;
  background-color: #616161;
`;

const TopRecipes = ({ recipes = [] }) => {
  const latestRecipe = recipes.pop();

  return (
    <TopRecipesContainer>
      <MainLayout>
        {latestRecipe && <LatestRecipe recipe={latestRecipe} />}
        <RecipesContainer>
          {recipes.map((recipe, index) => (
            <PreviewRecipe key={index} recipe={recipe} />
          ))}
        </RecipesContainer>
      </MainLayout>
    </TopRecipesContainer>
  );
};

export default TopRecipes;
