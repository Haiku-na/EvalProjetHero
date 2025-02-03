import { useLocation, useNavigate } from "react-router";
import { useAuth } from "../../auth/AuthProvider";
import { Login, Logout } from "../../auth/LoginOut";
import React from "react";
import { Link } from "react-router-dom";


export default function Header() {
  const { user } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const pageName = location.pathname.split("/").pop();
  const displayName = pageName ? pageName : "Accueil";

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="header">
      {displayName !== "Accueil" && (
        <a onClick={handleGoBack}>
          <img
            className="header__arrowToLeft"
            src="fleche.png"
            alt="Retour"
          />
        </a>
      )}


      <h1 className="header__title">{displayName}</h1>

      {user ? (
        <>
          <Logout />
          <Link to="/contact">
            <button className="bouton">Contact</button>
          </Link>
        </>
      ) : (
        <Link to="/connection">
          <button className="bouton">Se connecter</button>
        </Link>
      )}
    </div>
  );
}