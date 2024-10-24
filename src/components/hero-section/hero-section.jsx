import React from "react";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <div className="hero-section d-flex align-items-center justify-content-center">
      <div className="overlay"></div>
      <div className="container text-center text-light">
        <h1 className="display-4 fw-bold">
          Beasiswa <br /> Telkom University Purwokerto
        </h1>
        <p className="lead">
          Railah kesuksesan mu dengan beasiswa Telkom University Purwokerto.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
