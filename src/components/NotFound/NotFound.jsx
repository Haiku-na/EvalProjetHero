import React from "react";
import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Il semble que vous soyez perdu, héros.</p>
      <Link to="/" className="back-home">
        Retourner à la page d'accueil
      </Link>
    </div>
  );
}
