import React from "react";
import styled from "@emotion/styled";
import MainLayout from "../main-layout";
import shitakeImg from "../../images/shitake.png";
import pleurotusImg from "../../images/pleurotus.png";
import desidratadosImg from "../../images/desidratados.png";

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
    grid-template-columns: 65% 35%;
  }
`;

const Title = styled.h2`
  color: #616161;
  font-size: 40px;
`;

const Description = styled.p`
  color: #616161;
  font-size: 19px;
`;

const Left = styled.div``;
const Right = styled.div`
  text-align: right;
`;

const ItemImage = styled.img`
  width: 270px;
  filter: drop-shadow(10px 10px 10px #000);
`;

const MushroomsDescription = () => (
  <MushroomsDescriptionContainer>
    <MainLayout>
      <MushroomContainer>
        <Left>
          <Title>Shitaque</Title>
          <Description>
            O shitake é um cogumelo comestível nativo do leste da Ásia. A
            espécie é hoje em dia o segundo cogumelo comestível mais consumido
            no mundo, incorporado desde há muito nos hábitos alimentares dos
            povos asiáticos. Recentemente, foi introduzido para produção e
            consumo nos paises ocidentais.
          </Description>
        </Left>
        <Right>
          <ItemImage src={shitakeImg} alt="Shitaque" />
        </Right>
      </MushroomContainer>
      <MushroomContainer>
        <Left>
          <Title>Pleurotus</Title>
          <Description>
            Pleurotus é um género de fungos da divisão Basidiomycota,
            pertencentes à ordem Agaricales e à família Pleurotaceae. Suas
            espécies e linhagens oferecem uma variedade de cores como
            azul-escuro, cinza-escuro, branco, marrom, amarelo, salmão e rosa. O
            píleo possui a forma de concha.
          </Description>
        </Left>
        <Right>
          <ItemImage src={pleurotusImg} alt="Pleurotus" />
        </Right>
      </MushroomContainer>
      <MushroomContainer>
        <Left>
          <Title>Desidratados</Title>
          <Description>
            Nos cogumelos desidratados, conseguimos preservar todos os seus
            componentes intactos até ao momento da sua elaboração.
          </Description>
        </Left>
        <Right>
          <ItemImage src={desidratadosImg} alt="Desidratados" />
        </Right>
      </MushroomContainer>
    </MainLayout>
  </MushroomsDescriptionContainer>
);

export default MushroomsDescription;
