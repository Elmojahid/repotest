import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// Components
import Footer from "../../components/Sections/Footer"; // Chemin corrigé
import TopNavbar from "../../components/Nav/TopNavbar"; // Chemin corrigé
import CategoryBox from "../../components/Elements/CategoryBox"; // Chemin corrigé
import FullButton from "../../components/Buttons/FullButton"; // Chemin corrigé

// Assets
import TshirtBasicImg from "../../assets/img/tshirts/basic.png";
import TshirtPremiumImg from "../../assets/img/tshirts/premium.png";

export default function Catalogue() {
  const navigate = useNavigate();

  return (
    <>
      <TopNavbar />
      <PageWrapper>
        <ContentWrapper>
          <div className="container">
            <HeaderInfo>
              <h1 className="font40 extraBold">Catalogue</h1>
              <p className="font13">Explorez notre collection de Catalogue personnalisés.</p>
            </HeaderInfo>
            <div className="row textCenter" style={{ marginBottom: "30px" }}>
              <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                <CategoryBox
                  img={TshirtBasicImg}
                  title="Sac Publicitaire Textile - À partir de 100 Dhs"
                  text="Des t-shirts simples et confortables pour un usage quotidien."
                  action={() => navigate("/tshirts/basic")}
                />
              </div>
              <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                <CategoryBox
                  img={TshirtPremiumImg}
                  title="Objets Publicitaires - À partir de 200 Dhs"
                  text="Des t-shirts de qualité supérieure pour un style unique."
                  action={() => navigate("/tshirts/premium")}
                />
              </div>
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
