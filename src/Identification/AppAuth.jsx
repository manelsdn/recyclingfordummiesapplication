import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider
} from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";

// Configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAtMTnFUz0ZvnAvyfxa9yzqWr9dB59euqE",
  authDomain: "recyclingfordummies-53454.firebaseapp.com",
  projectId: "recyclingfordummies-53454",
  storageBucket: "recyclingfordummies-53454.appspot.com",
  messagingSenderId: "240414149383",
  appId: "1:240414149383:web:87627afcfc461ae9b253a2",
  measurementId: "G-R3900MCH2E"
};

// Initialisation de Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const AppAuth = ({ onUsernameSubmit }) => {
  const navigate = useNavigate();

  // State pour les valeurs des champs du formulaire et les erreurs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Connexion avec l'e-mail et le mot de passe
      const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
      );
      const user = userCredential.user;

      // Appeler la fonction onUsernameSubmit avec le nom d'utilisateur en tant qu'argument
      onUsernameSubmit(user.displayName || user.email);

      // Redirection vers la page "dictionnaire" après la soumission du formulaire
      navigate("/dictionnaire");
    } catch (error) {
      // Gérer les erreurs d'authentification
      setError("Identifiants incorrects. Veuillez réessayer.");
      console.error("Erreur d'authentification :", error);
    }
  };

  // Fonction pour gérer le clic sur "Mot de passe oublié"
  const handleForgotPassword = async () => {
    try {
      // Envoyer un e-mail de réinitialisation de mot de passe
      await sendPasswordResetEmail(auth, email);
      setError(
          "Un e-mail de réinitialisation de mot de passe a été envoyé à votre adresse e-mail."
      );
    } catch (error) {
      setError(
          "Une erreur s'est produite lors de l'envoi de l'e-mail de réinitialisation de mot de passe. Veuillez réessayer."
      );
      console.error(
          "Erreur lors de l'envoi de l'e-mail de réinitialisation de mot de passe :",
          error
      );
    }
  };

  // Fonction pour gérer la connexion avec Google
  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;
      // Redirection vers la page "dictionnaire" après la connexion réussie
      navigate("/dictionnaire");
    } catch (error) {
      console.error("Erreur lors de la connexion avec Google :", error.message);
    }
  };

  // Fonction pour gérer la connexion avec Facebook
  const handleFacebookSignIn = async () => {
    try {
      const provider = new FacebookAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;
      // Redirection vers la page "dictionnaire" après la connexion réussie
      navigate("/dictionnaire");
    } catch (error) {
      console.error("Erreur lors de la connexion avec Facebook :", error.message);
    }
  };

  // Fonction pour gérer la connexion avec Twitter
  const handleTwitterSignIn = async () => {
    try {
      const provider = new TwitterAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;
      // Redirection vers la page "dictionnaire" après la connexion réussie
      navigate("/dictionnaire");
    } catch (error) {
      console.error("Erreur lors de la connexion avec Twitter :", error.message);
    }
  };

  return (
      <div className="auth-container">
        <h2>Recycling for Dummies</h2>
        <img className="auth-image"/>
        {/* Formulaire de connexion */}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">
              <FontAwesomeIcon icon={faEnvelope}/>
            </label>
            {/* Champ d'e-mail */}
            <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Adresse e-mail"
                required
                style={{width: "calc(100% - 20px)", paddingRight: "8px"}}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">
              <FontAwesomeIcon icon={faLock}/>
            </label>
            {/* Champ de mot de passe */}
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mot de passe"
                required
                style={{width: "calc(100% - 20px)", paddingRight: "8px"}}
            />
          </div>
          {/* Bouton de soumission du formulaire */}
          <button type="submit">S'identifier</button>
          {/* Affichage des erreurs */}
          {error && <p className="error">{error}</p>}
        </form>
        {/* Section de récupération de mot de passe */}
        <div>
          <p>Mot de passe oublié ?</p>
          <button onClick={handleForgotPassword}>
            Réinitialiser le mot de passe
          </button>
        </div>
        {/* Boutons de connexion avec Google, Facebook et Twitter */}
        <div className="auth-buttons">
          <button onClick={handleGoogleSignIn}>
            <FontAwesomeIcon icon={faGoogle}/>
          </button>
          <button onClick={handleFacebookSignIn}>
            <FontAwesomeIcon icon={faFacebook}/>
          </button>
          <button onClick={handleTwitterSignIn}>
            <FontAwesomeIcon icon={faTwitter}/>
          </button>
        </div>
        {/* Lien vers la page d'inscription */}
        <div>
          <p>Je n'ai pas de compte</p>
          <Link to="/inscription">Créer un compte</Link>
        </div>
      </div>
  );
};

export default AppAuth;


