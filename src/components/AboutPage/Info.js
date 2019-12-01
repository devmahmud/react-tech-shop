import React from "react";
import Title from "../Title";
import aboutBcg from "../../images/aboutBcg.jpeg";

function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <img
              src={aboutBcg}
              className="img-fluid img-thumbnail"
              alt="About Us"
              style={{ background: "var(--darkGrey)" }}
            />
          </div>
          <div className="col-10 mx-auto col-md-6 my-3">
            <Title title="about us" />
            <p className="text-lead text-muted my-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consectetur deleniti labore ipsam reiciendis quisquam voluptatem
              nisi delectus iure quos modi.
            </p>
            <p className="text-lead text-muted my-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consectetur deleniti labore ipsam reiciendis quisquam voluptatem
              nisi delectus iure quos modi.
            </p>
            <button className="main-link mt-3">more info</button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Info;
