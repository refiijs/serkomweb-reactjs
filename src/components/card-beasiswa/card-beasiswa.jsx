import React from "react";
import "./card-beasiswa.css"; // File CSS terpisah untuk styling Card Beasiswa

const CardBeasiswa = ({ title, description, imgSrc }) => {
  return (
    <div className="card">
      <img src={imgSrc} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-primary">
          Selengkapnya
        </a>
      </div>
    </div>
  );
};

export default CardBeasiswa;
