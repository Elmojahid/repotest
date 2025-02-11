import React from "react";
import styled from "styled-components";
// Assets

export default function Contact() {
  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Contactez-nous</h1>
            <p className="font18">
              Si vous avez des questions ou souhaitez en savoir plus, remplissez le formulaire ci-dessous et nous vous
              répondrons dans les plus brefs délais.
            </p>
          </HeaderInfo>
          <ContentRow>
              <Form>
                <label className="font22">Nom :</label>
                <input type="text" id="fname" name="fname" className="font18" placeholder="Votre nom" />
                <label className="font22">Email :</label>
                <input type="email" id="email" name="email" className="font18" placeholder="Votre email" />
                <label className="font22">Objet :</label>
                <input type="text" id="subject" name="subject" className="font18" placeholder="Sujet du message" />
                <label className="font22">Message :</label>
                <textarea rows="4" cols="50" type="text" id="message" name="message" className="font18" placeholder="Votre message" />
              </Form>
              <SumbitWrapper>
                <ButtonInput type="submit" value="Envoyer le message" />
              </SumbitWrapper>
              <br />
              <br />
          </ContentRow>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;

const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  text-align: center;
`;

const ContentRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Form = styled.form`
  label {
    display: block;
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
`;

const SumbitWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
