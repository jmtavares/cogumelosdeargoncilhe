import React from "react";
import styled from "@emotion/styled";
import { H1, StyledLink } from "../../styles/typography";

const HistoryContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-column-gap: 10px;
  padding: 75px 0;
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

const History = () => (
  <HistoryContainer>
    <div>
      <Title>A nossa história...</Title>
      <Description>
        Começamos a criar as nossas infraestruturas necessárias para produzir
        cogumelos e em 1 de outubro de 2016…
      </Description>

      <KnowMoreButton type="secondary" to="/historia">
        Saber Mais
      </KnowMoreButton>
    </div>
    <div>
      <Img src="https://cdn.olhares.pt/client/files/foto/big/836/8364625.jpg" />
    </div>
  </HistoryContainer>
);

export default History;
