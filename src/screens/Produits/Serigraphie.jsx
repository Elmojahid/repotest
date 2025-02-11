import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// Components
import Footer from "../../components/Sections/Footer";
import TopNavbar from "../../components/Nav/TopNavbar";
import CategoryBox from "../../components/Elements/CategoryBox";
import FullButton from "../../components/Buttons/FullButton";

// Assets
import Img1 from "../../assets/img/serigraphie/textile.jpeg";
import Img2 from "../../assets/img/serigraphie/sac personnalisable.jpeg";
import Img3 from "../../assets/img/serigraphie/objets publicitaires.jpeg";


export default function RollUps() {
  const navigate = useNavigate();

  return (
    <>
      <TopNavbar />
      <PageWrapper>
        <ContentWrapper>
          <div className="container">
            <HeaderInfo>
              <h1 className="font40 extraBold">Sérigraphie</h1>
              <p className="font18">Trouvez des Sérigraphie parfaits pour vos événements et promotions.</p>
            </HeaderInfo>
            <div className="row textCenter">
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                <CategoryBox
                  img={Img1}
                  title="Textile T-Shirt Gilet"
                  text="Des roll-ups pratiques et économiques pour vos besoins essentiels."
                  action={() => navigate("/rollups/standard")}
                />
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                <CategoryBox
                  img={Img2}
                  title="Sac Personnalisable"
                  text="Des roll-ups de haute qualité pour une impression durable."
                  action={() => navigate("/rollups/premium")}
                />
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                <CategoryBox
                  img={Img3}
                  title="Objets Publicitaires"
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