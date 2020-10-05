import React from "react";
import styled from "@emotion/styled";
import Img from "gatsby-image";
import MainLayout from "../../layout/main-layout";

const MushroomsDescriptionContainer = styled.div`
  background-color: #fff;
  padding: 20px;

  @media screen and (min-width: 768px) {
    padding: 80px;
  }

  @media screen and (min-width: 1400px) {
    padding: 80px 0;
  }
`;

const MushroomContainer = styled.div`
  display: grid;
  grid-template-columns: 100%;

  @media screen and (min-width: 768px) {
    grid-template-columns: 60% 40%;
  }
`;

const Title = styled.h2`
  color: #616161;
  font-size: 40px;
  text-transform: capitalize;
`;

const Description = styled.p`
  color: #616161;
  font-size: 19px;
`;

const Right = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (min-width: 768px) {
    justify-content: flex-end;
  }
`;

const ItemImage = styled(Img)`
  width: 270px;
  min-height: 270px;
  filter: drop-shadow(10px 10px 10px #000);
`;

const MushroomsDescription = ({ products }) => (
  <MushroomsDescriptionContainer>
    <MainLayout>
      {products.map((product) => {
        return (
          <MushroomContainer id={product.name} key={product.name}>
            <div>
              <Title>{product.name}</Title>
              <Description>{product.description}</Description>
            </div>
            <Right>
              <ItemImage fluid={{ ...product }} alt={product.name} />
            </Right>
          </MushroomContainer>
        );
      })}
    </MainLayout>
  </MushroomsDescriptionContainer>
);

export default MushroomsDescription;
