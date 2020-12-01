import React from "react";
import styled from "@emotion/styled";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import MainLayout from "../../layout/main-layout";

const MushroomsDescriptionContainer = styled.div`
  background-color: var(--color3);
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
  margin-bottom: 60px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 60% 40%;
  }
`;

const Title = styled.h2`
  font-family: "DM Sans", sans-serif;
  color: var(--color2);
  font-size: 40px;
  margin: 0;
`;

const Description = styled.p`
  color: var(--color2);
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
`;

const MushroomsDescription = () => {
  const { shitake, pleurotus, desidratados } = useStaticQuery(graphql`
    query {
      shitake: file(relativePath: { eq: "shitake-description.jpg" }) {
        childImageSharp {
          fixed(width: 270, height: 270, quality: 100) {
            originalName
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }

      pleurotus: file(relativePath: { eq: "pleurotus-description.jpg" }) {
        childImageSharp {
          fixed(width: 365, height: 270, quality: 100) {
            originalName
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }

      desidratados: file(relativePath: { eq: "desidratados-description.jpg" }) {
        childImageSharp {
          fixed(width: 270, height: 270, quality: 100) {
            originalName
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
    }
  `);

  return (
    <MushroomsDescriptionContainer>
      <MainLayout>
        <MushroomContainer id="shitake">
          <div>
            <Title>Shitake</Title>
            <Description>
              O shitake é um cogumelo comestível nativo do leste da Ásia. A
              espécie é hoje em dia o segundo cogumelo comestível mais consumido
              no mundo, incorporado desde há muito nos hábitos alimentares dos
              povos asiáticos. Recentemente, foi introduzido para produção e
              consumo nos paises ocidentais.
            </Description>
          </div>
          <Right>
            <ItemImage
              fluid={{ ...shitake.childImageSharp.fixed }}
              alt="Shitake"
            />
          </Right>
        </MushroomContainer>
        <MushroomContainer id="pleurotus">
          <div>
            <Title>Pleurotus</Title>
            <Description>
              Pleurotus é um género de fungos da divisão Basidiomycota,
              pertencentes à ordem Agaricales e à família Pleurotaceae. Suas
              espécies e linhagens oferecem uma variedade de cores como
              azul-escuro, cinza-escuro, branco, marrom, amarelo, salmão e rosa.
              O píleo possui a forma de concha.
            </Description>
          </div>
          <Right>
            <ItemImage
              fluid={{ ...pleurotus.childImageSharp.fixed }}
              alt="Pleurotus"
            />
          </Right>
        </MushroomContainer>
        <MushroomContainer id="desidratados">
          <div>
            <Title>Desidratados</Title>
            <Description>
              Nos cogumelos desidratados, conseguimos preservar todos os seus
              componentes intactos até ao momento da sua elaboração.
            </Description>
          </div>
          <Right>
            <ItemImage
              fluid={{ ...desidratados.childImageSharp.fixed }}
              alt="Desidratados"
            />
          </Right>
        </MushroomContainer>
      </MainLayout>
    </MushroomsDescriptionContainer>
  );
};

export default MushroomsDescription;
