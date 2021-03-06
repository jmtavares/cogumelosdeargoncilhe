import React from "react";
import styled from "@emotion/styled";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

const MushroomListContainer = styled.div`
  padding: 20px;
  transform: translateZ(0px);
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
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

const Shitake = styled(Img)`
  width: 200px;
  height: 200px;
  filter: drop-shadow(10px 10px 10px #000);

  @media screen and (min-width: 1200px) {
    width: 260px;
    height: 270px;
  }
`;

const Pleurotus = styled(Img)`
  width: 300px;
  height: 200px;
  filter: drop-shadow(10px 10px 10px #000);

  @media screen and (min-width: 1200px) {
    width: 380px;
    height: 270px;
  }
`;

const Desidratados = styled(Img)`
  width: 200px;
  height: 200px;
  filter: drop-shadow(10px 10px 10px #000);

  @media screen and (min-width: 1200px) {
    width: 260px;
    height: 270px;
  }
`;

const ItemTitle = styled.p`
  font-family: "DM Sans", sans-serif;
  letter-spacing: 0.71px;
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

const MushroomList = () => {
  const { shitake, pleurotus, desidratados } = useStaticQuery(graphql`
    query {
      shitake: file(relativePath: { eq: "shitake.png" }) {
        childImageSharp {
          fixed(width: 270, height: 270, quality: 100) {
            originalName
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }

      pleurotus: file(relativePath: { eq: "pleurotus.png" }) {
        childImageSharp {
          fixed(width: 365, height: 270, quality: 100) {
            originalName
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }

      desidratados: file(relativePath: { eq: "desidratados.png" }) {
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
    <MushroomListContainer>
      <List>
        <Item onClick={() => scrollInto("shitake")}>
          <Shitake
            fluid={{ ...shitake.childImageSharp.fixed }}
            alt="Shitake"
          />
          <ItemTitle>Shitake</ItemTitle>
        </Item>
        <Item onClick={() => scrollInto("pleurotus")}>
          <Pleurotus
            fluid={{ ...pleurotus.childImageSharp.fixed }}
            alt="Pleurotus"
          />
          <ItemTitle>Pleurotus</ItemTitle>
        </Item>
        <Item onClick={() => scrollInto("desidratados")}>
          <Desidratados
            fluid={{ ...desidratados.childImageSharp.fixed }}
            alt="Desidratados"
          />
          <ItemTitle>Desidratados</ItemTitle>
        </Item>
      </List>
    </MushroomListContainer>
  );
};

export default MushroomList;
