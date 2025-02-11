import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Screens
import Landing from "./screens/Landing.jsx";
import About from "./screens/About.jsx";
import Authentification from "./screens/Authentification.jsx";
import Contacts from "./screens/Contacts.jsx";

// Product Detail Pages
import Cartes from "./screens/Produits/Cartes.jsx";
import Catalogue from "./screens/Produits/Catalogue.jsx";
import GrandFormat from "./screens/Produits/GrandFormat.jsx";
import ImpressionPub from "./screens/Produits/ImpressionPub.jsx";
import Serigraphie from "./screens/Produits/Serigraphie.jsx";
import Papeterie from "./screens/Produits/Papeterie.jsx";
import CreerCompte from "./screens/CreerCompte.jsx";
import Services from "./components/Sections/Services.jsx";
import Projects from "./components/Sections/Projects.jsx"; 
import Category from "./screens/Category.jsx"

export default function App() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
      </Helmet>
      {/* Configuration du routeur */}
      <Router>
        <Routes>
          {/* Route pour la page d'accueil */}
          <Route path="/" element={<Landing />} />
          {/* Route pour la page "À propos" */}
          <Route path="/about" element={<About />} />
          {/* Route pour la page d'authentification */}
          <Route path="/auth" element={<Authentification />} />
          {/* Routes pour les pages de détail des produits */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/Category" element={<Category />} />

          <Route path="/Cartes" element={<Cartes />} />
          <Route path="/Catalogue" element={<Catalogue />} />
          <Route path="/GrandFormat" element={<GrandFormat />} />
          <Route path="/ImpressionPub" element={<ImpressionPub />} />
          <Route path="/Papeterie" element={<Papeterie />} />
          <Route path="/Serigraphie" element={<Serigraphie />} />


          <Route path="/contacts" element={<Contacts />} />
          {/* Route pour la page d'authentification-créer un compte */}
          <Route path="/creer-compte" element={<CreerCompte />} />
        </Routes>
      </Router>
    </>
  );
}