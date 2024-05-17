
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faLock,
  faCalendarAlt,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

// Configuration de l'application Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAtMTnFUz0ZvnAvyfxa9yzqWr9dB59euqE",
  authDomain: "recyclingfordummies-53454.firebaseapp.com",
  projectId: "recyclingfordummies-53454",
  storageBucket: "recyclingfordummies-53454.appspot.com",
  messagingSenderId: "240414149383",
  appId: "1:240414149383:web:87627afcfc461ae9b253a2",
  measurementId: "G-R3900MCH2E"
};

const Inscription = ({ onRegistrationSubmit }) => {
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    birthDate: "",
    address: "",
    email: "",
    password: "",
    environmentalEngagement: false,
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const app = initializeApp(firebaseConfig);
      const auth = getAuth(app);
      const { email, password } = formData;

      // Création de l'utilisateur avec l'e-mail et le mot de passe
      const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
      );

      // Envoyer un e-mail de vérification à l'utilisateur
      await sendEmailVerification(auth.currentUser);

      // Obtention de l'utilisateur créé
      const user = userCredential.user;
      console.log("Utilisateur créé avec l'ID :", user.uid);

      // Sauvegarde de l'adresse e-mail dans le localStorage
      localStorage.setItem("userEmail", email);

      // Appeler la fonction onRegistrationSubmit avec les données d'inscription en tant qu'argument
      onRegistrationSubmit(formData);

      // Réinitialiser les champs du formulaire après la soumission
      setFormData({
        username: "",
        firstName: "",
        lastName: "",
        birthDate: "",
        address: "",
        email: "",
        password: "",
        environmentalEngagement: false,
      });
      setError("");

      // Afficher une boîte de dialogue informant l'utilisateur que le mail de vérification a été envoyé
      window.alert("Un e-mail de vérification vous a été envoyé.");

      // Redirection vers la page d'identification après la soumission du formulaire
      navigate("/identification");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
      <div className="auth-container">
        <h2>Inscription</h2>
        <form onSubmit={handleSubmit}>
          {/* Champs de formulaire pour l'inscription */}
          <div className="form-group">
            <label htmlFor="username">
              <FontAwesomeIcon icon={faUser} />
            </label>
            <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Nom d'utilisateur"
                required
                style={{width: "calc(100% - 20px)", paddingRight: "8px"}}
            />
          </div>

          <div className="form-group">
            <label htmlFor="firstName">
              <FontAwesomeIcon icon={faUser} />
            </label>
            <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Prénom"
                required
                style={{width: "calc(100% - 20px)", paddingRight: "8px"}}
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">
              <FontAwesomeIcon icon={faUser} />
            </label>
            <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Nom de famille"
                required
                style={{width: "calc(100% - 20px)", paddingRight: "8px"}}
            />
          </div>

          <div className="form-group">
            <label htmlFor="birthDate">
              <FontAwesomeIcon icon={faCalendarAlt} />
            </label>
            <input
                type="date"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                placeholder="Date de naissance"
                required
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </label>
            <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Adresse"
                required
                style={{width: "calc(100% - 20px)", paddingRight: "8px"}}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">
              <FontAwesomeIcon icon={faEnvelope} />
            </label>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Adresse e-mail"
                required
                style={{width: "calc(100% - 20px)", paddingRight: "8px"}}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">
              <FontAwesomeIcon icon={faLock} />
            </label>
            <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Mot de passe"
                required
                style={{width: "calc(100% - 20px)", paddingRight: "8px"}}
            />
          </div>

          <div className="form-group">
            <label
                htmlFor="environmentalEngagement"
                style={{ display: "inline-flex", alignItems: "center" }}
            >
              <input
                  type="checkbox"
                  name="environmentalEngagement"
                  checked={formData.environmentalEngagement}
                  onChange={handleChange}
              />
              <span style={{ marginLeft: "0.5rem" }}>
              S'engager pour la protection de l'environnement
            </span>
            </label>
          </div>

          <button type="submit">S'inscrire</button>
          {error && <p className="error">{error}</p>}
        </form>
      </div>
  );
};

export default Inscription;
