import React from 'react';
import ReactDOM from 'react-dom'; // Utilisez ReactDOM au lieu de react-dom/client
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style/flexboxgrid.min.css";
import './style/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Récupère l'élément racine du DOM
const container = document.getElementById('root');

// Rend l'application avec React 17
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  container
);

// Mesure les performances de l'application
reportWebVitals();