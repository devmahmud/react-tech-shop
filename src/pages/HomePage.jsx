import React from "react";
import Hero from "../components/Hero";
import Services from "../components/HomePage/Services";
import Featured from "../components/HomePage/Featured";
import mainBcg from "../images/mainBcg.jpeg";

function HomePage() {
  return (
    <>
      <Hero img={mainBcg} title="awesome gadgets" max="true">
        <p>welcome to tech store</p>
      </Hero>
      <Services />
      <Featured />
    </>
  );
}

export default HomePage;
