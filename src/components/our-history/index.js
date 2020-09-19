import React from "react";
import styled from "@emotion/styled";
import { H1, StyledLink } from "../../styles/typography";

const OurHistoryContainer = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 10px;
  padding: 75px 0;
  font-size: 21px;
  letter-spacing: 0.5px;
  margin: 0 20px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 50% 50%;
    margin: 0 80px;
  }

  @media screen and (min-width: 1400px) {
    margin: 0;
  }
`;

const Title = styled(H1)`
  color: #616161;
`;

const Description = styled.div`
  color: #616161;
`;

const Img = styled.img`
  width: 100%;
`;

const KnowMoreButton = styled(StyledLink)`
  margin-top: 25px;
`;

const OurHistory = () => (
  <OurHistoryContainer>
    <div>
      <Title>A nossa história...</Title>
      <Description>
        Começamos a criar as nossas infraestruturas necessárias para produzir
        cogumelos e em 1 de outubro de 2016…
      </Description>

      <KnowMoreButton type="primary" to="/historia">
        Saber Mais
      </KnowMoreButton>
    </div>
    <div>
      <Img src="https://cdn.olhares.pt/client/files/foto/big/836/8364625.jpg" />
    </div>
  </OurHistoryContainer>
);

export default OurHistory;
