import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// Components
import Footer from "../../components/Sections/Footer";
import TopNavbar from "../../components/Nav/TopNavbar";
import CategoryBox from "../../components/Elements/CategoryBox";
import FullButton from "../../components/Buttons/FullButton";

// Assets
import FlyersA5Img from "../../assets/img/imppub/flyers a5 distribution.jpeg";
import AffichesImg from "../../assets/img/imppub/affiches publicitaires.jpeg";
import CalendrierImg from "../../assets/img/imppub/calendrier chevalet.jpeg";
import BrochuresImg from "../../assets/img/imppub/brochures a3 piquee.jpeg";
import DepliantsImg from "../../assets/img/imppub/depliants 3 volets.jpeg";
import CatalogueImg from "../../assets/img/imppub/catalogue colle.jpeg";
import MenusImg from "../../assets/img/imppub/menus sets de table.jpeg";
import SacPapierImg from "../../assets/img/imppub/sac en papier.jpeg";
import EtiquettesImg from "../../assets/img/imppub/etiquettes en rouleaux.jpeg";
import EmballagesImg from "../../assets/img/imppub/emballages boites etuis.jpeg";

export default function ImpressionPub() {
  const navigate = useNavigate();

  return (
    <>
      <TopNavbar />
      <PageWrapper>
        <ContentWrapper>
          <div className="container">
            <HeaderInfo>
              <h1 className="font40 extraBold">Impression Publicitaire</h1>
              <p className="font13">
                Découvrez nos produits d'impression publicitaire adaptés à tous vos besoins professionnels et personnels.
              </p>
            </HeaderInfo>
            <div className="row textCenter" style={{ marginBottom: "30px" }}>
              <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                <CategoryBox
                  img={FlyersA5Img}
                  title="Flyers A5 Distribution"
                  text="Des flyers pratiques et économiques pour promouvoir vos événements."
                  action={() => navigate("/impression/flyers-a5")}
                />
              </div>
              <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                <CategoryBox
                  img={AffichesImg}
                  title="Affiches Publicitaires"
                  text="Des affiches percutantes pour maximiser votre visibilité."
                  action={() => navigate("/impression/affiches")}
                />
              </div>
              <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                <CategoryBox
                  img={CalendrierImg}
                  title="Calendrier Chevalet"
                  text="Un support marketing fonctionnel et esthétique."
                  action={() => navigate("/impression/calendrier")}
                />
              </div>
              <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                <CategoryBox
                  img={BrochuresImg}
                  title="Brochures A3 Piquée"
                  text="Présentez vos produits et services avec élégance."
                  action={() => navigate("/impression/brochures")}
                />
              </div>
            </div>
            <div className="row textCenter" style={{ marginBottom: "30px" }}>
              <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                <CategoryBox
                  img={DepliantsImg}
                  title="Dépliants 3 Volets"
                  text="Des dépliants pour une communication impactante."
                  action={() => navigate("/impression/depliants")}
                />
              </div>
              <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                <CategoryBox
                  img={CatalogueImg}
                  title="Catalogue Collé"
                  text="Des catalogues professionnels pour présenter vos produits."
                  action={() => navigate("/impression/catalogue")}
                />
              </div>
              <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                <CategoryBox
                  img={MenusImg}
                  title="Menus Sets de Table"
                  text="Des menus attrayants pour vos restaurants et cafés."
                  action={() => navigate("/impression/menus")}
                />
              </div>
              <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                <CategoryBox
                  img={SacPapierImg}
                  title="Sac en Papier"
                  text="Des sacs publicitaires écologiques et pratiques."
                  action={() => navigate("/impression/sac-papier")}
                />
              </div>
            </div>
            <div className="row textCenter" style={{ marginBottom: "30px" }}>
              <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                <CategoryBox
                  img={EtiquettesImg}
                  title="Etiquettes en Rouleaux"
                  text="Des étiquettes personnalisées pour vos produits."
                  action={() => navigate("/impression/etiquettes")}
                />
              </div>
              <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                <CategoryBox
                  img={EmballagesImg}
                  title="Emballages Boites Etuis"
                  text="Des emballages sur mesure pour vos besoins professionnels."
                  action={() => navigate("/impression/emballages")}
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
