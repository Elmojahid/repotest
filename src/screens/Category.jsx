import React from "react";
import styled from "styled-components";

// Assets
import CardImage from "../assets/img/cards/Impression_de_Cartes.jpg";
import PaperImage from "../assets/img/cards/Papeterie_Commerciale.jpg"; 
import PrintImage from "../assets/img/cards/Impression_Publicitaire_Offset.jpg";
import SerigraphyImage from "../assets/img/cards/Sérigraphie_Objet_Publicitaire.jpg";
//
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Footer from "../components/Sections/Footer";

export default function Services() {
  return (
    <>
        <TopNavbar />
        <Header />
        <Wrapper id="services">
        <div className="whiteBg">
            <div className="container">
            <HeaderInfo>
                <h1 className="font40 extraBold">Nos Catégories</h1>
                <p className="font18">
                Des solutions d'impression de qualité à des prix compétitifs pour tous vos besoins professionnels.
                </p>
            </HeaderInfo>
            <ServicesWrapper className="flexSpaceNull">
                <ServiceBox>
                <img src={CardImage} alt="Impression de Cartes" />
                <h3>Impression de Cartes</h3>
                <ul>
                    <li><a href="/carte-visite">Impression Carte visite</a></li>
                    <li><a href="/cartes-pliées">Cartes de visite pliées</a></li>
                    <li><a href="/carte-visite-carrée">Carte de visite carrée</a></li>
                    <li><a href="/carte-correspondance">Carte de correspondance</a></li>
                    <li><a href="/carte-voeux">Impression carte vœux</a></li>
                </ul>
                </ServiceBox>
                <ServiceBox>
                <img src={PaperImage} alt="Papeterie Commerciale" />
                <h3>Papeterie Commerciale</h3>
                <ul>
                    <li><a href="/papier-en-tete">Papier en tête</a></li>
                    <li><a href="/chemise-a-rabat">Chemise à rabat</a></li>
                    <li><a href="/bloc-notes">Bloc-notes</a></li>
                    <li><a href="/plaquettes">Plaquettes</a></li>
                    <li><a href="/carnet-de-bons">Carnet de Bons</a></li>
                </ul>
                </ServiceBox>
                <ServiceBox>
                <img src={PrintImage} alt="Impression Publicitaire Offset" />
                <h3>Impression Publicitaire Offset</h3>
                <ul>
                    <li><a href="/impression-flyers">Impression de Flyers</a></li>
                    <li><a href="/affiches-publicitaires">Affiches publicitaires</a></li>
                    <li><a href="/menu-set-de-table">Menu, Set de table</a></li>
                    <li><a href="/emballages-etuis">Emballages Etuis</a></li>
                    <li><a href="/etiquettes-en-rouleaux">Étiquettes en rouleaux</a></li>
                </ul>
                </ServiceBox>
                <ServiceBox>
                <img src={SerigraphyImage} alt="Sérigraphie Objet Publicitaire" />
                <h3>Sérigraphie Objet Publicitaire</h3>
                <ul>
                    <li><a href="/serigraphie-textile">Sérigraphie Textile</a></li>
                    <li><a href="/serigraphie-stylo-usb">Sérigraphie Stylo, USB</a></li>
                    <li><a href="/serigraphie-porte-cles">Sérigraphie Porte clés</a></li>
                    <li><a href="/objets-publicitaires">Objets Publicitaires</a></li>
                    <li><a href="/serigraphie-sacs">Sérigraphie Sacs</a></li>
                </ul>
                </ServiceBox>
            </ServicesWrapper>
            </div>
        </div>
        </Wrapper>
        <Footer />
    </>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
`;

const HeaderInfo = styled.div`
  margin-bottom: 50px;
  text-align: center;
`;

const ServicesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;

  @media (max-width: 860px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ServiceBox = styled.div`
  width: 23%;
  background-color: #f9f9f9;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  
  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin: 20px 0;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul li {
    font-size: 14px;
    margin-bottom: 8px;
  }

  ul li a {
    color: #007BFF;
    text-decoration: none;
  }

  ul li a:hover {
    text-decoration: underline;
  }

  @media (max-width: 860px) {
    width: 45%;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;
