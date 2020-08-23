import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import MainLayout from "../main-layout";
import FacebookLogo from "../facebook-logo";
import InstagramLogo from "../instagram-logo";

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px 0;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const Heading = styled.h1`
  color: #616161;
  font-size: 24px;
  letter-spacing: 0.34px;
  margin: 0 0 12px 0;
  @media screen and (min-width: 768px) {
    font-size: 43px;
    margin: 0;
  }
`;

const FollowUs = styled.div`
  font-size: 22px;
  text-transform: uppercase;
  color: #616161;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

const FacebookImage = styled(FacebookLogo)`
  margin-left: 20px;
`;

const InstagramImage = styled(InstagramLogo)`
  margin-left: 20px;
`;

const Footer = () => (
  <MainLayout>
    <FooterContainer>
      <Heading>Cogumelos de Argoncilhe</Heading>
      <FollowUs>
        Siga-nos em:
        <Link to="https://www.facebook.com/Cogumelos-de-Argoncilhe-1391774824183623" target="_blank" rel="noopener">
          <FacebookImage />
        </Link>
        <Link to="https://www.instagram.com/cogumelosdeargoncilhe/" target="_blank" rel="noopener">
          <InstagramImage />
        </Link>
      </FollowUs>
    </FooterContainer>
  </MainLayout>
);

export default Footer;
