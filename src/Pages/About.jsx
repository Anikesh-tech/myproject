import React from "react";
import "../css/About.css";
import jahanviImg from "../assets/images/jahanvi.jpg";

function About() {
  return (
    <section className="about">
      <div className="img-circle">
        <img src={jahanviImg} alt="Jahanvi" />
      </div>
      <div className="about-box">
        <h2>About Jahanvi</h2>
        <p>
          Jahanvi is an award-winning artist known for her vibrant, expressive
          artworks blending realism and imagination. She has worked with top
          galleries and continues to inspire through exhibitions and workshops.
        </p>
      </div>
    </section>
  );
}

export default About;
