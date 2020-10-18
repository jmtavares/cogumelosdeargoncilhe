import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import { H1 } from "../styles/typography";

const ThankYouContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: var(--color1);
`;

const ThankYouCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 75%;
  max-width: 400px;
  padding: 50px;
  background: var(--color3);
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgba(14, 30, 37, 0.16);
`;

const StyledLink = styled(Link)`
  border-radius: 6px;
  background-color: var(--color1);
  color: var(--color3);
  padding: 15px;
  font-weight: bold;
  width: 100%;
  text-transform: upperCase;
  text-decoration: none;
  margin-top: 20px;
  font-size: 14px;
  text-align: center;

  @media screen and (min-width: 768px) {
    width: 120px;
  }
`;

const Title = styled(H1)`
  font-size: 30px;
  color: var(--color2);
`;
const Subtitle = styled("h2")`
  font-size: 20px;
  margin: 0;
  color: var(--color2);
`;

const ContactoRecebidoPage = () => (
  <Layout footer={false}>
    <SEO title="Contacto Recebido" />
    <ThankYouContainer>
      <ThankYouCard>
        <Title>Obrigado</Title>
        <Subtitle>O formulário foi recebido.</Subtitle>
        <StyledLink to="/">← Voltar</StyledLink>
      </ThankYouCard>
    </ThankYouContainer>
  </Layout>
);

export default ContactoRecebidoPage;
