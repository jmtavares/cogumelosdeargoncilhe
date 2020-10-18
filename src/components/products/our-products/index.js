import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import { H1 } from "../../../styles/typography";
import imgArrow from "../../../images/down-arrow.svg";

const OurProductsContainer = styled(Link)`
  min-height: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color1);
  color: var(--color3);
  transition: background-color 0.5s ease-in-out;
  text-decoration: none;
  cursor: pointer;
  padding: 20px;
  box-sizing: border-box;

  &:hover {
    background-color: var(--color2);
  }

  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;

const Title = styled(H1)`
  text-transform: uppercase;
  font-size: 30px;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`;

const Arrow = styled.div`
  width: 48px;
  height: 48px;
  border: 2px solid var(--color3);
  border-radius: 50%;
  padding: 10px;
  box-sizing: border-box;
`;

const ArrowImage = styled.img``;

const OurProducts = () => (
  <OurProductsContainer to="/produtos">
    <Title>Os nossos produtos</Title>
    <Arrow>
      <ArrowImage src={imgArrow} alt="Ver os nossos productos" />
    </Arrow>
  </OurProductsContainer>
);

export default OurProducts;
