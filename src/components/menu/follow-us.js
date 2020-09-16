import React from "react";
import styled from "@emotion/styled";
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
      <a
        href="https://www.facebook.com/Cogumelos-de-Argoncilhe-1391774824183623"
        target="_blank"
        rel="noreferrer"
        title="Facebook"
      >
        <FacebookImage fill="#fff" />
      </a>
      <a
        href="https://www.instagram.com/cogumelosdeargoncilhe/"
        target="_blank"
        rel="noreferrer"
        title="Instagram"
      >
        <InstagramImage fill="#fff" />
      </a>
    </FollowUs>
  </FooterContainer>
);

export default Footer;
