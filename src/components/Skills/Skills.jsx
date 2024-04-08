import React from "react";
import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import webDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I Do.....</span>
      <span className="skillDesc">
        {" "}
        I am Proficient in HTML, CSS, and JavaScript, Bootstrap and Tailwind with a
        strong focus on modern frameworks such as React.js and Vue.js.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="" className="skillbarImg" />
          <div className="skillBarText">
            <h2>Web Design</h2>
            <p> Adept at translating UI/UX designs into responsive and interactive web pages</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={webDesign} alt="" className="skillbarImg" />
          <div className="skillBarText">
            <h2>Web Development</h2>
            <p>Ensures cross-browser compatibility and optimal performances</p>
          </div>
        </div>
        <div className="skillBar">
        <img src={AppDesign} alt="" className="skillbarImg" />
        <div className="skillBarText">
          <h2>App Development</h2>
          <p>Designing/Developing Applications, while understanding Clients Requirements</p>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Skills;
