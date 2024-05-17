import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { initializeApp } from "firebase/app";
import "firebase/database";
import "./styles.css";
import Menu from "./Menu/Menu";
import AppAuth from "./Identification/AppAuth";
import Dico from "./Dictionnaire/Dico";
import Explications from "./Dictionnaire/Explications";
import Quiz from "./Dictionnaire/Quiz";
import Profil from "./Profil/Profil";
import GPS from "./GPS/GPS";
import Scan from "./Scan/Scan";
import Inscription from "./Identification/Inscription";
import CardCr from "./Carte/Cardcr";
import CardEr from "./Carte/Carder";

import Card1 from "./Carte/Cardr1";
import Card2 from "./Carte/Cardr2";
import Card3 from "./Carte/Cardr3";
import Cards from "./Carte/Cards";
import AppAsset from "./Carte/App";
import "./Carte/index.css";

function App() {
  const [explications, setExplications] = useState([]);
  const [userData, setUserData] = useState(null);

  const handleUsernameSubmit = (username) => {
    // Gérer la soumission du nom d'utilisateur
  };

  const handleRegistrationSubmit = (formData) => {
    // Gérer la soumission du formulaire d'inscription
    setUserData(formData);
  };

  useEffect(() => {
    // Initialiser Firebase
    const firebaseConfig = {
      apiKey: "AIzaSyAtMTnFUz0ZvnAvyfxa9yzqWr9dB59euqE",
      authDomain: "recyclingfordummies-53454.firebaseapp.com",
      projectId: "recyclingfordummies-53454",
      storageBucket: "recyclingfordummies-53454.appspot.com",
      messagingSenderId: "240414149383",
      appId: "1:240414149383:web:87627afcfc461ae9b253a2",
      measurementId: "G-R3900MCH2E"
    };

    initializeApp(firebaseConfig);
  }, []);

  return (
      <Router>
        <div className="App">
          <header className="App-header"></header>
          <Menu />
          <Routes>
            <Route
                exact
                path="/"
                element={<AppAuth onUsernameSubmit={handleUsernameSubmit} />}
            />
            <Route path="/profil" element={<Profil userData={userData} />} />
            <Route path="/dictionnaire" element={<Dico setExplication={setExplications} />}
            />
            <Route
                path="/explications"
                element={<Explications explications={explications} />}
            />
            <Route path="/endroit" element={<GPS />} />
            <Route path="/scan" element={<Scan />} />
            <Route
                path="/inscription"
                element={
                  <Inscription
                      onRegistrationSubmit={handleRegistrationSubmit}
                  />
                }
            />
            <Route path="/quiz" element={<Quiz />} />
            {/* Routes pour les comtartposants Carte */}
            <Route path="/carte/cardcr" element={<CardCr />} />
            <Route path="/carte/carder" element={<CardEr />} />
            <Route path="/carte/card1" element={<Card1 />} />
            <Route path="/carte/card2" element={<Card2 />} />
            <Route path="/carte/card3" element={<Card3 />} />
            <Route path="/carte/cards" element={<Cards />} />
            <Route path="/carte/appasset" element={<AppAsset />} />
            {/* Redirection vers la page d'accueil pour toutes les autres routes */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
