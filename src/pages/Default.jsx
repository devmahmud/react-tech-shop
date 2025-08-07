import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import defaultBcg from "../images/defaultBcg.jpeg";

export default function Default() {
  return (
    <React.Fragment>
      <Hero img={defaultBcg} title={404} max={true}>
        <h2 className="text-uppercase">page not found</h2>
        <Link to="/" className="main-link mt-4">
          return home
        </Link>
      </Hero>
    </React.Fragment>
  );
}
