import React from "react";
import styled from "@emotion/styled";
import MainLayout from "../../layout/main-layout";
import LatestRecipe from "../latest-recipe";
import PreviewRecipe from "../preview-recipe";

const TopRecipesContainer = styled.div`
  min-height: 300px;
  width: 100%;
  background-color: #3a4648;
  padding: 72px 80px;
  box-sizing: border-box;

  @media screen and (min-width: 1400px) {
    padding: 72px 0;
  }
`;

const RecipesContainer = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 30px;
  justify-content: space-between;

  @media screen and (min-width: 1024px) {
    grid-template-columns: auto auto auto;
    grid-gap: 10px;
  }
`;

const TopRecipes = ({ recipes = [] }) => {
  const [latestRecipe, ...others] = recipes;

  return (
    <TopRecipesContainer>
      <MainLayout>
        {latestRecipe && <LatestRecipe recipe={latestRecipe} />}
        <RecipesContainer>
          {others &&
            others.map((recipe, index) => (
              <PreviewRecipe key={index} recipe={recipe} />
            ))}
        </RecipesContainer>
      </MainLayout>
    </TopRecipesContainer>
  );
};

export default TopRecipes;
