import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import MainLayout from "../main-layout";
import FacebookLogo from "../../logos/facebook-logo";
import InstagramLogo from "../../logos/instagram-logo";
import LogoText from "../../logos/logo-text";

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px 0;
  flex-direction: column;

  @media screen and (min-width: 950px) {
    flex-direction: row;
    margin: 40px 80px;
  }

  @media screen and (min-width: 1400px) {
    margin: 40px 0;
  }
`;

const FollowUs = styled.div`
  font-size: 22px;
  text-transform: uppercase;
  color: var(--color2);
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
      <Link to="/">
        <LogoText fill="#616161" />
      </Link>
      <FollowUs>
        Siga-nos em:
        <a
          href="https://www.facebook.com/Cogumelos-de-Argoncilhe-1391774824183623"
          target="_blank"
          rel="noreferrer"
          title="Facebook"
        >
          <FacebookImage fill="#000" />
        </a>
        <a
          href="https://www.instagram.com/cogumelosdeargoncilhe/"
          target="_blank"
          rel="noreferrer"
          title="Instagram"
        >
          <InstagramImage fill="#000" />
        </a>
      </FollowUs>
    </FooterContainer>
  </MainLayout>
);

export default Footer;
