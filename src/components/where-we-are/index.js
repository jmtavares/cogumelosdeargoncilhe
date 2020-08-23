import React from "react";
import styled from "@emotion/styled";
import { H1 } from "../../styles/typography";
import MainLayout from "../main-layout";
import image from "../../images/contactos.jpg";

const WhereWeAreContainer = styled.div`
  background-color: #616161;
  padding: 80px 0;
`;

const LocationContainer = styled.div`
  display: grid;
  grid-template-columns: 100%;

  @media screen and (min-width: 768px) {
    grid-template-columns: 35% 65%;
  }
`;

const Title = styled(H1)`
  font-size: 27px;
  letter-spacing: 0.64px;
  margin: 0;
`;

const Description = styled.p`
  font-size: 19px;
  letter-spacing: 0.45px;
  margin: 0;
  font-weight: 300;
`;

const FarmImage = styled.img`
  width: 100%;
`;

const Separator = styled.div`
  margin: 25px 0;
`;

const CustomLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 19px;
  letter-spacing: 0.45px;
  font-weight: 300;
`;

const WhereWeAre = () => (
  <WhereWeAreContainer>
    <MainLayout>
      <LocationContainer>
        <div>
          <Title>Onde nos situamos?</Title>
          <Description>Rua Manuel, 91 4415 - 456 Argoncilhe</Description>
          <Separator />

          <Title>Entre em contacto</Title>
          <Description>
            <CustomLink href="mailto:cogumelosdeargoncilhe@gmail.com">
              cogumelosdeargoncilhe@gmail.com
            </CustomLink>
          </Description>
          <Description>
            Linha direta:{" "}
            <CustomLink href="tel:939306102">939306102</CustomLink>
          </Description>
          <Separator />

          <Title>Horário de atendimento:</Title>
          <Description>Segunda a Sábado das 9:00 às 18:00</Description>
        </div>
        <div>
          <FarmImage src={image} alt="Localização" />
        </div>
      </LocationContainer>
    </MainLayout>
  </WhereWeAreContainer>
);

export default WhereWeAre;
