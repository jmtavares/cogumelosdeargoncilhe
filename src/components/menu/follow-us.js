import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import FacebookLogo from "../facebook-logo";
import InstagramLogo from "../instagram-logo";

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    margin: 40px 0;
    justify-content: flex-end;
  }
`;

const FollowUs = styled.div`
  font-size: 22px;
  text-transform: uppercase;
  color: #fff;
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
  <FooterContainer>
    <FollowUs>
      Siga-nos em:
      <Link
        to="https://www.facebook.com/Cogumelos-de-Argoncilhe-1391774824183623"
        target="_blank"
        rel="noopener"
      >
        <FacebookImage fill="#fff" />
      </Link>
      <Link
        to="https://www.instagram.com/cogumelosdeargoncilhe/"
        target="_blank"
        rel="noopener"
      >
        <InstagramImage fill="#fff" />
      </Link>
    </FollowUs>
  </FooterContainer>
);

export default Footer;
