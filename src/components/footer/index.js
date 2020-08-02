import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import MainLayout from "../main-layout";
import facebookLogo from "../../images/facebook.svg";
import instagramLogo from "../../images/instagram.svg";

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px 0;
`;

const Heading = styled.h1`
  color: #616161;
  font-size: 43px;
  letter-spacing: 0.34px;
  margin: 0;
`;

const FollowUs = styled.div`
  font-size: 22px;
  text-transform: uppercase;
  color: #616161;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

const SocialImage = styled.img`
  width: 32px;
  height: 32px;
  margin-left: 20px;
`;

const Footer = () => (
  <MainLayout>
    <FooterContainer>
      <Heading>Cogumelos de Argoncilhe</Heading>
      <FollowUs>
        Siga-nos em:
        <Link to="https://www.facebook.com" target="_blank" rel="noopener">
          <SocialImage src={facebookLogo} alt="Facebook" />
        </Link>
        <Link to="http://www.instagram.com" target="_blank" rel="noopener">
          <SocialImage src={instagramLogo} alt="Instagram" />
        </Link>
      </FollowUs>
    </FooterContainer>
  </MainLayout>
);

export default Footer;
