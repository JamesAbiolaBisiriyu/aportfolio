import React from "react";
import "./intro.css";
// import bg from '../../assets/myImage.jpg'
import { Link } from "react-scroll";
import btnImg from "../../assets/hireme.png";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello, </span>
        <span className="introText">
          I'm <span className="introName">James</span>
          <br />A Front End Developer
        </span>
        <p className="introPara">
          skilled Front End Developer seeking internship <br />
          in designing and developing user-friendly <br />
          interfaces for web applications
        </p>
        <Link>
          <button className="btn">
            <div
              style={{
                fontWeight: "bold",
              }}
            >
              <img src={btnImg} alt="" className="btnImg" />
              Hire Me
            </div>
          </button>
        </Link>
      </div>
      {/* <img src={bg} alt="profile" className='bg' /> */}
    </section>
  );
};

export default Intro;
