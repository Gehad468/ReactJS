import React, { useState } from "react";
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light pb-2" style={{ background: "linear-gradient(to bottom, #135D66 0%, #22A6B6 100%)" }}>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center w-100">
          <div className="d-flex align-items-center">
            <Link className="navbar-brand ml-5" to="/">
              <img src={logo} alt="Logo" style={{ width: "180px", height: "130px" }} />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse mx-5" id="navbarSupportedContent">
            <ul className="navbar-nav justify-content-between align-items-center w-100">
              <li className="nav-item">
                <Link className="nav-link text-white" activeClassName="active" exact to="/">الرئيسية</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link text-white ${activeLink === 'about' ? 'active' : ''}`} to="/about" onMouseOver={() => setActiveLink('about')} onMouseLeave={() => setActiveLink(null)}>من نحن</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" activeClassName="active" to="/contact">تواصل معنا</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" activeClassName="active" to="/signup">إنشاء حساب</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
