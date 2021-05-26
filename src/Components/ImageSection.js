import React from "react";
import about from "../img/about.jpeg";

function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="image">
        <img src={about} alt="" />
      </div>
      <div className="about-info">
        <h4>
          I am <span> Huy Tran</span>.
        </h4>
        <p className="about-text">
        I am an avid foodie.
        Also, I love exploring the world and learning different cultures & languages.
        </p>
        <table className="about-details">
          <div className="left-section">
            <p>Full Name</p>
            <p>Language</p>
            <p></p><p></p>
            <p></p>
            <p>Education</p>
            <p>Location</p>
          </div>
          <div className="right-section">
            <p>: Huy Tran</p>
            <p>: English, French, Vietnamese, Cantonese, Mandarin</p>
            <p>: Bachelor of Computer Science</p>
            <p>: Montreal, Quebec, Canada</p>
          </div>
        </table>
        <button className="btn">Download CV</button>
      </div>
    </div>
  );
}

export default ImageSection;
