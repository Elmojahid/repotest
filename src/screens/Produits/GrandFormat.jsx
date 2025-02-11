import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// Components
import Footer from "../../components/Sections/Footer";
import TopNavbar from "../../components/Nav/TopNavbar";
import CategoryBox from "../../components/Elements/CategoryBox";
import FullButton from "../../components/Buttons/FullButton";

// Assets
import MenuEcoImg1 from "../../assets/img/gformat/affiche poster plastifié.jpeg";
import MenuEcoImg2 from "../../assets/img/gformat/baches banderoles.jpeg";
import MenuEcoImg3 from "../../assets/img/gformat/roll-up x-banner plv.jpeg";
import MenuEcoImg4 from "../../assets/img/gformat/sticker vinyles adhesifs.jpeg";
import MenuEcoImg5 from "../../assets/img/gformat/habillage voiture.jpeg";
import MenuEcoImg6 from "../../assets/img/gformat/presentoire vitrines.jpeg";
import MenuEcoImg7 from "../../assets/img/gformat/drapeaux publicitaires.jpeg";
import MenuEcoImg8 from "../../assets/img/gformat/panneau pvc akilux.jpeg";
import MenuEcoImg9 from "../../assets/img/gformat/plaque enseigne totem.jpeg";

export default function Menus() {
  const navigate = useNavigate();

  return (
    <>
      <TopNavbar />
      <PageWrapper>
        <ContentWrapper>
          <div className="container">
            <HeaderInfo>
              <h1 className="font40 extraBold">Grand Format</h1>
              <p className="font13">Découvrez Grand Format adaptés pour tous vos besoins professionnels.</p>
            </HeaderInfo>
            <div className="row textCenter">
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                <CategoryBox
                  img={MenuEcoImg1}
                  title="Affiche Poster Plastifié"
                  text="Des menus élégants pour une présentation professionnelle de vos offres."
                  action={() => navigate("/menus/professionnels")}
                />
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                <CategoryBox
                  img={MenuEcoImg2}
                  title="Bâches Banderoles"
                  text="Des menus abordables sans compromis sur la qualité."
                  action={() => navigate("/menus/economiques")}
                />
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                <CategoryBox
                  img={MenuEcoImg3}
                  title="Roll-Up X-Banner PLV"
                  text="Des menus abordables sans compromis sur la qualité."
                  action={() => navigate("/menus/economiques")}
                />
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                <CategoryBox
                  img={MenuEcoImg4}
                  title="Sticker Vinyles Adhésifs"
                  text="Des menus abordables sans compromis sur la qualité."
                  action={() => navigate("/menus/economiques")}
                />
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                <CategoryBox
                  img={MenuEcoImg5}
                  title="Habillage Voiture"
                  text="Des menus abordables sans compromis sur la qualité."
                  action={() => navigate("/menus/economiques")}
                />
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                <CategoryBox
                  img={MenuEcoImg6}
                  title="Présentoir Vitrines"
                  text="Des menus abordables sans compromis sur la qualité."
                  action={() => navigate("/menus/economiques")}
                />
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                <CategoryBox
                  img={MenuEcoImg7}
                  title="Drapeaux Publicitaires"
                  text="Des menus abordables sans compromis sur la qualité."
                  action={() => navigate("/menus/economiques")}
                />
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                <CategoryBox
                  img={MenuEcoImg8}
                  title="Panneau PVC Akilux"
                  text="Des menus abordables sans compromis sur la qualité."
                  action={() => navigate("/menus/economiques")}
                />
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                <CategoryBox
                  img={MenuEcoImg9}
                  title="Plaque Enseigne Totem"
                  text="Des menus abordables sans compromis sur la qualité."
                  action={() => navigate("/menus/economiques")}
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
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  flex: 1;
  margin-top: 70px;
  padding: 20px;
`;

const HeaderInfo = styled.div`
  text-align: center;
  margin-bottom: 30px;

  @media (max-width: 860px) {
    text-align: center;
  }
`;