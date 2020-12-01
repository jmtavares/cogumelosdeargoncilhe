import React from "react";
import styled from "@emotion/styled";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import { H1 } from "../../../styles/typography";

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

const Title = styled(H1)`
  margin: 0;
  color: #000;
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

const CertImage = styled(Img)`
  height: 300px;
`;

const Strong = styled.span`
  font-weight: bold;
  font-size: 21px;
  letter-spacing: 0.45px;
`

const Certificates = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "shitake-description.jpg" }) {
        childImageSharp {
          fixed(width: 500, height: 300, quality: 100) {
            originalName
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
    }
  `);

  return (
    <CertificatesContainer>
      <Column>
        <Title>Certificações</Title>
        <Description>
          Cumprimos os requesitos da <Strong>NATURALFA</Strong>, para a
          obtenção, preparação e comercialização dos nossos produtos em{" "}
          <Strong>Modo de Produção Biológico.</Strong>
        </Description>
      </Column>
      <Column>
        <CertImage
          fluid={{ ...data.file.childImageSharp.fixed }}
          alt="Cogumelos"
        />
      </Column>
    </CertificatesContainer>
  );
};

export default Certificates;
