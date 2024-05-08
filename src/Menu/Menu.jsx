// Menu.js
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBook,
  faMapMarkerAlt,
  faCamera,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

const Menu = ({ onLogout }) => {
  const location = useLocation();

  const showMenu =
      location.pathname !== "/" && location.pathname !== "/inscription";

  if (!showMenu) {
    return null;
  }

  const handleLogoutClick = () => {
    // Appeler la fonction de déconnexion lors du clic sur l'icône de déconnexion
    onLogout();
  };

  return (
      <nav className="footer" style={{ position: "fixed", bottom: -2, width: "100%" }}>
        <ul>
          <li>
            <Link to="/profil">
              <FontAwesomeIcon icon={faUser} /> Profil
            </Link>
          </li>
          <li>
            <Link to="/dictionnaire">
              <FontAwesomeIcon icon={faBook} /> Recycler
            </Link>
          </li>
          <li>
            <Link to="/endroit">
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Repérer
            </Link>
          </li>
          <li>
            <Link to="/scan">
              <FontAwesomeIcon icon={faCamera} /> Détecter
            </Link>
          </li>
          <li>
            {/* Utiliser le composant Link pour rediriger vers la page d'identification */}
            <Link to="/" onClick={handleLogoutClick}>
              <FontAwesomeIcon icon={faSignOutAlt} /> Se déconnecter
            </Link>
          </li>
        </ul>
      </nav>
  );
};

export default Menu;
