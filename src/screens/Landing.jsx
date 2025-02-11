import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
import Projects from "../components/Sections/Projects";
import Blog from "../components/Sections/Blog";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer";
import Pricing from "../components/Sections/Categories.jsx"

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <Projects />
      <Services />
      <Pricing />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}


