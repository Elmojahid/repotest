import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import LogoImage from "../../assets/img/Logo.png"; // Chemin de l'image du logo
import { FaLinkedin, FaInstagram, FaWhatsapp, FaFacebookF } from "react-icons/fa";

export default function Contact() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <Wrapper>
      <div className="darkBg">
        <div className="container">
          <InnerWrapper className="flexSpaceCenter" style={{ padding: "30px 0" }}>
            <Link className="flexCenter animate pointer" to="home" smooth={true} offset={-80}>
              <img src={LogoImage} alt="Zola Design Logo" style={{ width: "50px", height: "auto" }} />
            </Link>

            <IconsWrapper>
              <a href="https://www.linkedin.com/company/105841507" target="_blank" rel="noreferrer">
                <FaLinkedin className="icon whiteColor" />
              </a>
              <a href="https://www.instagram.com/zoladesign.pub?igsh=MTYyNjJoOHdjYXV5cg==" target="_blank" rel="noreferrer">
                <FaInstagram className="icon whiteColor" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61570842112804" target="_blank" rel="noreferrer">
                <FaFacebookF className="icon whiteColor" />
              </a>
              <a href="https://wa.me/+212641586196" target="_blank" rel="noreferrer">
                <FaWhatsapp className="icon whiteColor" />
              </a>
            </IconsWrapper>

            <StyleP className="whiteColor font13">
              Copyright © {getCurrentYear()} - <span className="purpleColor font13">ZolaDesign</span> Tous droits réservés
            </StyleP>

            <Link className="whiteColor animate pointer font13" to="home" smooth={true} offset={-80}>
              Retour en haut
            </Link>
          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;

const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

const IconsWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  .icon {
    font-size: 24px;
    transition: color 0.3s;
    &:hover {
      color: #a78b24;
    }
  }
`;

const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;
