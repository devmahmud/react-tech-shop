import React from "react";
import Info from "../components/AboutPage/Info";
import Hero from "../components/Hero";
import aboutBcg from "../images/aboutBcg.jpeg";

function AboutPage() {
  return (
    <React.Fragment>
      <Hero img={aboutBcg} />
      <Info />
    </React.Fragment>
  );
}
export default AboutPage;
