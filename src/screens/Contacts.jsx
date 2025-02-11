import React from "react";
import styled from "styled-components";
import Footer from "../components/Sections/Footer";

// Assets
import TopNavbar from "../components/Nav/TopNavbar";

export default function Contact() {
  return (
    <>
      <TopNavbar />
      <br />
      <Wrapper id="contact">
        <div className="lightBg">
          <div className="container">
            <HeaderInfo>
              <h1 className="font40 extraBold">Contactez-nous</h1>
              <p className="font18">
                Parlez-nous de vos Besoins (Conception / Design / Impression / Développement...) Nous vous répondrons le plus vite possible.
              </p>
            </HeaderInfo>

            <FooterInfo>
              <div className="centred-div-latest">
                <p className="font18">📍 Adresse: <strong>Maarif, Casablanca</strong></p>
                <p className="font18">⏰ Heures de Travail: <strong>Lundi - Samedi, 8:30AM - 6PM</strong></p>
                <p className="font18">📧 Email: <strong>zoladesign@gmail.com</strong></p>
                <p className="font18">📞 Téléphone & WhatsApp: <strong>+212-641586196</strong></p>
              </div>
            </FooterInfo>

            <div className="row" style={{ display: "flex", justifyContent: "center", paddingBottom: "30px" }}>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <Form>
                  <label className="font22">Nom :</label>
                  <input type="text" id="fname" name="fname" className="font18" placeholder="Votre nom" required />

                  <label className="font22">Téléphone :</label>
                  <input type="tel" id="phone" name="phone" className="font18" placeholder="Votre téléphone" required />

                  <label className="font22">Email :</label>
                  <input type="email" id="email" name="email" className="font18" placeholder="Votre email" required />

                  <label className="font22">Message :</label>
                  <textarea rows="4" cols="50" id="message" name="message" className="font18" placeholder="Votre message" required />
                </Form>
                <SumbitWrapper className="flex">
                  <ButtonInput type="submit" value="Envoyer" className="pointer animate radius8" style={{ maxWidth: "220px" }} />
                </SumbitWrapper>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
      <Footer />
    </>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;

const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  text-align: center;
  @media (max-width: 860px) {
    text-align: center;
  }
`;

const Form = styled.form`
  padding: 50px 0 30px 0;
  label {
    color: #333;
    font-weight: 600;
    margin-bottom: 5px;
  }
  input,
  textarea {
    width: 100%;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 10px;
    font-size: 16px;
    margin-bottom: 20px;
  }
  input:focus,
  textarea:focus {
    border-color: #a78b24;
    outline: none;
  }
  textarea {
    min-height: 100px;
    resize: vertical;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;

const ButtonInput = styled.input`
  background-color: #a78b24;
  color: #fff;
  border: none;
  padding: 15px 20px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #8d7221;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;

const SumbitWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;

const FooterInfo = styled.div`
  padding: 30px 0;
  text-align: center;
  p {
    font-size: 18px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  @media (max-width: 860px) {
    text-align: center;
  }
`;