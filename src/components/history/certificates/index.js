import React from "react";
import styled from "@emotion/styled";
import image from "../../../images/mushroom1.jpg";

const CertificatesContainer = styled.div`
  color: var(--color2);
  text-align: left;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 100%;
  padding: 20px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 50% 50%;
    padding: 75px 80px;
  }

  @media screen and (min-width: 1400px) {
    padding: 75px 0;
  }
`;

const Title = styled.h2`
  margin: 0;
  font-size: 40px;
`;

const Description = styled.p`
  font-size: 19px;
  letter-spacing: 0.45px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
`;

const Certificates = () => {
  return (
    <CertificatesContainer>
      <Column>
        <Title>Certificados</Title>
        <Description>
          Cumprimos os requesitos da <strong>NATURALFA</strong>, para a
          obtenção, preparação e comercialização dos nossos produtos em{" "}
          <strong>Modo de Produção Biológico.</strong>
        </Description>
      </Column>
      <Column>
        <Image src={image} alt="Cogumelos" />
      </Column>
    </CertificatesContainer>
  );
};

export default Certificates;
