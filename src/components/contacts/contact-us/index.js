import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { H1 } from "../../../styles/typography";
import MainLayout from "../../layout/main-layout";

const ContactUsContainer = styled.div`
  background-color: var(--color1);
  padding: 20px;

  @media screen and (min-width: 768px) {
    padding: 0 80px 80px 80px;
  }

  @media screen and (min-width: 1400px) {
    padding: 0 0 80px 0;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SharedInputStyled = css`
  font-size: 13px;
  background-color: transparent;
  border: 1px solid var(--color3);
  height: 50px;
  padding: 10px;
  width: 100%;
  color: var(--color3);
  box-sizing: border-box;
  ::placeholder {
    color: var(--color3);
  }
`;

const StyledInput = styled.input`
  ${SharedInputStyled}
  height: 50px;
`;

const StyledTextarea = styled.textarea`
  ${SharedInputStyled}
  height: 125px;
`;

const Form = styled.form`
  width: 100%;
  max-width: 500px;
  font-size: 21px;
`;

const StyledButton = styled.button`
  border-radius: 6px;
  background-color: var(--color3);
  color: #616161;
  border: 0;
  padding: 15px 0;
  cursor: pointer;
  font-weight: bold;
  width: 100%;
  text-transform: upperCase;
  font-size: 14px;

  @media screen and (min-width: 768px) {
    width: 120px;
  }
`;

const ButtonContainer = styled.p`
  display: flex;
  justify-content: flex-start;
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const Label = styled.label`
  display: block;
  font-size: 21px;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: var(--color3);
  margin-bottom: 7px;
`;

const Paragraph = styled.p`
  margin: 10px 0;
`;

const Firstname = styled(Paragraph)`
  width: 50%;

  @media screen and (min-width: 768px) {
    margin-right: 10px;
  }
`;

const Lastname = styled(Paragraph)`
  width: 50%;
`;

const ContactUs = () => (
  <ContactUsContainer>
    <MainLayout>
      <TitleContainer>
        <H1>Formulário de contacto</H1>
      </TitleContainer>

      <Form
        name="contact"
        action="/contacto-recebido"
        method="POST"
        netlify-honeypot="bot-field"
        data-netlify="true"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <Paragraph>
          <Label htmlFor="assunto">Assunto</Label>
          <StyledInput type="text" name="assunto" required id="assunto" />
        </Paragraph>
        <Paragraph>
          <Label htmlFor="email">O seu E-mail</Label>
          <StyledInput type="email" name="email" id="email" required />
        </Paragraph>
        <NameContainer>
          <Firstname>
            <Label htmlFor="primeiro-nome">Primeiro Nome</Label>
            <StyledInput
              type="text"
              name="primeiro-nome"
              id="primeiro-nome"
              required
            />
          </Firstname>
          <Lastname>
            <Label htmlFor="ultimo-nome">Último Nome</Label>
            <StyledInput
              type="text"
              name="ultimo-nome"
              id="ultimo-nome"
              required
            />
          </Lastname>
        </NameContainer>

        <Paragraph>
          <Label htmlFor="mensagem">Mensagem</Label>
          <StyledTextarea name="mensagem" id="mensagem" required />
        </Paragraph>
        <ButtonContainer>
          <StyledButton type="submit">Enviar</StyledButton>
        </ButtonContainer>
      </Form>
    </MainLayout>
  </ContactUsContainer>
);

export default ContactUs;
