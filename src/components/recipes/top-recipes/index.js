import React from "react";
import styled from "@emotion/styled";
import MainLayout from "../../layout/main-layout";
import LatestRecipe from "../latest-recipe";
import PreviewRecipe from "../preview-recipe";
import { StyledLink } from "../../../styles/typography";

const TopRecipesContainer = styled.div`
  min-height: 300px;
  width: 100%;
  background-color: #616161;
  padding: 72px 80px;
  border-bottom: 10px solid #ffffff;
  box-sizing: border-box;

  @media screen and (min-width: 1400px) {
    padding: 72px 0;
  }
`;

const RecipesContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 30px;
  justify-content: space-between;
  background-color: #616161;

  @media screen and (min-width: 768px) {
    grid-template-columns: auto auto auto;
    grid-gap: 10px;
  }
`;

const KnowMoreContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
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
        <KnowMoreContainer>
          <StyledLink type="secondary" to="/">
            Ver Mais
          </StyledLink>
        </KnowMoreContainer>
      </MainLayout>
    </TopRecipesContainer>
  );
};

export default TopRecipes;
