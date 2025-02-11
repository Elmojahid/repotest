import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// Components
import Footer from "../../components/Sections/Footer"; // Chemin corrigé
import TopNavbar from "../../components/Nav/TopNavbar"; // Chemin corrigé
import CategoryBox from "../../components/Elements/CategoryBox"; // Chemin corrigé
import FullButton from "../../components/Buttons/FullButton"; // Chemin corrigé

// Assets
import CarteProImg from "../../assets/img/cards/Carte de visite Standard.jpeg";
import CarteLuxeImg from "../../assets/img/cards/Carte de visite Pliée.jpeg";
import CarteEcoImg from "../../assets/img/cards/Carte de Vœux et Invitation.jpeg";
import CartePerso from "../../assets/img/cards/Carte de Correspondance.jpeg";
import CarteSuppl from "../../assets/img/cards/Carte de Compliments.jpeg";

export default function CarteDeVisite() {
  const navigate = useNavigate();

  return (
    <>
      <TopNavbar />
      <PageWrapper>
        <ContentWrapper>
          <div className="container">
            <HeaderInfo>
              <h1 className="font40 extraBold">Cartes</h1>
              <p className="font18">
                Explorez nos différentes catégories de cartes de visite adaptées à tous vos besoins.
              </p>
            </HeaderInfo>
            <div className="row textCenter" style={{ marginBottom: "30px" }}>
              <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                <CategoryBox
                  img={CarteProImg}
                  title="Carte de Visite Standard - À partir de 50 Dhs"
                  text="Des cartes de visite élégantes et classiques."
                  action={() => navigate("/")}
                />
              </div> 
              <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                <CategoryBox
                  img={CarteLuxeImg}
                  title="Carte de Visite Pliées - À partir de 100 Dhs"
                  text="Des cartes de visite haut de gamme pour une impression durable."
                  action={() => navigate("/")}
                />
              </div> 
              <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                <CategoryBox
                  img={CarteEcoImg}
                  title="Carte Correspondance - À partir de 30 Dhs"
                  text="Des cartes de visite abordables sans compromis sur la qualité."
                  action={() => navigate("/carte-de-visite/economiques")}
                />
              </div> 
              <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                <CategoryBox
                  img={CartePerso}
                  title="Carte de Compliments - À partir de 70 Dhs"
                  text="Créez votre propre design pour une carte de visite unique."
                  action={() => navigate("/carte-de-visite/personnalisables")}
                />
              </div> 
            </div>
            <div className="row textCenter" style={{ marginBottom: "30px" }}>
              <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                <CategoryBox
                  img={CarteSuppl}
                  title="Carte Vœux et Invitation - À partir de 90 Dhs"
                  text="Cartes personnalisées pour toutes vos occasions spéciales."
                  action={() => navigate("/carte-de-visite/personnalisables")}
                />
              </div>
              {/* Ajout de plus de cases si nécessaire */}
            </div>
            <div className="row flexCenter">
              <div style={{ margin: "50px 0", width: "200px" }}>
                <FullButton title="Retour" action={() => navigate("/")} />
              </div>
            </div>
          </div>
        </ContentWrapper>
        <Footer />
      </PageWrapper>
    </>
  );
}

// Styles

const PageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Assure que la page occupe toute la hauteur de l'écran */
`;

const ContentWrapper = styled.div`
  flex: 1;
  margin-top: 70px; /* Compense la hauteur du TopNavbar pour éviter qu'il cache le contenu */
  padding: 20px; /* Ajoute un léger padding pour que le contenu ne soit pas collé */
`;

const HeaderInfo = styled.div`
  text-align: center;
  margin-bottom: 30px;

  @media (max-width: 860px) {
    text-align: center;
  }
`;
