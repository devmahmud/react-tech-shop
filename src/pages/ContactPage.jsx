import React from "react";
import Hero from "../components/Hero";
import Contact from "../components/ContactPage/Contact";
import contactBcg from "../images/contactBcg.jpeg";

export default function ContactPage() {
  return (
    <React.Fragment>
      <Hero img={contactBcg} />
      <Contact />
    </React.Fragment>
  );
}
