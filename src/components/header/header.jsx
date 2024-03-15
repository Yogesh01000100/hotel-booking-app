import React, { useState, useEffect } from "react";
import "./header.css";
import logo from "../../assets/logo_1.png";
import Search from "../search/search";
import {
  IoCallOutline,
  IoSearch,
  IoMenuOutline,
  IoCloseOutline,
} from "react-icons/io5";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const handleResize = () => {
    if (window.innerWidth > 768 && isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);


  return (
    <header className="header">
      <div className="header-container">
        <div className="header-top">
          <div className="brand-contact">
            <a href="tel:+01123456790" className="helpline-box">
              <IoCallOutline className="icon" />
              <div className="contact-info">
                <p>For Further Inquiries:</p>
                <strong>+91 (8908) 4567 90</strong>
              </div>
            </a>
            <div className="logo-container">
              <img src={logo} alt="Gogaga Holidays" className="logo" />
            </div>
          </div>
          <div className="header-actions">
            <IoSearch className="icon action-icon" onClick={toggleSearch} />
            <button className="menu-toggle" onClick={toggleMenu}>
              {isMenuOpen ? (
                <IoCloseOutline className="icon" />
              ) : (
                <IoMenuOutline className="icon" />
              )}
            </button>
          </div>
        </div>
        {isSearchOpen && (
          <div className="search">
            <Search />
          </div>
        )}
        {isMenuOpen && (
          <div className="header-bottom">
            <nav className="navbar">
              <ul className={`nav-list ${isMenuOpen ? 'open' : ''}`}>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/holiday-packages">Holiday Packages</a>
                </li>
                <li>
                  <a href="#flights">Flight Booking</a>
                </li>
                <li>
                  <a href="/hotel-booking">Hotel Booking</a>
                </li>
                <li>
                  <a href="#collections">Package Collections</a>
                </li>
              </ul>
            </nav>
            <div className="button-container">
              <button className="btn-sec">Learn More</button>
              <button className="btn-primary">Book Now</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
