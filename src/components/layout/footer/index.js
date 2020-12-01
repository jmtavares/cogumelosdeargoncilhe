import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import MainLayout from "../main-layout";
import FacebookLogo from "../../logos/facebook-logo";
import InstagramLogo from "../../logos/instagram-logo";
import LogoText from "../../logos/logo-text";
import { H2 } from "../../../styles/typography";

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
  display: flex;
  align-items: center;
`;

const FacebookImage = styled(FacebookLogo)`
  margin-left: 20px;
`;

const InstagramImage = styled(InstagramLogo)`
  margin-left: 20px;
`;

const StyledH2 = styled(H2)`
  font-size: 22px;
  text-transform: uppercase;
  color: #444f51;
`;

const Footer = () => (
  <MainLayout>
    <FooterContainer>
      <Link to="/">
        <LogoText fill="#444f51" />
      </Link>
      <FollowUs>
        <StyledH2>Siga-nos em:</StyledH2>
        <a
          href="https://www.facebook.com/Cogumelos-de-Argoncilhe-1391774824183623"
          target="_blank"
          rel="noreferrer"
          title="Facebook"
        >
          <FacebookImage fill="#444f51" />
        </a>
        <a
          href="https://www.instagram.com/cogumelosdeargoncilhe/"
          target="_blank"
          rel="noreferrer"
          title="Instagram"
        >
          <InstagramImage fill="#444f51" />
        </a>
      </FollowUs>
    </FooterContainer>
  </MainLayout>
);

export default Footer;
