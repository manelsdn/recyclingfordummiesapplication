import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faEnvelope, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const ProfilePage = ({ userData }) => {
  // State pour l'URL de l'image du profil, les points, le score du quiz et l'adresse e-mail de l'utilisateur
  const [imageURL, setImageURL] = useState("");
  const [points, setPoints] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [userEmail, setUserEmail] = useState("");

  // Effet de montage pour récupérer les données du profil depuis le stockage local
  useEffect(() => {
    const storedImageURL = localStorage.getItem("profileImageURL");
    if (storedImageURL) {
      setImageURL(storedImageURL);
    }

    const userPoints = localStorage.getItem("userPoints");
    if (userPoints) {
      setPoints(parseInt(userPoints));
    }

    const storedQuizScore = localStorage.getItem("quizScore");
    if (storedQuizScore) {
      setQuizScore(parseInt(storedQuizScore));
    }

    const userEmail = localStorage.getItem("userEmail");
    if (userEmail) {
      setUserEmail(userEmail);
    }
  }, []);

  // Fonction pour gérer le téléchargement d'une image de profil
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      if (file) {
        setImageURL(reader.result);
        localStorage.setItem("profileImageURL", reader.result);
      }
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  // Fonction pour afficher le champ de téléchargement de fichier
  const showFileInput = () => {
    const input = document.getElementById("fileInput");
    if (input) {
      input.click();
    }
  };

  return (
      <div className="profile-container">
        {/* Titre de la page */}
        <h2>Mon profil</h2>
        {/* En-tête du profil avec avatar et adresse e-mail */}
        <div className="profile-header">
          <label htmlFor="fileInput">
            <div className="profile-avatar" onClick={showFileInput}>
              {/* Affichage de l'avatar */}
              {!imageURL ? (
                  <img
                      src="https://via.placeholder.com/150"
                      alt="Avatar"
                      className="avatar-image"
                  />
              ) : (
                  <img src={imageURL} alt="Avatar" className="avatar-image" />
              )}
            </div>
          </label>
          {/* Champ de téléchargement de fichier caché */}
          <input
              id="fileInput"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ display: "none" }}
          />
          {/* Container pour afficher l'adresse e-mail */}
          <div className="info-container">
            <p><FontAwesomeIcon icon={faEnvelope}/> {userEmail}</p>
          </div>
        </div>
        {/* Citation */}
        <div className="citation-container">
          <div className="citation-card">
            <div className="quote-container">
              {/* Affichage de la citation */}
              <p className="citation">
                <FontAwesomeIcon icon={faQuoteLeft}/>
                <span className="bold">Le recyclage : un petit geste pour vous, un grand pas pour la planète.</span>{" "}
                - <i>Emily Brown </i>  <FontAwesomeIcon icon={faQuoteLeft}/>
              </p>
            </div>
          </div>
        </div>
        {/* Statistiques du profil */}
        <div className="profile-stats">
          <div className="stat">
            <p>
              <FontAwesomeIcon icon={faStar} /> <strong>Points du quiz:</strong>{" "}
              {quizScore}
            </p>
          </div>
        </div>
      </div>
  );
};

export default ProfilePage;
