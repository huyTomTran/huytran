import React from "react";

function ServicesSection({ image, title, text, width }) {
  return (
    <div className="ServicesSection">
      <div className="service">
        <div className="service-content">
          <img src={image} alt="" style={{ width: width }} />
          <h5 className="s-title"> {title}</h5>
          <p className="s-text"> {text} </p>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
