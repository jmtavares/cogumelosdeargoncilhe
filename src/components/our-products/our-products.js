import React from "react";
import styled from "@emotion/styled";
import { H1 } from "../../styles/typography";
import imgArrow from "../../images/down-arrow.svg";

const OurProductsContainer = styled.div`
  min-height: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #616161;
  color: #fff;
`;

const Title = styled(H1)`
  text-transform: uppercase;
  font-size: 48px;
`;

const Arrow = styled.div`
  width: 48px;
  height: 48px;
  border: 2px solid #fff;
  border-radius: 50%;
  padding: 10px;
  box-sizing: border-box;
`;

const ArrowImage = styled.img``;

const OurProducts = () => (
  <OurProductsContainer>
    <Title>Os nossos productos</Title>
    <Arrow>
      <ArrowImage src={imgArrow} alt="Ver os nossos productos" />
    </Arrow>
  </OurProductsContainer>
);

export default OurProducts;
