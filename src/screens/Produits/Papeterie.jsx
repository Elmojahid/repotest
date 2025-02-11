import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// Components
import Footer from "../../components/Sections/Footer";
import TopNavbar from "../../components/Nav/TopNavbar";
import CategoryBox from "../../components/Elements/CategoryBox";
import FullButton from "../../components/Buttons/FullButton";

// Assets
import DepliantTriImg1 from "../../assets/img/flyers/papier a en tete.jpeg";
import DepliantTriImg2 from "../../assets/img/flyers/chemise a rabat.jpeg";
import DepliantTriImg3 from "../../assets/img/flyers/plaquettes.jpeg";
import DepliantTriImg4 from "../../assets/img/flyers/carnet de bons.jpeg";
import DepliantTriImg5 from "../../assets/img/flyers/bloc notes.jpeg";
import DepliantTriImg6 from "../../assets/img/flyers/autocollants.jpeg";
import DepliantTriImg7 from "../../assets/img/flyers/sous mains.jpeg";
import DepliantTriImg8 from "../../assets/img/flyers/tampons encreurs.jpeg";
import DepliantTriImg9 from "../../assets/img/flyers/tampon dateur.jpeg";
import DepliantTriImg10 from "../../assets/img/flyers/gaufrer timbre a sec.jpeg";

export default function Depliants() {
  const navigate = useNavigate();

  return (
    <>
      <TopNavbar />
      <PageWrapper>
        <ContentWrapper>
          <div className="container">
            <HeaderInfo>
              <h1 className="font40 extraBold">Papeterie</h1>
              <p className="font13">
                Découvrez nos différents types de Papeterie conçus pour répondre à vos besoins marketing et publicitaires.
              </p>
            </HeaderInfo>
            <div className="row textCenter" style={{ marginBottom: "30px" }}>
              <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                <CategoryBox
                  img={DepliantTriImg1}
                  title="Papier à En-Tête - À partir de 50 Dhs"
                  text="Des dépliants tri-volets pour un maximum d'informations dans un format compact."
                  action={() => navigate("/depliants/tri-volets")}
                />
              </div>
              <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                <CategoryBox
                  img={DepliantTriImg2}
                  title="Chemise à Rabat - À partir de 75 Dhs"
                  text="Des dépliants bi-volets simples et efficaces pour vos campagnes publicitaires."
                  action={() => navigate("/depliants/bi-volets")}
                />
              </div>
              <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                <CategoryBox
                  img={DepliantTriImg3}
                  title="Plaquettes - À partir de 100 Dhs"
                  text="Des dépliants Z-fold modernes pour une présentation dynamique de vos services."
                  action={() => navigate("/depliants/z-fold")}
                />
              </div>
              <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                <CategoryBox
                  img={DepliantTriImg4}
                  title="Carnet de Bons - À partir de 150 Dhs"
                  text="Créez vos propres dépliants pour une communication unique et impactante."
                  action={() => navigate("/depliants/personnalisables")}
                />
              </div>
            </div>
            <div className="row textCenter" style={{ marginBottom: "30px" }}>
              <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                <CategoryBox
                  img={DepliantTriImg5}
                  title="Bloc-Notes - À partir de 120 Dhs"
                  text="Créez vos propres dépliants pour une communication unique et impactante."
                  action={() => navigate("/depliants/personnalisables")}
                />
              </div>
              <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                <CategoryBox
                  img={DepliantTriImg6}
                  title="Autocollants - À partir de 30 Dhs"
                  text="Créez vos propres dépliants pour une communication unique et impactante."
                  action={() => navigate("/depliants/personnalisables")}
                />
              </div>
              <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                <CategoryBox
                  img={DepliantTriImg7}
                  title="Sous-Mains - À partir de 200 Dhs"
                  text="Créez vos propres dépliants pour une communication unique et impactante."
                  action={() => navigate("/depliants/personnalisables")}
                />
              </div>
              <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                <CategoryBox
                  img={DepliantTriImg8}
                  title="Tampons Encreurs - À partir de 250 Dhs"
                  text="Créez vos propres dépliants pour une communication unique et impactante."
                  action={() => navigate("/depliants/personnalisables")}
                />
              </div>
            </div>
            <div className="row textCenter" style={{ marginBottom: "30px" }}>
              <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                <CategoryBox
                  img={DepliantTriImg9}
                  title="Tampon Dateur - À partir de 300 Dhs"
                  text="Créez vos propres dépliants pour une communication unique et impactante."
                  action={() => navigate("/depliants/personnalisables")}
                />
              </div>
              <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                <CategoryBox
                  img={DepliantTriImg10}
                  title="Gaufrer Timbre à Sec - À partir de 350 Dhs"
                  text="Créez vos propres dépliants pour une communication unique et impactante."
                  action={() => navigate("/depliants/personnalisables")}
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
