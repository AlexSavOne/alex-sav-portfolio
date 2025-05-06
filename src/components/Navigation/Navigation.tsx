import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="logo">
          Alex Sav
        </Link>
        <div className="nav-links">
          <Link
            to="/"
            className={location.pathname === "/" ? "active" : ""}
          >
            Главная
          </Link>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
          >
            Обо мне
          </Link>
          <Link
            to="/projects"
            className={location.pathname === "/projects" ? "active" : ""}
          >
            Проекты
          </Link>
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "active" : ""}
          >
            Контакты
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 
 