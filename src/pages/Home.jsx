import { Link } from "react-router";
import Search from "../components/Search/Search";
import React from "react";
import Introduction from "../components/Introduction/Introduction";
import { PrivateRoute } from "../auth/PrivateRoute";

export default function Home() {
  return (
    <div className="home">
      <Introduction description="Bienvenue sur notre site internet ou vous pourrez retrouver tous vos héros préférés simplement en les cherchant juste en dessous !!!" />
      <div className="search">

      <Search />

      </div>

    </div>
  );
}
