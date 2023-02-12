import "./AboutContentStyle.css";
import React from "react";
import xin from "../assets/xin.jpg";

const AboutContent = () => {
  return (
    <div className="about">
        <img src={xin} width="20%" className="img" alt="xin" ></img>
        <h1 className="name">Xin Liu</h1>
        <p className="describ">
          A third year student of Computer Science at Toronto Metropolitan
          Univeristy (Ryerson University).My primary areas of expertise include Java, python, C, HTML5, CSS3, and Javascript by using the react.js. I am always looking for new challenges to take on and I believe that working as part of a team is the best way to achieve success. I am eager to learn from others and share my own experiences and insights.
        </p>

      </div>
  );
};

export default AboutContent;
