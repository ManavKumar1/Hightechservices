"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { Menu, X, Tv } from "lucide-react";
import logo from "../../assets/logo.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='navbar'>
      <div className='navbar__container'>
        <Link to='/' className='navbar__logo'>
          <Tv className='navbar__logo-icon' />
          <span>Hi-Tech Services</span>
        </Link>

        <div className='navbar__toggle' onClick={toggleMenu}>
          {isOpen ? <X /> : <Menu />}
        </div>

        <ul className={`navbar__menu ${isOpen ? "active" : ""}`}>
          <li className='navbar__item'>
            <Link
              to='/'
              className='navbar__link'
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className='navbar__item'>
            <Link
              to='/about'
              className='navbar__link'
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li className='navbar__item'>
            <Link
              to='/services'
              className='navbar__link'
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
          </li>
          <li className='navbar__item'>
            <Link
              to='/testimonials'
              className='navbar__link'
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </Link>
          </li>
          <li className='navbar__item'>
            <Link
              to='/contact'
              className='navbar__link navbar__link--cta'
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
