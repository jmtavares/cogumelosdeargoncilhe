import React from "react";
import styled from "@emotion/styled";
import MainLayout from "../main-layout";
import shitakeImg from "../../images/shitake.png";
import pleurotusImg from "../../images/pleurotus.png";
import desidratadosImg from "../../images/desidratados.png";

const MushroomListContainer = styled.div`
  background-color: #616161;
  padding: 20px;

  @media screen and (min-width: 768px) {
    padding: 80px;
  }

  @media screen and (min-width: 1400px) {
    padding: 80px 0;
  }
`;

const List = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ItemImage = styled.img`
  width: 200px;
  height: 200px;
  filter: drop-shadow(10px 10px 10px #000);

  @media screen and (min-width: 1024px) {
    width: 270px;
    height: 270px;
  }
`;

const ItemTitle = styled.p`
  margin: 14px 0;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
`;

const MushroomList = () => (
  <MushroomListContainer>
    <MainLayout>
      <List>
        <Item>
          <ItemImage src={shitakeImg} alt="Shitaque" />
          <ItemTitle>Shitaque</ItemTitle>
        </Item>
        <Item>
          <ItemImage src={pleurotusImg} alt="Pleurotus" />
          <ItemTitle>Pleurotus</ItemTitle>
        </Item>
        <Item>
          <ItemImage src={desidratadosImg} alt="Desidratados" />
          <ItemTitle>Desidratados</ItemTitle>
        </Item>
      </List>
    </MainLayout>
  </MushroomListContainer>
);

export default MushroomList;
