import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../auth/AuthProvider";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [heroes, setHeroes] = useState([]);
  const { user } = useAuth();
  const fetchHeroes = async () => {
    if (searchTerm.trim() === "") return;

    const response = await fetch(
      `https://corsproxy.io/https://superheroapi.com/api/98fb4cbec30719b71f15f2f06860a799/search/${searchTerm}`
    );
    const data = await response.json();

    if (data.response === "success") {
      setHeroes(data.results);
    } else {
      setHeroes([]);  
    }
  };

  return (
    <div className="fetch-container">
        {user ? (
          <form action="">
        <input
        type="text"
        placeholder="Entrez un nom (ex: Batman)"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={fetchHeroes}>Rechercher</button>
      </form>
      ) : (
        <p>Connectez-vous pour faire une recherche</p>
      )}
      

      <div className="results">
        {heroes.length > 0 ? (
          heroes.map((hero) => (
            <div key={hero.id} className="hero-card">
              <Link to={`/hero/${hero.id}`}>
                <img src={hero.image.url} alt={hero.name} />
              </Link>
              <h3>{hero.name}</h3>
            </div>
          ))
        ) : (
          <p>Aucun héros trouvé.</p>
        )}
      </div>
    </div>
  );
}
