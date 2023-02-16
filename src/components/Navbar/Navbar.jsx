import React from "react";
import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const Navbar = ({cartItemsCount}) => {

  return (
    <nav className="navbar">
      <Link to='/'>
      <div className="brand-logo">
        <img src="./logo.jpg" alt="Logo" className="logo" />
        <span className="brand-name">GrowShop</span>
      </div>
      </Link>
      <ul className="navbar-list">
        <li className="navbar-item">
          <a href="#home" className="navbar-link">
            Inicio
          </a>
        </li>
        <li className="navbar-item">
          <a href="#services" className="navbar-link">
            Servicios
          </a>
        </li>
        <li className="navbar-item">
          <a href="#about" className="navbar-link">
            Acerca de
          </a>
        </li>
        <li className="navbar-item">
          <a href="#contact" className="navbar-link">
            Contacto
          </a>
        </li>
        <li className="navbar-item">
            <CartWidget cartItemsCount={cartItemsCount}/>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
