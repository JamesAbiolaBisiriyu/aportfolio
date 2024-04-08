import React from "react";
import "./navbar.css";
import logo1 from "../../assets/logo1.png";
import {Link} from 'react-scroll'
import contactImg from '../../assets/contact.png'


const NavBar = () => {
  return (
    <nav className="navbar">
      <img src={logo1} alt="" width='120px' style={{marginTop:'30px'}}/>
      <div className="desktopMenu">
        <Link className="desktopMenuListItem">Home</Link>
        <Link className="desktopMenuListItem">About</Link>
        <Link className="desktopMenuListItem">Resume</Link>
        <Link className="desktopMenuListItem">Portfolio</Link>
      </div>
      <button className="desktopMenuBtn">
      <img src={contactImg} alt="" className="desktopMenuImg" />
      Contact Me </button>
    </nav>
  );
};

export default NavBar;
