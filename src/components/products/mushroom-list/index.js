import React from "react";
import styled from "@emotion/styled";
import Img from "gatsby-image";
import MainLayout from "../../layout/main-layout";

const MushroomListContainer = styled.div`
  background-color: var(--color1);
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
  cursor: pointer;
`;

const ItemImage = styled(Img)`
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
  text-transform: capitalize;
`;

const scrollInto = (id) => {
  const element = document.getElementById(id);

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

const MushroomList = ({ products }) => (
  <MushroomListContainer>
    <MainLayout>
      <List>
        {products.map((product) => {
          return (
            <Item key={product.name} onClick={() => scrollInto(product.name)}>
              <ItemImage fluid={{ ...product }} alt={product.name} />
              <ItemTitle>{product.name}</ItemTitle>
            </Item>
          );
        })}
      </List>
    </MainLayout>
  </MushroomListContainer>
);

export default MushroomList;
